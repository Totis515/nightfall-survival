// ═══════════════════════════════════════════════════════════════════════════
// SERVIDOR MULTIJUGADOR — NIGHTFALL SURVIVAL
// Tecnologías: Express (servidor HTTP) + Socket.IO (WebSockets en tiempo real)
// Desplegado en: https://nightfall-survival-server.onrender.com
// ═══════════════════════════════════════════════════════════════════════════

// Importamos Express para crear el servidor HTTP
const express = require('express');
// createServer convierte la app de Express en un servidor HTTP compatible con WebSockets
const { createServer } = require('http');
// Server de Socket.IO nos permite comunicación bidireccional en tiempo real con los jugadores
const { Server } = require('socket.io');
// cors permite que el servidor acepte peticiones desde cualquier origen (ej: vercel.app)
const cors = require('cors');

// Creamos la aplicación Express y habilitamos CORS para todas las rutas
const app = express();
app.use(cors());

// Creamos el servidor HTTP a partir de la app de Express
const httpServer = createServer(app);

// Inicializamos Socket.IO sobre el servidor HTTP con configuración optimizada para juegos
const io = new Server(httpServer, {
    // Permitir conexiones desde cualquier dominio (necesario para Vercel + Render)
    cors: { origin: '*', methods: ['GET', 'POST'] },
    // Si no hay respuesta en 20s, la conexión se considera muerta
    pingTimeout: 20000,
    // El servidor envía un "ping" al cliente cada 10s para verificar que sigue vivo
    pingInterval: 10000,
    // Preferir WebSocket sobre HTTP polling (menor latencia para el juego)
    transports: ['websocket', 'polling'],
    // Tiempo máximo para actualizar de HTTP polling a WebSocket
    upgradeTimeout: 10000,
    // Tamaño máximo de cada mensaje recibido (1 MB es más que suficiente)
    maxHttpBufferSize: 1e6
});

// Ruta GET raíz: muestra el estado del servidor (usada por cron-job.org para mantenerlo despierto)
app.get('/', (req, res) => {
    // Contamos cuántos jugadores hay en total sumando todos los jugadores de todas las salas
    const totalPlayers = Object.values(rooms).reduce((s, r) => s + Object.keys(r.players).length, 0);
    // Respondemos con un JSON simple que indica que el servidor está funcionando
    res.json({ status: 'ok', rooms: Object.keys(rooms).length, totalPlayers });
});

// ─────────────────────────────────────────────────────────────────
// ESTRUCTURA DE UNA SALA (rooms[code]):
// {
//   players:  { [socketId]: { id, username, platform, x,y,z, rotY, weaponIdx, ready } }
//             → Todos los jugadores actualmente en la sala y sus datos
//   enemies:  { [nid]: { nid, type, x, z } }
//             → Enemigos activos (el host es quien los gestiona)
//   hostId:   string
//             → ID del socket del jugador que creó la sala (controla el spawn de enemigos)
//   gameStarted: bool
//             → true si el juego ya comenzó (se impide unirse a partidas en curso)
//   _pendingPositions: Map
//             → Buffer temporal de posiciones para enviarlas en lote y reducir paquetes
//   _flushTimer: NodeJS.Timeout
//             → Temporizador que vacía el buffer de posiciones cada BATCH_INTERVAL_MS
// }
// ─────────────────────────────────────────────────────────────────

// Objeto principal que almacena TODAS las salas activas
const rooms = {};

// Número máximo de jugadores permitidos por sala
const MAX_PLAYERS = 4;

// Cada cuántos milisegundos se envían en bloque las actualizaciones de posición
// 50ms = máximo 20 actualizaciones por segundo → reduce el tráfico de red con múltiples jugadores
const BATCH_INTERVAL_MS = 50;

// Genera un código de sala único de 6 caracteres (sin letras ambiguas como I, O, 0, 1)
function generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    // Elige 6 caracteres aleatorios del conjunto permitido
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    // Si el código ya existe (muy raro), genera otro recursivamente
    return rooms[code] ? generateCode() : code;
}

// Verifica si TODOS los jugadores de la sala han marcado 'listo'
// Retorna true solo si hay al menos 1 jugador Y todos están listos
function allReady(room) {
    const players = Object.values(room.players);
    return players.length > 0 && players.every(p => p.ready);
}

