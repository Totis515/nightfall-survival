const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: { origin: '*', methods: ['GET', 'POST'] },
    // Mejorar timeouts para conexiones inestables
    pingTimeout: 20000,
    pingInterval: 10000,
    transports: ['websocket', 'polling'], // WebSocket primero, fallback a polling
    upgradeTimeout: 10000,
    maxHttpBufferSize: 1e6 // 1MB máximo por paquete
});

app.get('/', (req, res) => {
    const totalPlayers = Object.values(rooms).reduce((s, r) => s + Object.keys(r.players).length, 0);
    res.json({ status: 'ok', rooms: Object.keys(rooms).length, totalPlayers });
});

// ─────────────────────────────────────────────────────────────────
// ROOM STRUCTURE:
// rooms[code] = {
//   players:  { [id]: { id, username, platform, x,y,z, rotY, weaponIdx, ready } }
//   enemies:  { [nid]: { nid, type, x, z } }   ← active enemy state
//   hostId:   string                             ← room creator (drives enemy spawning)
//   gameStarted: bool
//   _pendingPositions: Map                        ← buffer de posiciones para batching
//   _flushTimer: NodeJS.Timeout                  ← timer de batching
// }
// ─────────────────────────────────────────────────────────────────
const rooms = {};
const MAX_PLAYERS = 4;

// Intervalo de batching de posiciones (ms) — 50ms = 20 actualizaciones/seg máximo
const BATCH_INTERVAL_MS = 50;

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

// Enviar batch de posiciones acumuladas a todos en la sala
function flushPositions(code) {
    const room = rooms[code];
    if (!room || !room._pendingPositions || room._pendingPositions.size === 0) return;

    // Para cada jugador, enviar solo los movimientos de los DEMÁS (no el suyo propio)
    room._pendingPositions.forEach((data, senderId) => {
        // Broadcast a todos excepto al emisor original
        io.to(code).except(senderId).emit('player-moved', data);
    });
    room._pendingPositions.clear();
}

// Inicializar estructura de batching para una sala
function initRoomBatch(code) {
    const room = rooms[code];
    if (!room._pendingPositions) room._pendingPositions = new Map();
    if (!room._flushTimer) {
        room._flushTimer = setInterval(() => flushPositions(code), BATCH_INTERVAL_MS);
    }
}

function cleanupRoom(code) {
    const room = rooms[code];
    if (!room) return;
    if (room._flushTimer) {
        clearInterval(room._flushTimer);
        room._flushTimer = null;
    }
    delete rooms[code];
    console.log(`[ROOM] Deleted empty room ${code}`);
}

