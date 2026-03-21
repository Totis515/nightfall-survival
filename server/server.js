const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: { origin: '*', methods: ['GET', 'POST'] }
});

app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        rooms: Object.keys(rooms).length,
        totalPlayers: Object.values(rooms).reduce((sum, r) => sum + Object.keys(r.players).length, 0)
    });
});

// ─────────────────────────────────────────────────────────────────
// ROOM STRUCTURE:
// rooms[code] = {
//   players: { [socketId]: { id, username, platform, x, y, z, rotY, ready } }
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

/** Check if all players in a room are ready */
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
        rooms[code] = { players: {}, gameStarted: false };
        rooms[code].players[socket.id] = {
            id: socket.id, username, platform: platform || 'pc',
            x: 0, y: 1.6, z: 0, rotY: 0, ready: false
        };

        socket.join(code);
        socket.data.roomCode = code;
        socket.data.username = username;

        console.log(`[ROOM] Created ${code} by ${username}`);
        callback({ roomCode: code, players: rooms[code].players });
    });

    // ── JOIN ROOM ────────────────────────────────────────────────
    socket.on('join-room', ({ roomCode, username, platform }, callback) => {
        username = (username || '').trim().toUpperCase();
        const code = (roomCode || '').trim().toUpperCase();

        if (username.length < 2) return callback({ error: 'Min 2 characters.' });
        if (!rooms[code]) return callback({ error: `Room "${code}" not found.` });
        if (Object.keys(rooms[code].players).length >= MAX_PLAYERS)
            return callback({ error: `Room "${code}" is full.` });
        if (rooms[code].gameStarted)
            return callback({ error: 'Game already in progress.' });

        // Reject duplicate username in same room
        const taken = Object.values(rooms[code].players).some(p => p.username === username);
        if (taken) return callback({ error: `"${username}" is already taken in this room.` });

        rooms[code].players[socket.id] = {
            id: socket.id, username, platform: platform || 'pc',
            x: 0, y: 1.6, z: 0, rotY: 0, ready: false
        };

        socket.join(code);
        socket.data.roomCode = code;
        socket.data.username = username;

        // Notify existing players
        socket.to(code).emit('player-joined', rooms[code].players[socket.id]);

        console.log(`[ROOM] ${username} joined ${code}`);
        callback({ roomCode: code, players: rooms[code].players });
    });

    // ── READY TOGGLE ─────────────────────────────────────────────
    socket.on('toggle-ready', (callback) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code] || !rooms[code].players[socket.id]) return;

        const player = rooms[code].players[socket.id];
        player.ready = !player.ready;

        // Broadcast new ready state to everyone in room
        io.to(code).emit('player-ready-changed', { id: socket.id, ready: player.ready });

        console.log(`[READY] ${player.username} → ${player.ready ? '✅' : '❌'} in ${code}`);

        // Check if all players are ready → start game
        if (allReady(rooms[code])) {
            rooms[code].gameStarted = true;
            io.to(code).emit('game-start');
            console.log(`[GAME] Starting room ${code}!`);
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

    // ── ENEMY HIT RELAY ──────────────────────────────────────────
    // When any player damages an enemy, relay to ALL others so they apply
    // the same damage to that enemy on their local simulation.
    socket.on('enemy-hit', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // data = { enemyId, damage, kx, ky, kz }
        socket.to(code).emit('enemy-hit', { ...data, fromId: socket.id });
    });

    // ── ENEMY DEAD CONFIRM ───────────────────────────────────────
    // When a player confirms an enemy is dead (health reached 0 on their side)
    socket.on('enemy-killed', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('enemy-killed', { enemyId: data.enemyId, fromId: socket.id });
    });

    // ── DISCONNECT ───────────────────────────────────────────────
    socket.on('disconnect', () => {
        const code = socket.data.roomCode;
        if (code && rooms[code]) {
            delete rooms[code].players[socket.id];
            io.to(code).emit('player-left', { id: socket.id });
            if (Object.keys(rooms[code].players).length === 0) {
                delete rooms[code];
                console.log(`[ROOM] Deleted empty room ${code}`);
            }
        }
        console.log(`[-] ${socket.id}`);
    });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
    console.log(`🟢 Nightfall Survival server on port ${PORT}`);
});