// Vacía el buffer de posiciones y envía los movimientos acumulados a toda la sala
// Técnica de "batching": en vez de enviar 1 paquete por movimiento, acumulamos varios
// y los enviamos juntos → menos paquetes de red con 3-4 jugadores simultáneos
function flushPositions(code) {
    const room = rooms[code];
    // Si la sala no existe o el buffer está vacío, no hay nada que enviar
    if (!room || !room._pendingPositions || room._pendingPositions.size === 0) return;

    // Para cada movimiento pendiente, lo enviamos a TODOS menos al jugador que lo generó
    // (no tiene sentido decirle a alguien dónde está él mismo)
    room._pendingPositions.forEach((data, senderId) => {
        io.to(code).except(senderId).emit('player-moved', data);
    });
    // Limpiamos el buffer después de enviar todo
    room._pendingPositions.clear();
}

// Prepara el sistema de batching para una sala recién creada o a la que alguien se une
// Crea el Map de posiciones pendientes y arranca el temporizador que las envía
function initRoomBatch(code) {
    const room = rooms[code];
    // Solo crear el Map si aún no existe (evitar reinicializarlo si ya había jugadores)
    if (!room._pendingPositions) room._pendingPositions = new Map();
    // Solo crear el intervalo si no hay uno ya corriendo para esta sala
    if (!room._flushTimer) {
        room._flushTimer = setInterval(() => flushPositions(code), BATCH_INTERVAL_MS);
    }
}

// Elimina por completo una sala cuando ya no quedan jugadores en ella
// Es importante detener el temporizador de batching para no desperdiciar memoria ni CPU
function cleanupRoom(code) {
    const room = rooms[code];
    if (!room) return;
    // Detenemos el intervalo de envío de posiciones para liberar recursos
    if (room._flushTimer) {
        clearInterval(room._flushTimer);
        room._flushTimer = null;
    }
    // Borramos la sala del objeto principal
    delete rooms[code];
    console.log(`[ROOM] Sala ${code} eliminada por estar vacía`);
}