io.on('connection', (socket) => {
    console.log(`[+] ${socket.id}`);

    // ── CREATE ROOM ──────────────────────────────────────────────
    socket.on('create-room', ({ username, platform, skin }, callback) => {
        username = (username || '').trim().toUpperCase();
        if (username.length < 2) return callback({ error: 'Min 2 characters.' });

        const code = generateCode();
        rooms[code] = {
            players: {}, enemies: {}, hostId: socket.id, gameStarted: false,
            gameSettings: { mode: 'survival', waves: 40, partyMode: false }
        };
        rooms[code].players[socket.id] = {
            id: socket.id, username, platform: platform || 'pc', skin: skin || 'default',
            x: 0, y: 1.6, z: 0, rotY: 0, weaponIdx: 0, ready: false
        };

        socket.join(code);
        socket.data.roomCode = code;
        socket.data.username = username;
        initRoomBatch(code);

        console.log(`[ROOM] Created ${code} by ${username} (host)`);
        callback({ roomCode: code, players: rooms[code].players });
    });

    // ── JOIN ROOM ────────────────────────────────────────────────
    socket.on('join-room', ({ roomCode, username, platform, skin }, callback) => {
        username = (username || '').trim().toUpperCase();
        const code = (roomCode || '').trim().toUpperCase();

        if (username.length < 2) return callback({ error: 'Min 2 characters.' });
        if (!rooms[code]) return callback({ error: `Room "${code}" not found.` });
        if (Object.keys(rooms[code].players).length >= MAX_PLAYERS) return callback({ error: 'Room is full.' });
        if (rooms[code].gameStarted) return callback({ error: 'Game already started.' });

        const taken = Object.values(rooms[code].players).some(p => p.username === username);
        if (taken) return callback({ error: `"${username}" already taken in this room.` });

        rooms[code].players[socket.id] = {
            id: socket.id, username, platform: platform || 'pc', skin: skin || 'default',
            x: 0, y: 1.6, z: 0, rotY: 0, weaponIdx: 0, ready: false
        };

        socket.join(code);
        socket.data.roomCode = code;
        socket.data.username = username;
        initRoomBatch(code);

        // Tell the new player about ALL existing players (fix late-join visibility)
        socket.emit('existing-players', Object.values(rooms[code].players).filter(p => p.id !== socket.id));

        // Tell new player the current lobby game settings
        socket.emit('lobby-settings', rooms[code].gameSettings || { mode: 'survival', waves: 40, partyMode: false });

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
            io.to(code).emit('game-start', {
                hostId: rooms[code].hostId,
                gameSettings: rooms[code].gameSettings || { mode: 'survival', waves: 40, partyMode: false }
            });
            console.log(`[GAME] Room ${code} starting! Host: ${rooms[code].hostId}`);
        }
        if (callback) callback({ ready: player.ready });
    });

    // ── POSITION UPDATE (con batching) ───────────────────────────
    socket.on('player-update', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]?.players[socket.id]) return;
        const p = rooms[code].players[socket.id];
        p.x = data.x; p.y = data.y; p.z = data.z; p.rotY = data.rotY;
        if (data.weaponIdx !== undefined) p.weaponIdx = data.weaponIdx;

        // Acumular en buffer para envío en lote (reduce paquetes con 3-4 jugadores)
        if (rooms[code]._pendingPositions) {
            rooms[code]._pendingPositions.set(socket.id, {
                id: socket.id,
                x: data.x, y: data.y, z: data.z,
                rotY: data.rotY,
                weaponIdx: p.weaponIdx || 0
            });
        }
    });

    // ── SKIN CHANGED ─────────────────────────────────────────────
    socket.on('skin-changed', ({ skin }) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]?.players[socket.id]) return;
        rooms[code].players[socket.id].skin = skin;
        socket.to(code).emit('skin-changed', { id: socket.id, skin });
    });

    // ── ENEMY SPAWNED (host → server → all others) ───────────────
    socket.on('spawn-enemy', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        rooms[code].enemies[data.nid] = { nid: data.nid, type: data.type, x: data.x, z: data.z };
        socket.to(code).emit('spawn-enemy', data);
    });

    // ── ENEMY SYNC (Continuous Move) ─────────────────────────────
    socket.on('enemy-sync', (enemiesArray) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // Retransmitir directamente (ya viene de host a ~10fps, no necesita batching extra)
        socket.broadcast.to(code).emit('enemy-sync', enemiesArray);
    });

    // ── ENEMY KILLED (any player → server → ALL players) ─────────
    socket.on('enemy-killed', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        delete rooms[code].enemies[data.nid];
        io.to(code).emit('enemy-killed', { nid: data.nid });
        console.log(`[KILL] Enemy ${data.nid} killed in room ${code}`);
    });

    // ── WAVE COMPLETE (host → server → all players) ───────────────
    socket.on('wave-complete', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        rooms[code].enemies = {};
        Object.values(rooms[code].players).forEach(p => p.shopReady = false);
        io.to(code).emit('wave-complete', data);
        console.log(`[WAVE] Wave ${data.wave} complete in room ${code}`);
    });

    // ── SHOP READY / SHOP CLOSED ──────────────────────────────────
    socket.on('shop-closed', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('shop-closed', data);
    });

    socket.on('shop-ready', ({ ready }) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;

        rooms[code].players[socket.id].shopReady = ready;
        const playerList = Object.values(rooms[code].players);

        io.to(code).emit('shop-players-update', { players: playerList });

        if (playerList.length > 0 && playerList.every(p => p.shopReady)) {
            io.to(code).emit('all-shop-ready');
            playerList.forEach(p => p.shopReady = false);
        }
    });

    // ── PAUSE SYNC ────────────────────────────────────────────────
    socket.on('game-paused', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('game-paused', data);
    });

    socket.on('game-resumed', () => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('game-resumed');
    });

    // ── PLAYER DEATH / DOWNED MECHANICS ───────────────────────────
    socket.on('player-downed', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].players[socket.id]) {
            rooms[code].players[socket.id].isDowned = true;
        }
        io.to(code).emit('player-downed', { id: socket.id, name: data.name });
    });

    socket.on('player-reviving', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('player-reviving', { targetId: data.targetId, reviverId: socket.id });
    });

    socket.on('player-revived', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].players[data.targetId]) {
            rooms[code].players[data.targetId].isDowned = false;
        }
        io.to(code).emit('player-revived', { targetId: data.targetId, reviverId: socket.id });
    });

    socket.on('player-died-final', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].players[socket.id]) {
            rooms[code].players[socket.id].isDead = true;
        }
        io.to(code).emit('player-died-final', { id: socket.id, name: data.name });

        // MIGRAR HOST SI EL HOST MUERE DEFINITIVAMENTE
        if (rooms[code].hostId === socket.id) {
            const remaining = Object.values(rooms[code].players).filter(p => !p.isDead && p.id !== socket.id);
            if (remaining.length > 0) {
                rooms[code].hostId = remaining[0].id;
                io.to(code).emit('host-changed', { newHostId: remaining[0].id });
                console.log(`[HOST CHANGED] Dead Host. New Host: ${remaining[0].id} in room ${code}`);
            }
        }
    });

    // ── GAME VICTORY (host → server → ALL players) ───────────────
    socket.on('game-victory', () => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('game-victory');
        console.log(`[VICTORY] Room ${code} won!`);
    });

    // ── BIOME CHANGE (host → server → ALL players) ───────────────
    socket.on('biome-change', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].hostId !== socket.id) return; // Solo el host puede cambiar bioma
        rooms[code].currentBiome = data.biome;
        io.to(code).emit('biome-change', { biome: data.biome });
        console.log(`[BIOME] Room ${code} changing to ${data.biome}`);
    });

    // ── MUSIC CHANGE (host → server → ALL players) ───────────────
    socket.on('music-change', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].hostId !== socket.id) return; // Solo el host puede cambiar musica
        io.to(code).emit('music-change', { track: data.track });
        console.log(`[MUSIC] Room ${code} switching track to ${data.track}`);
    });

    // ── LOBBY SETTINGS (host → server → ALL players) ─────────────
    socket.on('lobby-settings', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].hostId !== socket.id) return; // Only host sets game settings
        // Update stored settings
        rooms[code].gameSettings = {
            mode: data.mode || 'survival',
            waves: data.waves || 40,
            partyMode: data.partyMode || false
        };
        // Broadcast to ALL players (including host for confirmation)
        io.to(code).emit('lobby-settings', rooms[code].gameSettings);
        console.log(`[SETTINGS] Room ${code}: mode=${data.mode}, waves=${data.waves}, party=${data.partyMode}`);
    });


    // ── KICK PLAYER (host only) ──────────────────────────────────
    socket.on('kick-player', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // Only the host can kick
        if (rooms[code].hostId !== socket.id) return;
        const targetId = data.id;
        const targetSocket = io.sockets.sockets.get(targetId);
        if (targetSocket) {
            targetSocket.emit('kicked-from-room');
            targetSocket.leave(code);
            delete rooms[code].players[targetId];
            io.to(code).emit('player-left', { id: targetId });
            console.log(`[KICK] ${targetId} kicked from room ${code} by host ${socket.id}`);
        }
    });

    // ── DISCONNECT ────────────────────────────────────────────────
    socket.on('disconnect', (reason) => {
        const code = socket.data.roomCode;
        console.log(`[-] ${socket.id} (${reason})`);
        if (code && rooms[code]) {
            delete rooms[code].players[socket.id];

            // Limpiar buffer de posiciones para este jugador
            if (rooms[code]._pendingPositions) {
                rooms[code]._pendingPositions.delete(socket.id);
            }

            io.to(code).emit('player-left', { id: socket.id });

            // Si el host se desconecta, asignar nuevo host automáticamente
            if (rooms[code].hostId === socket.id) {
                const remaining = Object.keys(rooms[code].players);
                if (remaining.length > 0) {
                    rooms[code].hostId = remaining[0];
                    io.to(code).emit('host-changed', { newHostId: remaining[0] });
                    console.log(`[HOST] New host: ${remaining[0]} in room ${code}`);
                }
            }

            // Limpiar sala vacía
            if (Object.keys(rooms[code].players).length === 0) {
                cleanupRoom(code);
            }
        }
    });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => console.log(`🟢 Nightfall Survival server on port ${PORT}`));
