const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Health check endpoint (needed for Railway)
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        rooms: Object.keys(rooms).length,
        totalPlayers: Object.values(rooms).reduce((sum, r) => sum + Object.keys(r.players).length, 0)
    });
});

// ---- ROOM MANAGEMENT ----
// rooms[roomCode] = { players: { socketId: { id, username, x, y, z, rotY } } }
const rooms = {};
const MAX_PLAYERS_PER_ROOM = 4;

function generateRoomCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        code += chars[Math.floor(Math.random() * chars.length)];
    }
    // Make sure it's unique
    if (rooms[code]) return generateRoomCode();
    return code;
}

io.on('connection', (socket) => {
    console.log(`[+] Player connected: ${socket.id}`);

    // ---- CREATE ROOM ----
    socket.on('create-room', ({ username }, callback) => {
        if (!username || username.trim().length < 2) {
            return callback({ error: 'Username must be at least 2 characters.' });
        }

        const code = generateRoomCode();
        rooms[code] = { players: {} };

        rooms[code].players[socket.id] = {
            id: socket.id,
            username: username.trim().toUpperCase(),
            x: 0, y: 1.6, z: 0,
            rotY: 0
        };

        socket.join(code);
        socket.data.roomCode = code;
        socket.data.username = username.trim().toUpperCase();

        console.log(`[ROOM] Created: ${code} by ${socket.data.username}`);

        callback({
            roomCode: code,
            players: rooms[code].players
        });

        // Notify others in room (nobody yet, but future-proof)
        socket.to(code).emit('player-joined', rooms[code].players[socket.id]);
    });

    // ---- JOIN ROOM ----
    socket.on('join-room', ({ roomCode, username }, callback) => {
        if (!username || username.trim().length < 2) {
            return callback({ error: 'Username must be at least 2 characters.' });
        }

        const code = roomCode.trim().toUpperCase();

        if (!rooms[code]) {
            return callback({ error: `Room "${code}" does not exist.` });
        }

        const playerCount = Object.keys(rooms[code].players).length;
        if (playerCount >= MAX_PLAYERS_PER_ROOM) {
            return callback({ error: `Room "${code}" is full (${MAX_PLAYERS_PER_ROOM} players max).` });
        }

        rooms[code].players[socket.id] = {
            id: socket.id,
            username: username.trim().toUpperCase(),
            x: 0, y: 1.6, z: 0,
            rotY: 0
        };

        socket.join(code);
        socket.data.roomCode = code;
        socket.data.username = username.trim().toUpperCase();

        console.log(`[ROOM] ${socket.data.username} joined room ${code}`);

        // Notify existing players in room
        socket.to(code).emit('player-joined', rooms[code].players[socket.id]);

        // Send current room state to the joining player
        callback({
            roomCode: code,
            players: rooms[code].players
        });
    });

    // ---- PLAYER POSITION UPDATE ----
    // Sent every few frames from the client. We only forward to others in the same room.
    socket.on('player-update', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code] || !rooms[code].players[socket.id]) return;

        // Update stored position
        rooms[code].players[socket.id].x = data.x;
        rooms[code].players[socket.id].y = data.y;
        rooms[code].players[socket.id].z = data.z;
        rooms[code].players[socket.id].rotY = data.rotY;

        // Broadcast to all OTHER players in the room
        socket.to(code).emit('player-moved', {
            id: socket.id,
            x: data.x,
            y: data.y,
            z: data.z,
            rotY: data.rotY
        });
    });

    // ---- DISCONNECT ----
    socket.on('disconnect', () => {
        const code = socket.data.roomCode;
        if (code && rooms[code]) {
            const username = socket.data.username || socket.id;
            delete rooms[code].players[socket.id];

            console.log(`[-] ${username} left room ${code}`);

            // Notify remaining players
            io.to(code).emit('player-left', { id: socket.id });

            // Clean up empty rooms
            if (Object.keys(rooms[code].players).length === 0) {
                delete rooms[code];
                console.log(`[ROOM] Deleted empty room: ${code}`);
            }
        }
        console.log(`[-] Player disconnected: ${socket.id}`);
    });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
    console.log(`🟢 Nightfall Survival server running on port ${PORT}`);
    console.log(`   Health check: http://localhost:${PORT}/`);
});