// ═══════════════════════════════════════════════════════════════════════════
// GESTIÓN DE CONEXIONES DE JUGADORES
// Cada vez que un navegador se conecta al servidor, Socket.IO dispara este evento
// y le asigna un socket único con su propio ID (socket.id)
// ═══════════════════════════════════════════════════════════════════════════
io.on('connection', (socket) => {
    // Registramos en consola que un nuevo jugador se conectó
    console.log(`[+] Jugador conectado: ${socket.id}`);

    // CREAR SALA: el jugador que hace clic en "Crear Sala" llama a este evento
    // Recibe el nombre de usuario, plataforma (pc/mobile) y skin seleccionada
    socket.on('create-room', ({ username, platform, skin }, callback) => {
        // Limpiamos y ponemos en mayúsculas el nombre (por consistencia)
        username = (username || '').trim().toUpperCase();
        // Validación mínima: el nombre debe tener al menos 2 caracteres
        if (username.length < 2) return callback({ error: 'Mínimo 2 caracteres.' });

        // Generamos un código único de 6 letras para la sala
        const code = generateCode();
        // Creamos la sala con el host siendo quien la crea
        rooms[code] = {
            players: {}, enemies: {}, hostId: socket.id, gameStarted: false,
            // Configuración por defecto del juego (modo supervivencia, 40 oleadas)
            gameSettings: { mode: 'survival', waves: 40, partyMode: false }
        };
        // Añadimos al creador como primer jugador en la sala
        rooms[code].players[socket.id] = {
            id: socket.id, username, platform: platform || 'pc', skin: skin || 'default',
            // Posición inicial en el centro del mapa a altura de cámara (y=1.6)
            x: 0, y: 1.6, z: 0, rotY: 0, weaponIdx: 0, ready: false
        };

        // Unimos al socket a la "sala" de Socket.IO (canal de comunicación grupal)
        socket.join(code);
        // Guardamos el código de sala en los datos del socket para acceso rápido
        socket.data.roomCode = code;
        socket.data.username = username;
        // Inicializamos el sistema de batching para esta sala
        initRoomBatch(code);

        console.log(`[SALA CREADA] ${code} por ${username} (anfitrión)`);
        // Confirmamos al cliente con el código y la lista de jugadores
        callback({ roomCode: code, players: rooms[code].players });
    });

    // UNIRSE A SALA: cuando un jugador ingresa el código de sala y hace clic en "Unirse"
    socket.on('join-room', ({ roomCode, username, platform, skin }, callback) => {
        username = (username || '').trim().toUpperCase();
        const code = (roomCode || '').trim().toUpperCase();

        // Validaciones antes de permitir la entrada a la sala
        if (username.length < 2) return callback({ error: 'Mínimo 2 caracteres.' });
        if (!rooms[code]) return callback({ error: `Sala "${code}" no encontrada.` });
        if (Object.keys(rooms[code].players).length >= MAX_PLAYERS) return callback({ error: 'La sala está llena.' });
        if (rooms[code].gameStarted) return callback({ error: 'El juego ya comenzó.' });

        // Verificar que el nombre no esté ya tomado en esa sala
        const taken = Object.values(rooms[code].players).some(p => p.username === username);
        if (taken) return callback({ error: `"${username}" ya está en uso en esta sala.` });

        // Registrar al nuevo jugador en la sala
        rooms[code].players[socket.id] = {
            id: socket.id, username, platform: platform || 'pc', skin: skin || 'default',
            x: 0, y: 1.6, z: 0, rotY: 0, weaponIdx: 0, ready: false
        };

        socket.join(code);
        socket.data.roomCode = code;
        socket.data.username = username;
        initRoomBatch(code);

        // Enviamos al recién llegado la lista de jugadores que ya estaban (para que pueda verlos)
        socket.emit('existing-players', Object.values(rooms[code].players).filter(p => p.id !== socket.id));

        // Enviamos al nuevo jugador la configuración actual del lobby (modo de juego, oleadas, etc.)
        socket.emit('lobby-settings', rooms[code].gameSettings || { mode: 'survival', waves: 40, partyMode: false });

        // Avisamos a los jugadores ya existentes que alguien nuevo se unió
        socket.to(code).emit('player-joined', rooms[code].players[socket.id]);

        console.log(`[SALA] ${username} se unió a ${code}`);
        callback({ roomCode: code, players: rooms[code].players });
    });

    // ALTERNAR ESTADO LISTO: cuando el jugador pulsa el botón "READY"
    // Alterna entre "listo" y "no listo", y si todos están listos, arranca el juego
    socket.on('toggle-ready', (callback) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]?.players[socket.id]) return;

        const player = rooms[code].players[socket.id];
        // Invertimos el estado actual: si estaba listo pasa a no listo y viceversa
        player.ready = !player.ready;
        // Notificamos a TODOS en la sala del cambio de estado
        io.to(code).emit('player-ready-changed', { id: socket.id, ready: player.ready });

        // Comprobamos si ahora TODOS están listos para arrancar la partida
        if (allReady(rooms[code])) {
            rooms[code].gameStarted = true;
            // Enviamos la señal de inicio con el ID del host (quien controla los enemigos)
            io.to(code).emit('game-start', {
                hostId: rooms[code].hostId,
                gameSettings: rooms[code].gameSettings || { mode: 'survival', waves: 40, partyMode: false }
            });
            console.log(`[JUEGO] Sala ${code} iniciando. Anfitrión: ${rooms[code].hostId}`);
        }
        // Confirmamos el nuevo estado al jugador que lo solicitó
        if (callback) callback({ ready: player.ready });
    });

    // ACTUALIZACIÓN DE POSICIÓN: el cliente envía su posición cada frame (o cada ~50ms)
    // Guardamos la posición en el servidor y la ponemos en el buffer de batching
    socket.on('player-update', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]?.players[socket.id]) return;
        const p = rooms[code].players[socket.id];
        // Actualizamos las coordenadas almacenadas en el servidor
        p.x = data.x; p.y = data.y; p.z = data.z; p.rotY = data.rotY;
        // Actualizamos qué arma lleva el jugador (para sincronizar modelos en otros clientes)
        if (data.weaponIdx !== undefined) p.weaponIdx = data.weaponIdx;

        // Guardamos en el buffer de batching (se envía a los demás cada BATCH_INTERVAL_MS)
        if (rooms[code]._pendingPositions) {
            rooms[code]._pendingPositions.set(socket.id, {
                id: socket.id,
                x: data.x, y: data.y, z: data.z,
                rotY: data.rotY,
                weaponIdx: p.weaponIdx || 0
            });
        }
    });

    // CAMBIO DE SKIN: cuando el jugador elige una skin diferente en el lobby
    // Notificamos al resto de la sala para que actualicen el modelo 3D de ese jugador
    socket.on('skin-changed', ({ skin }) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]?.players[socket.id]) return;
        rooms[code].players[socket.id].skin = skin;
        // Broadcast a todos EXCEPTO al que cambió la skin (él ya sabe cuál es)
        socket.to(code).emit('skin-changed', { id: socket.id, skin });
    });

    // ENEMIGO SPAWNEADO: el host crea un enemigo y notifica al servidor para que lo distribuya
    // Cada enemigo tiene un ID de red (nid) único para sincronización entre clientes
    socket.on('spawn-enemy', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // Registramos el enemigo en el servidor (por si un jugador se conecta tarde)
        rooms[code].enemies[data.nid] = { nid: data.nid, type: data.type, x: data.x, z: data.z };
        // Reenviamos la orden de spawn a los demás jugadores (no al host, él ya lo creó)
        socket.to(code).emit('spawn-enemy', data);
    });

    // SINCRONIZACIÓN DE ENEMIGOS: el host envía las posiciones de todos los enemigos activos
    // Se hace a ~10 FPS para mantener los movimientos de enemigos sincronizados en todos los clientes
    socket.on('enemy-sync', (enemiesArray) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // Lo retransmitimos directamente sin batching (ya llega a ritmo controlado desde el host)
        socket.broadcast.to(code).emit('enemy-sync', enemiesArray);
    });

    // ENEMIGO ELIMINADO: cualquier jugador puede matar un enemigo y notificarlo
    // El servidor borra el enemigo de su registro y avisa a TODOS (incluyendo al que mató)
    socket.on('enemy-killed', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // Eliminamos el enemigo del estado del servidor
        delete rooms[code].enemies[data.nid];
        // Notificamos a TODOS para que lo eliminen de su mundo 3D
        io.to(code).emit('enemy-killed', { nid: data.nid });
        console.log(`[MATAR] Enemigo ${data.nid} eliminado en sala ${code}`);
    });

    // OLEADA COMPLETADA: el host notifica que todos los enemigos de la oleada han muerto
    // Reseteamos el estado de "listo para tienda" de todos los jugadores
    socket.on('wave-complete', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // Limpiamos el registro de enemigos (ya no quedan vivos)
        rooms[code].enemies = {};
        // Reseteamos el estado de tienda de cada jugador para la siguiente oleada
        Object.values(rooms[code].players).forEach(p => p.shopReady = false);
        // Avisamos a todos para que muestren la pantalla de entre-oleadas
        io.to(code).emit('wave-complete', data);
        console.log(`[OLEADA] Oleada ${data.wave} completada en sala ${code}`);
    });

    // TIENDA CERRADA: un jugador cierra la tienda (sin marcar listo)
    // Solo se notifica a los demás para sincronizar la UI del lobby
    socket.on('shop-closed', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('shop-closed', data);
    });

    // LISTO EN TIENDA: el jugador indica que ya terminó de comprar y está listo
    // Cuando TODOS los jugadores estén listos, el juego continúa a la siguiente oleada
    socket.on('shop-ready', ({ ready }) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;

        // Marcamos al jugador como listo (o no listo) en la tienda
        rooms[code].players[socket.id].shopReady = ready;
        const playerList = Object.values(rooms[code].players);

        // Enviamos la lista actualizada a todos (para mostrar quién ya está listo)
        io.to(code).emit('shop-players-update', { players: playerList });

        // Si absolutamente todos están listos, cerramos la tienda y seguimos
        if (playerList.length > 0 && playerList.every(p => p.shopReady)) {
            io.to(code).emit('all-shop-ready');
            // Reseteamos para la próxima vez que abra la tienda
            playerList.forEach(p => p.shopReady = false);
        }
    });

    // PAUSA/REANUDACIÓN: cuando un jugador pausa el juego, notificamos a todos
    // para que el juego se pause en todos los clientes simultáneamente
    socket.on('game-paused', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('game-paused', data);
    });

    // Reanudación del juego tras la pausa
    socket.on('game-resumed', () => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('game-resumed');
    });

    // JUGADOR CAÍDO: un jugador perdió toda su salud y está en estado "downed"
    socket.on('player-downed', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].players[socket.id]) {
            rooms[code].players[socket.id].isDowned = true;
        }
        io.to(code).emit('player-downed', { id: socket.id, name: data.name });
    });

    // REVIVIENDO: el cliente indica que está ayudando a levantar a otro
    socket.on('player-reviving', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        socket.to(code).emit('player-reviving', { targetId: data.targetId, reviverId: socket.id });
    });

    // JUGADOR REVIVIDO: el jugador completó el proceso de revivir
    socket.on('player-revived', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].players[data.targetId]) {
            rooms[code].players[data.targetId].isDowned = false;
        }
        io.to(code).emit('player-revived', { targetId: data.targetId, reviverId: socket.id });
    });

    // JUGADOR MUERTO: el jugador muere definitivamente (sin posibilidad de ayuda)
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

    // VICTORIA: el host anuncia que sobrevivieron todas las oleadas
    socket.on('game-victory', () => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // Notificamos a todos los jugadores que ganaron
        socket.to(code).emit('game-victory');
        console.log(`[VICTORIA] Sala ${code} ganó!`);
    });

    // CAMBIO DE BIOMA: el host cambia el bioma actual (Bosque → Nieve → Lava → Castillo)
    // Solo el host puede cambiarlo para mantener sincronización
    socket.on('biome-change', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].hostId !== socket.id) return; // Seguridad: solo el host
        rooms[code].currentBiome = data.biome;
        // Avisamos a todos para que actualicen el entorno visual 3D
        io.to(code).emit('biome-change', { biome: data.biome });
        console.log(`[BIOMA] Sala ${code} cambiando a ${data.biome}`);
    });

    // CAMBIO DE MÚSICA: el host cambia la pista de música (sincronizado entre jugadores)
    socket.on('music-change', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].hostId !== socket.id) return; // Solo el host controla la música
        io.to(code).emit('music-change', { track: data.track });
        console.log(`[MÚSICA] Sala ${code} cambiando pista a ${data.track}`);
    });

    // CONFIGURACIÓN DEL LOBBY: el host ajusta el modo de juego, número de oleadas, etc.
    // Se guarda en el servidor y se propaga a todos para actualizar la UI del lobby
    socket.on('lobby-settings', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        if (rooms[code].hostId !== socket.id) return; // Solo el host puede cambiar ajustes
        // Guardamos la nueva configuración en el servidor
        rooms[code].gameSettings = {
            mode: data.mode || 'survival',
            waves: data.waves || 40,
            partyMode: data.partyMode || false
        };
        // Enviamos a TODOS los jugadores (incluido el host para confirmar)
        io.to(code).emit('lobby-settings', rooms[code].gameSettings);
        console.log(`[AJUSTES] Sala ${code}: modo=${data.mode}, oleadas=${data.waves}, fiesta=${data.partyMode}`);
    });


    // ── EXPULSAR JUGADOR: solo el host puede echar a alguien de la sala
    socket.on('kick-player', (data) => {
        const code = socket.data.roomCode;
        if (!code || !rooms[code]) return;
        // Solo el host puede expulsar
        if (rooms[code].hostId !== socket.id) return;
        const targetId = data.id;
        const targetSocket = io.sockets.sockets.get(targetId);
        if (targetSocket) {
            targetSocket.emit('kicked-from-room'); // Avisamos al expulsado
            targetSocket.leave(code);
            delete rooms[code].players[targetId];
            io.to(code).emit('player-left', { id: targetId });
            console.log(`[KICK] ${targetId} kicked from room ${code} by host ${socket.id}`);
        }
    });

    // ── DISCONNECT ────────────────────────────────────────────────
        // Host resets the game to lobby state
        socket.on('reset-room-state', () => {
            const code = reverseLookup[socket.id];
            if (!code || !rooms[code]) return;
            if (rooms[code].hostId === socket.id) {
                rooms[code].gameStarted = false;
                rooms[code].enemies = {};
                io.to(code).emit('force-lobby-return');
            }
        });

    // DESCONEXIÓN: cuando un jugador cierra el navegador o pierde la conexión
    // Este es el evento más crítico — debemos limpiar todo rastro del jugador
    socket.on('disconnect', (reason) => {
        const code = socket.data.roomCode;
        console.log(`[-] Jugador desconectado: ${socket.id} (razón: ${reason})`);
        if (code && rooms[code]) {
            // Eliminamos al jugador del registro de la sala
            delete rooms[code].players[socket.id];

            // Limpiamos su posición pendiente del buffer de batching
            if (rooms[code]._pendingPositions) {
                rooms[code]._pendingPositions.delete(socket.id);
            }

            // Notificamos a los demás que ese jugador se fue (para eliminar su modelo 3D)
            io.to(code).emit('player-left', { id: socket.id });

            // Si el que se desconectó era el host, asignamos el control a otro jugador
            // Esto es crucial porque el host es quien genera y sincroniza los enemigos
            if (rooms[code].hostId === socket.id) {
                const remaining = Object.keys(rooms[code].players);
                if (remaining.length > 0) {
                    rooms[code].hostId = remaining[0];
                    io.to(code).emit('host-changed', { newHostId: remaining[0] });
                    console.log(`[HOST] Nuevo anfitrión: ${remaining[0]} en sala ${code}`);
                }
            }

            // Si la sala quedó vacía, la eliminamos para liberar memoria
            if (Object.keys(rooms[code].players).length === 0) {
                cleanupRoom(code);
            }
        }
    });
});

// Iniciamos el servidor en el puerto indicado por la plataforma (Render) o el 3001 local
// process.env.PORT es configurado automáticamente por Render cuando se despliega en la nube
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => console.log(`🟢 Servidor Nightfall Survival corriendo en puerto ${PORT}`));
