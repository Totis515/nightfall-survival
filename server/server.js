const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: '*', methods: ['GET', 'POST'] } });

app.get('/', (req, res) => {
    const totalPlayers = Object.values(rooms).reduce((s, r) => s + Object.keys(r.players).length, 0);
    res.json({ status: 'ok', rooms: Object.keys(rooms).length, totalPlayers });
});

// ─────────────────────────────────────────────────────────────────
// ROOM STRUCTURE:
// rooms[code] = {
//   players:  { [id]: { id, username, platform, x,y,z, rotY, ready } }
//   enemies:  { [nid]: { nid, type, x, z } }   ← active enemy state
//   hostId:   string                             ← room creator (drives enemy spawning)
//   gameStarted: bool
// }
// ─────────────────────────────────────────────────────────────────
const rooms = {};
const MAX_PLAYERS = 4;

function generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return rooms[code] ? generateCode() : code;
}

function allReady(room) {
    const players = Object.values(room.players);
    return players.length > 0 && players.every(p => p.ready);
}

io.on('connection', (socket) => {
    console.log(`[+] ${socket.id}`);

    // ── CREATE ROOM ──────────────────────────────────────────────
    socket.on('create-room', ({ username, platform }, callback) => {
        username = (username || '').trim().toUpperCase();
        if (username.length < 2) return callback({ error: 'Min 2 characters.' });

        const code = generateCode();
        rooms[code] = { players: {}, enemies: {}, hostId: socket.id, gameStarted: false };
        rooms[code].players[socket.id] = {
            id: socket.id, username, platform: platform || 'pc',
            x: 0, y: 1.6, z: 0, rotY: 0, ready: false
        };

        socket.join(code);
        socket.data.roomCode = code;
        socket.data.username = username;

        console.log(`[ROOM] Created ${code} by ${username} (host)`);
        callback({ roomCode: code, players: rooms[code].players });
    });

    // ── JOIN ROOM ────────────────────────────────────────────────
    socket.on('join-room', ({ roomCode, username, platform }, callback) => {
        username = (username || '').trim().toUpperCase();
        const code = (roomCode || '').trim().toUpperCase();

        if (username.length < 2) return callback({ error: 'Min 2 characters.' });
        if (!rooms[code]) return callback({ error: `Room "${code}" not found.` });
        if (Object.keys(rooms[code].players).length >= MAX_PLAYERS) return callback({ error: 'Room is full.' });
        if (rooms[code].gameStarted) return callback({ error: 'Game already started.' });

        const taken = Object.values(rooms[code].players).some(p => p.username === username);
        if (taken) return callback({ error: `"${username}" already taken in this room.` });

        rooms[code].players[socket.id] = {
            id: socket.id, username, platform: platform || 'pc',
            x: 0, y: 1.6, z: 0, rotY: 0, ready: false
        };

        socket.join(code);
        socket.data.roomCode = code;
        socket.data.username = username;

        // Tell the new player about ALL existing players (fix late-join visibility)
        socket.emit('existing-players', Object.values(rooms[code].players).filter(p => p.id !== socket.id));

        // Tell EXISTING players about the new person
        socket.to(code).emit('player-joined', rooms[code].players[socket.id]);

        console.log(`[ROOM] ${username} joined ${code}`);
        callback({ roomCode: code, players: rooms[code].players });
    });

    // ── READY TOGGLE ─────────────────────────────────────────────
    socket.on('toggle-ready', (callback) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]?.players[socket.id]) return;

        const player = rooms[code].players[socket.id];
        player.ready = !player.ready;
        io.to(code).emit('player-ready-changed', { id: socket.id, ready: player.ready });

        if (allReady(rooms[code])) {
            rooms[code].gameStarted = true;
            io.to(code).emit('game-start', { hostId: rooms[code].hostId });
            console.log(`[GAME] Room ${code} starting! Host: ${rooms[code].hostId}`);
        }
        if (callback) callback({ ready: player.ready });
    });

    // ── POSITION UPDATE ──────────────────────────────────────────
    socket.on('player-update', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]?.players[socket.id]) return;
        const p = rooms[code].players[socket.id];
        p.x = data.x; p.y = data.y; p.z = data.z; p.rotY = data.rotY;
        socket.to(code).emit('player-moved', { id: socket.id, x: data.x, y: data.y, z: data.z, rotY: data.rotY });
    });

    // ── ENEMY SPAWNED (host → server → all others) ───────────────
    socket.on('spawn-enemy', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // Store enemy state for late joiners
        rooms[code].enemies[data.nid] = { nid: data.nid, type: data.type, x: data.x, z: data.z };
        // Relay to all OTHER players
        socket.to(code).emit('spawn-enemy', data);
    });

    // ── ENEMY KILLED (any player → server → ALL players) ─────────
    socket.on('enemy-killed', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        delete rooms[code].enemies[data.nid];
        // Broadcast to ALL players in room (including sender for confirmation)
        io.to(code).emit('enemy-killed', { nid: data.nid });
        console.log(`[KILL] Enemy ${data.nid} killed in room ${code}`);
    });

    // ── WAVE COMPLETE (host → server → all players) ───────────────
    socket.on('wave-complete', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        rooms[code].enemies = {}; // Clear enemy state for next wave
        io.to(code).emit('wave-complete', data);
        console.log(`[WAVE] Wave ${data.wave} complete in room ${code}`);
    });

    // ── SHOP CLOSED (host → all close shop and advance wave) ─────
    socket.on('shop-closed', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('shop-closed', data);
    });

    // ── DISCONNECT ────────────────────────────────────────────────
    socket.on('disconnect', () => {
        const code = socket.data.roomCode;
        if (code && rooms[code]) {
            delete rooms[code].players[socket.id];
            io.to(code).emit('player-left', { id: socket.id });
            // If host disconnects, assign new host
            if (rooms[code].hostId === socket.id) {
                const remaining = Object.keys(rooms[code].players);
                if (remaining.length > 0) {
                    rooms[code].hostId = remaining[0];
                    io.to(code).emit('host-changed', { newHostId: remaining[0] });
                }
            }
            if (Object.keys(rooms[code].players).length === 0) {
                delete rooms[code];
                console.log(`[ROOM] Deleted empty room ${code}`);
            }
        }
        console.log(`[-] ${socket.id}`);
    });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => console.log(`🟢 Nightfall Survival server on port ${PORT}`));
