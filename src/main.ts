import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { io, Socket } from 'socket.io-client';

// ══════════════════════════════════════════════════════════════════
// PHASE 12: MULTIPLAYER CLIENT
// After deploying the server to Railway, replace SERVER_URL below
// with your actual Railway deployment URL (e.g. https://xxx.railway.app)
// ══════════════════════════════════════════════════════════════════
const SERVER_URL = (window.location.hostname === 'localhost')
    ? 'http://localhost:3001'
    : 'https://nightfall-survival-production.up.railway.app';

let socket: Socket | null = null;
let myUsername = '';
let myRoomCode = '';
let isMultiplayer = false;
let isHost = false;

let currentSkin = 'default';

// ══════════════════════════════════════════════════════════════════
// I18N - TRANSLATION SYSTEM
// ══════════════════════════════════════════════════════════════════
type Lang = 'EN' | 'ES' | 'FR';
let currentLanguage: Lang = 'EN';

const TRANSLATIONS: Record<Lang, Record<string, string>> = {
    EN: {
        MENU_START: "Start Game",
        MENU_OPTIONS: "Options",
        MENU_EXIT: "Exit",
        WAITING_ROOM: "WAITING ROOM",
        UI_TOTAL_ENEMIES: "TOTAL ENEMIES: ",
        UI_FPS: "FPS: ",
        UI_COINS: "COINS: ",
        GO_TITLE: "YOU DIED",
        GO_STATS: "Waves Survived: ",
        GO_KILLED_BY: "KILLED BY: ",
        GO_RESTART: "Restart",
        GO_LEAVE: "✕ LEAVE ROOM",
        RELOADING: "RELOADING...",
        OUT_OF_AMMO: "OUT OF AMMO",
        PRESS_E: "PRESS E TO OPEN SHOP",
        ENEMIES_LEFT: "Enemies: {alive} (To Spawn: {spawn})",
        WAVE: "WAVE {wave}",
        WEAPON: "WEAPON: ",
        NOT_ENOUGH_COINS: "NOT ENOUGH COINS!",
        EQUIPPED: "EQUIPPED ",
        BOUGHT: "BOUGHT ",
        UNAVAILABLE: "WEAPON NOT AVAILABLE UNTIL WAVE ",
        VICTORY: "THE WORLD IS SAFE",
        "PISTOL": "PISTOL",
        "SHOTGUN": "SHOTGUN",
        "ASSAULT RIFLE": "ASSAULT RIFLE",
        "DB SHOTGUN": "DB SHOTGUN",
        "MINI GUN": "MINI GUN",
        "LASER GUN": "LASER GUN",
        "ROCKET LAUNCHER": "ROCKET LAUNCHER",
        "FIRE GUN": "FLAMETHROWER",
        OPT_LANGUAGE: "LANGUAGE",
        OPT_TITLE: "OPTIONS",
        OPT_SUBTITLE: "NIGHTFALL SURVIVAL — SETTINGS",
        OPT_PC: "COMPUTER",
        OPT_MOBILE: "MOBILE",
        OPT_MASTER: "MASTER",
        OPT_MUSIC: "MUSIC",
        OPT_SFX: "SFX",
        OPT_SENS: "SENSITIVITY",
        OPT_GFX: "GRAPHICS",
        OPT_LOW: "LOW",
        OPT_MED: "MED",
        OPT_HIGH: "HIGH",
        OPT_SHOW_FPS: "SHOW FPS",
        BACK_MENU: "BACK TO MENU",
        LOBBY_TITLE: "WAITING ROOM",
        LOBBY_SURVIVOR: "CHOOSE YOUR SURVIVOR",
        LOBBY_USERNAME: "ENTER USERNAME",
        LOBBY_CODE: "ROOM CODE",
        LOBBY_SOLO: "SOLO PLAY",
        LOBBY_HOST: "HOST SERVER",
        LOBBY_JOIN: "JOIN SERVER",
        SHOP_TITLE: "BLACK MARKET",
        SHOP_CLOSE: "CLOSE",
        SHOP_BALANCE: "Balance: ",
        ITEM_HEALTH: "HEALTH",
        ITEM_HEALTH_DESC: "Instantly restore health for $50.",
        ITEM_AMMO: "AMMO",
        ITEM_AMMO_DESC: "Refill all weapon ammo to maximum.",
        ITEM_MAXHP: "VITALITY",
        ITEM_MAXHP_DESC: "Increase MAX HP permanently by 20.",
        ITEM_SPEED: "SPEED",
        ITEM_SPEED_DESC: "Increase movement speed by 20%.",
        ITEM_JETPACK: "JET INJECTOR",
        ITEM_JETPACK_DESC: "Refill jetpack fuel to maximum.",
        BTN_CONTINUE: "CONTINUE",
        SERVERS_TITLE: "SERVERS",
        SERVERS_SUB: "MAX 4 PLAYERS PER ROOM",
        SERVERS_OR: "OR JOIN WITH CODE",
        LOBBY_READY: "READY",
        TAB_LOBBY: "LOBBY",
        TAB_SKINS: "SKINS",
        LOBBY_LEAVE: "✕ LEAVE",
        INTERACT_SHOP: "[ E ] ENTER BLACK MARKET",
        DOWNED_TITLE: "YOU ARE DOWN!",
        DOWNED_SUB: "WAITING FOR REVIVAL...",
        REVIVE_PROMPT: "HOLD 'Q' TO REVIVE",
        VICTORY_WORLD: "THE WORLD IS SAFE",
        VICTORY_SUB: "★ NIGHTFALL SURVIVAL COMPLETE ★",
        VICTORY_DESC: "You conquered all 30 waves across 3 biomes — Forest, Snow and Lava.<br>The Purple Dragon has fallen. Humanity lives on.",
        DEATH_BANNER: "PLAYER HAS DIED",
        SKINS_LOCKER: "LOCKER",
        LOAD_TEXT: "LOADING ELEMENTS...",
        UI_ENEMIES: "Enemies: 0 (To Spawn: 0)",
        SKIN_LIGHT: "LIGHT YAGAMI",
        SKIN_GOJO: "SATORU GOJO",
        SKIN_GOKU: "SON GOKU",
        SKIN_ISAGI: "YOICHI ISAGI",
        SKIN_BUGS: "BUGS BUNNY",
        SKIN_TUNG: "TUNG TUNG SAHUR",
        SKIN_SAILOR: "SAILOR MOON",
        SKIN_GETO: "SUGURU GETO",
        SKIN_POMNI: "POMNI",
        SKIN_L: "L LAWLIET",
        SKIN_CUPHEAD: "CUPHEAD",
        SKIN_MARIO: "SUPER MARIO",
        SKIN_SONIC: "SONIC",
        SKIN_BEN: "BEN 10",
        SKIN_CORALINE: "CORALINE",
        SKIN_MILES: "MILES MORALES",
        SKIN_KUNIGAMI: "RENSUKE KUNIGAMI",
        SKIN_RICK: "RICK SANCHEZ",
        SKIN_DOOM: "DOOM SLAYER",
        SKIN_MORTY: "MORTY SMITH",
        SKIN_LELOUCH: "LELOUCH LAMPEROUGE",
        SKIN_MUGMAN: "MUGMAN",
        SKIN_AJ: "AJ FROM F13",
        SKIN_DEFAULT: "DEFAULT",
        READY: "READY",
        NOT_READY: "NOT READY",
        SHOP_INTERACT: "[ E ] ENTER BLACK MARKET",
        FUEL_REFILLED: "FUEL REFILLED",
        AMMO_REFILLED: "AMMO REFILLED",
        YOU_HOST: "YOU ARE NOW THE HOST",
        JOINED: " JOINED!",
        BIOME_FOREST: "FOREST",
        BIOME_SNOW: "SNOW",
        BIOME_LAVA: "LAVA",
        BIOME_CASTLE: "CASTLE",
        FINAL_WAVE_BOSS: "FINAL WAVE: BOSS",
        BIOME_CHANGE: "BIOME CHANGE...",
        RESTORING: "RESTORING...",
        LOADING_WAVE: "READYING WAVE {wave}... {progress}%",
        CHANGE_MODE: "CHANGE MODE >",
        MODE_SURVIVAL: "SURVIVAL",
        MODE_EVE: "EVE",
        MODE_PARTY_ON: "PARTY",
        SELECT_MODE: "SELECT MODE",
        PARTY_MODE_LABEL: "PARTY MODE",
        PARTY_MODE_OFF: "PARTY MODE: OFF",
        PARTY_MODE_ON: "PARTY MODE: ON",
        WAVES_LABEL: "NUMBER OF WAVES",
        SAVE_MODE: "✓ ALL READY",
        GAME_MODE_TITLE: "GAME MODE"
    },
    ES: {
        MENU_START: "Iniciar Juego",
        MENU_OPTIONS: "Opciones",
        MENU_EXIT: "Salir",
        WAITING_ROOM: "SALA DE ESPERA",
        UI_TOTAL_ENEMIES: "ENEMIGOS TOTALES: ",
        UI_FPS: "FPS: ",
        UI_MONEDAS: "MONEDAS: ",
        GO_TITLE: "ESTÁS MUERTO",
        GO_STATS: "Oleadas Superadas: ",
        GO_KILLED_BY: "ASESINADO POR: ",
        GO_RESTART: "Reiniciar",
        GO_LEAVE: "✕ SALIR DE SALA",
        RELOADING: "RECARGANDO...",
        OUT_OF_AMMO: "SIN MUNICIÓN",
        PRESS_E: "PULSA E PARA LA TIENDA",
        ENEMIES_LEFT: "Enemigos: {alive} (Faltan: {spawn})",
        WAVE: "OLEADA {wave}",
        WEAPON: "ARMA: ",
        NOT_ENOUGH_COINS: "¡MONEDAS INSUFICIENTES!",
        EQUIPPED: "EQUIPASTE ",
        BOUGHT: "COMPRASTE ",
        UNAVAILABLE: "ARMA NO DISPONIBLE HASTA OLEADA ",
        VICTORY: "EL MUNDO ESTÁ SALVADO",
        "PISTOL": "PISTOLA",
        "SHOTGUN": "ESCOPETA",
        "ASSAULT RIFLE": "FUSIL",
        "DB SHOTGUN": "ESCOPETA DOBLE",
        "MINI GUN": "MINIGUN",
        "LASER GUN": "ARMA LÁSER",
        "ROCKET LAUNCHER": "LANZACOHETES",
        "FIRE GUN": "LANZALLAMAS",
        OPT_LANGUAGE: "IDIOMA",
        OPT_TITLE: "OPCIONES",
        OPT_SUBTITLE: "NIGHTFALL SURVIVAL — AJUSTES",
        OPT_PC: "COMPUTADORA",
        OPT_MOBILE: "MÓVIL",
        OPT_MASTER: "GENERAL",
        OPT_MUSIC: "MÚSICA",
        OPT_SFX: "EFECTOS",
        OPT_SENS: "SENSIBILIDAD",
        OPT_GFX: "GRÁFICOS",
        OPT_LOW: "BAJO",
        OPT_MED: "MEDIO",
        OPT_HIGH: "ALTO",
        OPT_SHOW_FPS: "MOSTRAR FPS",
        OPT_SHOW_HP: "MOSTRAR HP",
        BACK_MENU: "VOLVER AL MENÚ",
        LOBBY_TITLE: "SALA DE ESPERA",
        LOBBY_SURVIVOR: "ELIGE TU SUPERVIVIENTE",
        LOBBY_USERNAME: "INGRESA TU NOMBRE",
        LOBBY_CODE: "CÓDIGO DE SALA",
        LOBBY_SOLO: "JUGAR SOLO",
        LOBBY_HOST: "CREAR SERVIDOR",
        LOBBY_JOIN: "UNIRSE AL SERVIDOR",
        SHOP_TITLE: "MERCADO NEGRO",
        SHOP_CLOSE: "CERRAR",
        SHOP_BALANCE: "Saldo: ",
        ITEM_HEALTH: "SALUD",
        ITEM_HEALTH_DESC: "Restaura salud instantáneamente por $50.",
        ITEM_AMMO: "MUNICIÓN",
        ITEM_AMMO_DESC: "Rellena armas al máximo.",
        ITEM_MAXHP: "VITALIDAD",
        ITEM_MAXHP_DESC: "Aumenta la salud máxima 20 pts permanentemente.",
        ITEM_SPEED: "VELOCIDAD",
        ITEM_SPEED_DESC: "Aumenta la velocidad de movimiento 20%.",
        ITEM_JETPACK: "INYECTOR JETPAK",
        ITEM_JETPACK_DESC: "Rellena el combustible al máximo.",
        BTN_CONTINUE: "CONTINUAR",
        SERVERS_TITLE: "SERVIDORES",
        SERVERS_SUB: "MAX 4 JUGADORES POR SALA",
        SERVERS_OR: "O ÚNETE POR CÓDIGO",
        LOBBY_READY: "LISTO",
        TAB_LOBBY: "SALA",
        TAB_SKINS: "SKINS",
        LOBBY_LEAVE: "✕ SALIR",
        DEATH_BANNER: "EL JUGADOR HA MUERTO",
        SKINS_LOCKER: "LOCKER",
        LOAD_TEXT: "CARGANDO ELEMENTOS...",
        UI_ENEMIES: "Enemigos: 0 (Por aparecer: 0)",
        SKIN_LIGHT: "LIGHT YAGAMI",
        SKIN_GOJO: "SATORU GOJO",
        SKIN_GOKU: "SON GOKU",
        SKIN_ISAGI: "YOICHI ISAGI",
        SKIN_BUGS: "BUGS BUNNY",
        SKIN_TUNG: "TUNG TUNG SAHUR",
        SKIN_SAILOR: "SAILOR MOON",
        SKIN_GETO: "SUGURU GETO",
        SKIN_POMNI: "POMNI",
        SKIN_L: "L LAWLIET",
        SKIN_CUPHEAD: "CUPHEAD",
        SKIN_MARIO: "SUPER MARIO",
        SKIN_SONIC: "SONIC",
        SKIN_BEN: "BEN 10",
        SKIN_CORALINE: "CORALINE",
        SKIN_MILES: "MILES MORALES",
        SKIN_KUNIGAMI: "RENSUKE KUNIGAMI",
        SKIN_RICK: "RICK SANCHEZ",
        SKIN_DOOM: "DOOM SLAYER",
        SKIN_MORTY: "MORTY SMITH",
        SKIN_LELOUCH: "LELOUCH LAMPEROUGE",
        SKIN_MUGMAN: "MUGMAN",
        SKIN_AJ: "AJ FROM F13",
        SKIN_DEFAULT: "PREDETERMINADO",
        READY: "LISTO",
        NOT_READY: "NO LISTO",
        SHOP_INTERACT: "[ E ] ENTRAR AL MERCADO NEGRO",
        FUEL_REFILLED: "COMBUSTIBLE RELLENADO",
        AMMO_REFILLED: "MUNICIÓN RELLENADA",
        YOU_HOST: "AHORA ERES EL ANFITRIÓN",
        JOINED: " SE HA UNIDO!",
        BIOME_FOREST: "BOSQUE",
        BIOME_SNOW: "NIEVE",
        BIOME_LAVA: "LAVA",
        BIOME_CASTLE: "CASTILLO",
        FINAL_WAVE_BOSS: "OLEADA FINAL: JEFE",
        BIOME_CHANGE: "CAMBIO DE BIOMA...",
        RESTORING: "RESTAURANDO...",
        LOADING_WAVE: "PREPARANDO OLEADA {wave}... {progress}%",
        CHANGE_MODE: "CAMBIAR MODO >",
        MODE_SURVIVAL: "SUPERVIVENCIA",
        MODE_EVE: "TODOS CONTRA TODOS",
        MODE_PARTY_ON: "FIESTA",
        SELECT_MODE: "SELECCIONAR MODO",
        PARTY_MODE_LABEL: "MODO FIESTA",
        PARTY_MODE_OFF: "MODO FIESTA: APAGADO",
        PARTY_MODE_ON: "MODO FIESTA: ACTIVO",
        WAVES_LABEL: "NÚMERO DE OLEADAS",
        SAVE_MODE: "✓ TODO LISTO",
        GAME_MODE_TITLE: "MODO DE JUEGO"
    },
    FR: {
        MENU_START: "Commencer",
        MENU_OPTIONS: "Options",
        MENU_EXIT: "Quitter",
        WAITING_ROOM: "SALLE D'ATTENTE",
        UI_TOTAL_ENEMIES: "TOTAL ENNEMIS: ",
        UI_FPS: "FPS: ",
        UI_COINS: "PIÈCES: ",
        GO_TITLE: "VOUS ÊTES MORT",
        GO_STATS: "Vagues Survécu: ",
        GO_KILLED_BY: "TUÉ PAR: ",
        GO_RESTART: "Recommencer",
        GO_LEAVE: "✕ QUITTER",
        RELOADING: "RECHARGEMENT...",
        OUT_OF_AMMO: "SANS MUNITION",
        PRESS_E: "APPUYEZ SUR E POUR BOUTIQUE",
        ENEMIES_LEFT: "Ennemis: {alive} (A venir: {spawn})",
        WAVE: "VAGUE {wave}",
        WEAPON: "ARME: ",
        NOT_ENOUGH_COINS: "PIÈCES INSUFFISANTES!",
        EQUIPPED: "ÉQUIPÉ ",
        BOUGHT: "ACHETÉ ",
        UNAVAILABLE: "ARME INDISPONIBLE JUSQU'À VAGUE ",
        VICTORY: "LE MONDE EST SAUVÉ",
        "PISTOL": "PISTOLET",
        "SHOTGUN": "FUSIL À POMPE",
        "ASSAULT RIFLE": "FUSIL D'ASSAUT",
        "DB SHOTGUN": "DOUBLE CANON",
        "MINI GUN": "MINIGUN",
        "LASER GUN": "FUSIL LASER",
        "ROCKET LAUNCHER": "LANCE-ROQUETTES",
        "FIRE GUN": "LANCE-FLAMMES",
        OPT_LANGUAGE: "LANGUE",
        OPT_TITLE: "OPTIONS",
        OPT_SUBTITLE: "NIGHTFALL SURVIVAL — PARAMÈTRES",
        OPT_PC: "ORDINATEUR",
        OPT_MOBILE: "MOBILE",
        OPT_MASTER: "GÉNÉRAL",
        OPT_MUSIC: "MUSIQUE",
        OPT_SFX: "BRUITS",
        OPT_SENS: "SENSIBILITÉ",
        OPT_GFX: "GRAPHIQUES",
        OPT_LOW: "BAS",
        OPT_MED: "MOY",
        OPT_HIGH: "ÉLEVÉ",
        OPT_SHOW_FPS: "AFFICHER FPS",
        OPT_SHOW_HP: "AFFICHER HP",
        BACK_MENU: "RETOUR AU MENU",
        LOBBY_TITLE: "SALLE D'ATTENTE",
        LOBBY_SURVIVOR: "CHOISIS TON SURVIVANT",
        LOBBY_USERNAME: "TON NOM",
        LOBBY_CODE: "CODE SALLE",
        LOBBY_SOLO: "JOUER SEUL",
        LOBBY_HOST: "CRÉER SERVEUR",
        LOBBY_JOIN: "REJOINDRE",
        SHOP_TITLE: "MARCHÉ NOIR",
        SHOP_CLOSE: "FERMER",
        SHOP_BALANCE: "Solde: ",
        ITEM_HEALTH: "SANTÉ",
        ITEM_HEALTH_DESC: "Restaure instantanément la santé pour $50.",
        ITEM_AMMO: "MUNITION",
        ITEM_AMMO_DESC: "Rapporte les armes au maximum.",
        ITEM_MAXHP: "VITALITÉ",
        ITEM_MAXHP_DESC: "Augmente la santé maximale de 20pts.",
        ITEM_SPEED: "VITESSE",
        ITEM_SPEED_DESC: "Augmente la vitesse de mouvement de 20%.",
        ITEM_JETPACK: "INJECTEUR JET",
        ITEM_JETPACK_DESC: "Fait le plein de carburant.",
        BTN_CONTINUE: "CONTINUER",
        SERVERS_TITLE: "SERVEURS",
        SERVERS_SUB: "MAX 4 JOUEURS",
        SERVERS_OR: "OU CODE REJOINDRE",
        LOBBY_READY: "PRÊT",
        TAB_LOBBY: "SALLE",
        TAB_SKINS: "SKINS",
        LOBBY_LEAVE: "✕ QUITTER",
        INTERACT_SHOP: "[ E ] ENTRER SUR LE MARCHÉ NOIR",
        DOWNED_TITLE: "TOMBÉ!",
        DOWNED_SUB: "EN ATTENTE DE RÉANIMATION...",
        REVIVE_PROMPT: "MAINTENIR 'Q' POUR RÉANIMER",
        VICTORY_WORLD: "LE MONDE EST SAUVÉ",
        VICTORY_SUB: "★ NIGHTFALL SURVIVAL TERMINÉ ★",
        VICTORY_DESC: "Vainqueur des 30 vagues — Forêt, Neige et Lave.<br>Le Dragon Pourpre est tombé. L'humanité survit.",
        BTN_RETURN_LOBBY: "RETOUR AU SALON",
        CHANGE_MODE: "CHANGER MODE >",
        MODE_SURVIVAL: "SURVIE",
        MODE_EVE: "TOUS VS TOUS",
        MODE_PARTY_ON: "FÊTE",
        SELECT_MODE: "SÉLECTIONNER MODE",
        PARTY_MODE_LABEL: "MODE FÊTE",
        PARTY_MODE_OFF: "MODE FÊTE: DÉSACTIVÉ",
        PARTY_MODE_ON: "MODE FÊTE: ACTIVÉ",
        WAVES_LABEL: "NOMBRE DE VAGUES",
        SAVE_MODE: "✓ TOUT PRÊT",
        GAME_MODE_TITLE: "MODE DE JEU"
    }
};

// ── ACHIEVEMENTS LOGIC ────────────────────────────────────────────────────────
let achievements: Record<number, boolean> = {};
let localPlayerKills = 0;
let totalCoinsAmassed = 0;
let localPlayerDeaths = 0;
let itemsBought = 0;

function initAchievements() {
    const saved = localStorage.getItem('nightfall_achievements');
    if (saved) {
        achievements = JSON.parse(saved);
        for(let i=1; i<=10; i++) {
            if (achievements[i]) {
                const slot = document.getElementById(`ach-${i}`);
                if (slot) slot.classList.remove('locked');
            }
        }
    }
}

function unlockAchievement(id: number, title: string) {
    if (achievements[id]) return; // Ya desbloqueado
    achievements[id] = true;
    localStorage.setItem('nightfall_achievements', JSON.stringify(achievements));
    
    // UI update
    const slot = document.getElementById(`ach-${id}`);
    if (slot) slot.classList.remove('locked');
    
    // Toast
    const toast = document.getElementById('achievement-toast');
    const toastText = document.getElementById('toast-text');
    const toastImg = document.getElementById('toast-img') as HTMLImageElement;
    
    if (toast && toastText && toastImg) {
        toastText.innerText = title;
        const slotImg = slot?.querySelector('img') as HTMLImageElement;
        if (slotImg) toastImg.src = slotImg.src;
        
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4500);
    }
}

function resetGameToLobby() {
    // 1. Ocultar HUDs
    const hud = document.getElementById('hud-container');
    const win = document.getElementById('victory-screen');
    const go = document.getElementById('game-over-screen');
    if(hud) hud.style.display = 'none';
    if(win) win.style.display = 'none';
    if(go) go.style.display = 'none';
    
    // 2. Mostrar Lobby UI
    document.getElementById('lobby-screen')!.style.display = 'flex';
    document.getElementById('menu-background')!.style.display = 'block';

    // 3. Resetear Entidades 3D y Memoria
    gameStarted = false;
    for (const enId in enemies) {
        if (enemies[enId] && enemies[enId].mesh && enemies[enId].mesh.parent) {
            scene.remove(enemies[enId].mesh);
        }
    }
    enemies = {};
    if (waveManager) waveManager.reset();
    activeBullets.forEach(b => { if(b.mesh && b.mesh.parent) scene.remove(b.mesh); });
    activeBullets = [];

    // Detener la musiquilla de batalla
    if (typeof startGameMusic !== 'undefined' && (window as any).bgmSource) {
        (window as any).bgmSource.stop();
        (window as any).bgmSource.disconnect();
        (window as any).bgmSource = null;
    }
    soundManager.startMenuMusic(); // Start lobby music de nuevo
    
    // 4. Forzar que el loop renderice el lobby
    inLobby3D = true;
    setup3DLobby();
    rearrangeLobbySlots();
    
    // 5. Resetear Stats Temporales del Jugador
    for(const pid in players) {
        players[pid].hp = 100;
        players[pid].isDead = false;
    }
    localPlayerKills = 0;
    localPlayerDeaths = 0;
    itemsBought = 0;
}


function t(key: string, params?: Record<string, any>): string {
    let str = TRANSLATIONS[currentLanguage][key] || key;
    if (params) {
        for (const p in params) {
            str = str.replace(`{${p}}`, params[p]);
        }
    }
    return str;
}

function applyTranslations() {
    const els = document.querySelectorAll('[data-i18n]');
    const dict = TRANSLATIONS[currentLanguage];
    
    els.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && dict[key]) {
            // Using innerHTML for descriptions that might have <br> or 🏆 or skin names
            if (key === 'VICTORY_DESC' || key === 'VICTORY_SUB' || key.startsWith('SKIN_')) {
                el.innerHTML = dict[key];
            } else {
                (el as HTMLElement).innerText = dict[key];
            }
        }
    });

    // Inputs placeholders
    const uiInput = document.getElementById('username-input') as HTMLInputElement;
    if (uiInput) uiInput.placeholder = dict.LOBBY_USERNAME + '...';
    const rcInput = document.getElementById('room-code-input') as HTMLInputElement;
    if (rcInput) rcInput.placeholder = dict.LOBBY_CODE;

    // Advanced nested replacements (Shop + Titles)
    const setQueryText = (selector: string, key: string) => {
        const els = document.querySelectorAll(selector);
        els.forEach(el => { (el as HTMLElement).innerText = dict[key] || ''; });
    };

    setQueryText('#buy-health .card-name, #mb-buy-health .card-name', 'ITEM_HEALTH');
    setQueryText('#buy-health .card-desc, #mb-buy-health .card-desc', 'ITEM_HEALTH_DESC');
    setQueryText('#buy-ammo .card-name, #mb-buy-ammo .card-name', 'ITEM_AMMO');
    setQueryText('#buy-ammo .card-desc, #mb-buy-ammo .card-desc', 'ITEM_AMMO_DESC');
    setQueryText('#buy-maxhp .card-name, #mb-buy-maxhp .card-name', 'ITEM_MAXHP');
    setQueryText('#buy-maxhp .card-desc, #mb-buy-maxhp .card-desc', 'ITEM_MAXHP_DESC');
    setQueryText('#buy-speed .card-name, #mb-buy-speed .card-name', 'ITEM_SPEED');
    setQueryText('#buy-speed .card-desc, #mb-buy-speed .card-desc', 'ITEM_SPEED_DESC');
    setQueryText('#buy-jetpack .card-name, #mb-buy-jetpack .card-name', 'ITEM_JETPACK');
    setQueryText('#buy-jetpack .card-desc, #mb-buy-jetpack .card-desc', 'ITEM_JETPACK_DESC');
    
    // Shop Headers & Close Buttons
    const shopH2s = document.querySelectorAll('#shop-menu h2, #shop-menu-mobile h2');
    shopH2s.forEach(el => el.innerHTML = `🛑 ${dict.SHOP_TITLE}`);
    const shopCloses = document.querySelectorAll('#shop-close, #shop-close-mobile');
    shopCloses.forEach(el => (el as HTMLElement).innerText = dict.SHOP_CLOSE);

    // Update balances manually
    const b1 = document.getElementById('shop-balance');
    if (b1) b1.childNodes[0].nodeValue = dict.SHOP_BALANCE + '$';
    const b2 = document.getElementById('shop-balance-mobile');
    if (b2) b2.childNodes[0].nodeValue = dict.SHOP_BALANCE;
}

let lobbyLocalGroup: THREE.Group | null = null;
let inLobby3D = false;
let inSkinsTab = false;

// Map of other players in our room: socketId → { group, label }
const remotePlayers: Map<string, { group: THREE.Group; label: THREE.Sprite }> = new Map();

function createRemotePlayerModel(skinId: string = 'default'): THREE.Group {
    const group = new THREE.Group();
    const model = new THREE.Group();
    
    // Default colors
    let skinHex = 0x4fc3f7;
    let clothHex = 0x1565c0;
    let darkHex = 0x0d47a1;

    let pantsHex = 0x1565c0; // Default pants color
    // Apply Light Yagami colors
    if (skinId === 'light_yagami') {
        skinHex = 0xffe0bd; // Pale skin
        clothHex = 0xc1a986; // Beige suit
        darkHex = 0x4a2c11; // Brown hair/suit details
        pantsHex = 0x333333; // Dark grey pants
    } else if (skinId === 'gojo') {
        skinHex = 0xffe0bd; // Pale skin
        clothHex = 0x111116; // Black uniform
        darkHex = 0xededed; // White hair
        pantsHex = 0x111116; // Black pants
    } else if (skinId === 'goku') {
        skinHex = 0xffe0bd; // Pale skin
        clothHex = 0xff6600; // Orange Gi
        darkHex = 0x111116; // Black hair
        pantsHex = 0xff6600; // Orange pants
    } else if (skinId === 'isagi') {
        skinHex = 0xffe0bd;
        clothHex = 0x0000aa; // Blue Blue Lock jersey
        darkHex = 0x001144; // Dark blue hair
        pantsHex = 0x0000aa; // Blue shorts
    } else if (skinId === 'bugs_bunny') {
        skinHex = 0xaaaaaa; // Grey fur
        clothHex = 0xaaaaaa; // Grey fur torso
        darkHex = 0xffffff; // White accents (feet)
        pantsHex = 0xaaaaaa; // Grey fur legs
    } else if (skinId === 'tung_tung') {
        skinHex = 0x8b4513; // Tan skin / Wood
        clothHex = 0x8b4513; // White Baju Koko -> Wood
        darkHex = 0x8b4513; // Black peci -> Wood
        pantsHex = 0x8b4513; // Dark Sarong base -> Wood
    } else if (skinId === 'sailor_moon') {
        skinHex = 0xffe0bd; // Pale skin
        clothHex = 0xffffff; // White uniform top
        darkHex = 0xffcc00; // Blonde hair
        pantsHex = 0x0000aa; // Blue skirt
    } else if (skinId === 'geto') {
        skinHex = 0xffe0bd; // Pale skin
        clothHex = 0x1a1a1f; // Black robe upper
        darkHex = 0x111111; // Black hair
        pantsHex = 0x1a1a1f; // Black robe lower
    } else if (skinId === 'pomni') {
        skinHex = 0xffffff; // White pale face
        clothHex = 0xdd0000; // Left side red (will mix)
        darkHex = 0x0000dd; // Right side blue
        pantsHex = 0xdd0000; // Red/blue legs
    } else if (skinId === 'lawliet') {
        skinHex = 0xffe0bd;
        clothHex = 0xffffff; // White shirt
        darkHex = 0x0a0a0a; // Black messy hair
        pantsHex = 0x4a6a8a; // Blue jeans
    } else if (skinId === 'cuphead') {
        skinHex = 0xffffff; // Cup goes pale white
        clothHex = 0x111111; // Black body
        darkHex = 0xffffff; // White gloves
        pantsHex = 0xdd0000; // Red pants
    } else if (skinId === 'mario') {
        skinHex = 0xffdab9; // Peach skin
        clothHex = 0xdd0000; // Red shirt
        darkHex = 0xdd0000; // Red hat
        pantsHex = 0x0000dd; // Blue overalls
    } else if (skinId === 'sonic') {
        skinHex = 0x0000ff; // Blue head and arms
        clothHex = 0x0000ff; // Blue body
        darkHex = 0x0000ff; // Blue spikes
        pantsHex = 0x0000ff;
    } else if (skinId === 'ben10') {
        skinHex = 0xffe0bd;
        clothHex = 0xffffff; // White shirt
        darkHex = 0x3d2314; // Brown hair
        pantsHex = 0x333333; // Dark pants
    } else if (skinId === 'coraline') {
        skinHex = 0xffe0bd;
        clothHex = 0xffcc00; // Yellow raincoat
        darkHex = 0x0000aa; // Blue hair
        pantsHex = 0x333333;
    } else if (skinId === 'miles') {
        skinHex = 0x5c3a21; // Dark brown skin
        clothHex = 0x111111;
        darkHex = 0x111111; // Black hair
        pantsHex = 0x111111;
    } else if (skinId === 'kunigami') {
        skinHex = 0xffe0bd;
        clothHex = 0x1a36b8; // Medium blue jersey
        darkHex = 0xff6600; // TRUE Orange hair!
        pantsHex = 0x1a36b8; // Medium blue pants
    } else if (skinId === 'rick') {
        skinHex = 0xf1e4cf;
        clothHex = 0xffffff; // White coat
        darkHex = 0xadd8e6; // Cyan hair
        pantsHex = 0x8b4513; // Brown pants
    } else if (skinId === 'doom') {
        skinHex = 0x2b3d2b; // Helmet skin
        clothHex = 0x3d523d; // Armor
        darkHex = 0x2b3d2b;
        pantsHex = 0x2b3d2b;
    } else if (skinId === 'morty') {
        skinHex = 0xffcc99; // Pale Skin
        clothHex = 0xffff00; // Yellow shirt
        darkHex = 0x5c3a21; // Brown hair
        pantsHex = 0x0055aa; // Blue jeans
    } else if (skinId === 'lelouch') {
        skinHex = 0xffe0bd;
        clothHex = 0x20155e; // Dark blue uniform
        darkHex = 0x221144; // Dark messy hair
        pantsHex = 0x20155e; // Dark blue pants
    } else if (skinId === 'mugman') {
        skinHex = 0xffffff; // White body/cup
        clothHex = 0x111111; // Black body like cuphead
        darkHex = 0xffffff; // White gloves
        pantsHex = 0x0000dd; // Blue shorts
    } else if (skinId === 'aj') {
        skinHex = 0x4caf50; // Green Alien Skin
        clothHex = 0x4caf50; // Green Body
        darkHex = 0x4caf50; // Green
        pantsHex = 0x4caf50; // Green legs
    }

    const skinMat = new THREE.MeshStandardMaterial({ color: skinHex, flatShading: true });
    const clothMat = new THREE.MeshStandardMaterial({ color: clothHex, flatShading: true });
    const darkMat = new THREE.MeshStandardMaterial({ color: darkHex, flatShading: true });
    const pantsMat = new THREE.MeshStandardMaterial({ color: pantsHex, flatShading: true });
    
    const shoeGeo = new THREE.BoxGeometry(0.22, 0.15, 0.35);
    const lShoe = new THREE.Mesh(shoeGeo, darkMat); lShoe.position.set(-0.2, 0.075, 0.06);
    const rShoe = new THREE.Mesh(shoeGeo, darkMat); rShoe.position.set(0.2, 0.075, 0.06);
    const legGeo = new THREE.BoxGeometry(0.24, 0.6, 0.3);
    const lLeg = new THREE.Mesh(legGeo, pantsMat); lLeg.position.set(-0.2, 0.45, 0);
    const rLeg = new THREE.Mesh(legGeo, pantsMat); rLeg.position.set(0.2, 0.45, 0);
    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.7, 0.38), clothMat);
    torso.position.set(0, 1.1, 0);
    const armGeo = new THREE.BoxGeometry(0.2, 0.5, 0.2);
    const lArm = new THREE.Mesh(armGeo, skinMat); lArm.position.set(-0.46, 1.1, 0.2); lArm.rotation.x = -Math.PI / 3;
    const rArm = new THREE.Mesh(armGeo, skinMat); rArm.position.set(0.46, 1.1, 0.2); rArm.rotation.x = -Math.PI / 3;
    
    // Draw hair block on head if Light Yagami
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.48, 0.48), skinMat); head.position.y = 1.65;
    if (skinId === 'light_yagami') {
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.15, 0.52), darkMat);
        hair.position.y = 0.22;
        head.add(hair);
        
        // Add white shirt under the jacket
        const shirt = new THREE.Mesh(new THREE.PlaneGeometry(0.25, 0.7), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        shirt.position.set(0, 0, 0.191);
        torso.add(shirt);
        
        // Add red tie
        const tie = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.5), new THREE.MeshBasicMaterial({ color: 0xaa0000 }));
        tie.position.set(0, 0.05, 0.192);
        torso.add(tie);
    } else if (skinId === 'gojo') {
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.25, 0.55), darkMat);
        hair.position.y = 0.24;
        // White hair spikes (smaller and centered)
        const s1 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.25, 4), darkMat); s1.position.set(-0.1, 0.4, 0.05);
        const s2 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 4), darkMat); s2.position.set(0.1, 0.38, -0.05);
        const s3 = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.3, 4), darkMat); s3.position.set(0, 0.45, 0);
        head.add(hair, s1, s2, s3);
        // Blindfold
        const blindfold = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.15, 0.5), new THREE.MeshBasicMaterial({ color: 0x000000 }));
        blindfold.position.set(0, 0.05, 0);
        head.add(blindfold);
    } else if (skinId === 'goku') {
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.35, 0.55), darkMat);
        hair.position.y = 0.28;
        const s1 = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 4), darkMat); s1.position.set(-0.25, 0.5, 0); s1.rotation.z = Math.PI/6; s1.rotation.x = Math.PI/4;
        const s2 = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.5, 4), darkMat); s2.position.set(0, 0.6, 0);
        const s3 = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 4), darkMat); s3.position.set(0.25, 0.5, -0.1); s3.rotation.z = -Math.PI/6;
        const s4 = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 4), darkMat); s4.position.set(-0.2, 0.4, -0.2); s4.rotation.x = -Math.PI/4;
        const s5 = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 4), darkMat); s5.position.set(0.2, 0.4, 0.2); s5.rotation.x = Math.PI/4;
        head.add(hair, s1, s2, s3, s4, s5);

        // Blue undershirt
        const shirt = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.6), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
        shirt.position.set(0, 0, 0.191);
        torso.add(shirt);
        // Blue belt
        const belt = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.15, 0.4), new THREE.MeshBasicMaterial({ color: 0x0000aa }));
        belt.position.set(0, -0.3, 0);
        torso.add(belt);
        // Blue wristbands
        const wristGeo = new THREE.BoxGeometry(0.22, 0.15, 0.22);
        const wristMat = new THREE.MeshBasicMaterial({ color: 0x0000aa });
        const lWrist = new THREE.Mesh(wristGeo, wristMat); lWrist.position.set(0, -0.2, 0);
        const rWrist = new THREE.Mesh(wristGeo, wristMat); rWrist.position.set(0, -0.2, 0);
        lArm.add(lWrist); rArm.add(rWrist);
        // Blue boots
        const bootsMat = new THREE.MeshStandardMaterial({ color: 0x0000aa });
        lShoe.material = bootsMat; rShoe.material = bootsMat;
    } else if (skinId === 'isagi') {
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.25, 0.55), darkMat);
        hair.position.y = 0.24;
        head.add(hair);
        // Jersey stripes (black V-neck or sides)
        const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.6), new THREE.MeshBasicMaterial({ color: 0x111111 }));
        stripe.position.set(0, 0, 0.191);
        torso.add(stripe);
    } else if (skinId === 'bugs_bunny') {
        // Bunny ears
        const earPMat = new THREE.MeshBasicMaterial({ color: 0xffcccc }); // Pink inside
        const earGeo = new THREE.BoxGeometry(0.15, 0.6, 0.1);
        const lEar = new THREE.Mesh(earGeo, skinMat); lEar.position.set(-0.15, 0.5, 0);
        const rEar = new THREE.Mesh(earGeo, skinMat); rEar.position.set(0.15, 0.5, 0);
        const innerGeo = new THREE.PlaneGeometry(0.08, 0.5);
        const lInner = new THREE.Mesh(innerGeo, earPMat); lInner.position.set(0, 0, 0.051); lEar.add(lInner);
        const rInner = new THREE.Mesh(innerGeo, earPMat); rInner.position.set(0, 0, 0.051); rEar.add(rInner);
        head.add(lEar, rEar);

        // White belly
        const belly = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.5), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        belly.position.set(0, -0.05, 0.191);
        torso.add(belly);
        // Muzzle
        const muzzle = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.2), new THREE.MeshBasicMaterial({ color: 0xffffff }));
        muzzle.position.set(0, -0.1, 0.241);
        head.add(muzzle);
    } else if (skinId === 'tung_tung') {
        // Kentongan (Wooden drum in hand)
        const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 8), new THREE.MeshStandardMaterial({ color: 0x5a2d0c }));
        drum.rotation.x = Math.PI / 2;
        drum.position.set(0, -0.2, 0.2);
        lArm.add(drum);
        // Wooden nose
        const nose = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.15), skinMat);
        nose.position.set(0, 0, 0.25);
        head.add(nose);
    } else if (skinId === 'sailor_moon') {
        // Skullcap hair base to avoid bald head
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.25, 0.55), darkMat);
        hair.position.y = 0.24;
        head.add(hair);

        // Odango (buns)
        const bunGeo = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        const lBun = new THREE.Mesh(bunGeo, darkMat); lBun.position.set(-0.25, 0.25, 0);
        const rBun = new THREE.Mesh(bunGeo, darkMat); rBun.position.set(0.25, 0.25, 0);
        
        // Pigtails (Cylinders for better hair look)
        const pigtailGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8);
        const lTail = new THREE.Mesh(pigtailGeo, darkMat); lTail.position.set(-0.3, -0.1, -0.05); lTail.rotation.z = Math.PI/10;
        const rTail = new THREE.Mesh(pigtailGeo, darkMat); rTail.position.set(0.3, -0.1, -0.05); rTail.rotation.z = -Math.PI/10;
        head.add(lBun, rBun, lTail, rTail);

        // Red bow
        const bow = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.15, 0.05), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        bow.position.set(0, 0.15, 0.2);
        torso.add(bow);

        // Sailor collar (blue flap over shoulders)
        const collar = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.1, 0.4), new THREE.MeshBasicMaterial({ color: 0x0000aa }));
        collar.position.set(0, 0.35, 0);
        torso.add(collar);
        
        // Red boots
        const bootMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        lShoe.material = bootMat;
        rShoe.material = bootMat;
    } else if (skinId === 'geto') {
        // Long hair hanging back
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.25, 0.55), darkMat);
        hair.position.y = 0.24;
        const hairBack = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.4, 0.15), darkMat);
        hairBack.position.set(0, 0, -0.2);
        head.add(hair, hairBack);
        // Half bun
        const bun = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.15, 0.15), darkMat);
        bun.position.set(0, 0.4, -0.15);
        head.add(bun);
    } else if (skinId === 'pomni') {
        const hairDMat = new THREE.MeshStandardMaterial({ color: 0x3d2314 }); // Brown hair
        // Hair strands on the sides (Anchored closer to head)
        const hairStrandGeo = new THREE.BoxGeometry(0.04, 0.2, 0.1);
        const hL = new THREE.Mesh(hairStrandGeo, hairDMat); hL.position.set(-0.25, 0, 0.22); hL.rotation.z = 0.1;
        const hR = new THREE.Mesh(hairStrandGeo, hairDMat); hR.position.set(0.25, 0, 0.22); hR.rotation.z = -0.1;
        const hB = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.05), hairDMat); hB.position.set(0, 0.1, -0.25);
        head.add(hL, hR, hB);

        // Jester hat
        const redMat = new THREE.MeshStandardMaterial({ color: 0xdd0000 });
        const blueMat = new THREE.MeshStandardMaterial({ color: 0x0000dd });
        const yellowMat = new THREE.MeshStandardMaterial({ color: 0xffcc00 });

        const hatBase = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.15, 0.52), redMat);
        hatBase.position.y = 0.28;
        const hatBaseBlue = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.15, 0.52), blueMat);
        hatBaseBlue.position.set(0.13, 0, 0);
        hatBase.add(hatBaseBlue); // Split hat rim colors
        head.add(hatBase);
        
        const lSpike = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 4), blueMat);
        lSpike.position.set(-0.35, 0.4, 0); lSpike.rotation.z = Math.PI/4;
        const rSpike = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.4, 4), redMat);
        rSpike.position.set(0.35, 0.4, 0); rSpike.rotation.z = -Math.PI/4;
        const lBobble = new THREE.Mesh(new THREE.SphereGeometry(0.1), yellowMat); lBobble.position.set(0, 0.3, 0); lSpike.add(lBobble);
        const rBobble = new THREE.Mesh(new THREE.SphereGeometry(0.1), yellowMat); rBobble.position.set(0, 0.3, 0); rSpike.add(rBobble);
        head.add(lSpike, rSpike);

        // Splitting body colors manually
        lArm.material = redMat; rArm.material = blueMat;
        lLeg.material = blueMat; rLeg.material = redMat;
        const torsoBlue = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.71, 0.39), blueMat);
        torsoBlue.position.set(0.18, 0, 0);
        torso.add(torsoBlue);

        // Torso Bobbles (buttons)
        const b1 = new THREE.Mesh(new THREE.SphereGeometry(0.06), yellowMat); b1.position.set(0, 0.15, 0.2);
        const b2 = new THREE.Mesh(new THREE.SphereGeometry(0.06), yellowMat); b2.position.set(0, -0.15, 0.2);
        torso.add(b1, b2);
    } else if (skinId === 'lawliet') {
        // Messy hair
        const hairGeo = new THREE.BoxGeometry(0.55, 0.3, 0.55);
        const hair = new THREE.Mesh(hairGeo, darkMat);
        hair.position.y = 0.25;
        head.add(hair);
        // Hair spikes (triangles like Goku but small)
        const s1 = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.25, 4), darkMat); s1.position.set(-0.2, 0.4, 0.1); s1.rotation.z = 0.2;
        const s2 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 4), darkMat); s2.position.set(0.15, 0.4, -0.15); s2.rotation.z = -0.3;
        const s3 = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.3, 4), darkMat); s3.position.set(0, 0.42, 0.15);
        const s4 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.2, 4), darkMat); s4.position.set(-0.1, 0.35, -0.2); s4.rotation.x = -0.4;
        head.add(s1, s2, s3, s4);
        // Barefoot
        lShoe.material = skinMat;
        rShoe.material = skinMat;
    } else if (skinId === 'cuphead') {
        // Red and White Striped Straw
        const whiteMat = new THREE.MeshStandardMaterial({color: 0xffffff});
        const redMat = new THREE.MeshStandardMaterial({color: 0xff0000});
        
        const strawBase = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2), whiteMat);
        strawBase.position.set(0.15, 0.35, 0);
        strawBase.rotation.z = -Math.PI/8;
        const strawTop1 = new THREE.Mesh(new THREE.CylinderGeometry(0.041, 0.041, 0.05), redMat); strawTop1.position.y = 0.05;
        const strawTop2 = new THREE.Mesh(new THREE.CylinderGeometry(0.041, 0.041, 0.05), redMat); strawTop2.position.y = -0.05;
        strawBase.add(strawTop1, strawTop2);
        
        const strawBend = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.1), whiteMat);
        strawBend.position.set(0, 0.12, 0);
        strawBend.rotation.z = Math.PI/4;
        strawBase.add(strawBend);
        head.add(strawBase);

        // Handle on the back
        const handle = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.04, 8, 16), skinMat); // Torus on back of head
        handle.position.set(0, 0, -0.25);
        // handle isn't complete handle but a full ring stuck to back
        head.add(handle);

        // Normal hands (removed the giant blocks)
        // Big brown/red shoes
        const bigShoeMat = new THREE.MeshStandardMaterial({ color: 0x5c3a21 });
        lShoe.material = bigShoeMat;
        rShoe.material = bigShoeMat;
        // Red nose
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.06), new THREE.MeshBasicMaterial({color: 0xff0000}));
        nose.position.set(0, 0, 0.26);
        head.add(nose);
    } else if (skinId === 'mario') {
        // Red hat
        const hat = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.15, 0.52), clothMat);
        hat.position.y = 0.28;
        const brim = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.2), clothMat);
        brim.position.set(0, 0.2, 0.3);
        // M emblem on brim - CanvasTexture for real letter M
        const mCanvas = document.createElement('canvas');
        mCanvas.width = 64; mCanvas.height = 64;
        const mCtx = mCanvas.getContext('2d')!;
        mCtx.fillStyle = '#ffffff'; mCtx.fillRect(0, 0, 64, 64);
        mCtx.fillStyle = '#ff0000';
        mCtx.font = 'bold 56px Impact, Arial';
        mCtx.textAlign = 'center'; mCtx.textBaseline = 'middle';
        mCtx.fillText('M', 32, 34);
        const mTex = new THREE.CanvasTexture(mCanvas);
        const mBadge = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.16), new THREE.MeshBasicMaterial({map: mTex}));
        mBadge.position.set(0, 0.24, 0.41);
        head.add(mBadge);
        // Mustache (Brown) & Nose
        const brownMat = new THREE.MeshStandardMaterial({ color: 0x3d2314 });
        const mustache = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.05, 0.06), brownMat);
        mustache.position.set(0, -0.05, 0.25);
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.08), skinMat);
        nose.position.set(0, 0, 0.27);
        head.add(hat, brim, mustache, nose);
        // Overalls
        const overalls = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.5), pantsMat);
        overalls.position.set(0, 0, 0.191);
        torso.add(overalls);
        // Strap buttons
        const btnGeo = new THREE.SphereGeometry(0.04);
        const btnMat = new THREE.MeshStandardMaterial({ color: 0xffcc00 }); // Yellow buttons
        const b1 = new THREE.Mesh(btnGeo, btnMat); b1.position.set(-0.15, 0.15, 0.2);
        const b2 = new THREE.Mesh(btnGeo, btnMat); b2.position.set(0.15, 0.15, 0.2);
        torso.add(b1, b2);
        // White gloves
        lArm.material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        rArm.material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        // Brown shoes
        lShoe.material = brownMat;
        rShoe.material = brownMat;
    } else if (skinId === 'sonic') {
        const gloveMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        lArm.material = gloveMat;
        rArm.material = gloveMat;
        // Blue spikes (Prominent Sonic back quills - smaller and closer)
        const spikeGeo = new THREE.ConeGeometry(0.18, 0.25, 4);
        const sTop = new THREE.Mesh(spikeGeo, darkMat); sTop.rotation.x = -Math.PI / 1.5; sTop.position.set(0, 0.15, -0.2);
        const sMid = new THREE.Mesh(spikeGeo, darkMat); sMid.rotation.x = -Math.PI / 1.8; sMid.position.set(0, 0, -0.25);
        const sBot = new THREE.Mesh(spikeGeo, darkMat); sBot.rotation.x = -Math.PI / 2.2; sBot.position.set(0, -0.15, -0.2);
        // Side spikes to widen hair
        const sSideL = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.25, 4), darkMat); sSideL.rotation.x = -Math.PI / 1.8; sSideL.rotation.y = 0.5; sSideL.position.set(-0.2, 0.05, -0.15);
        const sSideR = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.25, 4), darkMat); sSideR.rotation.x = -Math.PI / 1.8; sSideR.rotation.y = -0.5; sSideR.position.set(0.2, 0.05, -0.15);
        head.add(sTop, sMid, sBot, sSideL, sSideR);
        // Muzzle and Belly
        const peachMat = new THREE.MeshStandardMaterial({color: 0xffdab9});
        const muzzle = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.15, 0.1), peachMat);
        muzzle.position.set(0, -0.05, 0.25);
        const belly = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.35), peachMat);
        belly.position.set(0, 0, 0.26);
        torso.add(belly);
        // Nose & Ears (Moved out and forward slightly)
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.04), new THREE.MeshBasicMaterial({color: 0x000000}));
        nose.position.set(0, 0, 0.08); // Right on tip of muzzle
        muzzle.add(nose);
        const earMat = new THREE.MeshStandardMaterial({color: 0x0000ff});
        const earGeo = new THREE.ConeGeometry(0.12, 0.2, 4);
        const lEar = new THREE.Mesh(earGeo, earMat); lEar.position.set(-0.25, 0.2, 0.05); lEar.rotation.z = Math.PI/3; lEar.rotation.x = Math.PI/8;
        const rEar = new THREE.Mesh(earGeo, earMat); rEar.position.set(0.25, 0.2, 0.05); rEar.rotation.z = -Math.PI/3; rEar.rotation.x = Math.PI/8;
        head.add(muzzle, lEar, rEar);
        // Red shoes with white stripe
        const rShoesMat = new THREE.MeshStandardMaterial({ color: 0xdd0000 });
        lShoe.material = rShoesMat;
        rShoe.material = rShoesMat;
        const stripeGeo = new THREE.BoxGeometry(0.24, 0.05, 0.1);
        const stripeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const lStripe = new THREE.Mesh(stripeGeo, stripeMat); lStripe.position.set(0, 0.05, 0.1); lShoe.add(lStripe);
        const rStripe = new THREE.Mesh(stripeGeo, stripeMat); rStripe.position.set(0, 0.05, 0.1); rShoe.add(rStripe);
    } else if (skinId === 'ben10') {
        // 10 shirt logo (black stripe)
        const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 0.7), new THREE.MeshBasicMaterial({ color: 0x111111 }));
        stripe.position.set(0, 0, 0.191);
        torso.add(stripe);
        // Messy hair
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.25, 0.55), darkMat);
        hair.position.y = 0.24;
        head.add(hair);
        // Omnitrix (detailed)
        const watchBand = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.1, 0.18), new THREE.MeshStandardMaterial({ color: 0x111111 }));
        watchBand.position.set(0, -0.3, 0);
        const watchDial = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.05, 8), new THREE.MeshStandardMaterial({ color: 0x666666 }));
        watchDial.rotation.x = Math.PI/2;
        watchDial.position.set(0, 0, 0.1); 
        const watchFace = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 0.08), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
        watchFace.position.set(0, 0, 0.026);
        watchDial.add(watchFace);
        watchBand.add(watchDial);
        rArm.add(watchBand); // Put on right arm instead of left
        // Shoe details (white stripes)
        const shoeStripeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const lst = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.04, 0.26), shoeStripeMat); lst.position.y = 0.05; lShoe.add(lst);
        const rst = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.04, 0.26), shoeStripeMat); rst.position.y = 0.05; rShoe.add(rst);
    } else if (skinId === 'coraline') {
        const raincoatMat = new THREE.MeshStandardMaterial({ color: 0xffcc00 });
        lArm.material = raincoatMat;
        rArm.material = raincoatMat;
        // Coat Buttons
        const cBtnMat = new THREE.MeshStandardMaterial({color: 0xaa8800});
        const c1 = new THREE.Mesh(new THREE.SphereGeometry(0.04), cBtnMat); c1.position.set(0, 0.15, 0.2);
        const c2 = new THREE.Mesh(new THREE.SphereGeometry(0.04), cBtnMat); c2.position.set(0, 0, 0.2);
        const c3 = new THREE.Mesh(new THREE.SphereGeometry(0.04), cBtnMat); c3.position.set(0, -0.15, 0.2);
        torso.add(c1, c2, c3);
        // Improved Blue bob cut hair
        const topHair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.15, 0.55), darkMat);
        topHair.position.y = 0.32;
        const leftHair = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.4, 0.55), darkMat);
        leftHair.position.set(-0.25, 0.05, 0);
        const rightHair = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.4, 0.55), darkMat);
        rightHair.position.set(0.25, 0.05, 0);
        const backHair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.4, 0.15), darkMat);
        backHair.position.set(0, 0.05, -0.25);

        // Dragonfly Hair Clip
        const clip = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.04), new THREE.MeshBasicMaterial({color: 0xffaaaa}));
        clip.position.set(0.26, 0.15, 0.20);
        clip.rotation.z = Math.PI/4;
        head.add(topHair, leftHair, rightHair, backHair, clip);
        // Boots (Dark blue)
        const bootMat = new THREE.MeshStandardMaterial({color: 0x0000aa});
        lShoe.material = bootMat;
        rShoe.material = bootMat;
    } else if (skinId === 'miles') {
        // Afro fade hair
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.15, 0.52), darkMat);
        hair.position.y = 0.28;
        head.add(hair);

        // Improved Red spider on chest
        const spiderBody = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.18), new THREE.MeshBasicMaterial({ color: 0xdd0000 }));
        spiderBody.position.set(0, 0, 0.191);
        torso.add(spiderBody);
        
        // Spider legs (thin red lines crossing)
        const leg1 = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.02), new THREE.MeshBasicMaterial({ color: 0xdd0000 }));
        leg1.position.set(0, 0.04, 0.192); leg1.rotation.z = Math.PI/6;
        const leg2 = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.02), new THREE.MeshBasicMaterial({ color: 0xdd0000 }));
        leg2.position.set(0, 0.04, 0.192); leg2.rotation.z = -Math.PI/6;
        const leg3 = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.02), new THREE.MeshBasicMaterial({ color: 0xdd0000 }));
        leg3.position.set(0, -0.04, 0.192); leg3.rotation.z = -Math.PI/6;
        const leg4 = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.02), new THREE.MeshBasicMaterial({ color: 0xdd0000 }));
        leg4.position.set(0, -0.04, 0.192); leg4.rotation.z = Math.PI/6;
        torso.add(leg1, leg2, leg3, leg4);

        // Suit red v-stripes on shoulders
        const stripeL = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 0.7), new THREE.MeshBasicMaterial({ color: 0xdd0000 }));
        stripeL.position.set(-0.25, 0, 0.191); stripeL.rotation.z = 0.2;
        const stripeR = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 0.7), new THREE.MeshBasicMaterial({ color: 0xdd0000 }));
        stripeR.position.set(0.25, 0, 0.191); stripeR.rotation.z = -0.2;
        torso.add(stripeL, stripeR);

        // Red hands (gloves)
        const redMat = new THREE.MeshStandardMaterial({ color: 0xdd0000 });
        lArm.material = redMat;
        rArm.material = redMat;

        // Red shoes/soles
        lShoe.material = redMat;
        rShoe.material = redMat;
    } else if (skinId === 'kunigami') {
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.28, 0.52), darkMat);
        hair.position.y = 0.28;
        head.add(hair);
        // Messy orange spikes around top
        const orangeMat = new THREE.MeshStandardMaterial({ color: 0xff6600 });
        const tr1 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.22, 4), orangeMat); tr1.position.set(-0.15, 0.45, -0.1); tr1.rotation.set(0.2, 0.5, 0.3);
        const tr2 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.25, 4), orangeMat); tr2.position.set(0.1, 0.48, -0.15); tr2.rotation.set(-0.1, -0.3, -0.2);
        const tr3 = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.2, 4), orangeMat); tr3.position.set(0, 0.43, 0.15); tr3.rotation.set(0.3, 0.1, -0.1);
        const tr4 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.26, 4), orangeMat); tr4.position.set(-0.1, 0.46, 0.05); tr4.rotation.set(-0.2, -0.4, 0.25);
        const tr5 = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.23, 4), orangeMat); tr5.position.set(0.15, 0.44, 0.05); tr5.rotation.set(0.15, 0.6, -0.3);
        const tr6 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.28, 4), orangeMat); tr6.position.set(0, 0.49, -0.05); tr6.rotation.set(-0.05, 0.2, 0.05);
        head.add(tr1, tr2, tr3, tr4, tr5, tr6);
        // Jersey stripe
        const stripe = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.6), new THREE.MeshBasicMaterial({ color: 0x111111 }));
        stripe.position.set(0, 0, 0.191);
        torso.add(stripe);
        // Black shoes
        const blackShoes = new THREE.MeshStandardMaterial({ color: 0x111111 });
        lShoe.material = blackShoes;
        rShoe.material = blackShoes;
    } else if (skinId === 'rick') {
        // Lab coat over light blue shirt
        const shirt = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.6), new THREE.MeshBasicMaterial({ color: 0xadd8e6 }));
        shirt.position.set(0, 0, 0.191);
        torso.add(shirt);
        // Hair base
        const hairBase = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.2, 0.55), darkMat);
        hairBase.position.y = 0.24;
        head.add(hairBase);
        // Halo of spikes
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const sx = Math.cos(angle) * 0.22;
            const sz = Math.sin(angle) * 0.22;
            const spike = new THREE.Mesh(new THREE.ConeGeometry(0.08, 0.35, 4), darkMat);
            spike.position.set(sx, 0.35, sz);
            spike.rotation.x = sz * 1.5;
            spike.rotation.z = -sx * 1.5;
            head.add(spike);
        }
        // Unibrow
        const unibrow = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.04), new THREE.MeshBasicMaterial({color: 0xadd8e6}));
        unibrow.position.set(0, 0.12, 0.245);
        head.add(unibrow);
    } else if (skinId === 'doom') {
        // Advanced Armor base colors
        const armrDark = new THREE.MeshStandardMaterial({color: 0x2b3d2b}); // Dark green
        const armrLight = new THREE.MeshStandardMaterial({color: 0x5b7543}); // Light green
        const armrBrown = new THREE.MeshStandardMaterial({color: 0x4a2e1b}); // Brownish details
        const armrGrey = new THREE.MeshStandardMaterial({color: 0x333333}); // Grey joints/gloves
        const skinM = new THREE.MeshStandardMaterial({color: 0x8b5a2b}); // Muscular skin

        // Arms (Biceps skin, forearms grey)
        lArm.material = skinM;
        rArm.material = skinM;
        const lglove = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.3, 0.22), armrGrey); lglove.position.y = -0.1; lArm.add(lglove);
        const rglove = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.3, 0.22), armrGrey); rglove.position.y = -0.1; rArm.add(rglove);
        // Wrist blade on right arm
        const blade = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.3, 0.1), new THREE.MeshStandardMaterial({color: 0xff0000})); // red energy blade
        blade.position.set(0.12, -0.15, 0.15); rArm.add(blade);
        // Shoulder pads
        const lSpad = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.18, 0.26), armrBrown); lSpad.position.y = 0.2; lArm.add(lSpad);
        const rSpad = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.18, 0.26), armrBrown); rSpad.position.y = 0.2; rArm.add(rSpad);

        // Torso / Chest piece
        torso.material = armrDark;
        const chestUp = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.25, 0.42), armrLight); chestUp.position.set(0, 0.15, 0); torso.add(chestUp);
        const absWrap = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.2, 0.41), armrBrown); absWrap.position.set(0, -0.1, 0); torso.add(absWrap);
        const belt = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.1, 0.43), armrGrey); belt.position.set(0, -0.3, 0); torso.add(belt);

        // Helmet 
        head.material = armrDark;
        const cheeks = new THREE.Mesh(new THREE.BoxGeometry(0.49, 0.15, 0.49), armrLight); cheeks.position.y = -0.15; head.add(cheeks);
        // T-visor
        const vTop = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.1), new THREE.MeshBasicMaterial({color: 0x00aaff})); vTop.position.set(0, 0.05, 0.25); head.add(vTop);
        const vBot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.15, 0.1), new THREE.MeshBasicMaterial({color: 0x00aaff})); vBot.position.set(0, -0.05, 0.25); head.add(vBot);

        // Legs
        lLeg.material = armrDark; rLeg.material = armrDark;
        const lKnee = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.15, 0.32), armrBrown); lKnee.position.set(0, 0.1, 0); lLeg.add(lKnee);
        const rKnee = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.15, 0.32), armrBrown); rKnee.position.set(0, 0.1, 0); rLeg.add(rKnee);
        
        // Boots
        lShoe.material = armrGrey; rShoe.material = armrGrey;
    } else if (skinId === 'morty') {
        // Short brown hair flat block
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.15, 0.55), darkMat);
        hair.position.y = 0.25;
        head.add(hair);
        // White shoes
        const whiteShoe = new THREE.MeshStandardMaterial({color: 0xffffff});
        lShoe.material = whiteShoe;
        rShoe.material = whiteShoe;
    } else if (skinId === 'lelouch') {
        const dBlueMat = new THREE.MeshStandardMaterial({color: 0x20155e});
        const goldMat = new THREE.MeshBasicMaterial({color: 0xffcc00});
        // ── TORSO: Dark blue body ──
        torso.material = dBlueMat;
        // Gold V on chest
        const gV1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.02), new THREE.MeshBasicMaterial({color: 0xffcc00})); gV1.rotation.z = 0.25; gV1.position.set(-0.08, 0.05, 0.192); torso.add(gV1);
        const gV2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.02), new THREE.MeshBasicMaterial({color: 0xffcc00})); gV2.rotation.z = -0.25; gV2.position.set(0.08, 0.05, 0.192); torso.add(gV2);
        // Gold horizontal belt trim
        const beltTrim = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.06, 0.02), new THREE.MeshBasicMaterial({color: 0xffcc00})); beltTrim.position.set(0, -0.28, 0.192); torso.add(beltTrim);
        // Gold shoulder pieces
        lArm.material = dBlueMat; rArm.material = dBlueMat;
        const lShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.28), new THREE.MeshStandardMaterial({color: 0x2a1f7a})); lShoulder.position.y = 0.22; lArm.add(lShoulder);
        const rShoulder = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.12, 0.28), new THREE.MeshStandardMaterial({color: 0x2a1f7a})); rShoulder.position.y = 0.22; rArm.add(rShoulder);
        const lShoulderG = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.3), new THREE.MeshBasicMaterial({color: 0xffcc00})); lShoulderG.position.y = 0.29; lArm.add(lShoulderG);
        const rShoulderG = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.3), new THREE.MeshBasicMaterial({color: 0xffcc00})); rShoulderG.position.y = 0.29; rArm.add(rShoulderG);
        // ── CAPE: thick 3D box that protrudes from back ──
        // Outer cape (dark blue, wide and tall)
        const capeBody = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.5, 0.18), new THREE.MeshStandardMaterial({color: 0x1a0d3a}));
        capeBody.position.set(0, -0.3, -0.32);
        capeBody.rotation.x = 0.18; // tilt slightly for a flowing look
        torso.add(capeBody);
        // Inner cape face (red crimson)
        const capeRed = new THREE.Mesh(new THREE.PlaneGeometry(1.15, 1.45), new THREE.MeshBasicMaterial({color: 0x8b0022, side: THREE.FrontSide}));
        capeRed.position.set(0, 0, 0.092);
        capeBody.add(capeRed);
        // ── LEGS ──
        lLeg.material = dBlueMat; rLeg.material = dBlueMat;
        const lLegG = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.06, 0.31), new THREE.MeshBasicMaterial({color: 0xffcc00})); lLegG.position.y = 0.15; lLeg.add(lLegG);
        const rLegG = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.06, 0.31), new THREE.MeshBasicMaterial({color: 0xffcc00})); rLegG.position.y = 0.15; rLeg.add(rLegG);
        // ── HAIR: multiple wild spikes ──
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.25, 0.55), darkMat); hair.position.y = 0.27; head.add(hair);
        const sp1 = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.32, 4), darkMat); sp1.position.set(0, 0.45, -0.1); sp1.rotation.x = -0.25; head.add(sp1);
        const sp2 = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.28, 4), darkMat); sp2.position.set(-0.18, 0.42, -0.1); sp2.rotation.set(-0.2, 0.3, 0.3); head.add(sp2);
        const sp3 = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.28, 4), darkMat); sp3.position.set(0.18, 0.42, -0.1); sp3.rotation.set(-0.2, -0.3, -0.3); head.add(sp3);
        const sp4 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.24, 4), darkMat); sp4.position.set(-0.08, 0.44, 0.05); sp4.rotation.set(0.1, 0.4, 0.2); head.add(sp4);
    } else if (skinId === 'mugman') {
        // Handle on the back
        const handle = new THREE.Mesh(new THREE.TorusGeometry(0.15, 0.04, 8, 16), new THREE.MeshStandardMaterial({color: 0xffffff}));
        handle.position.set(0, 0, -0.25); head.add(handle);
        // Brown shoes / White hands
        const brownMat = new THREE.MeshStandardMaterial({ color: 0x5c3a21 });
        lShoe.material = brownMat; rShoe.material = brownMat;
        lArm.material = new THREE.MeshStandardMaterial({color: 0xffffff}); rArm.material = new THREE.MeshStandardMaterial({color: 0xffffff});
        // Blue nose (instead of red)
        const nose = new THREE.Mesh(new THREE.SphereGeometry(0.06), new THREE.MeshBasicMaterial({color: 0x00aaff})); nose.position.set(0, 0, 0.26); head.add(nose);
        // Blue and White Straw
        const whiteMat = new THREE.MeshStandardMaterial({color: 0xffffff});
        const blueMat = new THREE.MeshStandardMaterial({color: 0x00aaff});
        const strawBase = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.2), whiteMat); strawBase.position.set(0.15, 0.35, 0); strawBase.rotation.z = -Math.PI/8;
        const strawTop1 = new THREE.Mesh(new THREE.CylinderGeometry(0.041, 0.041, 0.05), blueMat); strawTop1.position.y = 0.05;
        const strawTop2 = new THREE.Mesh(new THREE.CylinderGeometry(0.041, 0.041, 0.05), blueMat); strawTop2.position.y = -0.05;
        strawBase.add(strawTop1, strawTop2); head.add(strawBase);
    } else if (skinId === 'aj') {
        // Red gloves
        const redGlove = new THREE.MeshStandardMaterial({color: 0x8b0000});
        lArm.material = redGlove; rArm.material = redGlove;
        // Fangs only (no black square)
        const fangMat = new THREE.MeshBasicMaterial({color: 0xffffff});
        const fangL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.02), fangMat); fangL.position.set(-0.08, -0.07, 0.246);
        const fangR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.08, 0.02), fangMat); fangR.position.set(0.08, -0.07, 0.246);
        head.add(fangL, fangR);
        // Antennas
        const greenMat = new THREE.MeshStandardMaterial({color: 0x4caf50});
        const antL = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2), greenMat); antL.position.set(-0.15, 0.35, 0); antL.rotation.z = 0.2;
        const ballL = new THREE.Mesh(new THREE.SphereGeometry(0.05), greenMat); ballL.position.y = 0.1; antL.add(ballL);
        const antR = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.2), greenMat); antR.position.set(0.15, 0.35, 0); antR.rotation.z = -0.2;
        const ballR = new THREE.Mesh(new THREE.SphereGeometry(0.05), greenMat); ballR.position.y = 0.1; antR.add(ballR);
        head.add(antL, antR);
        // Brown Backpack
        const pack = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.25), new THREE.MeshStandardMaterial({color: 0x5c3a21}));
        pack.position.set(0, 0, -0.25);
        torso.add(pack);
    }

    // Default to cyan, but custom colours for certain skins
    const eyeMat = new THREE.MeshBasicMaterial({ color: (skinId === 'light_yagami' || skinId === 'pomni') ? 0x822f2f : (skinId === 'lawliet' || skinId === 'cuphead' || skinId === 'mugman' || skinId === 'geto') ? 0x111111 : (skinId === 'lelouch') ? 0xaa00ee : 0x00ffcc });
    const eyeGeo = new THREE.PlaneGeometry(0.12, 0.09);
    const lEye = new THREE.Mesh(eyeGeo, eyeMat); lEye.position.set(-0.12, 0.05, 0.245);
    const rEye = new THREE.Mesh(eyeGeo, eyeMat); rEye.position.set(0.12, 0.05, 0.245);
    // Lelouch: rEye = Geass red (appears left on screen due to 180° rotation), lEye = purple
    if (skinId === 'lelouch') {
        rEye.material = new THREE.MeshBasicMaterial({color: 0xff0000}); // Geass eye - red
        // lEye stays purple
    }
    if (skinId === 'doom') { lEye.visible = false; rEye.visible = false; }
    head.add(lEye, rEye);
    
    model.add(lShoe, rShoe, lLeg, rLeg, torso, lArm, rArm, head);
    model.rotation.y = Math.PI;

    // Arma por defecto (GUN) en la mano derecha — se actualiza vía 'weapon_mesh'
    const gunBarrel = new THREE.Mesh(
        new THREE.BoxGeometry(0.06, 0.06, 0.45),
        new THREE.MeshStandardMaterial({ color: 0x333333, flatShading: true })
    );
    gunBarrel.position.set(0, -0.22, -0.25);
    gunBarrel.name = 'weapon_mesh';
    rArm.add(gunBarrel);

    group.add(model);
    group.traverse(c => { c.frustumCulled = false; });
    group.userData.modelRef = model; // guardar referencia al modelo para animaciones
    group.userData.rArmRef = rArm;   // guardar referencia al brazo para cambios de arma
    return group;
}

function createNameLabel(username: string, platform: string = 'PC', isReady: boolean = false): THREE.Sprite {
    const canvas = document.createElement('canvas');
    canvas.width = 300; canvas.height = 120; // Más ancho para nombres largos
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 300, 120);

    ctx.fillStyle = 'rgba(0,0,0,0.75)';
    ctx.beginPath();
    ctx.roundRect(10, 10, 280, 100, 10);
    ctx.fill();

    ctx.font = 'bold 20px Impact, Arial Black, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#00ffcc';
    const platSymbol = platform.toLowerCase() === 'mobile' ? '📱' : '💻';
    // El nombre solo, sin emoji, centrado
    ctx.fillText(`${username.toUpperCase()}`, 150, 45);

    const dict = TRANSLATIONS[currentLanguage];
    const readyText = isReady ? dict.READY : dict.NOT_READY;
    // Muestra estado de listo y plataforma
    if (!gameStarted) {
        if (isReady) {
            ctx.font = 'bold 16px Arial, sans-serif';
            ctx.fillStyle = '#00ffcc';
        } else {
            ctx.font = 'bold 14px Arial, sans-serif';
            ctx.fillStyle = '#ff3333';
        }
        ctx.fillText(`${platSymbol} ${readyText}`, 150, 80);
    } else {
        // En partida solo mostrar icono de plataforma
        ctx.font = 'bold 20px Arial, sans-serif';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(platSymbol, 150, 80);
    }

    const tex = new THREE.CanvasTexture(canvas);
    const mat = new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(1.8, 0.72, 1); // Escalar al nuevo tamano del canvas
    sprite.position.y = 2.45;
    return sprite;
}

function spawnRemotePlayer(id: string, username: string, x: number, y: number, z: number, skinId: string = 'default', isLocalLobbyDummy: boolean = false, platform: string = 'PC', isReady: boolean = false) {
    if (!isLocalLobbyDummy && remotePlayers.has(id)) return;
    const group = createRemotePlayerModel(skinId);
    group.position.set(x, y - 1.6, z);
    group.userData.username = username; // store for skin-changed lookup
    group.userData.platform = platform;
    group.userData.isReady = isReady;
    
    // Hide default weapon gun barrel if creating the dummy for the locker/lobby
    if (group.userData.rArmRef) {
        const weapon = group.userData.rArmRef.children.find((c: any) => c.name === 'weapon_mesh');
        if (weapon) {
            weapon.visible = !isLocalLobbyDummy && !inLobby3D; // Hide in lobby
        }
    }

    const label = createNameLabel(username, platform, isReady);
    label.name = "name_label";
    group.add(label);
    
    // Add to the appropriate scene
    if (inLobby3D || isLocalLobbyDummy) {
        lobbyScene.add(group);
    } else {
        scene.add(group);
    }
    
    if (!isLocalLobbyDummy) {
        remotePlayers.set(id, { group, label });
    } else {
        lobbyLocalGroup = group;
    }
}

function removeRemotePlayer(id: string) {
    const p = remotePlayers.get(id);
    if (p) {
        // Remove from whichever scene it's in
        scene.remove(p.group);
        lobbyScene.remove(p.group);
        remotePlayers.delete(id);
    }
}

function connectMultiplayer() {
    if (socket?.connected) return;
    socket = io(SERVER_URL, { transports: ['websocket'], reconnectionAttempts: 3 });
    socket.on('connect', () => console.log('[MP] Connected:', socket!.id));

    // ── Player visibility ────────────────────────────────────────
    socket.on('existing-players', (players: any[]) => {
        // Server sends this to newly joined players so they see everyone already in the game
        players.forEach(p => {
            if (p.id !== socket!.id) {
                // Use lobbyScene if we're in the lobby, otherwise the game scene
                spawnRemotePlayer(p.id, p.username, p.x, p.y, p.z, p.skin || 'default', false, p.platform || 'pc', p.ready || false);
                if (inLobby3D) rearrangeLobbySlots();
            }
        });
    });
    socket.on('player-joined', (p: any) => {
        // Another player joined — spawn their model
        spawnRemotePlayer(p.id, p.username, p.x || 0, p.y || 1.6, p.z || 0, p.skin || 'default', false, p.platform || 'pc', p.ready || false);
        if (!gameStarted) {
            rearrangeLobbySlots();
        } else {
            showPickupNotice(p.username + t('JOINED'));
        }
    });
    socket.on('player-moved', (data: { id: string; x: number; y: number; z: number; rotY: number; weaponIdx?: number }) => {
        const p = remotePlayers.get(data.id);
        if (p) {
            // Guardar posición/rotación OBJETIVO para interpolación suave en el loop de animación
            if (!p.group.userData.targetPos) p.group.userData.targetPos = new THREE.Vector3();
            p.group.userData.targetPos.set(data.x, data.y - 1.6, data.z);
            p.group.userData.targetRotY = data.rotY + Math.PI;

            // Actualizar etiqueta de arma SOLO si cambió (evita crear canvas cada packet)
            if (data.weaponIdx !== undefined && data.weaponIdx !== p.group.userData.lastWeaponIdx) {
                p.group.userData.lastWeaponIdx = data.weaponIdx;
                const weaponNames = ['GUN', 'LASER', 'ROCKET', 'MINIGUN', 'FLAMETHROWER'];
                const wName = weaponNames[data.weaponIdx] || 'GUN';
                const makeWeaponCanvas = (text: string) => {
                    const canvas = document.createElement('canvas');
                    canvas.width = 256; canvas.height = 48;
                    const ctx = canvas.getContext('2d')!;
                    ctx.clearRect(0, 0, 256, 48);
                    ctx.font = 'bold 20px monospace';
                    ctx.fillStyle = '#ffcc00';
                    ctx.textAlign = 'center';
                    ctx.fillText(text, 128, 32);
                    return new THREE.CanvasTexture(canvas);
                };
                let wLabel = p.group.getObjectByName('weapon_label') as THREE.Sprite | undefined;
                if (!wLabel) {
                    const spr = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeWeaponCanvas(wName), depthTest: false }));
                    spr.name = 'weapon_label';
                    spr.scale.set(1.4, 0.3, 1);
                    spr.position.set(0, 2.6, 0);
                    p.group.add(spr);
                } else {
                    (wLabel.material as THREE.SpriteMaterial).map?.dispose();
                    (wLabel.material as THREE.SpriteMaterial).map = makeWeaponCanvas(wName);
                    (wLabel.material as THREE.SpriteMaterial).needsUpdate = true;
                }

                // Actualizar malla 3D del arma en el brazo derecho
                const rArmRef = p.group.userData.rArmRef as THREE.Mesh | undefined;
                if (rArmRef) {
                    const oldMesh = rArmRef.getObjectByName('weapon_mesh');
                    if (oldMesh) rArmRef.remove(oldMesh);

                    const gMat = new THREE.MeshStandardMaterial({ color: 0x333333, flatShading: true });
                    let wMesh: THREE.Mesh;
                    const idx = data.weaponIdx;
                    if (idx === 1) { // Laser: cañón delgado brillante
                        wMesh = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.5), new THREE.MeshStandardMaterial({ color: 0x00ffcc, emissive: 0x00ffcc, emissiveIntensity: 0.5 }));
                    } else if (idx === 2) { // Rocket Launcher: tubo grueso
                        wMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.6, 6), gMat);
                        wMesh.rotation.x = Math.PI / 2;
                    } else if (idx === 3) { // Minigun: cilindro ancho
                        wMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.5, 6), gMat);
                        wMesh.rotation.x = Math.PI / 2;
                    } else if (idx === 4) { // Flamethrower: caja naranja
                        wMesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.4), new THREE.MeshStandardMaterial({ color: 0xff6600, flatShading: true }));
                    } else { // GUN por defecto
                        wMesh = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.45), gMat);
                    }
                    wMesh.name = 'weapon_mesh';
                    wMesh.position.set(0, -0.22, -0.25);
                    rArmRef.add(wMesh);
                }
            }
        }
    });
    socket.on('player-left', (data: { id: string }) => {
        removeRemotePlayer(data.id);
        rearrangeLobbySlots();
    });
    // Real-time skin sync: rebuild teammate model when they change skin
    socket.on('skin-changed', (data: { id: string; skin: string }) => {
        const existing = remotePlayers.get(data.id);
        if (!existing) return;
        const username = existing.group.userData.username || 'PLAYER';
        // Remove old model from whichever scene it's in
        lobbyScene.remove(existing.group);
        scene.remove(existing.group);
        remotePlayers.delete(data.id);
        const platform = existing.group.userData.platform || 'pc';
        const isReady = existing.group.userData.isReady || false;
        // Re-spawn with new skin
        spawnRemotePlayer(data.id, username, 0, 1.6, 0, data.skin, false, platform, isReady);
        rearrangeLobbySlots();
    });

    // ── Ready system ─────────────────────────────────────────────
    socket.on('player-ready-changed', (data: { id: string; ready: boolean }) => {
        const el = document.getElementById(`slot-${data.id}`);
        if (el) {
            const readyEl = el.querySelector('.slot-ready') as HTMLElement;
            if (readyEl) readyEl.innerText = data.ready ? '✅' : '⬜';
        }
        // Update 3D label
        const p = remotePlayers.get(data.id);
        if (p) {
            p.group.userData.isReady = data.ready;
            const oldLabel = p.group.children.find(c => c.name === 'name_label');
            if (oldLabel) p.group.remove(oldLabel);
            const newLabel = createNameLabel(p.group.userData.username, p.group.userData.platform, data.ready);
            newLabel.name = 'name_label';
            p.group.add(newLabel);
        }
    });
    socket.on('game-start', (data: { hostId: string; gameSettings?: { mode: string; waves: number; partyMode: boolean } }) => {
        isHost = (socket!.id === data.hostId);
        if (!isHost) waveManager.isNetworkClient = true;

        // Apply game settings from server before starting
        if (data.gameSettings) {
            applyLobbySettings(data.gameSettings);
        }

        hideAllMpScreens();
        
        // Fix: Call beginLoadingSequence immediately instead of waiting for controls.lock() 
        // to succeed, since browsers block pointer lock from WebSocket events.
        beginLoadingSequence();
        
        if (!isMobile) {
            // Attempt to lock pointer, but if blocked, user will just have to click later.
            try { controls.lock(); } catch(e) {}
        }
    });

    // ── Lobby settings sync (from host) ──────────────────────────
    socket.on('lobby-settings', (data: { mode: string; waves: number; partyMode: boolean }) => {
        updateGameModeCard(data);
        // Keep local state in sync for non-hosts
        lobbyGameMode  = data.mode;
        lobbyWaveCount = data.waves;
        lobbyPartyMode = data.partyMode;
    });

    // ── Enemy sync ───────────────────────────────────────────────
    socket.on('spawn-enemy', (data: { nid: string; type: number; x: number; z: number }) => {
        if (isHost || !gameStarted) return; // Host already has the enemy locally
        const pos = new THREE.Vector3(data.x, 0, data.z);
        const enemy = new Enemy(data.type as EnemyType, pos);
        enemy.nid = data.nid; // Use server-assigned nid so kills sync
        enemy.mesh.visible = true;
        waveManager.activeEnemies.push(enemy);
        waveManager.enemiesToSpawn = Math.max(0, waveManager.enemiesToSpawn - 1);
        waveManager.enemiesAlive++;
    });
    socket.on('enemy-killed', (data: { nid: string }) => {
        // Find enemy by nid and kill it from network (no coins for the receiver)
        const enemy = waveManager.activeEnemies.find((e: any) => e.nid === data.nid);
        if (enemy && !enemy.isDead) {
            enemy.die(true); // fromNetwork = true, skip re-emit
        }
    });

    socket.on('force-lobby-return', () => {
        resetGameToLobby();
    });
    socket.on('enemy-sync', (enemiesArray: {nid: string, x: number, z: number, rotY: number}[]) => {
        if (isHost || !gameStarted) return; // We are authoritative or early
        for (const data of enemiesArray) {
            const enemy = waveManager.activeEnemies.find(e => e.nid === data.nid);
            if (enemy) {
                if (!enemy.networkPosition) enemy.networkPosition = new THREE.Vector3();
                enemy.networkPosition.set(data.x, enemy.mesh.position.y, data.z); // keep current Y for bobbing/spawning
                enemy.networkRotY = data.rotY;
            }
        }
    });

    socket.on('player-downed', (data: { id: string, name: string }) => {
        const p = remotePlayers.get(data.id);
        if (p) {
            (p as any).isDowned = true;
            // Pose de muerto: rotar todo el grupo 90° para tumbarlo de espaldas
            p.group.rotation.set(Math.PI / 2, p.group.rotation.y, 0);
            p.group.position.y = 0.15; // Pegado al suelo, antes estaba muy alto (0.95)

            // Quitar arma de la mano derecha
            const rArmRef = p.group.userData.rArmRef;
            if (rArmRef) {
                const wm = rArmRef.getObjectByName('weapon_mesh');
                if (wm) rArmRef.remove(wm);
            }

            // Crear Canvas 3D Sprite para el aviso "Q"
            let qLabel = p.group.getObjectByName('q_revive_label') as THREE.Sprite;
            if (!qLabel) {
                const canvas = document.createElement('canvas');
                canvas.width = 128; canvas.height = 128;
                const ctx = canvas.getContext('2d')!;
                ctx.fillStyle = '#0a0a0a';
                ctx.beginPath();
                ctx.arc(64, 64, 60, 0, Math.PI*2);
                ctx.fill();
                ctx.strokeStyle = '#00ffcc';
                ctx.lineWidth = 10;
                ctx.stroke();
                ctx.fillStyle = '#00ffcc';
                ctx.font = 'bold 70px Impact';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText('Q', 64, 64);
                
                const mat = new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), depthTest: false, depthWrite: false });
                qLabel = new THREE.Sprite(mat);
                qLabel.name = 'q_revive_label';
                // Because group is rotated Math.PI/2 around X axis, local Y points back. Local Z points UP.
                qLabel.position.set(0, 0, 1.2); 
                qLabel.scale.set(0.8, 0.8, 1);
                p.group.add(qLabel);
            }
            qLabel.visible = true;
        }
    });

    socket.on('player-reviving', (data: { targetId: string, reviverId: string }) => {
        const p = remotePlayers.get(data.targetId);
        if (p) {
            healingParticles.spawn(p.group.position, 2);
        } else if (data.targetId === myId) {
            // Soy yo siendo curado
            const pos = camera.position.clone();
            pos.y -= 1.0;
            healingParticles.spawn(pos, 2);
        }
    });

    socket.on('player-revived', (data: { targetId: string, reviverId: string }) => {
        // Alguien fue revivido. ¿Soy yo?
        if (data.targetId === myId) {
            isDowned = false;
            playerHealth = 50; // Revive con el 50%
            updateStatsHUD();
            camera.rotation.z = 0; // Restaurar rotación cámara original
            camera.position.y = 1.6;
            const ds = document.getElementById('downed-screen');
            if (ds) ds.style.display = 'none';
        } else {
            const p = remotePlayers.get(data.targetId);
            if (p) {
                (p as any).isDowned = false;
                p.group.rotation.set(0, p.group.rotation.y, 0);
                p.group.position.y = 0.95; // Restaurar altura

                healingParticles.spawn(p.group.position, 15);
                const qLabel = p.group.getObjectByName('q_revive_label') as THREE.Sprite;
                if (qLabel) qLabel.visible = false;
            }
        }
    });

    socket.on('player-died-final', (data: { id: string, name: string }) => {
        const p = remotePlayers.get(data.id);
        if (p) {
            // Quitar etiquetas flotantes

            // Eliminar del mapa activo => enemigos dejan de perseguir
            remotePlayers.delete(data.id);

            // Cuerpo permanece 15s como decoración visible, luego se limpia
            setTimeout(() => scene.remove(p.group), 15000);
        }
        // Show banner
        const banner = document.getElementById('death-banner');
        if (banner) {
            banner.innerText = `${data.name} HAS DIED`;
            banner.style.display = 'block';
            setTimeout(() => banner.style.display = 'none', 3000);
        }
    });

    // ── Pause sync ───────────────────────────────────────────────
    socket.on('game-paused', (data?: { pauserName: string }) => {
        // Alguien más pausó el juego
        if (gameStarted && playerHealth > 0 && !isPaused) {
            isPaused = true;
            isUIShowing = true;
            const pauseScreen = document.getElementById('pause-screen');
            if (pauseScreen) {
                pauseScreen.style.display = 'flex';
                const pauseTitle = document.getElementById('pause-title');
                const pauseSub = document.getElementById('pause-subtitle');
                const btnResume = document.getElementById('btn-resume');
                const pauser = data?.pauserName || "A PLAYER";
                if (pauseTitle) pauseTitle.innerText = "GAME PAUSED";
                if (pauseSub) pauseSub.innerText = `Paused by ${pauser}`;
                if (btnResume) btnResume.style.display = 'none'; // El espectador no puede reanudar
            }
            if (soundManager.bgAudio) soundManager.bgAudio.pause();
            if (!isMobile) document.exitPointerLock();
        }
    });

    socket.on('game-resumed', () => {
        if (gameStarted && isPaused && playerHealth > 0) {
            isPaused = false;
            isUIShowing = false;
            const pauseScreen = document.getElementById('pause-screen');
            if (pauseScreen) pauseScreen.style.display = 'none';
            if (soundManager.bgAudio) soundManager.bgAudio.play();
            // Restablecer textos por si acaso
            const pauseTitle = document.getElementById('pause-title');
            const pauseSub = document.getElementById('pause-subtitle');
            const btnResume = document.getElementById('btn-resume');
            if (pauseTitle) pauseTitle.innerText = "PAUSED";
            if (pauseSub) pauseSub.innerText = "Press ESC or click the button to resume";
            if (btnResume) btnResume.style.display = 'block';
            if (!isMobile) controls.lock();
        }
    });

    // ── Wave sync ────────────────────────────────────────────────
    socket.on('wave-complete', () => {
        // Non-hosts open shop when host says wave is done
        if (!isHost) {
            waveManager.isBreak = true;
            const wc = document.getElementById('wave-complete');
            if (wc) { wc.style.display = 'flex'; setTimeout(() => { wc.style.display = 'none'; openShop(); }, 1500); }
            else openShop();
        }
    });
    socket.on('shop-closed', () => {
        if (shopOpen) actuallyCloseShopAndStartNextWave();
    });
    socket.on('shop-players-update', (data: { players: any[] }) => {
        if (shopOpen) updateShopPlayersList(data.players);
    });
    socket.on('all-shop-ready', () => {
        if (shopOpen) actuallyCloseShopAndStartNextWave();
    });
    socket.on('host-changed', (data: { newHostId: string }) => {
        if (socket!.id === data.newHostId) {
            isHost = true;
            waveManager.isNetworkClient = false;
            showPickupNotice('YOU ARE NOW THE HOST');
            refreshGameModeCardHostVisibility();
        }
    });

    socket.on('game-victory', () => {
        if (waveManager) waveManager.victory();
    });

    // Kicked from room by host
    socket.on('kicked-from-room', () => {
        let kicks = parseInt(localStorage.getItem('kicks_' + myRoomCode) || '0');
        kicks++;
        localStorage.setItem('kicks_' + myRoomCode, kicks.toString());

        const rcInput = document.getElementById('room-code-input') as HTMLInputElement;
        if(rcInput) rcInput.value = '';

        showCustomAlert('You have been kicked from the room by the host.', () => {
            isMultiplayer = false;
            myRoomCode = '';
            socket?.disconnect();
            showScreen('room-screen');
        });
    });

    socket.on('disconnect', () => {
        remotePlayers.forEach((_, id) => removeRemotePlayer(id));
    });
}

function setup3DLobby() {
    inLobby3D = true;
    inSkinsTab = false;
    // WIDE view: show all 4 slots with extra spacing (Matches exactly what tabLobby sets)
    lobbyCamera.position.set(0, 3.5, 9);
    lobbyCamera.lookAt(0, 1.8, 0);

    if (lobbyLocalGroup) {
        lobbyScene.remove(lobbyLocalGroup);
        lobbyLocalGroup = null;
    }
    const platStr = isMobile ? 'mobile' : 'pc';
    spawnRemotePlayer('local_dummy', myUsername || 'YOU', 0, 1.6, 0, currentSkin, true, platStr, false);

    rearrangeLobbySlots();
    // Show and configure the game mode card
    refreshGameModeCardHostVisibility();
    updateGameModeCard({ mode: lobbyGameMode, waves: lobbyWaveCount, partyMode: lobbyPartyMode });
}

function cleanup3DLobby() {
    inLobby3D = false;
    // Hide the game mode card — it's lobby-only
    const card = document.getElementById('game-mode-card');
    const modal = document.getElementById('game-mode-modal');
    if (card)  card.style.display = 'none';
    if (modal) modal.classList.remove('visible');
    if (lobbyLocalGroup) {
        lobbyScene.remove(lobbyLocalGroup);
        lobbyLocalGroup = null;
    }
    // Move remote players from lobby scene into the game scene for gameplay
    remotePlayers.forEach((p) => {
        lobbyScene.remove(p.group);
        scene.add(p.group);
        // Reset scale and position
        p.group.scale.set(1, 1, 1);
        p.group.visible = true;
        p.group.position.set(0, 0, 0);
    });
}

function rearrangeLobbySlots() {
    if (!inLobby3D) return;
    
    // Position local player dead center in foreground (or moved right if in Skins Tab)
    if (lobbyLocalGroup) {
        lobbyLocalGroup.scale.set(1.8, 1.8, 1.8);
        lobbyLocalGroup.rotation.y = Math.PI;
        
        const localLabel = lobbyLocalGroup.children.find(c => c.name === 'name_label');
        if (inSkinsTab) {
            lobbyLocalGroup.position.set(1.5, 0, 0); // Put model more to the right in the Locker
            if (localLabel) localLabel.visible = false;
        } else {
            lobbyLocalGroup.position.set(0, 0, 0);
            if (localLabel) localLabel.visible = true;
        }
        lobbyLocalGroup.visible = true;
    }

    // Teammates scattered behind and slightly offset
    const teammatePositions = [
        new THREE.Vector3(-3.5, 0, -1.5), // Left behind
        new THREE.Vector3(3.5, 0, -1.5),  // Right behind
        new THREE.Vector3(-6.5, 0, -3.0)  // Far behind
    ];

    let slotIndex = 0;
    
    remotePlayers.forEach((p, id) => {
        if (!lobbyScene.children.includes(p.group)) {
            lobbyScene.add(p.group);
        }
        if (slotIndex < teammatePositions.length) {
            p.group.position.copy(teammatePositions[slotIndex]);
        }
        p.group.rotation.y = Math.PI;
        p.group.scale.set(1.8, 1.8, 1.8);
        p.group.visible = !inSkinsTab; // Hide if in Skins

        // Host can kick players: add/update 3D kick label above name
        if (isHost && !inSkinsTab) {
            let kickLabel = p.group.children.find(c => c.name === 'kick_label') as THREE.Sprite;
            if (!kickLabel) {
                const canvas = document.createElement('canvas');
                canvas.width = 120; canvas.height = 40;
                const ctx2 = canvas.getContext('2d')!;
                ctx2.fillStyle = '#ff3333';
                ctx2.beginPath();
                ctx2.roundRect(0, 0, 120, 40, 5);
                ctx2.fill();
                ctx2.fillStyle = '#ffffff';
                ctx2.font = 'bold 20px Impact';
                ctx2.textAlign = 'center';
                ctx2.fillText('KICK', 60, 28);
                const tex = new THREE.CanvasTexture(canvas);
                const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false });
                kickLabel = new THREE.Sprite(mat);
                kickLabel.name = 'kick_label';
                kickLabel.scale.set(0.7, 0.23, 1);
                kickLabel.position.y = 2.92; 
                p.group.add(kickLabel);
            }
            kickLabel.visible = true;
            kickLabel.userData = { targetId: id, targetName: p.group.userData.username };
        } else {
            let kickLabel = p.group.children.find(c => c.name === 'kick_label') as THREE.Sprite;
            if (kickLabel) kickLabel.visible = false;
        }

        slotIndex++;
    });
}

function showCustomAlert(msg: string, onOk?: () => void) {
    const overlay = document.getElementById('custom-dialog-overlay') as HTMLElement;
    const msgEl = document.getElementById('custom-dialog-msg') as HTMLElement;
    const btnContainer = document.getElementById('custom-dialog-buttons') as HTMLElement;
    if (!overlay || !msgEl || !btnContainer) return;
    
    msgEl.innerText = msg;
    btnContainer.innerHTML = '';
    
    const okBtn = document.createElement('button');
    okBtn.className = 'mp-btn primary';
    okBtn.innerText = 'OK';
    okBtn.style.padding = '10px 40px';
    okBtn.onclick = () => { overlay.style.display = 'none'; if (onOk) onOk(); };
    btnContainer.appendChild(okBtn);
    
    overlay.style.display = 'flex';
}

function showCustomConfirm(msg: string, onYes: () => void) {
    const overlay = document.getElementById('custom-dialog-overlay') as HTMLElement;
    const msgEl = document.getElementById('custom-dialog-msg') as HTMLElement;
    const btnContainer = document.getElementById('custom-dialog-buttons') as HTMLElement;
    if (!overlay || !msgEl || !btnContainer) return;
    
    msgEl.innerText = msg;
    btnContainer.innerHTML = '';
    
    const yesBtn = document.createElement('button');
    yesBtn.className = 'mp-btn primary';
    yesBtn.innerText = 'YES';
    yesBtn.style.padding = '10px 40px';
    yesBtn.onclick = () => { overlay.style.display = 'none'; onYes(); };
    
    const noBtn = document.createElement('button');
    noBtn.className = 'mp-btn danger';
    noBtn.innerText = 'NO';
    noBtn.style.padding = '10px 40px';
    noBtn.onclick = () => { overlay.style.display = 'none'; };
    
    btnContainer.appendChild(yesBtn);
    btnContainer.appendChild(noBtn);
    
    overlay.style.display = 'flex';
}

function showScreen(id: string) {
    hideAllMpScreens();
    document.getElementById(id)?.classList.add('active');
    
    // Manage Main Menu overlay visibility 
    const mainMenu = document.getElementById('main-menu');
    if (id === 'username-screen' || id === 'room-screen' || id === 'lobby-screen') {
        if (mainMenu) mainMenu.style.display = 'none';
        
        if (id === 'lobby-screen') {
            document.getElementById(id)!.style.background = 'transparent';
        } else {
            // Revert background to standard Phase 13 image
            document.getElementById(id)!.style.background = '';
        }
    } else {
        if (mainMenu) mainMenu.style.display = 'flex';
    }
    
    if (id === 'lobby-screen') setup3DLobby();
    else cleanup3DLobby();
}

function hideAllMpScreens() {
    document.querySelectorAll('.mp-screen').forEach(s => s.classList.remove('active'));
    cleanup3DLobby();
}

function updateLobbyUI(players: Record<string, { id: string; username: string; platform?: string; ready?: boolean }>, myId: string) {
    const container = document.getElementById('lobby-players');
    // The HTML lobby list has been removed in favor of 3D display
    // We just ensure slots are arranged properly.
    rearrangeLobbySlots();
}

// ═══════════════════════════════════════════════════════════════
// LOBBY GAME MODE STATE & UI
// ═══════════════════════════════════════════════════════════════
let lobbyGameMode  = 'survival';
let lobbyWaveCount = 40;
let lobbyPartyMode = false;

/** Updates the Game Mode Card displayed to all players */
function updateGameModeCard(settings: { mode: string; waves: number; partyMode: boolean }) {
    const modeLabel  = document.getElementById('gmc-mode-label');
    const wavesLabel = document.getElementById('gmc-waves-label');
    const partyBadge = document.getElementById('gmc-party-badge');

    if (modeLabel) {
        modeLabel.innerText = settings.mode === 'survival' ? t('MODE_SURVIVAL') : t('MODE_EVE');
    }
    if (wavesLabel) {
        wavesLabel.innerText = `${settings.waves} ${t('WAVES_LABEL').split(' ')[0] || 'WAVES'}`;
        // Use short label: "10 WAVES" / "40 WAVES"
        wavesLabel.innerText = `${settings.waves} WAVES`;
    }
    if (partyBadge) {
        partyBadge.style.display = settings.partyMode ? 'block' : 'none';
    }
}

/** Applies lobby settings to the wave manager (called at game start) */
function applyLobbySettings(settings: { mode: string; waves: number; partyMode: boolean }) {
    lobbyGameMode  = settings.mode;
    lobbyWaveCount = settings.waves;
    lobbyPartyMode = settings.partyMode;
    waveManager.maxWaves = settings.waves;
    // Update UI card
    updateGameModeCard(settings);
}

/** Shows or hides the host-only "Change Mode" button on the card */
function refreshGameModeCardHostVisibility() {
    const btn = document.getElementById('gmc-change-btn');
    const card = document.getElementById('game-mode-card');
    if (btn) {
        if (isHost) {
            btn.classList.remove('host-hidden');
        } else {
            btn.classList.add('host-hidden');
        }
    }
    if (card) {
        if (inSkinsTab || !inLobby3D) {
            card.style.display = 'none';
        } else {
            card.style.display = 'flex';
        }
    }
}

// ── Game Mode Modal interactions ─────────────────────────────
(function initGameModeModal() {
    const modal         = document.getElementById('game-mode-modal');
    const changBtn      = document.getElementById('gmc-change-btn');
    const closeBtn      = document.getElementById('btn-gm-close');
    const saveBtn       = document.getElementById('btn-gm-save');
    const partyToggle   = document.getElementById('btn-party-toggle') as HTMLButtonElement | null;

    // Open modal (host only)
    changBtn?.addEventListener('click', () => {
        if (!isHost) return;
        if (modal) modal.classList.add('visible');
    });

    // Close modal (X button)
    closeBtn?.addEventListener('click', () => {
        if (modal) modal.classList.remove('visible');
    });
    // Close on backdrop click
    modal?.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('visible');
    });

    // Mode pills (Survival / EVE)
    document.querySelectorAll('.gm-pill[data-mode]').forEach(pill => {
        pill.addEventListener('click', () => {
            if ((pill as HTMLElement).classList.contains('disabled')) return;
            document.querySelectorAll('.gm-pill[data-mode]').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            lobbyGameMode = (pill as HTMLElement).dataset.mode || 'survival';
        });
    });

    // Wave count pills
    document.querySelectorAll('.gm-pill[data-waves]').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.gm-pill[data-waves]').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            lobbyWaveCount = parseInt((pill as HTMLElement).dataset.waves || '40');
        });
    });

    // Party mode toggle
    partyToggle?.addEventListener('click', () => {
        lobbyPartyMode = !lobbyPartyMode;
        partyToggle.classList.toggle('on', lobbyPartyMode);
        partyToggle.innerText = lobbyPartyMode ? t('PARTY_MODE_ON') : t('PARTY_MODE_OFF');
    });

    // Save button — broadcasts settings and closes modal
    saveBtn?.addEventListener('click', () => {
        const settings = { mode: lobbyGameMode, waves: lobbyWaveCount, partyMode: lobbyPartyMode };

        // Apply locally first
        applyLobbySettings(settings);

        // Broadcast to all players if multiplayer host
        if (isMultiplayer && socket?.connected) {
            socket.emit('lobby-settings', settings);
        }

        // Close modal
        if (modal) modal.classList.remove('visible');
    });
})();

function initMultiplayerUI() {

    // Auto-rejoin if coming from a victory screen
    if (sessionStorage.getItem('rejoinRoom')) {
        const room = sessionStorage.getItem('rejoinRoom');
        const user = sessionStorage.getItem('rejoinUsername');
        const plat = sessionStorage.getItem('rejoinPlatform');
        
        sessionStorage.removeItem('rejoinRoom');
        sessionStorage.removeItem('rejoinUsername');
        sessionStorage.removeItem('rejoinPlatform');
        
        if (room && user) {
            isMobile = plat === 'mobile';
            myUsername = user;
            const platSec = document.getElementById('platform-selection');
            if (platSec) platSec.style.display = 'none';
            connectMultiplayer();
            showScreen('room-screen');
            setTimeout(() => {
                const joinInput = document.getElementById('room-code-input') as HTMLInputElement;
                if (joinInput) joinInput.value = room;
                document.getElementById('btn-join-room')?.click();
            }, 600);
            return;
        }
    }

    // Connect Platform selections in Options Menu to toggle isMobile
    ['btn-platform-pc', 'btn-platform-mobile'].forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.addEventListener('click', () => {
                isMobile = (btnId === 'btn-platform-mobile');
                
                // Update active state visual feedback
                const pcBtn = document.getElementById('btn-platform-pc');
                const mobBtn = document.getElementById('btn-platform-mobile');
                if (pcBtn && mobBtn) {
                    pcBtn.style.borderColor = isMobile ? '#555' : '#00ffcc';
                    pcBtn.style.color = isMobile ? '#aaa' : '#00ffcc';
                    pcBtn.style.background = isMobile ? 'rgba(0,0,0,0.7)' : 'rgba(0,255,204,0.1)';
                    mobBtn.style.borderColor = isMobile ? '#00ffcc' : '#555';
                    mobBtn.style.color = isMobile ? '#00ffcc' : '#aaa';
                    mobBtn.style.background = isMobile ? 'rgba(0,255,204,0.1)' : 'rgba(0,0,0,0.7)';
                }
            });
        }
    });

    // Username screen
    const continueBtn = document.getElementById('btn-username-continue');
    const usernameInput = document.getElementById('username-input') as HTMLInputElement;
    const usernameErr = document.getElementById('username-error')!;
    continueBtn?.addEventListener('click', () => {
        const name = (usernameInput?.value || '').trim();
        if (name.length < 2) { usernameErr.innerText = 'Min 2 characters required!'; return; }
        usernameErr.innerText = '';
        myUsername = name.toUpperCase();
        connectMultiplayer();
        showScreen('room-screen');
    });
    usernameInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') continueBtn?.click(); });
    document.getElementById('btn-username-back')?.addEventListener('click', () => {
        hideAllMpScreens();
        // Go back to main menu
        const menu = document.getElementById('main-menu');
        const menuBtns = document.getElementById('menu-buttons');
        if (menu) menu.style.display = 'flex';
        if (menuBtns) menuBtns.style.display = 'flex';
    });

    // Room screen - Create
    document.getElementById('btn-create-room')?.addEventListener('click', () => {
        const roomErr = document.getElementById('room-error')!;

        const tryCreate = () => {
            if (!socket || !socket.connected) {
                roomErr.innerText = '⚠️ Server unreachable. Try again or play Solo.';
                return;
            }
            roomErr.innerText = '';
            const platStr = isMobile ? 'mobile' : 'pc';
            socket.emit('create-room', { username: myUsername, platform: platStr, skin: currentSkin }, (res: any) => {
                if (!res || res.error) { roomErr.innerText = res?.error || 'Server error.'; return; }
                myRoomCode = res.roomCode;
                isMultiplayer = true;
                isHost = true;
                document.getElementById('lobby-code')!.innerText = myRoomCode;
                updateLobbyUI(res.players, socket!.id!);
                showScreen('lobby-screen');
            });
        };

        if (socket?.connected) {
            tryCreate();
        } else {
            // Kick off a fresh connection attempt if not connected
            if (!socket) connectMultiplayer();
            roomErr.innerText = '🔄 Connecting to server...';
            let waited = 0;
            const poll = setInterval(() => {
                waited += 200;
                if (socket?.connected) { clearInterval(poll); tryCreate(); }
                else if (waited >= 5000) {
                    clearInterval(poll);
                    roomErr.innerText = '⚠️ Server offline. Use SOLO PLAY instead or check Railway.';
                }
            }, 200);
        }
    });

    // Solo play: skip server entirely
    const soloBtn = document.createElement('button');
    soloBtn.id = 'btn-solo-play';
    soloBtn.className = 'mp-btn';
    soloBtn.style.cssText = 'margin-top:6px;background:rgba(255,255,255,0.08);color:#aaa;border:1px solid #555;font-size:13px;';
    soloBtn.innerText = '🎮 SOLO PLAY (no server)';
    soloBtn.addEventListener('click', () => {
        isMultiplayer = false;
        isHost = true;
        hideAllMpScreens();
        if (!isMobile) controls.lock();
        else beginLoadingSequence();
    });
    document.getElementById('room-screen')?.appendChild(soloBtn);

    // Room screen - Join
    const roomCodeInput = document.getElementById('room-code-input') as HTMLInputElement;
    const joinBtn = document.getElementById('btn-join-room');
    joinBtn?.addEventListener('click', () => {
        if (!socket) return;
        const roomErr = document.getElementById('room-error')!;
        const code = (roomCodeInput?.value || '').trim().toUpperCase();
        if (code.length !== 6) { roomErr.innerText = 'Code must be 6 characters!'; return; }
        
        const kicks = parseInt(localStorage.getItem('kicks_' + code) || '0');
        if (kicks >= 3) {
            roomErr.innerText = 'YOU ARE BANNED FROM THIS ROOM.';
            return;
        }

        const platStr = isMobile ? 'mobile' : 'pc';
        socket.emit('join-room', { roomCode: code, username: myUsername, platform: platStr, skin: currentSkin }, (res: any) => {
            if (res.error) { roomErr.innerText = res.error; return; }
            myRoomCode = res.roomCode;
            isMultiplayer = true;
            document.getElementById('lobby-code')!.innerText = myRoomCode;
            updateLobbyUI(res.players, socket!.id!);
            // Show lobby FIRST (sets inLobby3D=true), THEN spawn players so they land in lobbyScene
            showScreen('lobby-screen');
            Object.values(res.players).forEach((p: any) => {
                if (p.id !== socket!.id) spawnRemotePlayer(p.id, p.username, 0, 1.6, 0, p.skin || 'default', false, p.platform || 'pc', p.ready || false);
            });
            rearrangeLobbySlots();
        });
    });
    roomCodeInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') joinBtn?.click(); });
    document.getElementById('btn-room-back')?.addEventListener('click', () => { showScreen('username-screen'); });

    // Lobby - READY toggle (replaces old "START GAME")
    const readyBtn = document.getElementById('btn-lobby-start');
    if (readyBtn) {
        let amReady = false;
        readyBtn.addEventListener('click', () => {
            if (!socket) return;
            socket.emit('toggle-ready', (res: any) => {
                amReady = res.ready;
                // Update our own slot in the lobby list
                if (socket?.id) {
                    const mySlot = document.getElementById(`slot-${socket.id}`);
                    if (mySlot) {
                        const readyEl = mySlot.querySelector('.slot-ready') as HTMLElement;
                        if (readyEl) readyEl.innerText = amReady ? '✅' : '⬜';
                    }
                }
                
                // Update local 3D label
                if (lobbyLocalGroup) {
                    lobbyLocalGroup.userData.isReady = amReady;
                    const oldLabel = lobbyLocalGroup.children.find(c => c.name === 'name_label');
                    if (oldLabel) lobbyLocalGroup.remove(oldLabel);
                    const newLabel = createNameLabel(lobbyLocalGroup.userData.username || myUsername, lobbyLocalGroup.userData.platform || (isMobile ? 'mobile' : 'pc'), amReady);
                    newLabel.name = 'name_label';
                    lobbyLocalGroup.add(newLabel);
                }
                // Update button style to reflect ready state
                if (amReady) {
                    readyBtn.innerHTML = '❌ CANCEL READY';
                    readyBtn.style.borderColor = '#ff0044';
                    readyBtn.style.color = '#ff0044';
                } else {
                    readyBtn.innerHTML = '⚡ READY';
                    readyBtn.style.borderColor = '#00ffcc';
                    readyBtn.style.color = '#00ffcc';
                }
            });
        });
    }

    // Lobby - Leave
    document.getElementById('btn-lobby-leave')?.addEventListener('click', () => {
        socket?.disconnect();
        isMultiplayer = false;
        myRoomCode = '';
        showScreen('room-screen');
    });

    // Victory screen return
    document.getElementById('btn-victory-return')?.addEventListener('click', () => {
        if (isHost && socket?.connected) {
            socket.emit('reset-room-state');
        }
        resetGameToLobby();
    });

    // Sub-Tabs within Lobby Screen
    const tabLobby = document.getElementById('tab-lobby');
    const tabSkins = document.getElementById('tab-skins');
    const lobbyContent = document.getElementById('lobby-content');
    const skinsContent = document.getElementById('skins-content');

    tabLobby?.addEventListener('click', () => {
        tabLobby.classList.add('active');
        tabSkins?.classList.remove('active');
        if (lobbyContent) lobbyContent.style.display = 'flex';
        if (skinsContent) skinsContent.style.display = 'none';
        inLobby3D = true;
        inSkinsTab = false;
        // Wide view: frame the 4 slots safely
        lobbyCamera.position.set(0, 3.5, 9);
        lobbyCamera.lookAt(0, 1.8, 0);
        rearrangeLobbySlots(); // Will show teammates and position dummy at -4.5
        refreshGameModeCardHostVisibility();
    });

    tabSkins?.addEventListener('click', () => {
        tabSkins.classList.add('active');
        tabLobby?.classList.remove('active');
        if (lobbyContent) lobbyContent.style.display = 'none';
        if (skinsContent) skinsContent.style.display = 'flex';
        inLobby3D = true;
        inSkinsTab = true;
        // True Isolated Locker view: aim at the center, hide everyone else
        lobbyCamera.position.set(0, 3.5, 5);
        lobbyCamera.lookAt(0, 2.0, 0);
        rearrangeLobbySlots(); // Will center dummy at 0,0,0 and hide teammates
        refreshGameModeCardHostVisibility();
    });

    // Skin Selection Logic — with real-time broadcast
    document.querySelectorAll('.skin-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.skin-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const chosen = card.getAttribute('data-skin') || 'default';
            currentSkin = chosen;
            // Broadcast skin change to all players in room
            if (socket?.connected) {
                socket.emit('skin-changed', { skin: chosen });
            }
            if (inLobby3D) {
                // Rebuild local dummy instead of resetting the whole lobby camera structure
                if (lobbyLocalGroup) {
                    lobbyScene.remove(lobbyLocalGroup);
                    lobbyLocalGroup = null;
                }
                const platStr = isMobile ? 'mobile' : 'pc';
                spawnRemotePlayer('local_dummy', myUsername || 'YOU', 0, 1.6, 0, currentSkin, true, platStr, false);
                rearrangeLobbySlots(); // Gracefully snap everything using existing state
            }
        });
    });
}

// Position sync – called in animate() loop
let _mpFrame = 0;
let _lastSentPos = new THREE.Vector3();
let _lastSentYaw = 0;
let _lastSentWeapon = -1;
function multiplayerUpdate() {
    if (!isMultiplayer || !socket?.connected || !gameStarted) return;
    if (isSpectator || playerHealth <= 0) return;
    if (++_mpFrame % 3 !== 0) return; // Ejecutar a ~20fps

    const dir = new THREE.Vector3();
    controls.getDirection(dir);
    const yaw = Math.atan2(dir.x, dir.z);

    // Delta-compression: solo enviar si hubo un cambio real de posición o arma
    const dx = Math.abs(camera.position.x - _lastSentPos.x);
    const dy = Math.abs(camera.position.y - _lastSentPos.y);
    const dz = Math.abs(camera.position.z - _lastSentPos.z);
    const dYaw = Math.abs(yaw - _lastSentYaw);
    const weaponChanged = currentWeaponIndex !== _lastSentWeapon;

    // Solo emitir si el jugador se movió más de 0.02 unidades, giró > 0.01 rad, o cambió arma
    if (dx > 0.02 || dy > 0.02 || dz > 0.02 || dYaw > 0.01 || weaponChanged) {
        _lastSentPos.copy(camera.position);
        _lastSentYaw = yaw;
        _lastSentWeapon = currentWeaponIndex;

        socket.emit('player-update', {
            x: Math.round(camera.position.x * 100) / 100,  // 2 decimales = menos bytes
            y: Math.round(camera.position.y * 100) / 100,
            z: Math.round(camera.position.z * 100) / 100,
            rotY: Math.round(yaw * 1000) / 1000,
            weaponIdx: currentWeaponIndex
        });
    }
}

// ---- ELEMENTOS DE LA INTERFAZ (UI) ----
// Referencias a los elementos visuales de la interfaz en el HTML (botones, barras de vida, menús)
const mainMenu = document.getElementById('main-menu') as HTMLElement;
const loadingScreen = document.getElementById('loading-screen') as HTMLElement;
const loadBar = document.getElementById('load-bar') as HTMLElement;
const uiLayer = document.getElementById('ui-layer') as HTMLElement;
const crosshair = document.getElementById('crosshair') as HTMLElement;
const btnStart = document.getElementById('btn-start') as HTMLButtonElement;
const fpsEl = document.getElementById('fps-counter');
const enemiesEl = document.getElementById('enemies-count');
const healthBar = document.getElementById('health-bar') as HTMLElement;
const staminaBar = document.getElementById('stamina-bar') as HTMLElement;
const weaponNameEl = document.getElementById('weapon-name') as HTMLElement;
const ammoCurrentEl = document.getElementById('ammo-current') as HTMLElement;
const ammoReserveEl = document.getElementById('ammo-reserve') as HTMLElement;
const stageEl = document.getElementById('stage-text');
const hordeEl = document.getElementById('horde-text');
const coinsEl = document.getElementById('coins-count');
const loadingText = document.querySelector('.loading-text') as HTMLElement;

let playerHealth = 100;
let playerStamina = 100;
let staminaExhausted = false;
let staminaCooldown = 0;
let isDowned = false;
let downedTimer = 60.0;
let isRevivingKey = false;
let reviveProgress = 0.0;
let reviveTargetId: string | null = null;
const environmentBoxes: THREE.Box3[] = [];
let playerJetpackFuel = 0;
let playerFireDebuff = 0; // 🔥 Debuff de fuego progresivo
let hasJetpack = false;
let playerCoins = 0;
const MAX_STAMINA = 100;
const MAX_FUEL = 100;

// Estado principal del juego: si ya comenzó, si está pausado, y otros estados globales
let gameStarted = false;
// isPaused: true cuando el jugador presiona ESC estando en partida (muestra la pantalla de pausa)
let isPaused = false;
// isMobile: true si el usuario seleccionó la modalidad de celular. Evita el uso de PointerLock.
let isMobile = false;

// ---- ESTADO DE MEJORAS (Fase 4) ----
// Variables que guardan el progreso y las mejoras compradas por el jugador
let maxPlayerHealth = 100;
let damageMultiplier = 1.0;
let walkSpeedMultiplier = 1.0;
let shopOpen = false;
// Referencia a la pantalla de pausa (div HTML con id="pause-screen")
const pauseScreen = document.getElementById('pause-screen') as HTMLElement;
// Flag general para proteger el sistema de 'unlock' del mouse de abrir el menú equivocado
let isUIShowing = false; // Se activa cuando hay una UI del juego abierta (tienda, pausa)
const BLACK_MARKET_POS = new THREE.Vector3(30, 0, -40); // Posición del Black Market en el mundo 3D

// Seguimiento del 'Kill Feed' para la Phase 9
let lastAttackerName = "UNKNOWN";

interface Weapon {
    name: string;
    damage: number;
    fireRate: number; // Cadencia de disparo en milisegundos
    magSize: number;
    ammoCurrent: number;
    ammoReserve: number;
    reloadTime: number; // Tiempo de recarga en milisegundos
    recoilAmount: number;
    isReloading: boolean;
    lastShotTime: number;
    isAutomatic: boolean;
    pellets: number;
}

const weapons: Weapon[] = [
    // Índice 0: GUN - arma inicial del jugador (Rifle)
    { name: "GUN", damage: 30, fireRate: 150, magSize: 40, ammoCurrent: 40, ammoReserve: 160, reloadTime: 1800, recoilAmount: 0.05, isReloading: false, lastShotTime: 0, isAutomatic: true, pellets: 1 },
    // Índice 1: LASER GUN - Wave 1 (Atraviesa enemigos, menor daño que Gun, futurista)
    { name: "LASER GUN", damage: 20, fireRate: 300, magSize: 20, ammoCurrent: 20, ammoReserve: 60, reloadTime: 1500, recoilAmount: 0.0, isReloading: false, lastShotTime: 0, isAutomatic: false, pellets: 1 },
    // Índice 2: ROCKET LAUNCHER - Wave 2 (Cohete lejano, más daño que Gun)
    { name: "ROCKET LAUNCHER", damage: 120, fireRate: 1200, magSize: 1, ammoCurrent: 1, ammoReserve: 8, reloadTime: 2500, recoilAmount: 0.5, isReloading: false, lastShotTime: 0, isAutomatic: false, pellets: 1 },
    // Índice 3: MINI GUN - Wave 3 (Disparo múltiple/rápido, menor daño que Gun)
    { name: "MINI GUN", damage: 15, fireRate: 50, magSize: 200, ammoCurrent: 200, ammoReserve: 400, reloadTime: 3000, recoilAmount: 0.02, isReloading: false, lastShotTime: 0, isAutomatic: true, pellets: 1 },
    // Índice 4: FIRE GUN - Wave 4 (Lanzallamas, disparo fuego, lejano)
    { name: "FIRE GUN", damage: 10, fireRate: 80, magSize: 100, ammoCurrent: 100, ammoReserve: 300, reloadTime: 2000, recoilAmount: 0.01, isReloading: false, lastShotTime: 0, isAutomatic: true, pellets: 1 },
];

// ---- CONFIGURACIÓN DE LA ESCENA ----
// Configuración principal del mundo 3D (escena, cámara y renderizador)
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a0a25); // Lighter purple tinted night sky
scene.fog = new THREE.FogExp2(0x3a105a, 0.006); // Lighter purple fog

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.6, 0);

// ── LOBBY: dedicated isolated scene so the game world never contaminates the lobby view ──
const lobbyScene = new THREE.Scene();
const lobbyCamera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
lobbyCamera.position.set(0, 1.8, 4);
lobbyCamera.lookAt(0, 1.4, 0);
// Bright front + ambient lights so the block characters show their colours
const _lobbyDir = new THREE.DirectionalLight(0xffffff, 2.5);
_lobbyDir.position.set(2, 5, 6);
lobbyScene.add(_lobbyDir);
lobbyScene.add(new THREE.AmbientLight(0xffffff, 1.5));
// fondo.png as background (no fog), darkened for moody atmosphere
new THREE.TextureLoader().load('fondo.png', (tex) => {
    lobbyScene.background = tex;
    lobbyScene.backgroundIntensity = 0.3; // 0 = black, 1 = full brightness. Set to 0.3 for requested darkness.
});

// Handle Lobby 3D Kick clicks
const lobbyRaycaster = new THREE.Raycaster();
const lobbyMouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
    if (!inLobby3D || inSkinsTab || !isHost) return;
    const overlay = document.getElementById('custom-dialog-overlay') as HTMLElement;
    if (overlay && overlay.style.display === 'flex') return; // Don't allow clicks if a dialog is open

    lobbyMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    lobbyMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    lobbyRaycaster.setFromCamera(lobbyMouse, lobbyCamera);
    
    // Find all kick_label sprites
    const kickSprites: THREE.Object3D[] = [];
    remotePlayers.forEach(p => {
        const xl = p.group.children.find(c => c.name === 'kick_label');
        if (xl && xl.visible) kickSprites.push(xl);
    });

    const intersects = lobbyRaycaster.intersectObjects(kickSprites, false);
    if (intersects.length > 0) {
        const targetLabel = intersects[0].object;
        const tid = targetLabel.userData.targetId;
        const name = targetLabel.userData.targetName || 'this player';
        showCustomConfirm(`Are you sure you want to kick ${name}?`, () => {
             socket?.emit('kick-player', { id: tid });
        });
    }
});

window.addEventListener('mousemove', (event) => {
    if (!inLobby3D || inSkinsTab || !isHost) {
        document.body.style.cursor = 'default';
        return;
    }
    const overlay = document.getElementById('custom-dialog-overlay');
    if (overlay && overlay.style.display === 'flex') {
        document.body.style.cursor = 'default';
        return;
    }

    lobbyMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    lobbyMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    lobbyRaycaster.setFromCamera(lobbyMouse, lobbyCamera);
    
    const kickSprites: THREE.Object3D[] = [];
    remotePlayers.forEach(p => {
        const xl = p.group.children.find(c => c.name === 'kick_label');
        if (xl && xl.visible) kickSprites.push(xl);
    });

    const intersects = lobbyRaycaster.intersectObjects(kickSprites, false);
    if (intersects.length > 0) {
        document.body.style.cursor = 'pointer';
    } else {
        document.body.style.cursor = 'default';
    }
});

const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
// Limitar la relación de píxeles a 1 para mejor rendimiento en máquinas de gama baja/móviles
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.0));
// Desactivar sombras por completo para un aumento significativo de FPS (cuadros por segundo)
renderer.shadowMap.enabled = false;
document.body.appendChild(renderer.domElement);

// ---- SISTEMA DE SONIDO ----
// Este sistema administra todos los efectos de sonido y la música de fondo del juego
// ---- CLASE SOUNDMANAGER (Sistema de Sonido Dinámico) ----
// Administra las pistas de audio para el menú y el juego, además de los efectos especiales.
class SoundManager {
    ctx: AudioContext;
    masterGain: GainNode;
    constructor() {
        this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        this.masterGain = this.ctx.createGain();
        this.masterGain.connect(this.ctx.destination);
    }
    playShot() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = 'square'; o.frequency.setValueAtTime(880, this.ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.1);
        g.gain.setValueAtTime(0.1, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.1);
        o.connect(g); g.connect(this.masterGain); o.start(); o.stop(this.ctx.currentTime + 0.1);
    }
    playGroan() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = 'sawtooth'; o.frequency.setValueAtTime(120 + Math.random() * 40, this.ctx.currentTime);
        o.frequency.linearRampToValueAtTime(80, this.ctx.currentTime + 0.5);
        g.gain.setValueAtTime(0.05, this.ctx.currentTime);
        g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.6);
        o.connect(g); g.connect(this.masterGain); o.start(); o.stop(this.ctx.currentTime + 0.6);
    }
    playBeep() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = 'sine'; o.frequency.setValueAtTime(1200, this.ctx.currentTime);
        o.frequency.setValueAtTime(800, this.ctx.currentTime + 0.05);
        g.gain.setValueAtTime(0.03, this.ctx.currentTime);
        g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.1);
        o.connect(g); g.connect(this.masterGain); o.start(); o.stop(this.ctx.currentTime + 0.1);
    }
    playExplosion() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const noise = this.ctx.createBufferSource();
        const buffer = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.5, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
        noise.buffer = buffer;
        const filter = this.ctx.createBiquadFilter(); filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(10, this.ctx.currentTime + 0.4);
        const g = this.ctx.createGain(); g.gain.setValueAtTime(0.3, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.5);
        noise.connect(filter); filter.connect(g); g.connect(this.masterGain); noise.start();
    }
    playLaser() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = 'sine'; o.frequency.setValueAtTime(1200, this.ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.15);
        g.gain.setValueAtTime(0.05, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
        o.connect(g); g.connect(this.masterGain); o.start(); o.stop(this.ctx.currentTime + 0.15);
    }
    playFlamethrower() {
        // Efecto de sonido del lanzallamas: ruido de fuego continuo
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const noise = this.ctx.createBufferSource();
        const buf = this.ctx.createBuffer(1, this.ctx.sampleRate * 0.08, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * 0.6;
        noise.buffer = buf;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 300 + Math.random() * 200;
        filter.Q.value = 0.5;
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0.07, this.ctx.currentTime);
        g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.08);
        noise.connect(filter); filter.connect(g); g.connect(this.masterGain); noise.start();
    }
    playPickup() {
        if (this.ctx.state === 'suspended') this.ctx.resume();
        const o = this.ctx.createOscillator(); const g = this.ctx.createGain();
        o.type = 'triangle'; o.frequency.setValueAtTime(440, this.ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.1);
        g.gain.setValueAtTime(0.1, this.ctx.currentTime);
        g.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.2);
        o.connect(g); g.connect(this.masterGain); o.start(); o.stop(this.ctx.currentTime + 0.2);
    }

    // ---- SISTEMA DE MÚSICA DE FONDO ----
    // La música del menú usa el oscilador procedural (sin necesidad de cargar archivo)
    // La música del juego usará la canción de Suno cargada desde su CDN
    menuOsc: OscillatorNode | null = null;
    gameOsc: OscillatorNode | null = null;
    musicGain: GainNode | null = null;

    // Elemento HTML <audio> para reproducir la canción de Suno en bucle
    bgAudio: HTMLAudioElement | null = null;
    currentTrack: string = '';

    startMenuMusic() {
        this.playTrack('/lobby.mp3', 0.05);
    }

    startGameMusic() {
        if (currentBiome === Biome.SNOW) {
            this.playTrack('/InviernoDefinitivo.m4a.mp4', 0.08);
        } else {
            this.playTrack('/game.mp3', 0.08);
        }
    }

    startSnowMusic() {
        this.playTrack('/InviernoDefinitivo.m4a.mp4', 0.08);
    }

    startCastleMusic() {
        this.playTrack('/HibridaMoC.m4a.mp4', 0.08);
    }

    startWinMusic() {
        this.playTrack('/win.mp3', 0.1);
    }

    startLossMusic() {
        this.playTrack('/loss.mp3', 0.1);
    }

    private playTrack(path: string, volume: number) {
        if (this.currentTrack === path) return;
        this.stopMusic();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        this.bgAudio = new Audio(path);
        this.bgAudio.loop = [
            '/lobby.mp3', '/game.mp3',
            '/InviernoDefinitivo.m4a.mp4',
            '/HibridaMoC.m4a.mp4'
        ].includes(path);
        // Obtener volumen de sliders — musicVolume ahora es 0-200, donde 100=normal
        const mV = parseInt((document.getElementById('opt-master-vol') as HTMLInputElement)?.value || '80') / 100;
        const mscV = parseInt((document.getElementById('opt-music-vol') as HTMLInputElement)?.value || '60') / 100;
        this.bgAudio.volume = Math.min(volume * mV * mscV, 1.0);
        this.bgAudio.play().catch(() => {
            console.log('Audio blocked or file missing:', path);
        });
        this.currentTrack = path;
    }

    stopMusic() {
        if (this.bgAudio) {
            this.bgAudio.pause();
            this.bgAudio.src = '';
            this.bgAudio = null;
        }
        this.currentTrack = '';
    }
}
const soundManager = new SoundManager();

// Iniciar la música del menú en la primera interacción para cumplir con las reglas de reproducción automática del navegador
document.body.addEventListener('click', () => {
    if (!gameStarted && !soundManager.menuOsc) soundManager.startMenuMusic();
}, { once: true });

// ---- PROYECTILES ----
// Clases que controlan el disparo y el movimiento de los proyectiles visibles (láser y cohetes)
class Laser {
    mesh: THREE.Mesh;
    velocity: THREE.Vector3;
    isDead: boolean = false;
    shooterName: string;

    constructor(pos: THREE.Vector3, dir: THREE.Vector3, shooterName: string = "ROBOT") {
        this.mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.8), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        this.mesh.position.copy(pos);
        // Orientar en la dirección del trayecto
        const target = pos.clone().add(dir);
        this.mesh.lookAt(target);
        this.velocity = dir.multiplyScalar(20); // Velocidad del láser
        this.shooterName = shooterName;
        scene.add(this.mesh);
        soundManager.playShot(); // Reutilizar sonido de disparo para el láser
    }

    update(delta: number) {
        this.mesh.position.addScaledVector(this.velocity, delta);

        // Lanzamiento de rayo (raycast) contra la geometría del mundo
        const dist = camera.position.distanceTo(this.mesh.position);
        if (dist < 1.0) {
            lastAttackerName = this.shooterName;
            takeDamage(15);
            // Si es proyectil de fuego de dragón — aplicar ceguera
            if ((this as any)._isFireBlind) {
                playerFireDebuff = 3.5;
                // Flash naranja-rojo en pantalla
                const fireFlash = document.createElement('div');
                fireFlash.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,80,0,0.55);pointer-events:none;z-index:200;transition:opacity 0.6s;';
                document.body.appendChild(fireFlash);
                setTimeout(() => { fireFlash.style.opacity = '0'; setTimeout(() => fireFlash.remove(), 600); }, 80);
            }
            this.isDead = true;
            return;
        }

        // Colisión con el entorno (verificación simple de altura Y o límites)
        if (this.mesh.position.y < 0 || Math.abs(this.mesh.position.x) > 150 || Math.abs(this.mesh.position.z) > 150) {
            this.isDead = true;
        }
    }

    destroy() {
        scene.remove(this.mesh);
    }
}
const enemyProjectiles: Laser[] = [];

class Rocket {
    mesh: THREE.Mesh; velocity: THREE.Vector3; isDead: boolean = false; lifetime: number = 2.0; damage: number = 100;
    constructor(pos: THREE.Vector3, dir: THREE.Vector3) {
        this.mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.6, 8), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xff3300 }));
        this.mesh.position.copy(pos); this.mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        this.velocity = dir.multiplyScalar(40); scene.add(this.mesh);
    }
    update(delta: number) {
        this.mesh.position.add(this.velocity.clone().multiplyScalar(delta));
        this.lifetime -= delta; if (this.lifetime <= 0) { this.explode(); } else {
            for (const en of waveManager.activeEnemies) {
                if (!en.isDead && this.mesh.position.distanceTo(en.mesh.position) < 2.0) { this.explode(); break; }
            }
        }
    }
    explode() {
        this.isDead = true; soundManager.playExplosion(); bloodParticles.spawn(this.mesh.position, 40);
        waveManager.activeEnemies.forEach(en => {
            const d = en.mesh.position.distanceTo(this.mesh.position);
            if (d < 8) en.takeDamage(100 * (1 - d / 8), new THREE.Vector3());
        });
    }
    destroy() { scene.remove(this.mesh); }
}
const playerRockets: Rocket[] = [];

// ---- RECOGIDA DE ARMAS (PICKUPS) ----
// Objetos 3D que representan las armas tiradas en el suelo que el jugador puede recoger
class WeaponPickup {
    mesh: THREE.Group; weaponIdx: number; isPickedUp: boolean = false;
    constructor(weaponIdx: number, pos: THREE.Vector3) {
        this.weaponIdx = weaponIdx; this.mesh = new THREE.Group(); this.mesh.position.copy(pos);
        const w = weapons[weaponIdx];
        const model = new THREE.Group();

        let color = 0xffff00; // Minigun - Amarillo
        if (w.name.includes("ROCKET")) color = 0xff3300;   // Lanzacohetes - Rojo
        if (w.name.includes("LASER")) color = 0x00ffff;    // Pistola láser - Cian
        if (w.name === 'FLAMETHROWER') color = 0xff6600;   // Lanzallamas - Naranja

        const weaponMat = new THREE.MeshStandardMaterial({ color: 0x444444, metalness: 0.9, roughness: 0.1 });
        const accentMat = new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 2.0 });

        const pointLight = new THREE.PointLight(color, 2, 8);
        pointLight.position.y = 0.5;
        this.mesh.add(pointLight);

        if (w.name.includes("MINIGUN")) {
            const body = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.9), weaponMat);
            for (let i = 0; i < 6; i++) {
                const b = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8, 6), weaponMat);
                b.rotation.x = Math.PI / 2;
                const r = 0.12; const a = (i / 6) * Math.PI * 2;
                b.position.set(Math.cos(a) * r, Math.sin(a) * r, -0.7);
                model.add(b);
            }
            model.add(body);
        } else if (w.name.includes("ROCKET")) {
            const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.4, 12), weaponMat);
            tube.rotation.x = Math.PI / 2;
            const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.2, 12), accentMat);
            cap.rotation.x = Math.PI / 2; cap.position.z = -0.7;
            model.add(tube, cap);
        } else if (w.name === 'FLAMETHROWER') {
            // Modelo 3D del lanzallamas: cuerpo ancho con tanque trasero y boquilla naranja
            const body = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.35, 1.1), weaponMat);
            const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.5, 8), accentMat);
            nozzle.rotation.x = Math.PI / 2;
            nozzle.position.z = -0.75;
            const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.7, 10), weaponMat);
            tank.rotation.z = Math.PI / 2;
            tank.position.set(0, 0.3, 0.2);
            model.add(body, nozzle, tank);
        } else if (w.name.includes("LASER")) {
            const frame = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 0.7), weaponMat);
            const rail = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 1.0), accentMat);
            rail.position.z = -0.2;
            model.add(frame, rail);
        }

        const ringGeo = new THREE.TorusGeometry(1.5, 0.05, 8, 24);
        const ring = new THREE.Mesh(ringGeo, accentMat);
        ring.rotation.x = Math.PI / 2;

        this.mesh.add(model, ring);
        scene.add(this.mesh);
    }
    update(time: number, pPos: THREE.Vector3) {
        this.mesh.rotation.y += 0.02;
        this.mesh.position.y = 1.0 + Math.sin(time / 400) * 0.2;
        if (pPos.distanceTo(this.mesh.position) < 2.5) this.pickup();
    }
    pickup() { this.isPickedUp = true; scene.remove(this.mesh); soundManager.playPickup(); addWeaponToInventory(this.weaponIdx); }
}
const weaponPickups: WeaponPickup[] = [];

// ---- RECOGIDA DE MUNICIÓN ----
class AmmoPickup {
    mesh: THREE.Group; isPickedUp: boolean = false;
    constructor(pos: THREE.Vector3) {
        this.mesh = new THREE.Group(); this.mesh.position.copy(pos);
        const boxGeo = new THREE.BoxGeometry(0.6, 0.4, 0.4);
        const boxMat = new THREE.MeshStandardMaterial({ color: 0x228b22, metalness: 0.3 });
        const box = new THREE.Mesh(boxGeo, boxMat);
        const ringGeo = new THREE.TorusGeometry(1.0, 0.05, 8, 24);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        this.mesh.add(box, ring);
        scene.add(this.mesh);
    }
    update(time: number, pPos: THREE.Vector3) {
        this.mesh.rotation.y += 0.03;
        this.mesh.position.y = 0.5 + Math.sin(time / 300) * 0.2;
        if (pPos.distanceTo(this.mesh.position) < 2.5) this.pickup();
    }
    pickup() {
        this.isPickedUp = true; scene.remove(this.mesh); soundManager.playPickup();
        weapons.forEach(w => { w.ammoReserve = Math.min(w.ammoReserve + w.magSize * 2, w.magSize * 10); });
        updateWeaponHUD();
    }
}
const ammoPickups: AmmoPickup[] = [];

// ---- RECOGIDA DE JETPACK ----
class JetpackPickup {
    mesh: THREE.Group; isPickedUp: boolean = false;
    constructor(pos: THREE.Vector3) {
        this.mesh = new THREE.Group(); this.mesh.position.copy(pos);

        const packGeo = new THREE.BoxGeometry(0.5, 0.8, 0.3);
        const packMat = new THREE.MeshStandardMaterial({ color: 0x555555, metalness: 0.8 });
        const pack = new THREE.Mesh(packGeo, packMat);

        const thrusterGeo = new THREE.CylinderGeometry(0.1, 0.15, 0.4);
        const thrusterMat = new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0x00eeff, emissiveIntensity: 0.8 });
        const leftThruster = new THREE.Mesh(thrusterGeo, thrusterMat);
        leftThruster.position.set(-0.35, -0.2, 0);
        const rightThruster = new THREE.Mesh(thrusterGeo, thrusterMat);
        rightThruster.position.set(0.35, -0.2, 0);

        const ringGeo = new THREE.TorusGeometry(1.5, 0.05, 8, 24);
        const ringMat = new THREE.MeshBasicMaterial({ color: 0xaa00ff }); // Purple ring
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;

        const light = new THREE.PointLight(0x00eeff, 2, 8);
        light.position.y = 1;

        this.mesh.add(pack, leftThruster, rightThruster, light, ring);
        scene.add(this.mesh);
    }
    update(time: number, pPos: THREE.Vector3) {
        this.mesh.rotation.y += 0.01;
        this.mesh.position.y = 1.0 + Math.sin(time / 200) * 0.1;
        if (pPos.distanceTo(this.mesh.position) < 2.5) this.pickup();
    }
    pickup() {
        this.isPickedUp = true; scene.remove(this.mesh); soundManager.playPickup();
        hasJetpack = true;
        playerJetpackFuel = MAX_FUEL;
        document.getElementById('fuel-bar')!.style.display = 'block';
        showPickupNotice("JETPACK");
        updateStatsHUD();
    }
}
const jetpacks: JetpackPickup[] = [];
jetpacks.push(new JetpackPickup(new THREE.Vector3(0, -999, 0)));
jetpacks.pop(); // Remove buggy spawn completely

const playerInventory: number[] = [0];
let currentWeaponIndex = 0;
const weaponIndices = [3, 4, 5];

function switchWeapon(index: number) {
    if (currentWeaponIndex === index) return;
    // Se eliminó la verificación isReloading para permitir el cambio incluso durante la recarga
    currentWeaponIndex = index;
    updateWeaponHUD();
    updateWeaponVisuals();
    // Reiniciar la posición del arma para evitar que se quede trabada en la 'posición de recarga'
    weaponGroup.position.y = -0.3;
}

function addWeaponToInventory(idx: number) {
    if (!playerInventory.includes(idx)) {
        playerInventory.push(idx);
        currentWeaponIndex = idx;
        updateWeaponHUD();
        updateWeaponVisuals();
        showPickupNotice(weapons[idx].name);
    }
}

function showPickupNotice(name: string) {
    const notice = document.createElement('div');
    notice.style.cssText = 'position:absolute; bottom:20%; left:50%; transform:translateX(-50%); color:#ffff00; font-family:Impact; font-size:32px; text-shadow:2px 2px #000; pointer-events:none; z-index:100;';
    notice.innerText = `NEW WEAPON: ${name}`;
    document.body.appendChild(notice);
    setTimeout(() => {
        notice.style.opacity = '0';
        notice.style.transition = 'opacity 1s';
        setTimeout(() => notice.remove(), 1000);
    }, 2000);
}

function updateWeaponHUD() {
    const w = weapons[currentWeaponIndex];
    if (weaponNameEl) weaponNameEl.innerText = t(w.name);
    if (ammoCurrentEl) ammoCurrentEl.innerText = w.ammoCurrent.toString();
    if (ammoReserveEl) ammoReserveEl.innerText = w.ammoReserve.toString();
}

function updateStatsHUD() {
    healthBar.style.width = `${Math.max(0, (playerHealth / maxPlayerHealth) * 100)}%`;
    staminaBar.style.width = `${Math.max(0, (playerStamina / MAX_STAMINA) * 100)}%`;
    if (hasJetpack) {
        const fuelBar = document.getElementById('fuel-bar')!;
        fuelBar.style.width = `${Math.max(0, (playerJetpackFuel / MAX_FUEL) * 100)}%`;
    }
    if (coinsEl) coinsEl.innerText = playerCoins.toString();
    // Update HP digit if visible
    const hpDigit = document.getElementById('health-digit');
    if (hpDigit && hpDigit.style.display !== 'none') {
        hpDigit.innerText = `${Math.max(0, Math.round(playerHealth))} / ${maxPlayerHealth}`;
    }
    const v = document.getElementById('damage-vignette');
    if (v) {
        if (playerHealth < 30) {
            v.style.opacity = '1'; const i = (30 - playerHealth) / 30;
            v.style.boxShadow = `inset 0 0 ${i * 100}px rgba(255,0,0,${i})`;
        } else v.style.opacity = '0';
    }
}

function takeDamage(amount: number) {
    if (!gameStarted || playerHealth <= 0) return;

    playerHealth -= amount;

    // Sangre en pantalla
    const dmgOverlay = document.createElement('div');
    dmgOverlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,0,0,0.4);pointer-events:none;z-index:100;transition:opacity 0.2s;';
    document.body.appendChild(dmgOverlay);
    setTimeout(() => {
        dmgOverlay.style.opacity = '0';
        setTimeout(() => dmgOverlay.remove(), 200);
    }, 50);

    updateStatsHUD();

    // Reproducir sonido de daño si está disponible
    if ((soundManager as any).playHurt) {
        (soundManager as any).playHurt();
    } else {
        soundManager.playGroan(); // Alternativa (quejido)
    }

    if (playerHealth <= 0) {
        playerHealth = 0;
        localPlayerDeaths++;
        if (isMultiplayer && (socket as any)?.connected) {
            if (!isDowned) {
                isDowned = true;
                downedTimer = 60.0;
                const ds = document.getElementById('downed-screen');
                if (ds) ds.style.display = 'flex';
                (socket as any).emit('player-downed', { name: myUsername });
                
                // Effect to orient the camera like falling down
                camera.rotation.z = Math.PI / 2;
                camera.position.y = 0.5;
            }
        } else {
            gameOver();
        }
    }
}

function gameOver() {
    // Verificar que el juego esté activo antes de ejecutar el fin de partida
    if (!gameStarted) return;
    gameStarted = false;
    soundManager.startLossMusic();
    // En móvil, llamar controls.unlock() causa un error grave que congela la pantalla.
    // Solo se ejecuta en modo PC donde el PointerLock está activo.
    if (!isMobile) controls.unlock();

    if (isMultiplayer && socket?.connected) {
        socket.emit('player-died', { name: myUsername });
    }

    const goScreen = document.getElementById('game-over');
    if (goScreen) {
        goScreen.style.display = 'flex';
        // Mostrar cuántas oleadas se sobrevivió
        const finalStats = document.getElementById('final-stats');
        if (finalStats) {
            finalStats.innerText = `Waves Survived: ${waveManager.currentWave > 0 ? waveManager.currentWave - 1 : 0}`;
        }
        // Mostrar el nombre del monstruo asesino
        const killedByEl = document.getElementById('killed-by');
        if (killedByEl) {
            const killerName = lastAttackerName === 'UNKNOWN' ? 'A GRUESOME MONSTER' : lastAttackerName.toUpperCase();
            killedByEl.innerText = `KILLED BY: ${killerName}`;
        }

        // Multiplayer / Singleplayer logic
        const btnRestart = document.getElementById('btn-restart');
        const mpBtns = document.getElementById('mp-death-btns');
        if (isMultiplayer) {
            if (btnRestart) btnRestart.style.display = 'none';
            if (mpBtns) mpBtns.style.display = 'flex';
        } else {
            if (btnRestart) btnRestart.style.display = 'block';
            if (mpBtns) mpBtns.style.display = 'none';
        }
    }

    // Ocultar el HUD y la mira
    uiLayer.style.display = 'none';
    crosshair.style.display = 'none';
    // Ocultar controles móviles (si existen) al morir
    const mobileCtrl = document.getElementById('mobile-controls');
    if (mobileCtrl) mobileCtrl.style.display = 'none';
}

// ---- SISTEMA DE NUBES ----
// Sistema para crear y animar las nubes flotantes en el cielo del juego
const cloudGroup = new THREE.Group();
function createClouds() {
    const cloudMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15, // Más transparente
        flatShading: true,
        fog: false // Asegurar visibilidad
    });
    for (let i = 0; i < 15; i++) {
        const cloud = new THREE.Group();
        const parts = 3 + Math.floor(Math.random() * 4);
        for (let j = 0; j < parts; j++) {
            const partGeo = new THREE.DodecahedronGeometry(5 + Math.random() * 5, 0);
            const part = new THREE.Mesh(partGeo, cloudMat);
            part.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 10
            );
            part.scale.set(1.5, 0.6, 1);
            cloud.add(part);
        }
        const angle = Math.random() * Math.PI * 2;
        const radius = 50 + Math.random() * 100;
        cloud.position.set(Math.cos(angle) * radius, 50 + Math.random() * 15, Math.sin(angle) * radius);
        cloudGroup.add(cloud);
    }
    scene.add(cloudGroup);
}


// ---- ILUMINACIÓN ----
const ambientLight = new THREE.HemisphereLight(0x5a308e, 0x2a1a4a, 0.7); // Bright, clearer purple ambient
scene.add(ambientLight);

// Dense exponential fog like the video
scene.fog = new THREE.FogExp2(0x3a155a, 0.005); // Lighter, purple fog, longer visibility

// Luz puntal naranja espeluznante cerca del Black Market para añadir variedad de color
const bmLight = new THREE.PointLight(0xff6600, 3, 25);
bmLight.position.set(30, 3, -40);
scene.add(bmLight);


// ---- CLASSES & LOGIC ----

// ---- CLASSES & LOGIC (Reordered for declaration safety) ----


// ---- UTILITIES ----

// ---- 3D FLOATING MARKER ----
let shopMarker: THREE.Group;
function createShopMarker() {
    const group = new THREE.Group();
    // A simple floating diamond or skull-like shape
    const geo = new THREE.OctahedronGeometry(0.8, 0);
    const mat = new THREE.MeshBasicMaterial({ color: 0xffcc00, wireframe: true });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    // Inner glow
    const innerGeo = new THREE.SphereGeometry(0.4, 8, 8);
    const innerMat = new THREE.MeshBasicMaterial({ color: 0xff3333 });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);

    group.position.set(30, 8, -40); // Above the building
    scene.add(group);
    return group;
}

// ---- ESTADOS GLOBALES DEL JUEGO ----
createClouds();
shopMarker = createShopMarker();

// Luz de relleno morada/azul inquietante en el lado opuesto del mapa
const fillLight = new THREE.PointLight(0x3300ff, 2, 40);
fillLight.position.set(-30, 5, 30);
scene.add(fillLight);

// The Moon & Moon Light
const moonLight = new THREE.DirectionalLight(0xffffff, 0.7); // Luz de luna más clara
moonLight.position.set(-60, 100, -120);
moonLight.castShadow = true;
// Optimizar sombras para mayor alcance - frustum más ajustado para rendimiento
moonLight.shadow.camera.left = -80;
moonLight.shadow.camera.right = 80;
moonLight.shadow.camera.top = 80;
moonLight.shadow.camera.bottom = -80;
moonLight.shadow.mapSize.width = 512; // Mapa más pequeño para ganar FPS
moonLight.shadow.mapSize.height = 512;
scene.add(moonLight);

// LUNA BLANCA GIGANTE
const moonGeo = new THREE.SphereGeometry(14, 32, 32);
const moonMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false }); // SIN NIEBLA
const moon = new THREE.Mesh(moonGeo, moonMat);
moon.position.copy(moonLight.position);
scene.add(moon);

// MOON HALO (Glow Effect)
const haloGeo = new THREE.SphereGeometry(18, 32, 32);
const haloMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.2,
    side: THREE.BackSide,
    fog: false // NO FOG
});
const halo = new THREE.Mesh(haloGeo, haloMat);
halo.position.copy(moon.position);
scene.add(halo);

// ---- SISTEMA DE COLISIONES ----
// Sistema de colisiones para evitar que el jugador atraviese las paredes o los modelos
// Dos arreglos separados: uno para movimiento del JUGADOR, otro para detección de balas ENEMIGAS
const playerCollidables: THREE.Object3D[] = []; // paredes, edificios, límites
const collidables: THREE.Object3D[] = [];        // lo mismo + torsos de enemigos (mantenido por compatibilidad)
const collisionRaycaster = new THREE.Raycaster();
const collisionDirections = [
    new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1),
    // 4 Direcciones diagonales para colisión perfecta en las esquinas de los edificios
    new THREE.Vector3(1, 0, 1).normalize(), new THREE.Vector3(-1, 0, 1).normalize(),
    new THREE.Vector3(1, 0, -1).normalize(), new THREE.Vector3(-1, 0, -1).normalize()
];

// Colisiones matemáticas en forma de cilindro para garantizar que no se atraviese ningún cuerpo base y deslice perfectamente
const collisionCylinders: { x: number, z: number, radius: number, height: number }[] = [];

// ---- TERRENO Y CÉSPED ----
// Suelo principal de pocos polígonos (low poly)
const floorGeo = new THREE.PlaneGeometry(300, 300, 32, 32);
const pos = floorGeo.attributes.position;
for (let i = 0; i < pos.count; i++) {
    if (i % 33 !== 0 && i % 33 !== 32 && Math.floor(i / 33) !== 0 && Math.floor(i / 33) !== 32) {
        pos.setZ(i, Math.random() * 0.8 - 0.4); // Aleatorizar alturas para terreno irregular low poly
    }
}
floorGeo.computeVertexNormals();
// Crear textura procedural para que el piso nunca se vea como un vacío transparente
const floorCanvas = document.createElement('canvas');
floorCanvas.width = 512; floorCanvas.height = 512;
const floorCtx = floorCanvas.getContext('2d')!;
// Fill solid base (muted brownish earth)
floorCtx.fillStyle = '#221a15';
floorCtx.fillRect(0, 0, 512, 512);
// Draw noise
for (let i = 0; i < 4000; i++) {
    const r = Math.random();
    floorCtx.fillStyle = r > 0.5 ? '#1f1611' : '#292019';
    floorCtx.fillRect(Math.random() * 512, Math.random() * 512, 4, 4);
    if (r > 0.95) {
        floorCtx.fillStyle = '#110d0a';
        floorCtx.fillRect(Math.random() * 512, Math.random() * 512, 8, 8);
    }
}
const floorTex = new THREE.CanvasTexture(floorCanvas);
floorTex.wrapS = THREE.RepeatWrapping;
floorTex.wrapT = THREE.RepeatWrapping;
floorTex.repeat.set(120, 120);

const floorMat = new THREE.MeshStandardMaterial({
    map: floorTex,
    roughness: 0.9,
    metalness: 0.1,
    flatShading: true
});
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

// ---- LÍMITES DEL MAPA ----
const boundaryRadius = 145;
const boundaryGeo = new THREE.CylinderGeometry(boundaryRadius, boundaryRadius, 10, 32, 1, true);
const boundaryMat = new THREE.MeshBasicMaterial({ visible: false });
const boundary = new THREE.Mesh(boundaryGeo, boundaryMat);
boundary.position.y = 5;
scene.add(boundary);
collidables.push(boundary);
playerCollidables.push(boundary); // Boundary applies to player

// Césped instanciado de alto rendimiento
const grassWidth = 0.2;
const grassHeight = 0.9;
const grassGeo = new THREE.ConeGeometry(grassWidth, grassHeight, 3);
grassGeo.translate(0, grassHeight / 2, 0); // origen a la base

// Generador pseudo-aleatorio para el mapa (Posiciones FIJAS pero con aspecto random)
let mapSeed = 827461;
function seededRandom() {
    mapSeed = (mapSeed * 9301 + 49297) % 233280;
    return mapSeed / 233280;
}

const grassMat = new THREE.MeshStandardMaterial({
    color: 0x3a4d1a, // Verde oliva oscuro
    flatShading: true
});
// Más triángulos de césped para un aspecto de suelo// ---- HIERBA ----
const grassCount = 8000; // Increased significantly for visual richness
const grassInstanced = new THREE.InstancedMesh(grassGeo, grassMat, grassCount);
// grassInstanced.receiveShadow = true; // Desactivar sombras en el césped para aumentar FPS

const dummy = new THREE.Object3D();
for (let i = 0; i < grassCount; i++) {
    const x = (seededRandom() - 0.5) * 120;
    const z = (seededRandom() - 0.5) * 120;

    if (Math.abs(x) < 3 && Math.abs(z) < 3) continue;

    dummy.position.set(x, 0, z);
    dummy.rotation.y = seededRandom() * Math.PI;
    dummy.rotation.x = (seededRandom() - 0.5) * 0.2; // ligera inclinación
    dummy.rotation.z = (seededRandom() - 0.5) * 0.2;
    dummy.scale.setScalar(0.5 + seededRandom());
    dummy.updateMatrix();
    grassInstanced.setMatrixAt(i, dummy.matrix);
}
scene.add(grassInstanced);

// ---- ÁRBOLES ----
function createTree() {
    const tree = new THREE.Group();
    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.4, 3, 5);
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x3e2723 }); // Cheaper material
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 1.5;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    collidables.push(trunk);
    playerCollidables.push(trunk);
    tree.add(trunk);

    // Dead Branches instead of leaves
    const branchMat = new THREE.MeshLambertMaterial({ color: 0x221100 });
    for (let i = 0; i < 5; i++) {
        const branchGeo = new THREE.CylinderGeometry(0.05, 0.1, 1.5, 4);
        const branch = new THREE.Mesh(branchGeo, branchMat);
        branch.position.y = 2 + seededRandom() * 2;
        branch.rotation.x = seededRandom() * Math.PI;
        branch.rotation.z = seededRandom() * Math.PI;
        branch.castShadow = true;
        tree.add(branch);
    }

    // PINE VARIANT (Video style)
    if (seededRandom() > 0.5) {
        const pineMat = new THREE.MeshLambertMaterial({ color: 0x1b3022 });
        for (let i = 0; i < 3; i++) {
            const coneGeo = new THREE.ConeGeometry(1.5 - i * 0.4, 2, 6);
            const cone = new THREE.Mesh(coneGeo, pineMat);
            cone.position.y = 2.5 + i * 1.5;
            tree.add(cone);
        }
    }

    return tree;
}

const occupiedZones: {x: number, z: number, r: number}[] = [
    {x: 0, z: 0, r: 8}, // Spawn Point
    {x: -60, z: 60, r: 10}, // Main Tower
    {x: 30, z: -40, r: 10} // Black Market
];

function getSafePosition(minRad: number, maxRad: number, objRad: number): THREE.Vector3 {
    let pos = new THREE.Vector3();
    let safe = false;
    let attempts = 0;
    while (!safe && attempts < 50) {
        const angle = seededRandom() ? (Math.random() * Math.PI * 2) : (Math.random() * Math.PI * 2);
        const rad = minRad + Math.random() * (maxRad - minRad);
        const px = Math.cos(angle) * rad;
        const pz = Math.sin(angle) * rad;
        
        safe = true;
        for (const z of occupiedZones) {
            const dx = px - z.x;
            const dz = pz - z.z;
            if (dx*dx + dz*dz < (z.r + objRad)*(z.r + objRad)) { safe = false; break; }
        }
        if (safe) {
            pos.set(px, 0, pz);
            occupiedZones.push({x: px, z: pz, r: objRad});
            return pos;
        }
        attempts++;
    }
    const backupAngle = Math.random() * Math.PI * 2;
    const backupRad = minRad + Math.random() * (maxRad - minRad);
    return pos.set(Math.cos(backupAngle) * backupRad, 0, Math.sin(backupAngle) * backupRad);
}

const trees: THREE.Group[] = [];
for (let i = 0; i < 60; i++) {
    const tree = createTree();
    const pos = getSafePosition(10, 80, 2.5);
    tree.position.copy(pos);
    tree.rotation.y = Math.random() * Math.PI;

    // Random height variation
    tree.scale.setScalar(0.8 + Math.random() * 0.6);
    tree.updateMatrixWorld(true);
    scene.add(tree);
    trees.push(tree);
}

// ---- BUSHES (No Collision) ----
function createBush() {
    const bush = new THREE.Group();
    const geo = new THREE.DodecahedronGeometry(0.8, 0);
    const mat = new THREE.MeshStandardMaterial({ color: 0x1a451a, flatShading: true });

    for (let i = 0; i < 3; i++) {
        const leaf = new THREE.Mesh(geo, mat);
        leaf.position.set((seededRandom() - 0.5) * 0.8, (seededRandom() * 0.5), (seededRandom() - 0.5) * 0.8);
        leaf.scale.setScalar(0.5 + seededRandom() * 0.8);
        leaf.castShadow = true;
        leaf.receiveShadow = true;
        bush.add(leaf);
    }
    return bush;
}

for (let i = 0; i < 40; i++) {
    const bush = createBush();
    const pos = getSafePosition(5, 85, 1.5);
    bush.position.set(pos.x, 0.4, pos.z);
    bush.updateMatrixWorld(true);
    scene.add(bush);
}

// ---- ASSETS & POIS ----
function createFence() {
    const fence = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ color: 0x4e342e, flatShading: true }); // Brownish fence

    // Posts
    for (let i = 0; i < 2; i++) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 0.1), material);
        post.position.set(i === 0 ? -1 : 1, 0.6, 0);
        post.castShadow = true;
        fence.add(post);
        playerCollidables.push(post);
    }

    // Horizontal bars
    for (let i = 0; i < 3; i++) {
        const bar = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.1, 0.05), material);
        bar.position.set(0, 0.3 + i * 0.4, 0);
        bar.castShadow = true;
        fence.add(bar);
        playerCollidables.push(bar); // Add to player collision
    }
    return fence;
}

function createRuinedCar() {
    const car = new THREE.Group();
    const bodyColors = [0x546e7a, 0x78909c, 0x455a64]; // Muted blue/gray car colors
    const bodyMat = new THREE.MeshStandardMaterial({
        color: bodyColors[Math.floor(Math.random() * bodyColors.length)],
        flatShading: true
    });

    // Base
    const base = new THREE.Mesh(new THREE.BoxGeometry(2, 0.6, 4), bodyMat);
    base.position.y = 0.4;
    base.castShadow = true;
    base.receiveShadow = true;
    car.add(base);
    collidables.push(base);
    playerCollidables.push(base); // Player can't walk through cars

    // Top
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.6, 2), bodyMat);
    top.position.set(0, 1.0, -0.2);
    top.castShadow = true;
    car.add(top);
    playerCollidables.push(top); // Collision for top too

    // Add a small flickering "emergency" light to some cars
    if (Math.random() > 0.7) {
        const light = new THREE.PointLight(Math.random() > 0.5 ? 0xff0000 : 0xffaa00, 2, 8);
        light.position.set(0, 1.2, 0);
        car.add(light);
    }

    // Wheels (low poly)
    const wheelGeo = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    for (let x = -1; x <= 1; x += 2) {
        for (let z = -1; z <= 1; z += 2) {
            const wheel = new THREE.Mesh(wheelGeo, wheelMat);
            wheel.position.set(x * 0.9, 0.2, z * 1.5);
            car.add(wheel);
        }
    }
    return car;
}

function createBlackMarketBuilding() {
    const building = new THREE.Group();
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x37474f, flatShading: true }); // Dark slate blue building
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x5d4037, flatShading: true }); // Brownish roof

    // Main Structure
    const body = new THREE.Mesh(new THREE.BoxGeometry(8, 5, 6), wallMat);
    body.position.y = 2.5;
    body.castShadow = true;
    body.receiveShadow = true;
    building.add(body);
    collidables.push(body);
    playerCollidables.push(body); // Player can't walk through building

    // Roof
    const roof = new THREE.Mesh(new THREE.BoxGeometry(9, 0.5, 7), roofMat);
    roof.position.y = 5.25;
    roof.castShadow = true;
    building.add(roof);
    collidables.push(roof);
    playerCollidables.push(roof);

    // Sign (Glowing)
    const signGeo = new THREE.BoxGeometry(3.5, 1.2, 0.2);
    const signMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(0, 4, 3.1);
    building.add(sign);

    // Glowing "☠" or Red light behind sign
    const glowGeo = new THREE.PlaneGeometry(3.2, 0.8);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.8 });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.set(0, 4, 3.15);
    building.add(glow);

    return building;
}

function createTower() {
    const tower = new THREE.Group();
    const stoneMat = new THREE.MeshLambertMaterial({ color: 0x1a1a2e });

    // Base tier
    const base = new THREE.Mesh(new THREE.BoxGeometry(6, 8, 6), stoneMat);
    base.position.y = 4;
    tower.add(base);
    collidables.push(base);
    playerCollidables.push(base);

    // Middle tier
    const mid = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 4), stoneMat);
    mid.position.y = 11;
    tower.add(mid);
    collidables.push(mid);
    playerCollidables.push(mid);

    // Top tier
    const top = new THREE.Mesh(new THREE.BoxGeometry(3, 4, 3), stoneMat);
    top.position.y = 16;
    tower.add(top);
    collidables.push(top);
    playerCollidables.push(top);

    // Beacon light
    const beacon = new THREE.PointLight(0x00ffff, 5, 30);
    beacon.position.set(0, 18.5, 0);
    tower.add(beacon);

    const bulbGeo = new THREE.SphereGeometry(0.5, 8, 8);
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const bulb = new THREE.Mesh(bulbGeo, bulbMat);
    bulb.position.set(0, 18.5, 0);
    tower.add(bulb);

    return tower;
}

// Casa: el cuerpo y tejado visibles son las colisiones.
function createHouse() {
    const house = new THREE.Group();
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x4e342e });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x212121 });

    // Cuerpo principal de la casa
    const base = new THREE.Mesh(new THREE.BoxGeometry(5, 4, 5), wallMat);
    base.position.y = 2;  // centro en Y=2 => pies en y=0, techo en y=4
    base.castShadow = true;
    base.receiveShadow = true;
    house.add(base);

    // Tejado visual
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 4, 3, 4), roofMat);
    roof.position.y = 5.5;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    house.add(roof);

    return house;
}

// Añadir la Torre
const mainTower = createTower();
mainTower.position.set(-60, 0, 60);
scene.add(mainTower);
// Torre cilindro: base 6x6 -> radio ~4, altura 8
collisionCylinders.push({ x: -60, z: 60, radius: 4.0, height: 8 });

// Añadir Casas
for (let i = 0; i < 10; i++) {
    const house = createHouse();
    const pos = getSafePosition(25, 90, 6.0);
    house.position.copy(pos);
    house.rotation.y = Math.random() * Math.PI;
    house.updateMatrixWorld(true);
    scene.add(house);

    // Empujar todas las mallas de la casa a las colisiones
    house.children.forEach(c => {
        if (c instanceof THREE.Mesh) {
            collidables.push(c);
            playerCollidables.push(c);
        }
    });

    // Verdaderas colisiones: sólo dependemos de playerCollidables (raycasting) para forma cuadrada
    // (Se eliminó collisionCylinders.push para las casas)
}

// Añadir el edificio del Black Market en una posición FIJA que coincida con el marcador del cielo
const BM_X = 30, BM_Z = -40; // coincide con la posición de shopMarker definida más adelante
const blackMarket = createBlackMarketBuilding();
blackMarket.position.set(BM_X, 0, BM_Z);
scene.add(blackMarket);
// BlackMarket cilindro eliminado para permitir colisión rectangular real

// Etiqueta de texto 3D flotante "BLACK MARKET" sobre el edificio
const bmCanvas = document.createElement('canvas');
bmCanvas.width = 512; bmCanvas.height = 128;
const bmCtx = bmCanvas.getContext('2d')!;
bmCtx.fillStyle = 'rgba(0,0,0,0)';
bmCtx.fillRect(0, 0, 512, 128);
bmCtx.font = 'bold 52px Impact';
bmCtx.textAlign = 'center';
bmCtx.strokeStyle = '#ff0000'; bmCtx.lineWidth = 6;
bmCtx.strokeText('☠ BLACK MARKET', 256, 80);
bmCtx.fillStyle = '#ffcc00';
bmCtx.fillText('☠ BLACK MARKET', 256, 80);
const bmTex = new THREE.CanvasTexture(bmCanvas);
const bmSpriteMat = new THREE.SpriteMaterial({ map: bmTex, depthTest: false });
const bmSprite = new THREE.Sprite(bmSpriteMat);
bmSprite.position.set(BM_X, 7.5, BM_Z);
bmSprite.scale.set(6, 1.5, 1);
scene.add(bmSprite);

// Distribuir coches
for (let i = 0; i < 8; i++) {
    const car = createRuinedCar();
    const pos = getSafePosition(15, 85, 3.5);
    car.position.copy(pos);
    car.rotation.y = Math.random() * Math.PI;
    scene.add(car);
    // Coche cilindro: base 2x4 -> radio aprox 2.5, altura 1.0 (sólo cubre la base)
    // Colisión basada en playerCollidables únicamente
}

// Distribuir vallas
for (let i = 0; i < 15; i++) {
    const fence = createFence();
    const pos = getSafePosition(10, 85, 2.5);
    fence.position.copy(pos);
    fence.rotation.y = Math.random() * Math.PI;
    scene.add(fence);
}

// Las armas especiales NO aparecen en el mapa al inicio.
// En su lugar, se distribuyen por oleada en startNextWave():
//   Oleada 1 → Pistola Láser
//   Oleada 2 → Lanzacohetes
//   Oleada 3 → Minigun
//   Oleada 4 → Lanzallamas

// Scatter Ammo Pickups
for (let i = 0; i < 15; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 20 + Math.random() * 70;
    const pos = new THREE.Vector3(Math.cos(angle) * radius, 0.5, Math.sin(angle) * radius);
    ammoPickups.push(new AmmoPickup(pos));
}

// ---- BIOMA ----
enum Biome { FOREST = 0, SNOW = 1, LAVA = 2, CASTLE = 3 }
let currentBiome: Biome = Biome.FOREST;
let playerSlowDebuff = 0; // segundos de ralentización por ataque nevado

// Definición de los diferentes tipos de enemigos y sus características (salud, velocidad, daño)
enum EnemyType {
    STANDARD,
    TANK,
    FAST,
    HUMANOID,
    ZOMBIE_ON_FIRE,
    ROBOT,
    BOSS_GOLIATH,
    BOSS_SENTINEL,
    BOSS_FINAL_ROBOT,
    // ===== BIOMA NIEVE =====
    SNOW_ZOMBIE,        // Zombie nevado — ralentiza al jugador
    SNOW_FAST,          // Zombie rápido nevado — ralentiza más
    REINDEER_ZOMBIE,    // Zombie montado en reno — salta obstáculos
    SNOWMAN,            // Hombre de nieve — lanza bolas de nieve
    BOSS_SNOW_GOLIATH,  // Gigante nevado (Wave 15)
    BOSS_GIANT_SNOWMAN, // Snowman Gigante (Wave 18)
    BOSS_BLIZZARD_KING, // Rey de la Ventisca — fusión zombie+snowman (Wave 20)
    // ===== BIOMA LAVA =====
    LAVA_ZOMBIE,        // Zombie de lava — te ciega al golpearte
    RED_DRAGON,         // Dragón rojo — ranged fire que ciega
    MAGMA_GIANT,        // Gigante de magma — mucha vida, cuerpo de esferas
    BOSS_LAVA_GOLIATH,  // Goliath de lava — gigante (Wave 25)
    BOSS_LAVA_DRAGON,   // Dragón de lava gigante — ranged (Wave 28)
    BOSS_MAGMA_TITAN,   // Titán de magma — enorme (Wave 28)
    BOSS_PURPLE_DRAGON, // Dragón Morado FINAL — vuela, ráfagas de fuego (Wave 30)
    // ===== BIOMA CASTILLO =====
    ARMORED_ZOMBIE,      // Zombie pequeño con armadura gris/roja con manchas de sangre
    ARMORED_ZOMBIE_LARGE,// Zombie normal con armadura gris/roja — más resistente
    VAMPIRE,             // Vampiro — capa oscura, ranged (drena vida)
    BAT,                 // Murciélago — vuela, pequeño, rápido, muerde
    DINOSAUR,            // Dinosaurio gigante — lento, enorme HP
    BOSS_GIANT_ARMORED,  // Zombie Armado Gigante (Wave 35)
    BOSS_GIANT_DINO,     // Dinosaurio Gigante (Wave 38)
    BOSS_ZOMBIE_OVERLORD // Mega Zombie — Espada en llamas + alas de fuego (FINAL Wave 40)
}

interface EnemyStats {
    health: number;
    speed: number;
    damage: number;
    shirtColor: number;
    skinColor: number;
    size: number;
    attackRange: number;
    attackCooldown: number;
    reward: number;
    name: string;
    slowDuration?: number; // segundos de slowdown al atacar (solo nieve)
}

const ENEMY_DATA: Record<EnemyType, EnemyStats> = {
    [EnemyType.STANDARD]:          { health: 70,   speed: 2.2, damage: 10, shirtColor: 0x673ab7, skinColor: 0x558b2f, size: 1.0, attackRange: 1.5,  attackCooldown: 1000, reward: 15,   name: "ZOMBIE" },
    [EnemyType.TANK]:              { health: 180,  speed: 1.3, damage: 25, shirtColor: 0x37474f, skinColor: 0x6d4c41, size: 1.4, attackRange: 1.8,  attackCooldown: 1500, reward: 50,   name: "TANK ZOMBIE" },
    [EnemyType.FAST]:              { health: 40,   speed: 3.8, damage: 5,  shirtColor: 0xb71c1c, skinColor: 0x827717, size: 0.85,attackRange: 1.2,  attackCooldown: 500,  reward: 30,   name: "FAST ZOMBIE" },
    [EnemyType.HUMANOID]:          { health: 60,   speed: 2.5, damage: 12, shirtColor: 0x2196f3, skinColor: 0xd1d1d1, size: 1.0, attackRange: 1.5,  attackCooldown: 900,  reward: 20,   name: "HUMAN ZOMBIE" },
    [EnemyType.ZOMBIE_ON_FIRE]:    { health: 90,   speed: 2.5, damage: 5,  shirtColor: 0xdd4400, skinColor: 0xffaa00, size: 1.0, attackRange: 1.5,  attackCooldown: 900,  reward: 40,   name: "ZOMBIE ON FIRE" },
    [EnemyType.ROBOT]:             { health: 250,  speed: 2.5, damage: 15, shirtColor: 0x444444, skinColor: 0x888888, size: 1.1, attackRange: 15.0, attackCooldown: 2000, reward: 100,  name: "ROBOT" },
    [EnemyType.BOSS_GOLIATH]:      { health: 1200, speed: 1.8, damage: 45, shirtColor: 0x1a1a1a, skinColor: 0x2d3d1d, size: 2.5, attackRange: 2.5,  attackCooldown: 1200, reward: 500,  name: "GOLIATH" },
    [EnemyType.BOSS_SENTINEL]:     { health: 1400, speed: 1.2, damage: 20, shirtColor: 0x222222, skinColor: 0x555555, size: 2.2, attackRange: 18.0, attackCooldown: 250,  reward: 1000, name: "SENTINEL" },
    [EnemyType.BOSS_FINAL_ROBOT]:  { health: 4500, speed: 4.5, damage: 40, shirtColor: 0x000000, skinColor: 0x555555, size: 4.5, attackRange: 15.0, attackCooldown: 300,  reward: 5000, name: "ULTIMATE MECHA-ZOMBIE" },
    // ===== NIEVE =====
    [EnemyType.SNOW_ZOMBIE]:       { health: 300,  speed: 2.0, damage: 12, shirtColor: 0x4a5568, skinColor: 0xb0c4de, size: 1.0, attackRange: 1.5,  attackCooldown: 1000, reward: 25,   name: "SNOW ZOMBIE",    slowDuration: 2.0 },
    [EnemyType.SNOW_FAST]:         { health: 150,  speed: 4.2, damage: 8,  shirtColor: 0x334455, skinColor: 0x8899aa, size: 0.8, attackRange: 1.2,  attackCooldown: 450,  reward: 40,   name: "SNOW RUNNER",   slowDuration: 1.5 },
    [EnemyType.REINDEER_ZOMBIE]:   { health: 350,  speed: 2.8, damage: 14, shirtColor: 0x4a3728, skinColor: 0xb0c4de, size: 1.1, attackRange: 1.8,  attackCooldown: 1100, reward: 60,   name: "REINDEER ZOMBIE",slowDuration: 2.5 },
    [EnemyType.SNOWMAN]:           { health: 400,  speed: 1.6, damage: 10, shirtColor: 0xcc2200, skinColor: 0xf0f8ff, size: 1.2, attackRange: 22.0, attackCooldown: 2200, reward: 90,   name: "SNOWMAN",       slowDuration: 3.0 },
    [EnemyType.BOSS_SNOW_GOLIATH]: { health: 7000, speed: 1.5, damage: 55, shirtColor: 0x2a3040, skinColor: 0x8ab4d4, size: 2.8, attackRange: 2.8,  attackCooldown: 1300, reward: 700,  name: "SNOW GOLIATH",  slowDuration: 3.5 },
    [EnemyType.BOSS_GIANT_SNOWMAN]:{ health: 4500, speed: 1.2, damage: 15, shirtColor: 0x990000, skinColor: 0xf0f8ff, size: 3.5, attackRange: 22.0, attackCooldown: 1800, reward: 1200, name: "GIANT SNOWMAN",  slowDuration: 4.0 },
    [EnemyType.BOSS_BLIZZARD_KING]:{ health: 22000,speed: 3.5, damage: 50, shirtColor: 0x001133, skinColor: 0xaaddff, size: 5.0, attackRange: 22.0, attackCooldown: 280,  reward: 8000, name: "BLIZZARD KING",  slowDuration: 5.0 },
    // ===== LAVA =====
    [EnemyType.LAVA_ZOMBIE]:       { health: 600,  speed: 2.3, damage: 25, shirtColor: 0x8b1a00, skinColor: 0xff4400, size: 1.0, attackRange: 1.5,  attackCooldown: 900,  reward: 60,   name: "LAVA ZOMBIE" },
    [EnemyType.RED_DRAGON]:        { health: 450,  speed: 3.5, damage: 20, shirtColor: 0x660000, skinColor: 0xcc2200, size: 1.3, attackRange: 25.0, attackCooldown: 2200, reward: 120,  name: "RED DRAGON" },
    [EnemyType.MAGMA_GIANT]:       { health: 1000, speed: 1.4, damage: 35, shirtColor: 0x4a1000, skinColor: 0xff6600, size: 1.8, attackRange: 2.0,  attackCooldown: 1400, reward: 180,  name: "MAGMA GIANT" },
    [EnemyType.BOSS_LAVA_GOLIATH]: { health: 15000,speed: 1.8, damage: 70, shirtColor: 0x3d0000, skinColor: 0xff2200, size: 3.0, attackRange: 3.0,  attackCooldown: 1200, reward: 1500, name: "LAVA GOLIATH" },
    [EnemyType.BOSS_LAVA_DRAGON]:  { health: 18000,speed: 3.0, damage: 40, shirtColor: 0x550000, skinColor: 0xdd0000, size: 3.5, attackRange: 28.0, attackCooldown: 1800, reward: 2000, name: "LAVA DRAGON" },
    [EnemyType.BOSS_MAGMA_TITAN]:  { health: 25000,speed: 1.3, damage: 90, shirtColor: 0x2a0800, skinColor: 0xff5500, size: 4.0, attackRange: 4.0,  attackCooldown: 1600, reward: 3000, name: "MAGMA TITAN" },
    [EnemyType.BOSS_PURPLE_DRAGON]:{ health: 60000,speed: 4.0, damage: 60, shirtColor: 0x220044, skinColor: 0x8800cc, size: 5.5, attackRange: 35.0, attackCooldown: 400,  reward: 10000,name: "PURPLE DRAGON" },
    // ===== CASTILLO =====
    [EnemyType.ARMORED_ZOMBIE]:     { health: 750,  speed: 2.0, damage: 30, shirtColor: 0x880011, skinColor: 0xbbbbbb, size: 0.85,attackRange: 1.5,  attackCooldown: 950,  reward: 70,   name: "ARMORED ZOMBIE" },
    [EnemyType.ARMORED_ZOMBIE_LARGE]:{ health:1200, speed: 1.8, damage: 40, shirtColor: 0x880011, skinColor: 0xaaaaaa, size: 1.1, attackRange: 1.8,  attackCooldown: 1100, reward: 100,  name: "HEAVY ARMORED ZOMBIE" },
    [EnemyType.VAMPIRE]:            { health: 900,  speed: 3.2, damage: 25, shirtColor: 0x220033, skinColor: 0x881122, size: 1.0, attackRange: 20.0, attackCooldown: 2000, reward: 120,  name: "VAMPIRE" },
    [EnemyType.BAT]:                { health: 200,  speed: 5.0, damage: 12, shirtColor: 0x1a0022, skinColor: 0x331144, size: 0.6, attackRange: 1.5,  attackCooldown: 500,  reward: 45,   name: "GIANT BAT" },
    [EnemyType.DINOSAUR]:           { health: 2500, speed: 1.5, damage: 55, shirtColor: 0x1a3300, skinColor: 0x3a6600, size: 1.9, attackRange: 2.2,  attackCooldown: 1600, reward: 200,  name: "DINOSAUR" },
    [EnemyType.BOSS_GIANT_ARMORED]: { health: 20000,speed: 1.6, damage: 75, shirtColor: 0x660009, skinColor: 0x999999, size: 2.8, attackRange: 3.0,  attackCooldown: 1300, reward: 1800, name: "ARMORED GIANT" },
    [EnemyType.BOSS_GIANT_DINO]:    { health: 40000,speed: 1.2, damage: 90, shirtColor: 0x0f2200, skinColor: 0x2a5500, size: 4.0, attackRange: 4.5,  attackCooldown: 1700, reward: 3500, name: "GIANT DINOSAUR" },
    [EnemyType.BOSS_ZOMBIE_OVERLORD]:{ health:90000,speed: 3.5, damage: 80, shirtColor: 0x2a0000, skinColor: 0xbbbbbb, size: 5.0, attackRange: 30.0, attackCooldown: 350,  reward: 15000,name: "ZOMBIE OVERLORD" },
};

class Enemy {
    mesh: THREE.Group;
    type: EnemyType;
    health: number;
    maxHealth: number;
    speed: number;
    damage: number;
    attackRange: number;
    attackCooldown: number;
    lastAttackTime: number = 0;
    bobOffset: number = Math.random() * Math.PI * 2;
    isDead: boolean = false;
    isFlinching: boolean = false;
    flinchTimer: number = 0;
    flashTimer: number = 0;
    spawnY: number = -2.0;
    spawnTime: number = 2.0;
    spawnTimer: number = 0;
    shirtColor: number;
    skinColor: number;
    nid: string; // Unique network ID for multiplayer sync
    isAlive: boolean = true;
    networkPosition: THREE.Vector3 | null = null;
    networkRotY: number | null = null;
    private avoidVector = new THREE.Vector3(); // Para evitar colisiones
    // Guardar referencias para restaurar colores fácilmente
    bodyParts: { mesh: THREE.Mesh; color: number }[] = [];
    overheadBarEl: HTMLElement | null = null;

    constructor(type: EnemyType, position: THREE.Vector3) {
        this.type = type;
        this.nid = `e_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
        const stats = ENEMY_DATA[type];
        this.health = stats.health;
        this.maxHealth = stats.health;
        this.speed = stats.speed;
        this.damage = stats.damage;
        this.attackRange = stats.attackRange;
        this.attackCooldown = stats.attackCooldown;
        this.shirtColor = stats.shirtColor;
        this.skinColor = stats.skinColor;

        this.mesh = new THREE.Group();

        const s = stats.size;
        // ZOMBIE HEIGHT: total ~1.85 units. Root pivot at FOOT level (y=0).
        // So all child positions are LOCAL offsets FROM the feet.

        const skinMat = new THREE.MeshStandardMaterial({ color: stats.skinColor, flatShading: true });
        const shirtMat = new THREE.MeshStandardMaterial({ color: stats.shirtColor, flatShading: true });
        const pantMat = new THREE.MeshStandardMaterial({ color: 0x263238, flatShading: true });
        const shoesMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, flatShading: true });

        const addPart = (mesh: THREE.Mesh, color: number) => {
            this.bodyParts.push({ mesh, color });
            return mesh;
        };

        if (this.type === EnemyType.ROBOT || this.type === EnemyType.BOSS_SENTINEL || this.type === EnemyType.BOSS_FINAL_ROBOT) {
            const metMat = new THREE.MeshStandardMaterial({ color: stats.skinColor, metalness: 0.8, roughness: 0.2 });
            const glowMat = new THREE.MeshBasicMaterial({ color: (this.type === EnemyType.BOSS_SENTINEL || this.type === EnemyType.BOSS_FINAL_ROBOT) ? 0xff0000 : 0x00ffff });

            // Final Boss gets even more metallic/dark look
            if (this.type === EnemyType.BOSS_FINAL_ROBOT) {
                metMat.color.setHex(0x111111);
            }

            // Base Mecánica / "Pies"
            const ballGeo = new THREE.SphereGeometry(0.4 * s, 12, 12);
            const ball = addPart(new THREE.Mesh(ballGeo, metMat), stats.skinColor);
            ball.position.set(0, 0.4 * s, 0);
            this.mesh.add(ball);

            // Torso Mecánico (Núcleo)
            const coreGeo = new THREE.CylinderGeometry(0.5 * s, 0.6 * s, 0.8 * s, 8);
            const core = addPart(new THREE.Mesh(coreGeo, metMat), stats.skinColor);
            core.position.set(0, 1.0 * s, 0);
            this.mesh.add(core);

            // Cabeza (Esférica para Robots, Cuadrada para el Mecha-Zombie Final)
            let head;
            if (this.type === EnemyType.BOSS_FINAL_ROBOT) {
                const headGeo = new THREE.BoxGeometry(0.5 * s, 0.5 * s, 0.5 * s);
                const zombieSkinMat = new THREE.MeshStandardMaterial({ color: 0x2d3d1d, flatShading: true });
                head = addPart(new THREE.Mesh(headGeo, zombieSkinMat), 0x2d3d1d);
            } else {
                const headGeo = new THREE.SphereGeometry(0.35 * s, 16, 16);
                head = addPart(new THREE.Mesh(headGeo, metMat), stats.skinColor);
            }
            head.position.set(0, 1.6 * s, 0);
            this.mesh.add(head);

            // Ojo Brillante / Visor
            const visorGeo = new THREE.BoxGeometry(0.4 * s, 0.1 * s, 0.1 * s);
            const visor = new THREE.Mesh(visorGeo, glowMat);
            visor.position.set(0, 0.05 * s, 0.3 * s);
            head.add(visor);

            // Antenas
            const antGeo = new THREE.CylinderGeometry(0.02 * s, 0.02 * s, 0.4 * s);
            const antL = new THREE.Mesh(antGeo, metMat);
            antL.position.set(-0.15 * s, 0.3 * s, 0);
            antL.rotation.z = -0.3;
            const antR = new THREE.Mesh(antGeo, metMat);
            antR.position.set(0.15 * s, 0.3 * s, 0);
            antR.rotation.z = 0.3;
            head.add(antL, antR);

            // Brazos Mecánicos / Cañones
            const armGeo = new THREE.BoxGeometry(0.2 * s, 0.2 * s, 0.7 * s);
            const lArm = addPart(new THREE.Mesh(armGeo, metMat), stats.skinColor);
            lArm.position.set(-0.6 * s, 1.1 * s, 0.2 * s);
            const rArm = addPart(new THREE.Mesh(armGeo, metMat), stats.skinColor);
            rArm.position.set(0.6 * s, 1.1 * s, 0.2 * s);
            this.mesh.add(lArm, rArm);

            (this as any)._torso = core;
            (this as any)._head = head;
            collidables.push(core);
            collidables.push(head);
        } else {
            // ZOMBIE VISUALS
            // FEET / SHOES
            const shoeGeo = new THREE.BoxGeometry(0.22 * s, 0.15 * s, 0.35 * s);
            const leftShoe = addPart(new THREE.Mesh(shoeGeo, shoesMat), 0x1a1a1a);
            leftShoe.position.set(-0.2 * s, 0.075 * s, 0.06 * s);
            const rightShoe = addPart(new THREE.Mesh(shoeGeo, shoesMat), 0x1a1a1a);
            rightShoe.position.set(0.2 * s, 0.075 * s, 0.06 * s);
            this.mesh.add(leftShoe, rightShoe);

            // LEGS
            const legGeo = new THREE.BoxGeometry(0.24 * s, 0.6 * s, 0.3 * s);
            const leftLeg = addPart(new THREE.Mesh(legGeo, pantMat), 0x263238);
            leftLeg.position.set(-0.2 * s, 0.45 * s, 0);
            const rightLeg = addPart(new THREE.Mesh(legGeo, pantMat), 0x263238);
            rightLeg.position.set(0.2 * s, 0.45 * s, 0);
            this.mesh.add(leftLeg, rightLeg);

            // TORSO
            const torsoGeo = new THREE.BoxGeometry(0.72 * s, 0.7 * s, 0.38 * s);
            const torso = addPart(new THREE.Mesh(torsoGeo, shirtMat), stats.shirtColor);
            torso.position.set(0, 1.1 * s, 0);
            this.mesh.add(torso);

            // ARMS
            const armGeo = new THREE.BoxGeometry(0.2 * s, 0.5 * s, 0.2 * s);
            const lArm = addPart(new THREE.Mesh(armGeo, shirtMat), stats.shirtColor);
            lArm.position.set(-0.46 * s, 1.1 * s, 0.2 * s);
            lArm.rotation.x = -Math.PI / 3;
            const rArm = addPart(new THREE.Mesh(armGeo, shirtMat), stats.shirtColor);
            rArm.position.set(0.46 * s, 1.1 * s, 0.2 * s);
            rArm.rotation.x = -Math.PI / 3;
            this.mesh.add(lArm, rArm);

            // FOREARMS
            const foreArmGeo = new THREE.BoxGeometry(0.17 * s, 0.45 * s, 0.17 * s);
            const leftFArm = addPart(new THREE.Mesh(foreArmGeo, skinMat), stats.skinColor);
            leftFArm.position.set(-0.46 * s, 0.87 * s, 0.35 * s);
            leftFArm.rotation.x = -Math.PI / 2.5;
            const rightFArm = addPart(new THREE.Mesh(foreArmGeo, skinMat), stats.skinColor);
            rightFArm.position.set(0.46 * s, 0.87 * s, 0.35 * s);
            rightFArm.rotation.x = -Math.PI / 2.5;
            this.mesh.add(leftFArm, rightFArm);

            // HEAD
            const headGeo = new THREE.BoxGeometry(0.48 * s, 0.48 * s, 0.48 * s);
            const head = addPart(new THREE.Mesh(headGeo, skinMat), stats.skinColor);
            head.position.y = 1.65 * s;
            head.castShadow = true;
            this.mesh.add(head);

            // EYES
            const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const eyeGeo = new THREE.PlaneGeometry(0.12 * s, 0.09 * s);
            const lE = new THREE.Mesh(eyeGeo, eyeMat);
            lE.position.set(-0.12 * s, 0.05 * s, 0.245 * s);
            const rE = new THREE.Mesh(eyeGeo, eyeMat);
            rE.position.set(0.12 * s, 0.05 * s, 0.245 * s);
            head.add(lE, rE);

            (this as any)._torso = torso;
            (this as any)._head = head;
            collidables.push(torso);
            collidables.push(head);
        }

        // Si es ZOMBIE_ON_FIRE — emisivo naranja
        if (this.type === EnemyType.ZOMBIE_ON_FIRE) {
            this.mesh.traverse(child => {
                if ((child as THREE.Mesh).isMesh) {
                    const m = child as THREE.Mesh;
                    if (m.material && (m.material as THREE.MeshStandardMaterial).color) {
                        (m.material as THREE.MeshStandardMaterial).emissive?.setHex(0xff1100);
                        (m.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.8;
                    }
                }
            });
        }

        // ===== MODELOS ESPECIALES NIEVE =====
        // SNOWMAN — reemplaza el cuerpo humanoide con esferas
        if (this.type === EnemyType.SNOWMAN || this.type === EnemyType.BOSS_GIANT_SNOWMAN) {
            // Limpiar el modelo humanoide generado
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            const snowMat  = new THREE.MeshLambertMaterial({ color: 0xf0f8ff });
            const hatMat   = new THREE.MeshLambertMaterial({ color: 0x111111 });
            const scarfMat = new THREE.MeshLambertMaterial({ color: 0xcc2200 });
            const eyeMat   = new THREE.MeshBasicMaterial({ color: 0xff8800 });
            const noseMat  = new THREE.MeshLambertMaterial({ color: 0xff6600 });
            // Base
            const base3 = new THREE.Mesh(new THREE.SphereGeometry(0.55*s,10,10), snowMat);
            base3.position.y = 0.55*s;
            this.mesh.add(base3); this.bodyParts.push({mesh:base3, color:0xf0f8ff});
            // Torso
            const mid3  = new THREE.Mesh(new THREE.SphereGeometry(0.42*s,10,10), snowMat);
            mid3.position.y = 1.35*s;
            this.mesh.add(mid3); this.bodyParts.push({mesh:mid3, color:0xf0f8ff});
            (this as any)._torso = mid3; collidables.push(mid3);
            // Botones
            for (let bi=0;bi<3;bi++) {
                const btn = new THREE.Mesh(new THREE.SphereGeometry(0.05*s,6,6), new THREE.MeshBasicMaterial({color:0x222222}));
                btn.position.set(0,(1.1+bi*0.18)*s,0.42*s); this.mesh.add(btn);
            }
            // Bufanda
            const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.44*s,0.08*s,8,24), scarfMat);
            scarf.position.y=1.7*s; scarf.rotation.x=Math.PI/2; this.mesh.add(scarf);
            // Cabeza
            const head3 = new THREE.Mesh(new THREE.SphereGeometry(0.30*s,10,10), snowMat);
            head3.position.y = 1.95*s;
            this.mesh.add(head3); this.bodyParts.push({mesh:head3, color:0xf0f8ff});
            (this as any)._head = head3; collidables.push(head3);
            // Ojos naranja brillante (como en la imagen)
            for (const ox of [-0.12, 0.12]) {
                const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045*s,6,6), eyeMat);
                eye.position.set(ox*s, 0.06*s, 0.28*s); head3.add(eye);
            }
            // Nariz cónica naranja
            const nose = new THREE.Mesh(new THREE.ConeGeometry(0.04*s,0.2*s,6), noseMat);
            nose.rotation.x = Math.PI/2; nose.position.set(0,0,0.32*s); head3.add(nose);
            // Sombrero (cilindro negro)
            const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.38*s,0.38*s,0.05*s,16), hatMat);
            brim.position.y = 0.3*s; head3.add(brim);
            const top3 = new THREE.Mesh(new THREE.CylinderGeometry(0.22*s,0.33*s,0.4*s,16), hatMat);
            top3.position.y = 0.55*s; head3.add(top3);
            // Brazos (palos)
            const stickMat = new THREE.MeshLambertMaterial({color:0x3e2723});
            for (const sx of [-1,1]) {
                const stick = new THREE.Mesh(new THREE.CylinderGeometry(0.04*s,0.04*s,0.7*s,6), stickMat);
                stick.position.set(sx*0.55*s, 1.35*s, 0); stick.rotation.z = sx*Math.PI/4;
                this.mesh.add(stick);
            }
        }

        // REINDEER_ZOMBIE — zombie sobre reno
        if (this.type === EnemyType.REINDEER_ZOMBIE) {
            const s = stats.size;
            const deerMat  = new THREE.MeshLambertMaterial({ color: 0x7a5c41 });
            const antlerMat= new THREE.MeshLambertMaterial({ color: 0x5a3a20 });
            // Cuerpo reno
            const dBody = new THREE.Mesh(new THREE.BoxGeometry(0.7*s,0.5*s,1.2*s), deerMat);
            dBody.position.y = 0.6*s; this.mesh.add(dBody);
            // Patas
            for (const [lx,lz] of [[-0.25,-0.4],[0.25,-0.4],[-0.25,0.4],[0.25,0.4]] as [number,number][]) {
                const leg = new THREE.Mesh(new THREE.BoxGeometry(0.12*s,0.55*s,0.12*s), deerMat);
                leg.position.set(lx*s,0.25*s,lz*s); this.mesh.add(leg);
            }
            // Cuello y cabeza de reno
            const dNeck = new THREE.Mesh(new THREE.BoxGeometry(0.2*s,0.4*s,0.2*s), deerMat);
            dNeck.position.set(0,0.9*s,-0.5*s); this.mesh.add(dNeck);
            const dHead = new THREE.Mesh(new THREE.BoxGeometry(0.3*s,0.25*s,0.45*s), deerMat);
            dHead.position.set(0,1.1*s,-0.65*s); this.mesh.add(dHead);
            // Cuernos
            for (const ax of [-0.12,0.12]) {
                const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.03*s,0.03*s,0.5*s,4), antlerMat);
                ant.position.set(ax*s,1.4*s,-0.65*s); ant.rotation.z = ax*0.5; this.mesh.add(ant);
                const antB = new THREE.Mesh(new THREE.CylinderGeometry(0.02*s,0.02*s,0.3*s,4), antlerMat);
                antB.position.set(ax*1.2*s,1.55*s,-0.65*s); antB.rotation.z = ax*1.2; this.mesh.add(antB);
            }
            // El zombie encima
            const skinM  = new THREE.MeshLambertMaterial({ color: 0xb0c4de });
            const shirtM = new THREE.MeshLambertMaterial({ color: 0x4a5568 });
            const zTorso = new THREE.Mesh(new THREE.BoxGeometry(0.55*s,0.55*s,0.3*s), shirtM);
            zTorso.position.set(0,1.35*s,0.1*s);
            this.mesh.add(zTorso);
            (this as any)._torso = zTorso; collidables.push(zTorso);
            const zHead = new THREE.Mesh(new THREE.BoxGeometry(0.38*s,0.38*s,0.38*s), skinM);
            zHead.position.set(0,1.8*s,0.1*s);
            this.mesh.add(zHead);
            (this as any)._head = zHead; collidables.push(zHead);
            const eyeM2 = new THREE.MeshBasicMaterial({color:0x00ffff});
            for (const ex of [-0.1,0.1]) {
                const e = new THREE.Mesh(new THREE.PlaneGeometry(0.09*s,0.07*s), eyeM2);
                e.position.set(ex*s,0.04*s,0.2*s); zHead.add(e);
            }
            this.bodyParts.push({mesh:zTorso,color:0x4a5568},{mesh:zHead,color:0xb0c4de});
        }

        // BOSS_BLIZZARD_KING — zombie nevado gigante con partes de snowman
        if (this.type === EnemyType.BOSS_BLIZZARD_KING) {
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            const snowM2 = new THREE.MeshLambertMaterial({color:0xaaddff});
            const darkM2 = new THREE.MeshLambertMaterial({color:0x001133});
            const hatM2  = new THREE.MeshLambertMaterial({color:0x050a1a});
            // Piernas zombi
            for (const lx of [-0.3,0.3]) {
                const leg = new THREE.Mesh(new THREE.BoxGeometry(0.35*s,0.9*s,0.35*s), darkM2);
                leg.position.set(lx*s,0.45*s,0); this.mesh.add(leg);
                this.bodyParts.push({mesh:leg,color:0x001133});
            }
            // Torso esferico (snowman + zombie fusión)
            const torsoB = new THREE.Mesh(new THREE.SphereGeometry(0.7*s,12,12), snowM2);
            torsoB.position.y = 1.5*s; this.mesh.add(torsoB);
            (this as any)._torso = torsoB; collidables.push(torsoB);
            this.bodyParts.push({mesh:torsoB,color:0xaaddff});
            // Cabeza zombie (cuadrada)
            const headB = new THREE.Mesh(new THREE.BoxGeometry(0.8*s,0.8*s,0.8*s), snowM2);
            headB.position.y = 2.6*s; this.mesh.add(headB);
            (this as any)._head = headB; collidables.push(headB);
            this.bodyParts.push({mesh:headB,color:0xaaddff});
            // Ojos cyan
            const eyeB = new THREE.MeshBasicMaterial({color:0x00ffff, emissive:0x00ffff} as any);
            for (const ex of [-0.25,0.25]) {
                const e = new THREE.Mesh(new THREE.SphereGeometry(0.1*s,8,8), eyeB);
                e.position.set(ex*s,0.1*s,0.42*s); headB.add(e);
            }
            // Sombrero enorme
            const brimB = new THREE.Mesh(new THREE.CylinderGeometry(0.9*s,0.9*s,0.08*s,16), hatM2);
            brimB.position.y = 0.45*s; headB.add(brimB);
            const topB  = new THREE.Mesh(new THREE.CylinderGeometry(0.55*s,0.8*s,0.9*s,16), hatM2);
            topB.position.y = 0.95*s; headB.add(topB);
            // Brazos zombi enormes
            for (const ax of [-1,1]) {
                const arm = new THREE.Mesh(new THREE.BoxGeometry(0.3*s,1.0*s,0.3*s), snowM2);
                arm.position.set(ax*1.1*s,1.6*s,0); this.mesh.add(arm);
                this.bodyParts.push({mesh:arm,color:0xaaddff});
            }
        }

        // ===== MODELOS LAVA =====
        const isLavaType = (
            this.type === EnemyType.LAVA_ZOMBIE ||
            this.type === EnemyType.RED_DRAGON ||
            this.type === EnemyType.MAGMA_GIANT ||
            this.type === EnemyType.BOSS_LAVA_GOLIATH ||
            this.type === EnemyType.BOSS_LAVA_DRAGON ||
            this.type === EnemyType.BOSS_MAGMA_TITAN ||
            this.type === EnemyType.BOSS_PURPLE_DRAGON
        );

        // LAVA_ZOMBIE / BOSS_LAVA_GOLIATH — humanoide con brillo de lava
        if (this.type === EnemyType.LAVA_ZOMBIE || this.type === EnemyType.BOSS_LAVA_GOLIATH) {
            const s = stats.size;
            const lavaMat = new THREE.MeshStandardMaterial({ color: stats.skinColor, emissive: new THREE.Color(0xff2200), emissiveIntensity: 0.6, roughness: 0.4 });
            const darkMat = new THREE.MeshLambertMaterial({ color: stats.shirtColor });
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            // Piernas
            for (const lx of [-0.22, 0.22]) {
                const leg = new THREE.Mesh(new THREE.BoxGeometry(0.28*s, 0.7*s, 0.28*s), darkMat);
                leg.position.set(lx*s, 0.35*s, 0); this.mesh.add(leg);
            }
            // Torso
            const torsoL = new THREE.Mesh(new THREE.BoxGeometry(0.7*s, 0.8*s, 0.45*s), lavaMat);
            torsoL.position.y = 1.0*s; this.mesh.add(torsoL);
            (this as any)._torso = torsoL; collidables.push(torsoL);
            this.bodyParts.push({ mesh: torsoL, color: stats.skinColor });
            // Brazos
            for (const ax of [-0.55, 0.55]) {
                const arm = new THREE.Mesh(new THREE.BoxGeometry(0.25*s, 0.65*s, 0.25*s), lavaMat);
                arm.position.set(ax*s, 0.95*s, 0); this.mesh.add(arm);
            }
            // Cabeza
            const headL = new THREE.Mesh(new THREE.BoxGeometry(0.48*s, 0.48*s, 0.48*s), lavaMat);
            headL.position.y = 1.65*s; this.mesh.add(headL);
            (this as any)._head = headL; collidables.push(headL);
            this.bodyParts.push({ mesh: headL, color: stats.skinColor });
            // Ojos naranjas brillantes
            const eyeMatL = new THREE.MeshBasicMaterial({ color: 0xff8800 });
            for (const ex of [-0.12, 0.12]) {
                const e = new THREE.Mesh(new THREE.PlaneGeometry(0.12*s, 0.09*s), eyeMatL);
                e.position.set(ex*s, 0.05*s, 0.245*s); headL.add(e);
            }
            // Grietas de lava en el torso (líneas naranjas)
            const crackMat = new THREE.MeshBasicMaterial({ color: 0xff6600 });
            for (let c = 0; c < 4; c++) {
                const crack = new THREE.Mesh(new THREE.BoxGeometry(0.04*s, 0.02*s, 0.46*s), crackMat);
                crack.position.set((Math.random()-0.5)*0.5*s, (Math.random()-0.5)*0.3*s + 1.0*s, 0);
                crack.rotation.z = Math.random() * Math.PI;
                this.mesh.add(crack);
            }
            // Punto de luz que emite calor
            const heatLight = new THREE.PointLight(0xff4400, 1.5*s, 4*s);
            heatLight.position.y = 1.0*s;
            this.mesh.add(heatLight);
        }

        // RED_DRAGON / BOSS_LAVA_DRAGON — cuerpo cónico con alas y cola
        if (this.type === EnemyType.RED_DRAGON || this.type === EnemyType.BOSS_LAVA_DRAGON) {
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            const dragonMat = new THREE.MeshStandardMaterial({ color: stats.skinColor, emissive: new THREE.Color(0xcc1100), emissiveIntensity: 0.5, roughness: 0.5, metalness: 0.3 });
            const darkDraMat = new THREE.MeshLambertMaterial({ color: stats.shirtColor });
            // Cuerpo
            const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5*s, 0.7*s, 1.4*s, 8), dragonMat);
            body.position.y = 0.9*s; this.mesh.add(body);
            (this as any)._torso = body; collidables.push(body);
            this.bodyParts.push({ mesh: body, color: stats.skinColor });
            // Cuello
            const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.22*s, 0.4*s, 0.8*s, 6), dragonMat);
            neck.position.set(0, 1.75*s, 0.3*s); neck.rotation.x = -0.3;
            this.mesh.add(neck);
            // Cabeza
            const head = new THREE.Mesh(new THREE.BoxGeometry(0.55*s, 0.4*s, 0.7*s), dragonMat);
            head.position.set(0, 2.15*s, 0.6*s); this.mesh.add(head);
            (this as any)._head = head; collidables.push(head);
            this.bodyParts.push({ mesh: head, color: stats.skinColor });
            // Mandíbula
            const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.5*s, 0.15*s, 0.6*s), darkDraMat);
            jaw.position.set(0, -0.28*s, 0); head.add(jaw);
            // Cuernos
            for (const hx of [-0.18, 0.18]) {
                const horn = new THREE.Mesh(new THREE.ConeGeometry(0.07*s, 0.4*s, 5), darkDraMat);
                horn.position.set(hx*s, 0.28*s, -0.15*s); horn.rotation.x = -0.4;
                head.add(horn);
            }
            // Ojos rojo brillante
            const eyeD = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            for (const ex of [-0.14, 0.14]) {
                const e = new THREE.Mesh(new THREE.SphereGeometry(0.07*s, 6, 6), eyeD);
                e.position.set(ex*s, 0.06*s, 0.36*s); head.add(e);
            }
            // Alas (planos triangulados)
            for (const wx of [-1, 1]) {
                const wingGeo = new THREE.BufferGeometry();
                const wVerts = new Float32Array([0,0,0, wx*2.2*s,-0.3*s,-1.0*s, wx*1.5*s,0.3*s,0.5*s]);
                const wIdx = new Uint16Array([0,1,2]);
                wingGeo.setAttribute('position', new THREE.BufferAttribute(wVerts, 3));
                wingGeo.setIndex(new THREE.BufferAttribute(wIdx, 1));
                wingGeo.computeVertexNormals();
                const wingMat = new THREE.MeshLambertMaterial({ color: 0x550000, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
                const wing = new THREE.Mesh(wingGeo, wingMat);
                wing.position.set(wx*0.6*s, 1.0*s, 0);
                this.mesh.add(wing);
            }
            // Cola
            const tail = new THREE.Mesh(new THREE.CylinderGeometry(0.08*s, 0.35*s, 1.8*s, 6), dragonMat);
            tail.position.set(0, 0.5*s, -1.1*s); tail.rotation.x = 0.6;
            this.mesh.add(tail);
            // Luz roja
            const dl = new THREE.PointLight(0xff2200, 2.0*s, 5*s);
            dl.position.y = 1.5*s; this.mesh.add(dl);
        }

        // MAGMA_GIANT / BOSS_MAGMA_TITAN — esferas de magma apiladas
        if (this.type === EnemyType.MAGMA_GIANT || this.type === EnemyType.BOSS_MAGMA_TITAN) {
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            const magmaMat = new THREE.MeshStandardMaterial({ color: 0xff4400, emissive: new THREE.Color(0xff2200), emissiveIntensity: 0.8, roughness: 0.3 });
            const darkMagma = new THREE.MeshLambertMaterial({ color: 0x330a00 });
            // Base grande
            const base = new THREE.Mesh(new THREE.SphereGeometry(0.75*s, 10, 10), magmaMat);
            base.position.y = 0.75*s; this.mesh.add(base);
            (this as any)._torso = base; collidables.push(base);
            this.bodyParts.push({ mesh: base, color: 0xff4400 });
            // Media
            const mid = new THREE.Mesh(new THREE.SphereGeometry(0.58*s, 10, 10), magmaMat);
            mid.position.y = 1.75*s; this.mesh.add(mid);
            this.bodyParts.push({ mesh: mid, color: 0xff4400 });
            // Cabeza
            const headM = new THREE.Mesh(new THREE.SphereGeometry(0.42*s, 10, 10), magmaMat);
            headM.position.y = 2.55*s; this.mesh.add(headM);
            (this as any)._head = headM; collidables.push(headM);
            this.bodyParts.push({ mesh: headM, color: 0xff4400 });
            // Ojos amarillos brillantes
            const eyeM = new THREE.MeshBasicMaterial({ color: 0xffff00 });
            for (const ex of [-0.14, 0.14]) {
                const e = new THREE.Mesh(new THREE.SphereGeometry(0.09*s, 6, 6), eyeM);
                e.position.set(ex*s, 0.1*s, 0.4*s); headM.add(e);
            }
            // Brazos rocosos
            for (const ax of [-1.1, 1.1]) {
                const arm = new THREE.Mesh(new THREE.SphereGeometry(0.3*s, 8, 8), darkMagma);
                arm.position.set(ax*s, 1.5*s, 0);
                this.mesh.add(arm); this.bodyParts.push({ mesh: arm, color: 0x330a00 });
                const fist = new THREE.Mesh(new THREE.SphereGeometry(0.22*s, 8, 8), magmaMat);
                fist.position.set(ax*s, 0.9*s, 0);
                this.mesh.add(fist);
            }
            // Fisuras magma
            for (let f = 0; f < 6; f++) {
                const fissure = new THREE.Mesh(new THREE.BoxGeometry(0.05*s, 0.05*s, 0.6*s), new THREE.MeshBasicMaterial({ color: 0xffcc00 }));
                fissure.position.set((Math.random()-0.5)*s, (0.5+Math.random())*s, 0);
                fissure.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, 0);
                this.mesh.add(fissure);
            }
            const ml = new THREE.PointLight(0xff6600, 3.0*s, 7*s);
            ml.position.y = 1.5*s; this.mesh.add(ml);
        }

        // BOSS_PURPLE_DRAGON — dragón morado gigante que vuela
        if (this.type === EnemyType.BOSS_PURPLE_DRAGON) {
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            const purpMat = new THREE.MeshStandardMaterial({ color: 0x6600bb, emissive: new THREE.Color(0x440088), emissiveIntensity: 0.7, roughness: 0.4, metalness: 0.4 });
            const darkPurp = new THREE.MeshLambertMaterial({ color: 0x220044 });
            // Cuerpo principal
            const body = new THREE.Mesh(new THREE.SphereGeometry(1.0*s, 10, 10), purpMat);
            body.scale.set(1.3, 0.9, 1.6); this.mesh.add(body);
            body.position.y = 1.5*s;
            (this as any)._torso = body; collidables.push(body);
            this.bodyParts.push({ mesh: body, color: 0x6600bb });
            // Cuello
            const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.4*s, 0.7*s, 1.2*s, 8), purpMat);
            neck.position.set(0, 2.8*s, 0.8*s); neck.rotation.x = -0.4; this.mesh.add(neck);
            // Cabeza grande
            const head = new THREE.Mesh(new THREE.BoxGeometry(1.0*s, 0.8*s, 1.2*s), purpMat);
            head.position.set(0, 3.5*s, 1.6*s); this.mesh.add(head);
            (this as any)._head = head; collidables.push(head);
            this.bodyParts.push({ mesh: head, color: 0x6600bb });
            // Mandíbula
            const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.9*s, 0.25*s, 1.1*s), darkPurp);
            jaw.position.set(0, -0.5*s, 0); head.add(jaw);
            // Cuernos múltiples
            for (let h = 0; h < 3; h++) {
                for (const hx of [-0.35, 0.35]) {
                    const horn = new THREE.Mesh(new THREE.ConeGeometry(0.1*s, 0.7*s - h*0.15*s, 5), darkPurp);
                    horn.position.set(hx*s*(1-h*0.2), (0.5+h*0.3)*s, -0.3*s); horn.rotation.x = -0.3;
                    head.add(horn);
                }
            }
            // Ojos morados brillantes (emissive)
            const eyePurp = new THREE.MeshBasicMaterial({ color: 0xdd00ff });
            for (const ex of [-0.27, 0.27]) {
                const e = new THREE.Mesh(new THREE.SphereGeometry(0.14*s, 8, 8), eyePurp);
                e.position.set(ex*s, 0.1*s, 0.62*s); head.add(e);
            }
            // Alas GRANDES — 4 segmentos en capas
            for (const wx of [-1, 1]) {
                for (let seg = 0; seg < 2; seg++) {
                    const wGeo = new THREE.BufferGeometry();
                    const off = seg * 0.8*s;
                    const wV = new Float32Array([0,0,0, wx*(3.5-seg)*s, (-0.4-seg*0.2)*s, (-0.8+off)*s, wx*(2.5-seg*0.5)*s, 0.6*s, (0.6+off)*s]);
                    wGeo.setAttribute('position', new THREE.BufferAttribute(wV, 3));
                    wGeo.setIndex(new THREE.BufferAttribute(new Uint16Array([0,1,2]), 1));
                    wGeo.computeVertexNormals();
                    const wMat = new THREE.MeshLambertMaterial({ color: seg===0 ? 0x440099 : 0x220055, side: THREE.DoubleSide, transparent: true, opacity: 0.9 });
                    const w = new THREE.Mesh(wGeo, wMat);
                    w.position.set(wx*1.0*s, 1.5*s, 0); this.mesh.add(w);
                }
            }
            // Cola larga
            const tailPieces = [1.0, 0.75, 0.5, 0.35];
            let tailZ = -1.5*s;
            for (const tr of tailPieces) {
                const tp = new THREE.Mesh(new THREE.SphereGeometry(tr*0.6*s, 8, 8), purpMat);
                tp.position.set(0, 1.2*s, tailZ);
                this.mesh.add(tp); tailZ -= tr*0.9*s;
            }
            // Patas draconicas
            for (const lx of [-0.9, 0.9]) {
                const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.22*s, 0.15*s, 0.8*s, 6), purpMat);
                leg.position.set(lx*s, 0.9*s, 0.3*s); this.mesh.add(leg);
                const claw = new THREE.Mesh(new THREE.ConeGeometry(0.15*s, 0.4*s, 5), darkPurp);
                claw.position.set(0, -0.6*s, 0); claw.rotation.z = lx > 0 ? 0.3 : -0.3;
                leg.add(claw);
            }
            // Luz morada épica
            const pl = new THREE.PointLight(0xaa00ff, 5, 18*s);
            pl.position.y = 2*s; this.mesh.add(pl);
            // El BOSS PURPLE vuela — su Y oscilará en el update loop
            (this as any)._flyPhase = Math.random() * Math.PI * 2;
            (this as any)._baseY = 6.0; // Altura base de vuelo
            this.mesh.position.y = 6.0;
        }

        // ===== MODELOS CASTILLO =====
        // ARMORED_ZOMBIE / ARMORED_ZOMBIE_LARGE / BOSS_GIANT_ARMORED — zombie con armadura gris clara y manchas de sangre roja
        if (this.type === EnemyType.ARMORED_ZOMBIE || this.type === EnemyType.ARMORED_ZOMBIE_LARGE || this.type === EnemyType.BOSS_GIANT_ARMORED) {
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            const armorMat = new THREE.MeshStandardMaterial({ color: 0xbbbbbb, roughness: 0.4, metalness: 0.7 });
            const bloodMat = new THREE.MeshBasicMaterial({ color: 0xcc0011 });
            const redArmorMat = new THREE.MeshStandardMaterial({ color: 0xaa0015, roughness: 0.3, metalness: 0.8 });
            const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff2200 });
            // Piernas blindadas
            for (const lx of [-0.22, 0.22]) {
                const leg = new THREE.Mesh(new THREE.BoxGeometry(0.28*s, 0.7*s, 0.3*s), armorMat);
                leg.position.set(lx*s, 0.35*s, 0); this.mesh.add(leg);
                this.bodyParts.push({ mesh: leg, color: 0xbbbbbb });
                // Rodilleras rojas
                const knee = new THREE.Mesh(new THREE.BoxGeometry(0.30*s, 0.14*s, 0.32*s), redArmorMat);
                knee.position.set(0, 0.1*s, 0); leg.add(knee);
            }
            // Peto de armadura (torso blindado)
            const torso = new THREE.Mesh(new THREE.BoxGeometry(0.72*s, 0.85*s, 0.48*s), armorMat);
            torso.position.y = 1.05*s; this.mesh.add(torso);
            (this as any)._torso = torso; collidables.push(torso);
            this.bodyParts.push({ mesh: torso, color: 0xbbbbbb });
            // Cruz roja en el peto
            const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.52*s, 0.1*s, 0.05*s), redArmorMat);
            crossH.position.set(0, 0.15*s, 0.25*s); torso.add(crossH);
            const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.1*s, 0.42*s, 0.05*s), redArmorMat);
            crossV.position.set(0, 0.08*s, 0.25*s); torso.add(crossV);
            // Hombros (pauldrons) rojos
            for (const sx of [-0.46, 0.46]) {
                const pauldron = new THREE.Mesh(new THREE.SphereGeometry(0.18*s, 8, 8), redArmorMat);
                pauldron.position.set(sx*s, 1.45*s, 0); this.mesh.add(pauldron);
                this.bodyParts.push({ mesh: pauldron, color: 0xaa0015 });
            }
            // Brazos blindados
            for (const ax of [-0.56, 0.56]) {
                const arm = new THREE.Mesh(new THREE.BoxGeometry(0.26*s, 0.6*s, 0.26*s), armorMat);
                arm.position.set(ax*s, 1.0*s, 0); this.mesh.add(arm);
                this.bodyParts.push({ mesh: arm, color: 0xbbbbbb });
            }
            // Casco
            const helm = new THREE.Mesh(new THREE.BoxGeometry(0.52*s, 0.52*s, 0.52*s), armorMat);
            helm.position.y = 1.72*s; this.mesh.add(helm);
            (this as any)._head = helm; collidables.push(helm);
            this.bodyParts.push({ mesh: helm, color: 0xbbbbbb });
            // Visera roja
            const visor = new THREE.Mesh(new THREE.BoxGeometry(0.40*s, 0.12*s, 0.06*s), redArmorMat);
            visor.position.set(0, 0, 0.27*s); helm.add(visor);
            // Ojos brillantes dentro del casco
            for (const ex of [-0.10, 0.10]) {
                const eye = new THREE.Mesh(new THREE.SphereGeometry(0.06*s, 6, 6), eyeMat);
                eye.position.set(ex*s, 0, 0.27*s); helm.add(eye);
            }
            // Manchas de sangre aleatorias en la armadura
            for (let b = 0; b < 6; b++) {
                const splat = new THREE.Mesh(new THREE.SphereGeometry((0.06 + Math.random()*0.06)*s, 5, 5), bloodMat);
                splat.scale.set(1, 0.35, 1);
                splat.position.set((Math.random()-0.5)*0.55*s, 0.7*s + Math.random()*0.6*s, 0.25*s);
                this.mesh.add(splat);
            }
            // Luz tenue de castillo (sin brillo lava)
            const cl = new THREE.PointLight(0x550000, 0.8*s, 4*s);
            cl.position.y = 1.2*s; this.mesh.add(cl);
        }

        // VAMPIRE — humanoide oscuro con capa y colmillos, ranged
        if (this.type === EnemyType.VAMPIRE) {
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            const skinM = new THREE.MeshLambertMaterial({ color: 0x881122 });
            const capeM = new THREE.MeshLambertMaterial({ color: 0x220033, side: THREE.DoubleSide });
            const eyeM  = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const hairM = new THREE.MeshLambertMaterial({ color: 0x110022 });
            // Piernas
            for (const lx of [-0.2, 0.2]) {
                const leg = new THREE.Mesh(new THREE.BoxGeometry(0.25*s, 0.7*s, 0.24*s), hairM);
                leg.position.set(lx*s, 0.35*s, 0); this.mesh.add(leg);
            }
            // Torso
            const tV = new THREE.Mesh(new THREE.BoxGeometry(0.6*s, 0.8*s, 0.4*s), skinM);
            tV.position.y = 1.0*s; this.mesh.add(tV);
            (this as any)._torso = tV; collidables.push(tV);
            this.bodyParts.push({ mesh: tV, color: 0x881122 });
            // Brazos
            for (const ax of [-0.52, 0.52]) {
                const arm = new THREE.Mesh(new THREE.BoxGeometry(0.22*s, 0.6*s, 0.22*s), skinM);
                arm.position.set(ax*s, 0.98*s, 0); this.mesh.add(arm);
            }
            // Cabeza pálida
            const hV = new THREE.Mesh(new THREE.BoxGeometry(0.45*s, 0.48*s, 0.44*s), skinM);
            hV.position.y = 1.64*s; this.mesh.add(hV);
            (this as any)._head = hV; collidables.push(hV);
            this.bodyParts.push({ mesh: hV, color: 0x881122 });
            // Ojos rojos brillantes
            for (const ex of [-0.1, 0.1]) {
                const eye = new THREE.Mesh(new THREE.SphereGeometry(0.07*s, 6, 6), eyeM);
                eye.position.set(ex*s, 0.07*s, 0.23*s); hV.add(eye);
            }
            // Colmillos
            for (const cx of [-0.08, 0.08]) {
                const fang = new THREE.Mesh(new THREE.ConeGeometry(0.04*s, 0.14*s, 5), new THREE.MeshLambertMaterial({ color: 0xffffff }));
                fang.position.set(cx*s, -0.27*s, 0.22*s); fang.rotation.x = Math.PI;
                hV.add(fang);
            }
            // Cabello negro
            const hair = new THREE.Mesh(new THREE.BoxGeometry(0.5*s, 0.15*s, 0.46*s), hairM);
            hair.position.set(0, 0.27*s, 0); hV.add(hair);
            // Capa triangular trasera (BufferGeometry)
            const capeGeo = new THREE.BufferGeometry();
            const capeV = new Float32Array([-0.55*s, 1.4*s, -0.1*s, 0.55*s, 1.4*s, -0.1*s, 0, 0, -0.2*s]);
            capeGeo.setAttribute('position', new THREE.BufferAttribute(capeV, 3));
            capeGeo.setIndex(new THREE.BufferAttribute(new Uint16Array([0,1,2]), 1));
            capeGeo.computeVertexNormals();
            const cape = new THREE.Mesh(capeGeo, capeM);
            this.mesh.add(cape);
            // Luz roja vampírica
            const vl = new THREE.PointLight(0xaa0022, 1.2, 5*s);
            vl.position.y = 1.0*s; this.mesh.add(vl);
        }

        // BAT — murciélago pequeño que vuela
        if (this.type === EnemyType.BAT) {
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            const batMat = new THREE.MeshLambertMaterial({ color: 0x331144 });
            const eyeM = new THREE.MeshBasicMaterial({ color: 0xff2200 });
            const wingM = new THREE.MeshLambertMaterial({ color: 0x1a0022, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
            // Cuerpo
            const body = new THREE.Mesh(new THREE.SphereGeometry(0.25*s, 8, 8), batMat);
            body.position.y = 0.25*s; this.mesh.add(body);
            (this as any)._torso = body; collidables.push(body);
            this.bodyParts.push({ mesh: body, color: 0x331144 });
            // Cabeza
            const head = new THREE.Mesh(new THREE.SphereGeometry(0.18*s, 8, 8), batMat);
            head.position.set(0, 0.38*s, 0.18*s); this.mesh.add(head);
            (this as any)._head = head; collidables.push(head);
            // Orejas puntiagudas
            for (const ex of [-0.1, 0.1]) {
                const ear = new THREE.Mesh(new THREE.ConeGeometry(0.07*s, 0.22*s, 5), batMat);
                ear.position.set(ex*s, 0.17*s, 0); head.add(ear);
            }
            // Ojos
            for (const ex of [-0.07, 0.07]) {
                const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05*s, 5, 5), eyeM);
                eye.position.set(ex*s, 0.05*s, 0.17*s); head.add(eye);
            }
            // Alas membranosas
            for (const wx of [-1, 1]) {
                const wGeo = new THREE.BufferGeometry();
                const wV = new Float32Array([0, 0.2*s, 0, wx*0.9*s, 0.5*s, -0.3*s, wx*0.6*s, -0.05*s, 0.1*s]);
                wGeo.setAttribute('position', new THREE.BufferAttribute(wV, 3));
                wGeo.setIndex(new THREE.BufferAttribute(new Uint16Array([0,1,2]), 1));
                wGeo.computeVertexNormals();
                const wing = new THREE.Mesh(wGeo, wingM);
                this.mesh.add(wing);
            }
            // Los murciélagos vuelan
            (this as any)._flyPhase = Math.random() * Math.PI * 2;
            (this as any)._baseY = 2.5 + Math.random() * 2;
            this.mesh.position.y = (this as any)._baseY;
        }

        // DINOSAUR / BOSS_GIANT_DINO — dinosaurio cuadrúpedo enorme
        if (this.type === EnemyType.DINOSAUR || this.type === EnemyType.BOSS_GIANT_DINO) {
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            const dinoMat = new THREE.MeshStandardMaterial({ color: stats.skinColor, roughness: 0.8, metalness: 0.0 });
            const darkDino = new THREE.MeshLambertMaterial({ color: stats.shirtColor });
            const eyeM = new THREE.MeshBasicMaterial({ color: 0xffdd00 });
            // Cuerpo masivo
            const body = new THREE.Mesh(new THREE.SphereGeometry(0.85*s, 10, 10), dinoMat);
            body.scale.set(1.5, 0.8, 2.0);
            body.position.y = 0.85*s; this.mesh.add(body);
            (this as any)._torso = body; collidables.push(body);
            this.bodyParts.push({ mesh: body, color: stats.skinColor });
            // Cuello
            const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.3*s, 0.4*s, 0.7*s, 8), dinoMat);
            neck.position.set(0, 1.5*s, 0.8*s); neck.rotation.x = -0.5; this.mesh.add(neck);
            // Cabeza
            const head = new THREE.Mesh(new THREE.BoxGeometry(0.65*s, 0.45*s, 0.9*s), dinoMat);
            head.position.set(0, 2.0*s, 1.5*s); this.mesh.add(head);
            (this as any)._head = head; collidables.push(head);
            this.bodyParts.push({ mesh: head, color: stats.skinColor });
            // Boca y dientes
            const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.6*s, 0.18*s, 0.85*s), darkDino);
            jaw.position.set(0, -0.32*s, 0); head.add(jaw);
            for (let t = 0; t < 4; t++) {
                const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.05*s, 0.18*s, 5), new THREE.MeshLambertMaterial({ color: 0xffffff }));
                tooth.position.set((-0.2 + t*0.13)*s, -0.07*s, 0.42*s); tooth.rotation.x = Math.PI;
                head.add(tooth);
            }
            // Ojos amarillos amenazadores
            for (const ex of [-0.2, 0.2]) {
                const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1*s, 6, 6), eyeM);
                eye.position.set(ex*s, 0.1*s, 0.46*s); head.add(eye);
            }
            // 4 patas cortas
            for (const lx of [-0.6, 0.6]) {
                for (const lz of [-0.5, 0.5]) {
                    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.2*s, 0.16*s, 0.6*s, 6), dinoMat);
                    leg.position.set(lx*s, 0.3*s, lz*s); this.mesh.add(leg);
                }
            }
            // Cola
            const tailBase = new THREE.Mesh(new THREE.CylinderGeometry(0.3*s, 0.12*s, 1.5*s, 6), dinoMat);
            tailBase.position.set(0, 0.9*s, -1.5*s); tailBase.rotation.x = -0.5;
            this.mesh.add(tailBase);
            // Púas en la espalda
            for (let sp = 0; sp < 5; sp++) {
                const spike = new THREE.Mesh(new THREE.ConeGeometry(0.08*s, 0.35*s, 5), darkDino);
                spike.position.set(0, 1.6*s, (-0.8 + sp*0.35)*s);
                this.mesh.add(spike);
            }
        }

        // BOSS_ZOMBIE_OVERLORD — Mega Zombie Final con espada en llamas y alas de fuego
        if (this.type === EnemyType.BOSS_ZOMBIE_OVERLORD) {
            while (this.mesh.children.length) this.mesh.remove(this.mesh.children[0]);
            this.bodyParts = [];
            const s = stats.size;
            // Armadura gris oscura con manchas de sangre (igual que armored pero mucho más grande)
            const armorM = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.3, metalness: 0.9 });
            const bloodM = new THREE.MeshBasicMaterial({ color: 0xcc0000 });
            const eyeM = new THREE.MeshBasicMaterial({ color: 0xff4400 });
            const fireWingM = new THREE.MeshLambertMaterial({ color: 0xff4400, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
            const swordM = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.2, metalness: 0.95 });
            const flamM = new THREE.MeshBasicMaterial({ color: 0xff6600 });
            // Piernas masivas
            for (const lx of [-0.35, 0.35]) {
                const leg = new THREE.Mesh(new THREE.BoxGeometry(0.5*s, 1.0*s, 0.5*s), armorM);
                leg.position.set(lx*s, 0.5*s, 0); this.mesh.add(leg);
                this.bodyParts.push({ mesh: leg, color: 0xaaaaaa });
            }
            // Torso imponente
            const torsoO = new THREE.Mesh(new THREE.BoxGeometry(1.2*s, 1.2*s, 0.7*s), armorM);
            torsoO.position.y = 1.6*s; this.mesh.add(torsoO);
            (this as any)._torso = torsoO; collidables.push(torsoO);
            this.bodyParts.push({ mesh: torsoO, color: 0xaaaaaa });
            // Manchas de sangre masivas en el torso
            for (let b = 0; b < 10; b++) {
                const splat = new THREE.Mesh(new THREE.SphereGeometry((0.08 + Math.random()*0.1)*s, 5, 5), bloodM);
                splat.scale.set(1, 0.3, 1);
                splat.position.set((Math.random()-0.5)*0.9*s, (Math.random()-0.5)*0.5*s, 0.36*s);
                torsoO.add(splat);
            }
            // Brazos enormes
            const swordArm = new THREE.Mesh(new THREE.BoxGeometry(0.4*s, 1.0*s, 0.4*s), armorM);
            swordArm.position.set(-0.9*s, 1.5*s, 0); this.mesh.add(swordArm);
            const shieldArm = new THREE.Mesh(new THREE.BoxGeometry(0.4*s, 1.0*s, 0.4*s), armorM);
            shieldArm.position.set(0.9*s, 1.5*s, 0); this.mesh.add(shieldArm);
            // ESPADA EN LLAMAS (en brazo izquierdo)
            const swordGrip = new THREE.Mesh(new THREE.BoxGeometry(0.12*s, 0.8*s, 0.12*s), swordM);
            swordGrip.position.set(-0.9*s, 0.7*s, 0); this.mesh.add(swordGrip);
            const swordBlade = new THREE.Mesh(new THREE.BoxGeometry(0.1*s, 1.4*s, 0.06*s), swordM);
            swordBlade.position.set(0, 1.1*s, 0); swordGrip.add(swordBlade);
            // Llama en la espada
            for (let f = 0; f < 5; f++) {
                const flame = new THREE.Mesh(new THREE.SphereGeometry((0.15 + Math.random()*0.12)*s, 5, 5), flamM);
                flame.position.set((Math.random()-0.5)*0.15*s, (0.6 + Math.random()*0.7)*s, 0);
                swordBlade.add(flame);
                this.bodyParts.push({ mesh: flame, color: 0xff6600 });
            }
            // Guardia de la espada
            const guard = new THREE.Mesh(new THREE.BoxGeometry(0.45*s, 0.1*s, 0.12*s), swordM);
            guard.position.y = 0; swordGrip.add(guard);
            // Casco oscuro con cuernos
            const helmO = new THREE.Mesh(new THREE.BoxGeometry(0.75*s, 0.75*s, 0.75*s), armorM);
            helmO.position.y = 2.6*s; this.mesh.add(helmO);
            (this as any)._head = helmO; collidables.push(helmO);
            this.bodyParts.push({ mesh: helmO, color: 0xaaaaaa });
            // Cuernos del casco
            for (const hx of [-0.3, 0.3]) {
                const horn = new THREE.Mesh(new THREE.ConeGeometry(0.1*s, 0.6*s, 6), new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.9 }));
                horn.position.set(hx*s, 0.55*s, 0); helmO.add(horn);
            }
            // Ojos naranjas ardientes
            for (const ex of [-0.15, 0.15]) {
                const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1*s, 6, 6), eyeM);
                eye.position.set(ex*s, 0.05*s, 0.38*s); helmO.add(eye);
            }
            // ALAS DE FUEGO (2 pares)
            for (const wx of [-1, 1]) {
                for (let seg = 0; seg < 2; seg++) {
                    const wGeo = new THREE.BufferGeometry();
                    const off = seg * 0.6*s;
                    const wV = new Float32Array([
                        0, 1.8*s, 0,
                        wx*(2.5 + seg*0.8)*s, (1.2 - seg*0.3)*s, (-0.5 - off)*s,
                        wx*(1.8 + seg*0.5)*s, (2.4 - seg*0.2)*s, (0.4 + off)*s
                    ]);
                    wGeo.setAttribute('position', new THREE.BufferAttribute(wV, 3));
                    wGeo.setIndex(new THREE.BufferAttribute(new Uint16Array([0,1,2]), 1));
                    wGeo.computeVertexNormals();
                    const wMat = new THREE.MeshBasicMaterial({
                        color: seg === 0 ? 0xff5500 : 0xff2200,
                        side: THREE.DoubleSide,
                        transparent: true,
                        opacity: 0.82
                    });
                    const wing = new THREE.Mesh(wGeo, wMat);
                    wing.position.set(wx*0.7*s, 1.5*s, 0); this.mesh.add(wing);
                    this.bodyParts.push({ mesh: wing, color: seg === 0 ? 0xff5500 : 0xff2200 });
                }
            }
            // Luz épica anaranjada/roja
            const ol = new THREE.PointLight(0xff3300, 6, 20*s);
            ol.position.y = 2.0*s; this.mesh.add(ol);
            // Fase de vuelo/flotación leve
            (this as any)._flyPhase = Math.random() * Math.PI * 2;
            (this as any)._baseY = 1.5;
        }

        // SNOW_ZOMBIE / SNOW_FAST — ojos cyan brillante en lugar de rojo
        const isSnowZombie = (this.type === EnemyType.SNOW_ZOMBIE || this.type === EnemyType.SNOW_FAST
            || this.type === EnemyType.BOSS_SNOW_GOLIATH);
        if (isSnowZombie) {
            this.mesh.traverse(child => {
                if ((child as THREE.Mesh).isMesh) {
                    const m = child as THREE.Mesh;
                    const mat = m.material as THREE.MeshStandardMaterial;
                    if (mat && mat.color && mat.color.getHex() === 0xff0000) {
                        // Cambiar ojos rojos a cyan brillante
                        m.material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
                    }
                }
            });
            // Manchas de nieve en el torso
            const snowPatchMat = new THREE.MeshLambertMaterial({color:0xddeeff, transparent:true, opacity:0.8});
            for (let sp=0;sp<4;sp++) {
                const patch = new THREE.Mesh(new THREE.SphereGeometry(0.08*stats.size,5,5), snowPatchMat);
                patch.position.set((Math.random()-0.5)*0.4*stats.size, (0.9+Math.random()*0.5)*stats.size, 0.2*stats.size);
                this.mesh.add(patch);
            }
        }

        // Place zombie at spawn position, feet below ground for rising effect
        this.mesh.position.copy(position);
        this.mesh.position.y = this.spawnY;
        this.mesh.visible = false; // Initially hidden during pre-spawn
        scene.add(this.mesh);

        // IMPORTANT: Desactivar el "Frustum Culling" en cada parte del enemigo.
        // Sin esto, Three.js oculta los meshes cuando su bounding box no está en la cámara,
        // lo que causa el bug donde los enemigos desaparecen al girar la cámara.
        this.mesh.frustumCulled = false; // El grupo principal
        this.mesh.traverse(child => {
            child.frustumCulled = false;
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                // Force a giant bounding sphere so Three.js never culls this mesh
                if (!mesh.geometry.boundingSphere) mesh.geometry.computeBoundingSphere();
                mesh.geometry.boundingSphere!.radius = 9999;
            }
        });

        // (torso set in type-conditional blocks above)
    }

    takeDamage(amount: number, pushDir: THREE.Vector3) {
        if (this.isDead) return;
        this.health -= amount;

        // Sync damage to other players in multiplayer
        if (isMultiplayer && socket?.connected) {
            socket.emit('enemy-hit', {
                enemyId: this.nid,
                damage: amount,
                kx: pushDir.x, ky: pushDir.y, kz: pushDir.z
            });
        }

        const isTrueBoss = (this.type === EnemyType.BOSS_FINAL_ROBOT || this.type === EnemyType.BOSS_BLIZZARD_KING
            || this.type === EnemyType.BOSS_PURPLE_DRAGON || this.type === EnemyType.BOSS_ZOMBIE_OVERLORD);
        
        const isGiant = (this.type === EnemyType.BOSS_GOLIATH || this.type === EnemyType.BOSS_SENTINEL ||
                         this.type === EnemyType.BOSS_SNOW_GOLIATH || this.type === EnemyType.BOSS_GIANT_SNOWMAN ||
                         this.type === EnemyType.BOSS_LAVA_GOLIATH || this.type === EnemyType.BOSS_LAVA_DRAGON ||
                         this.type === EnemyType.BOSS_MAGMA_TITAN ||
                         this.type === EnemyType.BOSS_GIANT_ARMORED || this.type === EnemyType.BOSS_GIANT_DINO);

        if (!isTrueBoss && !isGiant) {
            this.isFlinching = true;
            this.flinchTimer = 0.12;
        } else if (isTrueBoss) {
            this.flashTimer = 0.12;
            // Actualizar Boss HP Bar
            const bossContainer = document.getElementById('boss-bar-container');
            const bossBarFill = document.getElementById('boss-bar-fill');
            const bossBarName = document.getElementById('boss-bar-name');
            const stats = ENEMY_DATA[this.type];
            if (bossContainer && bossBarFill && bossBarName) {
                bossContainer.style.display = 'block';
                bossBarName.innerText = `☠ ${t(stats.name)} ☠`;
                const pct = Math.max(0, (this.health / stats.health) * 100);
                bossBarFill.style.width = `${pct}%`;
                // Cambiar color según vida restante
                if (pct > 60) bossBarFill.style.background = 'linear-gradient(to right, #cc0000, #ff4400, #ff8800)';
                else if (pct > 30) bossBarFill.style.background = 'linear-gradient(to right, #880000, #cc2200, #ff4400)';
                else bossBarFill.style.background = 'linear-gradient(to right, #440000, #880000, #cc0000)';
                // Ocultar si muere
                if (this.health <= 0) setTimeout(() => { if (bossContainer) bossContainer.style.display = 'none'; }, 500);
            }
        } else if (isGiant) {
            this.flashTimer = 0.12;
            const stats = ENEMY_DATA[this.type];
            if (!this.overheadBarEl) {
                const container = document.getElementById('overhead-bars-container');
                if (container) {
                    this.overheadBarEl = document.createElement('div');
                    this.overheadBarEl.className = 'overhead-hp';
                    this.overheadBarEl.innerHTML = '<div class="overhead-hp-fill"></div>';
                    this.overheadBarEl.style.display = 'block';
                    container.appendChild(this.overheadBarEl);
                }
            }
            if (this.overheadBarEl) {
                const pct = Math.max(0, (this.health / stats.health) * 100);
                (this.overheadBarEl.firstChild as HTMLElement).style.width = `${pct}%`;
                if (this.health <= 0) {
                    this.overheadBarEl.remove();
                    this.overheadBarEl = null;
                }
            }
        }

        // Flash all parts white (siempre, incluso para jefes)
        for (const part of this.bodyParts) {
            (part.mesh.material as THREE.MeshStandardMaterial).color.setHex(0xffffff);
        }

        // Horizontal push only, floor snap
        const safePush = pushDir.clone();
        safePush.y = 0;
        
        // Jefes: sin retroceso ni parálisis
        const isBossKnockback = (this.type === EnemyType.BOSS_GOLIATH || this.type === EnemyType.BOSS_SENTINEL
            || this.type === EnemyType.BOSS_FINAL_ROBOT || this.type === EnemyType.BOSS_SNOW_GOLIATH
            || this.type === EnemyType.BOSS_GIANT_SNOWMAN || this.type === EnemyType.BOSS_BLIZZARD_KING
            || this.type === EnemyType.BOSS_GIANT_ARMORED || this.type === EnemyType.BOSS_GIANT_DINO
            || this.type === EnemyType.BOSS_ZOMBIE_OVERLORD);
        if (!isBossKnockback) {
            this.mesh.position.add(safePush);
        }
        
        this.mesh.position.y = 0;

        if (this.health <= 0) {
            this.die();
        }
    }

    die(fromNetwork: boolean = false) {
        if (this.overheadBarEl) {
            this.overheadBarEl.remove();
            this.overheadBarEl = null;
        }
        this.isDead = true;
        if (!fromNetwork) {
            // Only give coins + emit kill to server when killed locally
            const reward = ENEMY_DATA[this.type].reward;
            playerCoins += reward;
            totalCoinsAmassed += reward;
            if (totalCoinsAmassed >= 500) unlockAchievement(10, "Wealthy");
            
            localPlayerKills++;
            if (localPlayerKills === 1) unlockAchievement(1, "First Blood");
            if (localPlayerKills >= 100) unlockAchievement(2, "Slayer");
            
            updateStatsHUD();
            if (isMultiplayer && socket?.connected) {
                socket.emit('enemy-killed', { nid: this.nid });
            }
        }

        // Spawn blood particles BEFORE removing the mesh so position is still valid
        const deathPos = this.mesh.position.clone();
        deathPos.y += 1.0;
        bloodParticles.spawn(deathPos, 60);

        this.mesh.visible = false;

        // Remove from collidables
        const torso = (this as any)._torso as THREE.Mesh;
        const collIdx = collidables.indexOf(torso);
        if (collIdx > -1) collidables.splice(collIdx, 1);

        setTimeout(() => { scene.remove(this.mesh); }, 50);
    }

    update(delta: number, playerPos: THREE.Vector3, time: number, targetIsLocal: boolean = true) {
        if (this.isDead) return;

        // Animación de emergencia (Rise Animation)
        if (this.spawnTimer < this.spawnTime) {
            // SOLTAR PARTÍCULAS DE TIERRA AL COMENZAR A EMERGER
            if (this.spawnTimer === 0) {
                const dirtPos = this.mesh.position.clone();
                dirtPos.y = 0.1;
                bloodParticles.spawn(dirtPos, 15); // Ráfaga de "tierra"
            }
            this.spawnTimer += delta;
            this.mesh.position.y = THREE.MathUtils.lerp(this.spawnY, 0, this.spawnTimer / this.spawnTime);
            return; // No moverse mientras emerge
        }

        if (this.isFlinching) {
            this.flinchTimer -= delta;
            if (this.flinchTimer <= 0) {
                this.isFlinching = false;
                // Restaurar el color original de cada parte desde el arreglo bodyParts
                for (const part of this.bodyParts) {
                    (part.mesh.material as THREE.MeshStandardMaterial).color.setHex(part.color);
                }
            }
            return;
        }

        if (this.flashTimer > 0) {
            this.flashTimer -= delta;
            if (this.flashTimer <= 0) {
                this.flashTimer = 0;
                for (const part of this.bodyParts) {
                    (part.mesh.material as THREE.MeshStandardMaterial).color.setHex(part.color);
                }
            }
        }

        // --- Overhead Bar 2D Projection ---
        if (this.overheadBarEl) {
            const size = ENEMY_DATA[this.type].size;
            const overheadPos = this.mesh.position.clone();
            overheadPos.y += (size * 1.6);
            overheadPos.project(camera);
            if (overheadPos.z < 1.0) { // is in front of camera explicitly
                const x = (overheadPos.x * .5 + .5) * window.innerWidth;
                const y = (overheadPos.y * -.5 + .5) * window.innerHeight;
                this.overheadBarEl.style.display = 'block';
                this.overheadBarEl.style.left = `${x}px`;
                this.overheadBarEl.style.top = `${y}px`;
            } else {
                this.overheadBarEl.style.display = 'none';
            }
        }

        // Lógica de red: Si NO somos el host, solo interpolar a la red y comprobar ataques locales
        if (isMultiplayer && !isHost) {
            if (this.networkPosition) {
                // Interpolar suavemente hacia la pos. objetivo (lerp)
                this.mesh.position.lerp(this.networkPosition, delta * 15);
                
                // Efecto de bobbing si se mueve
                const distMoved = this.mesh.position.distanceTo(this.networkPosition);
                if (distMoved > 0.05) this.bobOffset += delta * 4;
            }
            if (this.networkRotY !== null) {
                this.mesh.rotation.y = this.networkRotY;
            }
            this.mesh.position.y = Math.max(0, Math.sin(this.bobOffset) * 0.04);

            // Efectos de jefe
            if (this.type === EnemyType.BOSS_GOLIATH || this.type === EnemyType.BOSS_SENTINEL) {
                const bossScale = ENEMY_DATA[this.type].size + Math.sin(time * 0.002) * 0.05;
                this.mesh.scale.setScalar(bossScale);
            }

            // Comprobar daño cuerpo a cuerpo local para reproducir animaciones/daño en el jugador actual
            const localPosXZ = new THREE.Vector3(playerPos.x, 0, playerPos.z);
            const myPosXZ = new THREE.Vector3(this.mesh.position.x, 0, this.mesh.position.z);
            if (myPosXZ.distanceTo(localPosXZ) <= this.attackRange && time - this.lastAttackTime > this.attackCooldown) {
                this.attackPlayer(playerPos);
                this.lastAttackTime = time;
            }
            return;
        }

        const playerPosXZ = new THREE.Vector3(playerPos.x, 0, playerPos.z);
        const enemyPosXZ = new THREE.Vector3(this.mesh.position.x, 0, this.mesh.position.z);
        const dist = enemyPosXZ.distanceTo(playerPosXZ);

        // El rango de persecución aumentó a 200 (todo el mapa)
        if (dist > this.attackRange && dist < 200) {
            // Moverse hacia el jugador
            const dir = new THREE.Vector3().subVectors(playerPos, this.mesh.position).normalize();

            // --- EVITAR COLISIONES MEJORADO ---
            // Lanzar rayo a la altura del pecho para detectar árboles y casas correctamente
            const rayOrigin = new THREE.Vector3(this.mesh.position.x, this.mesh.position.y + 0.8, this.mesh.position.z);
            const ray = new THREE.Raycaster(rayOrigin, dir, 0, 1.5);
            const intersects = ray.intersectObjects(playerCollidables, true);

            if (intersects.length > 0) {
                const normal = intersects[0].face?.normal;
                if (normal) {
                    if (intersects[0].distance < 0.8) {
                        // Obstáculo inminente: deslizarse paralelo a la pared (elimina el movimiento hacia ella)
                        const dot = dir.dot(normal);
                        if (dot < 0) {
                            dir.sub(normal.clone().multiplyScalar(dot)).normalize();
                        }
                    } else {
                        // Obstáculo cercano pero no inminente: empezar a girar suavemente
                        dir.add(normal.multiplyScalar(0.8)).normalize();
                    }
                }
            }

            this.mesh.position.add(dir.multiplyScalar(this.speed * delta));
            this.mesh.lookAt(playerPos.x, this.mesh.position.y, playerPos.z);
        } else if (dist <= this.attackRange) {
            if (targetIsLocal && time - this.lastAttackTime > this.attackCooldown) {
                this.attackPlayer(playerPos);
                this.lastAttackTime = time;
            }
        }

        // --- AJUSTE AL SUELO (Host Only or Single Player) ---
        if (!isMultiplayer || isHost) {
            const downDir = new THREE.Vector3(0, -1, 0);
            const rayOrigin = this.mesh.position.clone();
            rayOrigin.y = 10; // Empezar desde arriba
            const groundRay = new THREE.Raycaster(rayOrigin, downDir, 0, 15);
            const intersects = groundRay.intersectObject(floor);
            let groundY = 0;
            if (intersects.length > 0) {
                groundY = intersects[0].point.y;
            }
            this.mesh.position.y = groundY + Math.max(0, Math.sin(this.bobOffset) * 0.04);
        } else if (this.networkPosition) {
            // Los clientes siguen la Y de la red (o su lerp) pero añadimos bobbing local
            this.mesh.position.y = this.networkPosition.y + Math.max(0, Math.sin(this.bobOffset) * 0.04);
        }

        // LÓGICA DE JEFES: Ojos pulsantes o cambio de escala sutil
        if (this.type === EnemyType.BOSS_GOLIATH || this.type === EnemyType.BOSS_SENTINEL) {
            const bossScale = ENEMY_DATA[this.type].size + Math.sin(time * 0.002) * 0.05;
            this.mesh.scale.setScalar(bossScale);
        }

        // BOSS_PURPLE_DRAGON vuela: su Y oscila sinusoidalmente
        if (this.type === EnemyType.BOSS_PURPLE_DRAGON) {
            (this as any)._flyPhase = ((this as any)._flyPhase || 0) + delta * 0.8;
            const baseY = (this as any)._baseY || 6.0;
            this.mesh.position.y = baseY + Math.sin((this as any)._flyPhase) * 2.5;
        }

        // BAT vuela: Y oscila rápidamente, ala bateo animado
        if (this.type === EnemyType.BAT) {
            (this as any)._flyPhase = ((this as any)._flyPhase || 0) + delta * 3.5;
            const baseY = (this as any)._baseY || 3.0;
            this.mesh.position.y = baseY + Math.sin((this as any)._flyPhase) * 0.8;
        }

        // BOSS_ZOMBIE_OVERLORD flota levemente + emite partículas de fuego de espada
        if (this.type === EnemyType.BOSS_ZOMBIE_OVERLORD) {
            (this as any)._flyPhase = ((this as any)._flyPhase || 0) + delta * 0.5;
            const baseY = (this as any)._baseY || 1.5;
            this.mesh.position.y = baseY + Math.sin((this as any)._flyPhase) * 0.6;
            // Partículas de llama en la espada
            if (Math.random() > 0.3) {
                const swordPos = this.mesh.position.clone();
                swordPos.x -= 1.2 * ENEMY_DATA[this.type].size;
                swordPos.y += 1.5 * ENEMY_DATA[this.type].size;
                swordPos.x += (Math.random()-0.5)*0.3;
                swordPos.y += Math.random()*0.5;
                flameParticles.spawn(swordPos, 1);
            }
        }

        // Efecto visual de fuego para ZOMBIE_ON_FIRE y lava enemies
        const isLavaEmitter = (this.type === EnemyType.ZOMBIE_ON_FIRE
            || this.type === EnemyType.LAVA_ZOMBIE || this.type === EnemyType.MAGMA_GIANT
            || this.type === EnemyType.BOSS_LAVA_GOLIATH || this.type === EnemyType.BOSS_MAGMA_TITAN);
        if (isLavaEmitter) {
            if (this.isAlive && Math.random() > 0.5) {
                const firePos = this.mesh.position.clone();
                firePos.y += Math.random() * 1.5;
                firePos.x += (Math.random() - 0.5) * 0.5;
                firePos.z += (Math.random() - 0.5) * 0.5;
                flameParticles.spawn(firePos, 1);
            }
        }
    }

    attackPlayer(playerPos: THREE.Vector3) {
        if (this.isDead) return;

        const stats = ENEMY_DATA[this.type];

        // ---- Ataques a distancia (robot, snowman) ----
        if (this.type === EnemyType.ROBOT || this.type === EnemyType.BOSS_SENTINEL) {
            const spawnPos = this.mesh.position.clone();
            spawnPos.y += 1.5 * stats.size;
            const dir = new THREE.Vector3().subVectors(camera.position, spawnPos).normalize();
            enemyProjectiles.push(new Laser(spawnPos, dir, stats.name));
            soundManager.playBeep();
        } else if (this.type === EnemyType.SNOWMAN || this.type === EnemyType.BOSS_GIANT_SNOWMAN
            || (this.type === EnemyType.BOSS_BLIZZARD_KING && Math.random() > 0.4)) {
            // Lanzar bola de nieve
            const spawnPos = this.mesh.position.clone();
            spawnPos.y += 1.8 * stats.size;
            const dir = new THREE.Vector3().subVectors(camera.position, spawnPos).normalize();
            snowballProjectiles.push(new SnowballProjectile(spawnPos, dir, stats.slowDuration ?? 3.0));
        } else if (this.type === EnemyType.RED_DRAGON || this.type === EnemyType.BOSS_LAVA_DRAGON
            || this.type === EnemyType.BOSS_PURPLE_DRAGON) {
            // Proyectil de fuego con ceguera — el Purple Dragon dispara rafaga de 6
            const numShots = this.type === EnemyType.BOSS_PURPLE_DRAGON ? 6 : 1;
            const spawnPos = this.mesh.position.clone();
            spawnPos.y += 2.5 * stats.size;
            for (let s = 0; s < numShots; s++) {
                const spread = new THREE.Vector3(
                    (Math.random() - 0.5) * (numShots > 1 ? 0.25 : 0.05),
                    (Math.random() - 0.5) * (numShots > 1 ? 0.15 : 0.02),
                    0
                );
                const dir = new THREE.Vector3().subVectors(camera.position, spawnPos).normalize().add(spread).normalize();
                enemyProjectiles.push(new Laser(spawnPos.clone(), dir, stats.name));
                const proj = enemyProjectiles[enemyProjectiles.length - 1];
                (proj as any)._isFireBlind = true;
                proj.mesh.material = new THREE.MeshBasicMaterial({ color: this.type === EnemyType.BOSS_PURPLE_DRAGON ? 0xcc00ff : 0xff4400 });
            }
            soundManager.playBeep();
        } else if (this.type === EnemyType.VAMPIRE) {
            // Vampiro: proyectil oscuro que drena vida (ranged) y aplica debuff de fuego por oscuridad
            const spawnPos = this.mesh.position.clone();
            spawnPos.y += 1.5 * stats.size;
            const dir = new THREE.Vector3().subVectors(camera.position, spawnPos).normalize();
            const laser = new Laser(spawnPos, dir, stats.name);
            laser.mesh.material = new THREE.MeshBasicMaterial({ color: 0x880022 });
            (laser as any)._isFireBlind = false;
            enemyProjectiles.push(laser);
            soundManager.playBeep();
        } else if (this.type === EnemyType.BOSS_ZOMBIE_OVERLORD) {
            // Overlord: melee si está cerca, ranged (ráfaga de fuego) a distancia
            const distToPlayer = this.mesh.position.distanceTo(playerPos);
            if (distToPlayer <= 4.0 * stats.size) {
                // Cuerpo a cuerpo
                lastAttackerName = stats.name;
                playerFireDebuff = 4.0;
                takeDamage(this.damage);
                soundManager.playGroan();
            } else {
                // Ranged: ráfaga de 4 proyectiles de fuego
                const spawnPos = this.mesh.position.clone();
                spawnPos.y += 3.0 * stats.size;
                for (let s = 0; s < 4; s++) {
                    const spread = new THREE.Vector3((Math.random()-0.5)*0.3, (Math.random()-0.5)*0.15, 0);
                    const dir = new THREE.Vector3().subVectors(camera.position, spawnPos).normalize().add(spread).normalize();
                    const proj = new Laser(spawnPos.clone(), dir, stats.name);
                    proj.mesh.material = new THREE.MeshBasicMaterial({ color: 0xff4400 });
                    (proj as any)._isFireBlind = true;
                    enemyProjectiles.push(proj);
                }
                soundManager.playBeep();
            }
        } else {
            // Cuerpo a cuerpo
            lastAttackerName = stats.name;
            if (this.type === EnemyType.ZOMBIE_ON_FIRE || this.type === EnemyType.LAVA_ZOMBIE
                || this.type === EnemyType.MAGMA_GIANT || this.type === EnemyType.BOSS_LAVA_GOLIATH
                || this.type === EnemyType.BOSS_MAGMA_TITAN) {
                playerFireDebuff = 3.5; // Cegar con fuego
            }
            // Slow debuff para enemigos nevados
            if (stats.slowDuration && stats.slowDuration > 0) {
                playerSlowDebuff = Math.max(playerSlowDebuff, stats.slowDuration);
                showSlowOverlay();
            }
            takeDamage(this.damage);
            soundManager.playGroan();
            const flash = document.createElement('div');
            flash.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(180,220,255,0.3);pointer-events:none;z-index:100;';
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 100);
        }
    }
}

// ---- PROYECTIL: BOLA DE NIEVE ----
class SnowballProjectile {
    mesh: THREE.Mesh;
    velocity: THREE.Vector3;
    slowDuration: number;
    isDead: boolean = false;
    private age: number = 0;

    constructor(pos: THREE.Vector3, dir: THREE.Vector3, slowDuration: number) {
        this.slowDuration = slowDuration;
        this.velocity = dir.clone().multiplyScalar(14);
        const geo = new THREE.SphereGeometry(0.28, 8, 8);
        const mat = new THREE.MeshLambertMaterial({ color: 0xddeeff });
        this.mesh = new THREE.Mesh(geo, mat);
        this.mesh.position.copy(pos);
        scene.add(this.mesh);
    }

    update(delta: number) {
        if (this.isDead) return;
        this.age += delta;
        this.velocity.y -= 6 * delta; // Gravedad suave
        this.mesh.position.addScaledVector(this.velocity, delta);
        this.mesh.rotation.x += delta * 5;
        // Impacto con el suelo
        if (this.mesh.position.y < 0.3) this.explode();
        // Impacto con el jugador
        if (this.mesh.position.distanceTo(camera.position) < 1.2) {
            takeDamage(ENEMY_DATA[EnemyType.SNOWMAN].damage);
            playerSlowDebuff = Math.max(playerSlowDebuff, this.slowDuration);
            showSlowOverlay();
            this.explode();
        }
        if (this.age > 8) this.destroy();
    }

    explode() {
        if (this.isDead) return;
        // Partículas blancas
        snowImpactParticles.spawn(this.mesh.position.clone(), 10);
        this.destroy();
    }

    destroy() {
        this.isDead = true;
        scene.remove(this.mesh);
    }
}

const snowballProjectiles: SnowballProjectile[] = [];

function showSlowOverlay() {
    const overlay = document.getElementById('slow-overlay');
    if (overlay) {
        overlay.style.opacity = '1';
    }
}

// ---- SISTEMA DE DROPS DE ARMAS ----
class WeaponDrop {
    mesh: THREE.Group;
    weaponIdx: number;
    dropType: 'weapon' | 'jetpack' | 'ammo' | 'fuel';
    active: boolean = true;
    bobOffset: number = 0;

    constructor(pos: THREE.Vector3, weaponIdx: number, dropType: 'weapon' | 'jetpack' | 'ammo' | 'fuel' = 'weapon', displayColor: number = 0xffffff) {
        this.weaponIdx = weaponIdx;
        this.dropType = dropType;
        this.mesh = new THREE.Group();
        this.mesh.position.copy(pos);

        // Diseños Low-Poly específicos por arma
        const weaponModel = new THREE.Group();
        const mat = new THREE.MeshStandardMaterial({ color: displayColor, flatShading: true, emissive: displayColor, emissiveIntensity: 0.2 });
        const darkMat = new THREE.MeshStandardMaterial({ color: 0x222222, flatShading: true });

        if (dropType === 'jetpack') {
            // Jetpack: Dos tanques verdes
            for (let i = -1; i <= 1; i += 2) {
                const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.8, 6), mat);
                tank.position.set(i * 0.25, 0, 0);
                weaponModel.add(tank);
            }
        } else if (dropType === 'fuel') {
            const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.5, 6), mat);
            weaponModel.add(tank);
        } else if (dropType === 'ammo') {
            const box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.35, 0.6), mat);
            weaponModel.add(box);
        } else if (weaponIdx === 1) {
            // Laser Gun: Pistola futurista elegante
            const body = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.3, 0.6), darkMat);
            const barrel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.8), mat);
            barrel.position.set(0, 0.1, -0.2);
            weaponModel.add(body, barrel);
        } else if (weaponIdx === 2) {
            // Rocket Launcher: Tubo largo (verde oscuro modelado con darkMat y punta color match)
            const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.2, 8), darkMat);
            tube.rotation.x = Math.PI / 2;
            const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.3, 8), mat);
            tip.rotation.x = Math.PI / 2;
            tip.position.z = -0.5;
            weaponModel.add(tube, tip);
        } else if (weaponIdx === 3) {
            // Mini Gun: Varios cañones (gris)
            const body = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.6), darkMat);
            const barrels = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.8, 6), mat);
            barrels.rotation.x = Math.PI / 2;
            barrels.position.z = -0.5;
            weaponModel.add(body, barrels);
        } else if (weaponIdx === 4) {
            // Fire Gun: Tanque y boquilla
            const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.7, 8), mat);
            const nozzle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.6), darkMat);
            nozzle.position.set(0, 0.2, -0.4);
            weaponModel.add(tank, nozzle);
        } else {
            // Default Box
            const box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), mat);
            weaponModel.add(box);
        }

        weaponModel.position.y = 1;
        this.mesh.add(weaponModel);

        // Círculo grande y visible en el suelo — radio mayor para ser claramente visible
        const circleRadius = (weaponIdx === 3 || weaponIdx === 4) ? 1.4 : 1.0;
        const circleGeo = new THREE.TorusGeometry(circleRadius, 0.08, 8, 32);
        const circleMat = new THREE.MeshBasicMaterial({ color: displayColor });
        const circle = new THREE.Mesh(circleGeo, circleMat);
        circle.rotation.x = Math.PI / 2;
        circle.position.y = 0.05;
        this.mesh.add(circle);

        // Segundo círculo interior animado para hacerlos aún más visibles
        const innerGeo = new THREE.TorusGeometry(circleRadius * 0.6, 0.05, 8, 32);
        const innerCircle = new THREE.Mesh(innerGeo, circleMat);
        innerCircle.rotation.x = Math.PI / 2;
        innerCircle.position.y = 0.06;
        this.mesh.add(innerCircle);

        // Luz puntual del color del arma
        const light = new THREE.PointLight(displayColor, 3, 7);
        light.position.y = 1;
        this.mesh.add(light);

        scene.add(this.mesh);
    }

    update(delta: number, playerPos: THREE.Vector3) {
        if (!this.active) return;
        this.bobOffset += delta * 2;
        this.mesh.children[0].position.y = 1 + Math.sin(this.bobOffset) * 0.3; // Bobbing caja
        this.mesh.children[0].rotation.y += delta; // Rotación
        this.mesh.children[0].rotation.z += delta * 0.5;

        // Verificar si el jugador lo recoge
        if (playerPos.distanceTo(this.mesh.position) < 2.0) {
            if (this.dropType === 'fuel' && !hasJetpack) return; // Ignorar recargas si no tiene el item
            this.pickup();
        }
    }

    pickup() {
        this.active = false;
        scene.remove(this.mesh);
        soundManager.playPickup();

        if (this.dropType === 'fuel') {
            playerJetpackFuel = MAX_FUEL;
            const ui = document.getElementById('jetpack-ui');
            if (ui) ui.style.display = 'block';
            updateStatsHUD(); // Actualizar HUD al instante
            showPickupNotice("FUEL REFILLED");
        } else if (this.dropType === 'ammo') {
            // Cantidades específicas de munición por arma al recoger el Ammo Refill
            const ammoAmounts: { [key: number]: number } = {
                0: 80,    // GUN (Rifle base)
                1: 100,   // Laser Pistol
                2: 3,     // Rocket Launcher
                3: 200,   // Minigun
                4: 150    // Fire Gun (Flamethrower)
            };
            for (let i = 0; i < weapons.length; i++) {
                const w = weapons[i];
                // Aplica para todas, incluyendo el arma base (índice 0)
                if (playerInventory.includes(i) || i === 0) {
                    w.ammoReserve += ammoAmounts[i] ?? w.magSize;
                }
            }
            updateStatsHUD(); // Reflejar balas de inmediato
            showPickupNotice("AMMO REFILLED");
        } else if (this.dropType === 'jetpack') {
            hasJetpack = true;
            playerJetpackFuel = MAX_FUEL;
            const ui = document.getElementById('jetpack-ui');
            if (ui) ui.style.display = 'block';
            console.log("Jetpack Unlocked!");
            showPickupNotice("JETPACK");
        } else {
            addWeaponToInventory(this.weaponIdx);
            const w = weapons[this.weaponIdx];
            w.ammoCurrent = w.magSize;
            w.ammoReserve += w.magSize * 3; // Munición extra al recoger el arma
            console.log(w.name + " Unlocked!");
        }
    }
}

const activeWeaponDrops: WeaponDrop[] = [];

// ---- WAVE SYSTEM ----
// Este sistema controla la aparición por oleadas de los enemigos y maneja los jefes
// ---- CLASE WAVEMANAGER (Gestor de Oleadas) ----
// Controla el flujo del juego: generación de enemigos, dificultad progresiva y estados de descanso.
class WaveManager {
    currentWave: number = 0;
    enemiesToSpawn: number = 0;
    enemiesAlive: number = 0;
    spawnTimer: number = 0;
    spawnRate: number = 2000; // ms
    activeEnemies: Enemy[] = [];
    isBreak: boolean = false; // Verdadero entre oleadas
    maxWaves: number = 40; // 10 Forest + 10 Snowy + 10 Lava + 10 Castle
    isGameOver: boolean = false;
    isNetworkClient: boolean = false; // set to true if multiplayer and NOT host
    syncTimer: number = 0;

    reset() {
        this.currentWave = 0;
        this.enemiesToSpawn = 0;
        this.enemiesAlive = 0;
        this.activeEnemies = [];
        this.isBreak = false;
        this.isGameOver = false;
        this.syncTimer = 0;
    }

    startNextWave() {
        if (this.currentWave >= this.maxWaves) return;

        this.isBreak = false;
        soundManager.startGameMusic();
        this.currentWave++;

        if (this.currentWave === 10) unlockAchievement(4, "Forest Master");
        if (this.currentWave === 20) unlockAchievement(5, "Polar Explorer");
        if (this.currentWave === 30) unlockAchievement(6, "Lava Walker");

        if (this.currentWave === 1 && !hasJetpack) {
            // Spawnear el jetpack un poco más lejos para que el jugador tenga que caminar a recogerlo
            jetpacks.push(new JetpackPickup(new THREE.Vector3(-4, 0.5, 4)));
        }

        this.spawnWeaponDrop(this.currentWave);

        // Número de wave relativo al bioma (1-10 en cada bioma)
        const biomeWave = this.currentWave <= 10 ? this.currentWave
            : this.currentWave <= 20 ? this.currentWave - 10
            : this.currentWave <= 30 ? this.currentWave - 20
            : this.currentWave - 30;
        const biomeName = this.currentWave <= 10 ? 'FOREST'
            : this.currentWave <= 20 ? 'SNOWY'
            : this.currentWave <= 30 ? 'LAVA'
            : 'CASTLE';

        const isFinalWave     = (this.currentWave === this.maxWaves);
        const isBiomeBossWave = (biomeWave === 10);

        if (isBiomeBossWave) {
            this.enemiesToSpawn = 1;
            this.spawnRate = 3000;
        } else {
            const baseCount = 6 + (biomeWave * 4);
            // Castillo: +160% — Lava: +120% — Nieve: +60% — Bosque: base
            this.enemiesToSpawn = currentBiome === Biome.CASTLE
                ? Math.round(baseCount * 2.6)
                : currentBiome === Biome.LAVA
                    ? Math.round(baseCount * 2.2)
                    : currentBiome === Biome.SNOW
                        ? Math.round(baseCount * 1.6)
                        : baseCount;
            this.spawnRate = Math.max(300, 2000 - (biomeWave * 160));
        }

        const wc = document.getElementById('wave-complete');
        if (wc) wc.style.display = 'none';

        if (enemiesEl) enemiesEl.innerText = this.enemiesToSpawn.toString();
        if (hordeEl) hordeEl.innerText = t('ENEMIES_LEFT', { alive: 0, spawn: this.enemiesToSpawn });
        if (stageEl) {
            if (isFinalWave) {
                stageEl.innerHTML = `<span style="font-size:0.7em;color:#8855cc">${t('BIOME_CASTLE')}</span><br>${t('FINAL_WAVE_BOSS')}`;
                stageEl.style.color = '#8855cc';
            } else {
                const biomeColor = this.currentWave <= 10 ? '#ff3333'
                    : this.currentWave <= 20 ? '#88ccff'
                    : this.currentWave <= 30 ? '#ff6600'
                    : '#aa66ff';
                const biomeKey = this.currentWave <= 10 ? 'BIOME_FOREST'
                    : this.currentWave <= 20 ? 'BIOME_SNOW'
                    : this.currentWave <= 30 ? 'BIOME_LAVA'
                    : 'BIOME_CASTLE';
                stageEl.innerHTML = `<span style="font-size:0.7em;color:${biomeColor};">${t(biomeKey)}</span><br>${t('WAVE', { wave: biomeWave })}`;
                stageEl.style.color = biomeColor;
            }
        }
    }

    spawnWeaponDrop(wave: number) {
        if (wave === 1) {
            activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(-15, 0, -10), 1, 'weapon', 0x00ffff));
        } else if (wave === 2) {
            activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(20, 0, -25), 2, 'weapon', 0xff0000));
        } else if (wave === 3) {
            activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(-5, 0, -35), 3, 'weapon', 0xffff00));
        } else if (wave === 4) {
            activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(-20, 0, -45), 4, 'weapon', 0xffaa00));
        } else if (wave >= 5) {
            // Si el juguete ya existe en el mapa, solo aplicar el efecto (sin visual duplicado)
            const hasAmmo  = activeWeaponDrops.some(d => d.dropType === 'ammo'  && d.active);
            const hasFuel  = activeWeaponDrops.some(d => d.dropType === 'fuel'  && d.active);
            if (!hasAmmo) {
                activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(-5, 0, 10), 0, 'ammo', 0xaaaaaa));
            } else {
                // Aplicar silenciosamente el efecto de ammo sin spawnar
                weapons.forEach(w => { w.ammoCurrent = w.magSize; w.ammoReserve = Math.min(w.ammoReserve + w.magSize * 2, w.magSize * 8); });
            }
            if (hasJetpack) {
                if (!hasFuel) {
                    activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(5, 0, 10), 0, 'fuel', 0xaa00ff));
                } else {
                    // Aplicar silenciosamente recarga de combustible
                    playerJetpackFuel = Math.min(playerJetpackFuel + MAX_FUEL * 0.5, MAX_FUEL);
                }
            }
        }
    }

    // Inicialización al empezar el juego
    preSpawnWave() {
        this.activeEnemies = this.activeEnemies.filter(en => !en.isDead);
        this.enemiesAlive = 0;
        this.currentWave = 0;
        this.isGameOver = false;
        this.startNextWave();
    }

    spawnEnemyWithType(type: EnemyType, pos: THREE.Vector3) {
        const enemy = new Enemy(type, pos);
        enemy.mesh.visible = true;
        this.activeEnemies.push(enemy);
        this.enemiesAlive++;
    }

    waveComplete() {
        if (this.isBreak || this.isGameOver) return;
        this.isBreak = true;
        soundManager.startWinMusic();

        // Victoria final al completar Wave 40
        if (this.currentWave === this.maxWaves) {
            this.victory();
            return;
        }

        // Transición de bioma al completar Wave 10 (Forest → Snow)
        if (this.currentWave === 10) {
            if (isMultiplayer && socket?.connected) {
                socket.emit('wave-complete', { wave: this.currentWave });
                socket.emit('biome-change', { biome: 'snow' });
            }
            const wcWave = document.getElementById('wc-wave');
            const wc = document.getElementById('wave-complete');
            if (wc) wc.style.display = 'flex';
            if (wcWave) wcWave.innerText = `FOREST COMPLETE! A BLIZZARD APPROACHES...`;
            setTimeout(() => {
                if (wc) wc.style.display = 'none';
                transitionToSnowBiome();
            }, 2000);
            if (stageEl) stageEl.innerHTML = `<span style="font-size:0.8em;color:#aaddff">${t('BIOME_CHANGE')}</span>`;
            return;
        }

        // Transición de bioma al completar Wave 20 (Snow → Lava)
        if (this.currentWave === 20) {
            if (isMultiplayer && socket?.connected) {
                socket.emit('wave-complete', { wave: this.currentWave });
                socket.emit('biome-change', { biome: 'lava' });
            }
            const wcWave = document.getElementById('wc-wave');
            const wc = document.getElementById('wave-complete');
            if (wc) wc.style.display = 'flex';
            if (wcWave) wcWave.innerText = `SNOW BIOME CLEARED! THE VOLCANO AWAKENS...`;
            setTimeout(() => {
                if (wc) wc.style.display = 'none';
                transitionToLavaBiome();
            }, 2000);
            if (stageEl) stageEl.innerHTML = `<span style="font-size:0.8em;color:#ff6600">${t('BIOME_CHANGE')}</span>`;
            return;
        }

        // Transición de bioma al completar Wave 30 (Lava → Castle)
        if (this.currentWave === 30) {
            if (isMultiplayer && socket?.connected) {
                socket.emit('wave-complete', { wave: this.currentWave });
                socket.emit('biome-change', { biome: 'castle' });
            }
            const wcWave = document.getElementById('wc-wave');
            const wc = document.getElementById('wave-complete');
            if (wc) wc.style.display = 'flex';
            if (wcWave) wcWave.innerText = `LAVA CLEARED! DARKNESS FALLS... THE CASTLE AWAITS!`;
            setTimeout(() => {
                if (wc) wc.style.display = 'none';
                transitionToCastleBiome();
            }, 2000);
            if (stageEl) stageEl.innerHTML = `<span style="font-size:0.8em;color:#aa66ff">${t('BIOME_CHANGE')}</span>`;
            return;
        }

        if (isMultiplayer && socket?.connected) {
            socket.emit('wave-complete', { wave: this.currentWave });
        }

        const biomeWave = this.currentWave <= 10 ? this.currentWave
            : this.currentWave <= 20 ? this.currentWave - 10
            : this.currentWave <= 30 ? this.currentWave - 20
            : this.currentWave - 30;
        const biomeName = this.currentWave <= 10 ? 'FOREST'
            : this.currentWave <= 20 ? 'SNOWY'
            : this.currentWave <= 30 ? 'LAVA'
            : 'CASTLE';
        const wc = document.getElementById('wave-complete');
        const wcWave = document.getElementById('wc-wave');
        if (wc) wc.style.display = 'flex';
        if (wcWave) wcWave.innerText = `${biomeName} WAVE ${biomeWave} COMPLETE!`;

        setTimeout(() => {
            if (wc) wc.style.display = 'none';
            openShop();
        }, 1500);

        if (stageEl) stageEl.innerText = t('RESTORING');
    }

    victory() {
        if (this.isGameOver) return;
        this.isGameOver = true;
        
        // El host le avisa al resto de la partida que ya terminaron (ganaron)
        if (isMultiplayer && isHost && socket?.connected) {
            socket.emit('game-victory');
        }
        
        unlockAchievement(7, "Castle Crusher");
        if (localPlayerDeaths === 0) unlockAchievement(8, "Untouchable");

        if (!isMobile) controls.unlock();
        const victoryScreen = document.getElementById('victory-screen');
        if (victoryScreen) victoryScreen.style.display = 'flex';
        soundManager.startWinMusic();

        // Ocultar el HUD y la mira para la victoria
        uiLayer.style.display = 'none';
        crosshair.style.display = 'none';
    }

    update(delta: number, playerPos: THREE.Vector3, time: number) {
        if (this.isGameOver) return;

        // Actualizar drops
        for (let i = activeWeaponDrops.length - 1; i >= 0; i--) {
            const drop = activeWeaponDrops[i];
            drop.update(delta, playerPos);
            if (!drop.active) activeWeaponDrops.splice(i, 1);
        }

        // Spawning dinámico
        if (!this.isBreak && this.enemiesToSpawn > 0) {
            this.spawnTimer += delta * 1000;
            if (this.spawnTimer >= this.spawnRate) {
                this.spawnEnemy();
                this.spawnTimer = 0;
            }
        }

        // Actualizar enemigos actuales
        // Solo inclui jugadores VIVOS como objetivos
        const allPlayers: THREE.Vector3[] = [];
        if (playerHealth > 0 && !isDowned) allPlayers.push(playerPos);

        if (isMultiplayer && isHost) {
            // Solo los jugadores remotos vivos (en remotePlayers) son objetivos válidos
            remotePlayers.forEach(rp => {
                const rpIsDowned = (rp as any).isDowned || false;
                if (!rpIsDowned) {
                    allPlayers.push(rp.group.position);
                }
            });
        }

        // Si no hay jugadores vivos, los enemigos se quedan quietos
        if (allPlayers.length === 0) return;

        for (let i = this.activeEnemies.length - 1; i >= 0; i--) {
            const en = this.activeEnemies[i];
            
            // Default target is the first fully alive player found in allPlayers
            let closestPos = allPlayers[0];
            let targetIsLocal = (closestPos === playerPos);
            
            if (allPlayers.length > 1) {
                let minDist = Infinity;
                for (const p of allPlayers) {
                    const d = en.mesh.position.distanceToSquared(p);
                    if (d < minDist) { 
                        minDist = d; 
                        closestPos = p; 
                        targetIsLocal = (p === playerPos);
                    }
                }
            }

            en.update(delta, closestPos, time, targetIsLocal);
            if (en.isDead) {
                this.activeEnemies.splice(i, 1);
                this.enemiesAlive--;
                if (enemiesEl) enemiesEl.innerText = this.enemiesAlive.toString();
            }
        }

        if (hordeEl) {
            hordeEl.innerText = t('ENEMIES_LEFT', { alive: this.enemiesAlive, spawn: this.enemiesToSpawn });
        }

        // Host envía posiciones de enemigos 10 veces por segundo
        if (isMultiplayer && isHost && socket?.connected && this.activeEnemies.length > 0) {
            this.syncTimer += delta;
            if (this.syncTimer >= 0.1) {
                this.syncTimer = 0;
                const syncData = this.activeEnemies.filter(e => !e.isDead).map(e => ({
                    nid: e.nid,
                    x: Number(e.mesh.position.x.toFixed(2)),
                    z: Number(e.mesh.position.z.toFixed(2)),
                    rotY: Number(e.mesh.rotation.y.toFixed(2))
                }));
                socket.emit('enemy-sync', syncData);
            }
        }

        // Non-host: skip wave-complete detection (server will notify them)
        if (isMultiplayer && this.isNetworkClient) return;

        // Check wave complete
        if (this.enemiesToSpawn === 0 && this.enemiesAlive === 0 && !this.isBreak) {
            this.waveComplete();
        }
    }

    spawnEnemy() {
        if (this.isNetworkClient) return;
        if (this.enemiesToSpawn <= 0) return;

        let type = EnemyType.STANDARD;
        const r = Math.random();
        const bw = this.currentWave <= 10 ? this.currentWave
            : this.currentWave <= 20 ? this.currentWave - 10
            : this.currentWave <= 30 ? this.currentWave - 20
            : this.currentWave - 30; // biome-wave (1-10 per biome)

        if (currentBiome === Biome.LAVA) {
            // ===== BIOMA LAVA: Waves 21-30 =====
            if (bw === 10) { // Wave 30 — Dragón Morado Final
                type = EnemyType.BOSS_PURPLE_DRAGON;
            } else if (bw === 8) { // Wave 28 — Doble boss
                type = r > 0.5 ? EnemyType.BOSS_LAVA_DRAGON : EnemyType.BOSS_MAGMA_TITAN;
            } else if (bw === 5) { // Wave 25 — Goliath de lava
                type = r > 0.7 ? EnemyType.BOSS_LAVA_GOLIATH
                     : r > 0.4 ? EnemyType.MAGMA_GIANT
                     : EnemyType.LAVA_ZOMBIE;
            } else if (bw === 9) { // Wave 29
                type = r > 0.5 ? EnemyType.RED_DRAGON
                     : r > 0.25 ? EnemyType.MAGMA_GIANT
                     : EnemyType.LAVA_ZOMBIE;
            } else if (bw === 7) { // Wave 27
                type = r > 0.6 ? EnemyType.MAGMA_GIANT
                     : r > 0.3 ? EnemyType.RED_DRAGON
                     : EnemyType.LAVA_ZOMBIE;
            } else if (bw >= 3) {
                type = r > 0.6 ? EnemyType.RED_DRAGON
                     : r > 0.3 ? EnemyType.MAGMA_GIANT
                     : EnemyType.LAVA_ZOMBIE;
            } else if (bw === 2) {
                type = r > 0.6 ? EnemyType.RED_DRAGON : EnemyType.LAVA_ZOMBIE;
            } else { // bw === 1
                type = EnemyType.LAVA_ZOMBIE;
            }
        } else if (currentBiome === Biome.SNOW) {
            // ===== BIOMA NIEVE: Waves 11-20 =====
            if (bw === 10) { // Wave 20
                type = EnemyType.BOSS_BLIZZARD_KING;
            } else if (bw === 8) { // Wave 18
                type = r > 0.6 ? EnemyType.BOSS_GIANT_SNOWMAN
                     : r > 0.3 ? EnemyType.SNOWMAN
                     : EnemyType.SNOW_ZOMBIE;
            } else if (bw === 5 || bw === 6) { // Wave 15-16
                type = r > 0.7 ? EnemyType.BOSS_SNOW_GOLIATH
                     : r > 0.4 ? EnemyType.REINDEER_ZOMBIE
                     : EnemyType.SNOW_ZOMBIE;
            } else if (bw === 7) { // Wave 17
                type = r > 0.5 ? EnemyType.SNOWMAN
                     : r > 0.3 ? EnemyType.REINDEER_ZOMBIE
                     : EnemyType.SNOW_FAST;
            } else if (bw === 9) { // Wave 19
                type = r > 0.5 ? EnemyType.BOSS_GIANT_SNOWMAN
                     : r > 0.2 ? EnemyType.SNOWMAN
                     : EnemyType.SNOW_FAST;
            } else if (bw >= 3) {
                type = r > 0.6 ? EnemyType.SNOWMAN
                     : r > 0.4 ? EnemyType.REINDEER_ZOMBIE
                     : r > 0.2 ? EnemyType.SNOW_FAST
                     : EnemyType.SNOW_ZOMBIE;
            } else if (bw === 2) {
                type = r > 0.6 ? EnemyType.SNOW_FAST
                     : r > 0.3 ? EnemyType.REINDEER_ZOMBIE
                     : EnemyType.SNOW_ZOMBIE;
            } else { // bw === 1
                type = r > 0.7 ? EnemyType.SNOW_FAST : EnemyType.SNOW_ZOMBIE;
            }
        } else if (currentBiome === Biome.CASTLE) {
            // ===== BIOMA CASTILLO: Waves 31-40 =====
            if (bw === 10) { // Wave 40 — Zombie Overlord FINAL
                type = EnemyType.BOSS_ZOMBIE_OVERLORD;
            } else if (bw === 8) { // Wave 38 — Dinosaurio Gigante
                type = r > 0.5 ? EnemyType.BOSS_GIANT_DINO : EnemyType.DINOSAUR;
            } else if (bw === 5 || bw === 6) { // Wave 35-36 — Zombie Armado Gigante
                type = r > 0.7 ? EnemyType.BOSS_GIANT_ARMORED
                     : r > 0.4 ? EnemyType.ARMORED_ZOMBIE_LARGE
                     : EnemyType.ARMORED_ZOMBIE;
            } else if (bw === 9) { // Wave 39 — todo mezclado
                type = r > 0.7 ? EnemyType.DINOSAUR
                     : r > 0.45 ? EnemyType.VAMPIRE
                     : r > 0.2 ? EnemyType.BAT
                     : EnemyType.ARMORED_ZOMBIE_LARGE;
            } else if (bw === 7) { // Wave 37
                type = r > 0.5 ? EnemyType.DINOSAUR
                     : r > 0.25 ? EnemyType.VAMPIRE
                     : EnemyType.BAT;
            } else if (bw >= 4) { // Waves 34-36
                type = r > 0.55 ? EnemyType.VAMPIRE
                     : r > 0.3 ? EnemyType.BAT
                     : r > 0.15 ? EnemyType.ARMORED_ZOMBIE_LARGE
                     : EnemyType.ARMORED_ZOMBIE;
            } else if (bw === 3) { // Wave 33
                type = r > 0.6 ? EnemyType.VAMPIRE
                     : r > 0.3 ? EnemyType.ARMORED_ZOMBIE_LARGE
                     : EnemyType.ARMORED_ZOMBIE;
            } else if (bw === 2) { // Wave 32
                type = r > 0.5 ? EnemyType.ARMORED_ZOMBIE_LARGE : EnemyType.ARMORED_ZOMBIE;
            } else { // bw === 1
                type = r > 0.7 ? EnemyType.ARMORED_ZOMBIE_LARGE : EnemyType.ARMORED_ZOMBIE;
            }
        } else {
            // ===== BIOMA BOSQUE: Waves 1-10 =====
            if (bw === 10) {
                type = EnemyType.BOSS_FINAL_ROBOT;
            } else if (bw === 9) {
                type = r > 0.4 ? EnemyType.ZOMBIE_ON_FIRE : r > 0.2 ? EnemyType.FAST : EnemyType.ROBOT;
            } else if (bw === 8) {
                type = r > 0.6 ? EnemyType.BOSS_SENTINEL : r > 0.3 ? EnemyType.ROBOT : EnemyType.TANK;
            } else if (bw === 5 || bw === 6) {
                type = r > 0.7 ? EnemyType.BOSS_GOLIATH : r > 0.4 ? EnemyType.TANK : EnemyType.STANDARD;
            } else if (bw === 7) {
                type = r > 0.6 ? EnemyType.ROBOT : r > 0.3 ? EnemyType.FAST : EnemyType.STANDARD;
            } else if (bw >= 3) {
                type = r > 0.7 ? EnemyType.ROBOT : r > 0.5 ? EnemyType.TANK : EnemyType.STANDARD;
            } else if (bw === 2) {
                type = r > 0.7 ? EnemyType.FAST : r > 0.5 ? EnemyType.HUMANOID : EnemyType.STANDARD;
            }
        }

        const angle = Math.random() * Math.PI * 2;
        const radius = 50 + Math.random() * 20;
        const pos = new THREE.Vector3(
            camera.position.x + Math.cos(angle) * radius,
            0,
            camera.position.z + Math.sin(angle) * radius
        );

        const enemy = new Enemy(type, pos);
        enemy.mesh.visible = true;
        this.activeEnemies.push(enemy);
        this.enemiesToSpawn--;
        this.enemiesAlive++;

        // HOST: broadcast this enemy to all other players so they spawn the same one
        if (isMultiplayer && isHost && socket?.connected) {
            socket.emit('spawn-enemy', { nid: enemy.nid, type: enemy.type, x: pos.x, z: pos.z });
        }
    }
}


const waveManager = new WaveManager();

// ---- PLAYER CONTROLS & WEAPON ----
// Configuración de los controles del ratón (vista cámara) y eventos del teclado
const controls = new PointerLockControls(camera, document.body);

// Función que extrae la lógica de carga para poder llamarla desde PC o Móvil
function beginLoadingSequence() {
    if (gameStarted) return;
    gameStarted = true; // Mark game as started to affect createNameLabel
    
    // Apply local lobby settings straight into the wave manager
    applyLobbySettings({ mode: lobbyGameMode, waves: lobbyWaveCount, partyMode: lobbyPartyMode });
    
    // Update all remote player labels to remove READY status
    remotePlayers.forEach((p, id) => {
        const oldLabel = p.group.children.find(c => c.name === 'name_label');
        if (oldLabel) p.group.remove(oldLabel);
        const newLabel = createNameLabel(p.group.userData.username, p.group.userData.platform, p.group.userData.isReady);
        newLabel.name = 'name_label';
        p.group.add(newLabel);
    });

    // Update local lobby dummy if exists
    if (lobbyLocalGroup) {
        const oldLabel = lobbyLocalGroup.children.find(c => c.name === 'name_label');
        if (oldLabel) lobbyLocalGroup.remove(oldLabel);
        const newLabel = createNameLabel(lobbyLocalGroup.userData.username || myUsername, lobbyLocalGroup.userData.platform || (isMobile ? 'mobile' : 'pc'), lobbyLocalGroup.userData.isReady);
        newLabel.name = 'name_label';
        lobbyLocalGroup.add(newLabel);
    }

    const loadingScreenEl = document.getElementById('loading-screen');
    if (loadingScreenEl && loadingScreenEl.style.display === 'flex') return; // Prevent double load

    document.getElementById('main-menu')!.style.display = 'none';
    loadingScreen.style.display = 'flex';
    uiLayer.style.display = 'none';
    crosshair.style.display = 'none';

    // Si es móvil, mostramos los controles virtuales (el contenedor invisible por ahora)
    if (isMobile) {
        document.getElementById('mobile-controls')!.style.display = 'block';
    }

    // Pre-compilar shaders para mayor fluidez
    renderer.compile(scene, camera);

    let progress = 0;
    const loadInterval = setInterval(() => {
        progress += 1; // Carga aún más lenta para dar una sensación de "procesamiento"
        loadBar.style.width = `${progress}%`;

        if (progress === 10) bloodParticles.warmUp();
        if (loadingText) {
            if (progress < 15) loadingText.innerText = `INITIALIZING VOXELS... ${progress}%`;
            else if (progress < 30) loadingText.innerText = `OPTIMIZING SHADERS... ${progress}%`;
            else if (progress < 45) loadingText.innerText = `BUFFERING AUDIO... ${progress}%`;
            else if (progress < 60) loadingText.innerText = `CALIBRATING PHYSICS... ${progress}%`;
            else if (progress < 75) loadingText.innerText = `PRE-RENDERING MESHES... ${progress}%`;
            else if (progress < 90) loadingText.innerText = `GENERATING HORDES... ${progress}%`;
            else loadingText.innerText = `READYING WORLD... ${progress}%`;
        }

        if (progress >= 100) {
            clearInterval(loadInterval);
            startGame();
            soundManager.startGameMusic();
        }
    }, 30);

    // INITIAL WAVE PRE-SPAWN
    waveManager.preSpawnWave();
}

controls.addEventListener('lock', () => {
    // Mostrar pantalla de carga INMEDIATAMENTE al obtener permiso del puntero (si es PC)
    if (!gameStarted) {
        beginLoadingSequence();
    } else if (isPaused) {
        // Prevent resuming if paused by someone else (the resume button is hidden, so if they click, we ignore)
        const btnResume = document.getElementById('btn-resume');
        if (btnResume && btnResume.style.display === 'none') {
            document.exitPointerLock(); // Force unlock again
            return;
        }

        // Al reanudar el juego desde pausa
        isPaused = false;
        isUIShowing = false;
        pauseScreen.style.display = 'none';
        crosshair.style.display = 'block';
        if (soundManager.bgAudio) soundManager.bgAudio.play();
        if (isMultiplayer && socket?.connected) socket.emit('game-resumed');
    }
});

controls.addEventListener('unlock', () => {
    // Este evento se dispara cuando el puntero se libera (ESC del navegador)
    // GUARD: No mostrar el menú principal si se desbloqueó por una UI interna o si es móvil o si el juego acabo (victoria)
    if (gameStarted && !isUIShowing && !isMobile && !waveManager.isGameOver) {
        if (!isPaused && playerHealth > 0) {
            // El jugador presionó ESC durante la partida → mostrar pantalla de PAUSA
            isPaused = true;
            isUIShowing = true;
            pauseScreen.style.display = 'flex';
            
            const pauseTitle = document.getElementById('pause-title');
            const pauseSub = document.getElementById('pause-subtitle');
            const btnResume = document.getElementById('btn-resume');
            if (pauseTitle) pauseTitle.innerText = "PAUSED";
            if (pauseSub) pauseSub.innerText = "Press ESC or click the button to resume";
            if (btnResume) btnResume.style.display = 'block';

            // Mantener el HUD visible detrás de la pausa
            uiLayer.style.display = 'block';
            crosshair.style.display = 'none';
            // Pausar la música de fondo mientras el juego está en pausa
            if (soundManager.bgAudio) soundManager.bgAudio.pause();
            // Congelar movimiento
            moveForward = false;
            moveBackward = false;
            moveLeft = false;
            moveRight = false;

            if (isMultiplayer && socket?.connected) socket.emit('game-paused', { pauserName: myUsername });
        }
    }
});


// --- LANGUAGE SELECTORS ---
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.lang-btn').forEach(b => {
            (b as HTMLElement).classList.remove('active');
            (b as HTMLButtonElement).style.background = '#222';
            (b as HTMLButtonElement).style.color = '#aaa';
            (b as HTMLButtonElement).style.borderColor = '#555';
        });
        const target = e.target as HTMLElement;
        target.classList.add('active');
        target.style.background = '#555';
        target.style.color = '#fff';
        target.style.borderColor = '#fff';
        
        currentLanguage = target.getAttribute('data-lang') as Lang;
        applyTranslations();
    });
});

// --- SINGLEPLAYER REDIRECT MOVED TO LOBBY "SOLO PLAY" BTN ---
btnStart.addEventListener('click', () => {
    // Proceed directly to the Username selection screen
    const menuButtonsDiv = document.getElementById('menu-buttons');
    if(menuButtonsDiv) menuButtonsDiv.style.display = 'none';
    showScreen('username-screen');
    (document.getElementById('username-input') as HTMLInputElement)?.focus();
});

// ---- OPTIONS SCREEN LOGIC ----
const optionsScreen = document.getElementById('options-screen') as HTMLElement;

document.getElementById('btn-options')?.addEventListener('click', () => {
    // Show options screen, hide main menu
    if (mainMenu) mainMenu.style.display = 'none';
    optionsScreen.style.display = 'flex';
});

document.getElementById('btn-options-back')?.addEventListener('click', () => {
    // Return to main menu
    optionsScreen.style.display = 'none';
    if (mainMenu) mainMenu.style.display = 'flex';
});

// --- Volume Sliders ---
let masterVolume = 0.8;
let musicVolume = 0.6;
let sfxVolume = 1.0;

function applyVolumes() {
    // Music volume = master * music slider
    if (soundManager.bgAudio) {
        // Boosted music volume to 200% (x2) as requested
        soundManager.bgAudio.volume = Math.min(masterVolume * musicVolume * 2, 1.0);
    }
    // SFX volume stored for future use in sound playback
    (soundManager as any).sfxVolume = masterVolume * sfxVolume;
}

// Helper: sync slider ↔ number input bi-directionally
function linkSliderAndInput(sliderId: string, inputId: string, onChange: (val: number) => void) {
    const slider = document.getElementById(sliderId) as HTMLInputElement;
    const numInput = document.getElementById(inputId) as HTMLInputElement;
    if (!slider || !numInput) return;

    slider.addEventListener('input', () => {
        numInput.value = slider.value;
        onChange(parseInt(slider.value));
    });
    numInput.addEventListener('input', () => {
        let v = parseInt(numInput.value) || 0;
        const min = parseInt(numInput.min) || 0;
        const max = parseInt(numInput.max) || 100;
        if (v < min) v = min;
        if (v > max) v = max;
        slider.value = v.toString();
        onChange(v);
    });
    numInput.addEventListener('blur', () => {
        // Clamp on blur
        let v = parseInt(numInput.value) || 0;
        const min = parseInt(numInput.min) || 0;
        const max = parseInt(numInput.max) || 100;
        v = Math.max(min, Math.min(max, v));
        numInput.value = v.toString();
        slider.value = v.toString();
    });
}

// --- Persistencia de Configuración ---
function saveSettings() {
    const settings = {
        masterVolume, musicVolume, sfxVolume,
        sensitivity: (controls as any).pointerSpeed || 0.002,
        graphics: currentGraphicsQuality,
        showFps: (document.getElementById('opt-show-fps') as HTMLInputElement)?.checked,
        showHp: (document.getElementById('opt-show-hp') as HTMLInputElement)?.checked,
        language: currentLang
    };
    localStorage.setItem('nightfall_settings', JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem('nightfall_settings');
    if (!saved) return;
    try {
        const settings = JSON.parse(saved);
        // Master
        if (settings.masterVolume !== undefined) {
            masterVolume = settings.masterVolume;
            const sv = Math.round(masterVolume * 100);
            const ms = document.getElementById('opt-master-vol') as HTMLInputElement;
            const mi = document.getElementById('opt-master-vol-val') as HTMLInputElement;
            if (ms) ms.value = sv.toString();
            if (mi) mi.value = sv.toString();
        }
        // Music
        if (settings.musicVolume !== undefined) {
            musicVolume = settings.musicVolume;
            const sv = Math.round(musicVolume * 100);
            const ms = document.getElementById('opt-music-vol') as HTMLInputElement;
            const mi = document.getElementById('opt-music-vol-val') as HTMLInputElement;
            if (ms) ms.value = sv.toString();
            if (mi) mi.value = sv.toString();
        }
        // SFX
        if (settings.sfxVolume !== undefined) {
            sfxVolume = settings.sfxVolume;
            const sv = Math.round(sfxVolume * 100);
            const ms = document.getElementById('opt-sfx-vol') as HTMLInputElement;
            const mi = document.getElementById('opt-sfx-vol-val') as HTMLInputElement;
            if (ms) ms.value = sv.toString();
            if (mi) mi.value = sv.toString();
        }
        // Sensibilidad
        if (settings.sensitivity !== undefined) {
            (controls as any).pointerSpeed = settings.sensitivity;
            const sv = Math.round(settings.sensitivity * 100 * 1000); // base is very small
            // Assuming default sensitivity ~0.002 mapping to "50" -> adjust calculation based on slider
            const sliderV = Math.round((settings.sensitivity / 0.005) * 100); // rough normalization depending on how slider was set up
            const ss = document.getElementById('opt-sensitivity') as HTMLInputElement;
            const si = document.getElementById('opt-sensitivity-val') as HTMLInputElement;
            if (ss) ss.value = sliderV.toString();
            if (si) si.value = sliderV.toString();
        }
        // Graphics
        if (settings.graphics) {
            currentGraphicsQuality = settings.graphics;
            document.querySelectorAll('.opt-q-btn').forEach(b => {
                const btn = b as HTMLElement;
                if (btn.dataset.quality === currentGraphicsQuality) {
                    btn.click();
                }
            });
            applyGraphicsQuality(currentGraphicsQuality);
        }
        // Toggles
        if (settings.showFps !== undefined) {
            const el = document.getElementById('opt-show-fps') as HTMLInputElement;
            if (el && el.checked !== settings.showFps) {
                el.checked = settings.showFps;
                el.dispatchEvent(new Event('change'));
            }
        }
        if (settings.showHp !== undefined) {
            const el = document.getElementById('opt-show-hp') as HTMLInputElement;
            if (el && el.checked !== settings.showHp) {
                el.checked = settings.showHp;
                el.dispatchEvent(new Event('change'));
            }
        }
        // Language
        if (settings.language && settings.language !== currentLang) {
            const btn = document.querySelector(`.lang-btn[data-lang="${settings.language}"]`) as HTMLElement;
            if (btn) btn.click();
        }

        applyVolumes();
    } catch (e) { console.error("Could not load settings", e); }
}

linkSliderAndInput('opt-master-vol', 'opt-master-vol-val', (v) => {
    masterVolume = v / 100;
    applyVolumes();
    saveSettings();
});

linkSliderAndInput('opt-music-vol', 'opt-music-vol-val', (v) => {
    musicVolume = v / 100;
    applyVolumes();
    saveSettings();
});

linkSliderAndInput('opt-sfx-vol', 'opt-sfx-vol-val', (v) => {
    sfxVolume = v / 100;
    applyVolumes();
    saveSettings();
});

// --- Sensitivity ---
linkSliderAndInput('opt-sensitivity', 'opt-sensitivity-val', (v) => {
    (controls as any).pointerSpeed = v / 1000; // was /100 initially? need to check controls setup, usually 0.002
    saveSettings();
});

// --- Graphics Quality ---
let currentGraphicsQuality = 'medium';
document.querySelectorAll('.opt-q-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.opt-q-btn').forEach(b => {
            (b as HTMLElement).style.background = 'transparent';
            (b as HTMLElement).style.borderColor = '#555';
            (b as HTMLElement).style.color = '#aaa';
        });
        (btn as HTMLElement).style.background = '#ff6644';
        (btn as HTMLElement).style.borderColor = '#ff6644';
        (btn as HTMLElement).style.color = '#000';
        const quality = (btn as HTMLElement).dataset.quality;
        currentGraphicsQuality = quality || 'medium';
        applyGraphicsQuality(currentGraphicsQuality);
        saveSettings();
    });
});

function applyGraphicsQuality(quality: string) {
    if (quality === 'low') {
        // LOW: Maximum performance
        renderer.setPixelRatio(0.6);
        renderer.shadowMap.enabled = false;
        scene.fog = new THREE.FogExp2(0x3a155a, 0.008); // Thicker fog = less to render
        grassInstanced.visible = false; // Hide grass for performance
        moonLight.castShadow = false;
        moonLight.shadow.mapSize.width = 256;
        moonLight.shadow.mapSize.height = 256;
        ambientLight.intensity = 0.9; // Brighter to compensate for no shadows
        fillLight.intensity = 1;
    } else if (quality === 'medium') {
        // MEDIUM: Balanced (default)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.0));
        renderer.shadowMap.enabled = false;
        scene.fog = new THREE.FogExp2(0x3a155a, 0.005);
        grassInstanced.visible = true;
        moonLight.castShadow = false;
        moonLight.shadow.mapSize.width = 512;
        moonLight.shadow.mapSize.height = 512;
        ambientLight.intensity = 0.7;
        fillLight.intensity = 2;
    } else {
        // HIGH: Best visuals
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        scene.fog = new THREE.FogExp2(0x3a155a, 0.003); // Thinner fog = see further
        grassInstanced.visible = true;
        moonLight.castShadow = true;
        moonLight.shadow.mapSize.width = 1024;
        moonLight.shadow.mapSize.height = 1024;
        moonLight.shadow.needsUpdate = true;
        ambientLight.intensity = 0.5; // Darker ambient = more dramatic shadows
        fillLight.intensity = 2.5;
        // Activate shadow receivers on key meshes
        floor.receiveShadow = true;
    }
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// --- Show FPS Toggle ---
document.getElementById('opt-show-fps')?.addEventListener('change', (e) => {
    const checked = (e.target as HTMLInputElement).checked;
    const knob = document.getElementById('opt-fps-knob');
    if (knob) {
        knob.style.left = checked ? '24px' : '4px';
        knob.style.background = checked ? '#00ffcc' : '#555';
        knob.style.boxShadow = checked ? '0 0 8px #00ffcc' : 'none';
    }
    const fpsBox = document.querySelector('.stat-box:nth-child(2)') as HTMLElement;
    if (fpsBox) fpsBox.style.display = checked ? 'block' : 'none';
    saveSettings();
});

// --- Show HP Toggle ---
let showHPDigit = false;
document.getElementById('opt-show-hp')?.addEventListener('change', (e) => {
    const checked = (e.target as HTMLInputElement).checked;
    showHPDigit = checked;
    const knob = document.getElementById('opt-hp-knob');
    if (knob) {
        knob.style.left = checked ? '24px' : '4px';
        knob.style.background = checked ? '#ff4444' : '#555';
        knob.style.boxShadow = checked ? '0 0 8px #ff4444' : 'none';
    }
    const hpDigit = document.getElementById('health-digit');
    if (hpDigit) hpDigit.style.display = checked ? 'block' : 'none';
    saveSettings();
});

document.getElementById('btn-exit')?.addEventListener('click', () => {
    alert("You cannot escape the night!");
});

// ---- LÓGICA DE PAUSA / REANUDAR ----
// Función que reanuda la partida desde la pantalla de pausa
function resumeGame() {
    if (!isPaused) return;
    isPaused = false;
    isUIShowing = false;
    // Esconder la pantalla de pausa y restaurar el HUD
    pauseScreen.style.display = 'none';
    crosshair.style.display = 'block';
    // Reanudar la música de fondo después de volver del menú de pausa
    if (soundManager.bgAudio) soundManager.bgAudio.play().catch(() => { });
    // Volver a bloquear el puntero para reanudar el juego (solo en PC)
    if (isMultiplayer && socket?.connected) {
        socket.emit('game-resumed');
    }

    if (!isMobile) controls.lock();
}

// El botón "RESUME" en la pantalla de pausa llama a resumeGame
document.getElementById('btn-resume')?.addEventListener('click', resumeGame);

// Botón EXIT GAME
document.getElementById('btn-quit-game')?.addEventListener('click', () => {
    socket?.disconnect();
    location.reload();
});

// ---- FUNCIÓN DE INICIO DE JUEGO ----
// Esta función esconde la pantalla de carga y muestra la interfaz de juego real
function startGame() {
    gameStarted = true;
    isPaused = false;                         // Asegurarse de que no estamos en pausa
    loadingScreen.style.display = 'none';    // Esconder la pantalla de carga
    uiLayer.style.display = 'block';         // Mostrar el HUD del juego
    crosshair.style.display = 'block';       // Mostrar la mira de apuntado
    prevTime = performance.now();            // Resetear el tiempo para evitar un delta enorme

    // Ocultar cualquier botón "Kick" del lobby a los demás jugadores
    remotePlayers.forEach(rp => {
        const kl = rp.group.getObjectByName('kick_label') as THREE.Sprite;
        if (kl) kl.visible = false;
    });

    // waveManager.startNextWave() ya fue llamada al final de la carga (progress >= 100)
}

// Arma de pocos polígonos (Low Poly) unida a la cámara
const weaponGroup = new THREE.Group();
const weaponMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, flatShading: true });
const barrelMaterial = new THREE.MeshStandardMaterial({ color: 0x666666, flatShading: true });

function updateWeaponVisuals() {
    // Limpiar elementos existentes
    const children = [...weaponGroup.children];
    for (const child of children) {
        if (child !== flash) weaponGroup.remove(child);
    }

    const w = weapons[currentWeaponIndex];
    if (w.name === "GUN") {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.22, 0.7), weaponMaterial);
        b.position.set(0, -0.1, 0);
        const brl = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8, 6), barrelMaterial);
        brl.rotation.x = Math.PI / 2; brl.position.set(0, -0.05, -0.8);
        const mag = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, 0.15), weaponMaterial);
        mag.position.set(0, -0.3, -0.1);
        weaponGroup.add(b, brl, mag);
    } else if (w.name === "MINI GUN") {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.8), weaponMaterial);
        b.position.set(0, -0.1, 0);
        for (let i = 0; i < 6; i++) {
            const brl = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.9, 6), barrelMaterial);
            brl.rotation.x = Math.PI / 2;
            const r = 0.12; const a = (i / 6) * Math.PI * 2;
            brl.position.set(Math.cos(a) * r, Math.sin(a) * r - 0.05, -0.8);
            weaponGroup.add(brl);
        }
        weaponGroup.add(b);
    } else if (w.name === "ROCKET LAUNCHER") {
        const b = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 1.2, 12), weaponMaterial);
        b.rotation.x = Math.PI / 2; b.position.set(0, -0.05, -0.4);
        weaponGroup.add(b);
    } else if (w.name === "LASER GUN") {
        // Modelo de primera persona para la pistola láser: cuerpo oscuro con cañón cian brillante
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 0.5), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0x00ffff, emissiveIntensity: 0.2 }));
        b.position.set(0, -0.1, 0);
        const brl = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.6), new THREE.MeshStandardMaterial({ color: 0x00ffff }));
        brl.position.set(0, -0.05, -0.4);
        weaponGroup.add(b, brl);
    } else if (w.name === "FIRE GUN") {
        // Modelo de primera persona del lanzallamas: cuerpo ancho con boquilla naranja
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 0.7), weaponMaterial);
        b.position.set(0, -0.1, 0);
        const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 0.4, 8),
            new THREE.MeshStandardMaterial({ color: 0xff6600, emissive: 0xff3300, emissiveIntensity: 0.5 }));
        nozzle.rotation.x = Math.PI / 2;
        nozzle.position.set(0, -0.05, -0.6);
        const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.5, 10), weaponMaterial);
        tank.rotation.z = Math.PI / 2;
        tank.position.set(0, 0.15, 0.1);
        weaponGroup.add(b, nozzle, tank);
    }
}

updateWeaponVisuals();
weaponGroup.position.set(0.25, -0.3, -0.4);
camera.add(weaponGroup);
scene.add(camera);

// Destello del cañón (Muzzle Flash)
const flashGeo = new THREE.PlaneGeometry(0.3, 0.3);
const flashMat = new THREE.MeshBasicMaterial({ color: 0xffdd00, transparent: true, opacity: 0 });
const flash = new THREE.Mesh(flashGeo, flashMat);
flash.position.set(0, -0.05, -0.85);
weaponGroup.add(flash);

// ---- SHOOTING LOGIC ----
// Sistema de disparo (trazado de rayos o "hitscan") para detectar si la bala le dio a un enemigo
const raycaster = new THREE.Raycaster();
const screenCenter = new THREE.Vector2(0, 0);

function reloadWeapon() {
    const w = weapons[currentWeaponIndex];
    if (w.isReloading || w.ammoCurrent === w.magSize || w.ammoReserve <= 0) return;

    w.isReloading = true;
    if (weaponNameEl) weaponNameEl.innerText = t('RELOADING');

    // Animate weapon down
    weaponGroup.position.y = -0.5;

    setTimeout(() => {
        const ammoNeeded = w.magSize - w.ammoCurrent;
        const ammoToLoad = Math.min(ammoNeeded, w.ammoReserve);
        w.ammoCurrent += ammoToLoad;
        w.ammoReserve -= ammoToLoad;
        w.isReloading = false;
        weaponGroup.position.y = -0.3;
        updateWeaponHUD();
    }, w.reloadTime);
}

let isShooting = false;
document.addEventListener('mousedown', (e) => {
    if (e.button === 0 && controls.isLocked && gameStarted) isShooting = true;
});
document.addEventListener('mouseup', (e) => {
    if (e.button === 0) isShooting = false;
});

// ==== CONTROLES TÁCTILES VIRTUALES (MÓVIL) ==== //

// Función auxiliar acortada para recuperar elementos del DOM
const getEl = (id: string) => document.getElementById(id);

// 1. Botones de Acción (Salto/Jetpack, Recarga, Disparo)
getEl('btn-mobile-jump')?.addEventListener('touchstart', (e) => {
    e.preventDefault();
    // Maneja el salto o el uso del jetpack al tocar el botón de salto.
    // Si el jugador no tiene jetpack y tiene suficiente resistencia, realiza un salto normal.
    // Si el jugador tiene jetpack, activa el modo jetpack.
    if (camera.position.y <= 1.61 && playerStamina > 15 && !hasJetpack && staminaCooldown <= 0) {
        velocity.y += 20;
        playerStamina -= 15;
        updateStatsHUD();
    } else if (hasJetpack) {
        isJetpacking = true; // Activa el jetpack
    }
});
getEl('btn-mobile-jump')?.addEventListener('touchend', (e) => {
    e.preventDefault();
    isJetpacking = false; // Desactiva el jetpack al soltar el botón
});

getEl('btn-mobile-reload')?.addEventListener('touchstart', (e) => { e.preventDefault(); reloadWeapon(); }); // Inicia la recarga del arma al tocar el botón de recarga

getEl('btn-mobile-shoot')?.addEventListener('touchstart', (e) => { e.preventDefault(); isShooting = true; }); // Activa el disparo continuo al tocar el botón de disparo
getEl('btn-mobile-shoot')?.addEventListener('touchend', (e) => { e.preventDefault(); isShooting = false; }); // Desactiva el disparo al soltar el botón de disparo

// 1.5 Botones de Selección Rápida de Armas (HUD Superior numérico)
// Permiten al jugador cambiar rápidamente de arma si la tiene en su inventario.
getEl('btn-mw-1')?.addEventListener('touchstart', (e) => { e.preventDefault(); if (playerInventory.includes(0)) switchWeapon(0); }); // Slot 1: Gun
getEl('btn-mw-2')?.addEventListener('touchstart', (e) => { e.preventDefault(); if (playerInventory.includes(1)) switchWeapon(1); }); // Slot 2: Laser Gun
getEl('btn-mw-3')?.addEventListener('touchstart', (e) => { e.preventDefault(); if (playerInventory.includes(2)) switchWeapon(2); }); // Slot 3: Rocket Launcher
getEl('btn-mw-4')?.addEventListener('touchstart', (e) => { e.preventDefault(); if (playerInventory.includes(3)) switchWeapon(3); }); // Slot 4: Mini Gun
getEl('btn-mw-5')?.addEventListener('touchstart', (e) => { e.preventDefault(); if (playerInventory.includes(4)) switchWeapon(4); }); // Slot 5: Fire Gun

// Evento de pausa para móviles con feedback visual
const mobilePauseBtn = getEl('btn-mobile-pause');
if (mobilePauseBtn) {
    const handlePause = (e: Event) => {
        e.preventDefault();
        if (gameStarted && !isPaused && !shopOpen) {
            isPaused = true;
            isUIShowing = true;
            const pauseTitle = document.getElementById('pause-title');
            const pauseSub = document.getElementById('pause-subtitle');
            const btnResume = document.getElementById('btn-resume');
            if (pauseTitle) pauseTitle.innerText = "PAUSED";
            if (pauseSub) pauseSub.innerText = "Press the button to resume";
            if (btnResume) btnResume.style.display = 'block';

            pauseScreen.style.display = 'flex';
            crosshair.style.display = 'none';
            if (soundManager.bgAudio) soundManager.bgAudio.pause();
            // Pequeña animación de pulsación
            mobilePauseBtn.style.transform = 'scale(0.9)';
            setTimeout(() => { mobilePauseBtn.style.transform = 'scale(1)'; }, 100);

            if (isMultiplayer && socket?.connected) socket.emit('game-paused', { pauserName: myUsername });
        }
    };
    mobilePauseBtn.addEventListener('touchstart', handlePause);
    mobilePauseBtn.addEventListener('click', handlePause);
}

getEl('btn-mobile-interact')?.addEventListener('touchstart', (e) => {
    e.preventDefault();
    // Al tocar el botón de interacción, si la UI está visible y la tienda no está abierta, abre la tienda.
    if (uiLayer.style.display !== 'none' && !shopOpen) { openShop(); }
});

// 2. Área Invisible Derecha para Rotación de Cámara
const lookArea = getEl('mobile-look-area');
lookArea?.addEventListener('touchstart', (e: TouchEvent) => {
    e.preventDefault();
    // Registra el primer toque en el área de la cámara para controlar la rotación.
    // Guarda el ID del toque y las coordenadas iniciales.
    if (lookTouchId === null) {
        const touch = e.changedTouches[0];
        lookTouchId = touch.identifier;
        lastLookX = touch.clientX;
        lastLookY = touch.clientY;
    }
}, { passive: false });

lookArea?.addEventListener('touchmove', (e: TouchEvent) => {
    e.preventDefault();
    for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === lookTouchId && isMobile && gameStarted && !isPaused) {
            const movementX = touch.clientX - lastLookX;
            const movementY = touch.clientY - lastLookY;
            lastLookX = touch.clientX;
            lastLookY = touch.clientY;

            // Sensibilidad móvil (escala)
            const lookSens = 0.003;
            const euler = new THREE.Euler(0, 0, 0, 'YXZ');
            euler.setFromQuaternion(camera.quaternion);

            euler.y -= movementX * lookSens;
            euler.x -= movementY * lookSens;
            euler.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, euler.x));

            camera.quaternion.setFromEuler(euler);
        }
    }
}, { passive: false });

lookArea?.addEventListener('touchend', (e: TouchEvent) => {
    e.preventDefault();
    for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === lookTouchId) {
            lookTouchId = null;
        }
    }
}, { passive: false });

lookArea?.addEventListener('touchcancel', (e: TouchEvent) => {
    // Se ejecuta al remover el dedo de la pantalla derecha
    e.preventDefault();
    lookTouchId = null;
});

// 3. Joystick Virtual de Movimiento (Área Izquierda)
const joystickBase = getEl('mobile-joystick-base');
const joystickPad = getEl('mobile-joystick-pad');
const JOYSTICK_MAX_RADIUS = 40;

joystickBase?.addEventListener('touchstart', (e: TouchEvent) => {
    e.preventDefault();
    if (!joystickActive) {
        const touch = e.changedTouches[0];
        currentTouchId = touch.identifier;
        joystickActive = true;
        const rect = joystickBase.getBoundingClientRect();
        joystickCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        updateJoystickVector(touch.clientX, touch.clientY);
    }
}, { passive: false });

joystickBase?.addEventListener('touchmove', (e: TouchEvent) => {
    e.preventDefault();
    for (let i = 0; i < e.changedTouches.length; i++) {
        const touch = e.changedTouches[i];
        if (touch.identifier === currentTouchId) {
            updateJoystickVector(touch.clientX, touch.clientY);
        }
    }
}, { passive: false });

const handleJoystickEnd = (e: TouchEvent) => {
    e.preventDefault();
    for (let i = 0; i < e.changedTouches.length; i++) {
        if (e.changedTouches[i].identifier === currentTouchId) {
            joystickActive = false;
            currentTouchId = null;
            if (joystickPad) {
                joystickPad.style.transform = `translate(-50%, -50%)`;
            }
            moveForward = false; moveBackward = false; moveLeft = false; moveRight = false;
        }
    }
};
joystickBase?.addEventListener('touchend', handleJoystickEnd, { passive: false });
joystickBase?.addEventListener('touchcancel', handleJoystickEnd, { passive: false });

function updateJoystickVector(clientX: number, clientY: number) {
    let dx = clientX - joystickCenter.x;
    let dy = clientY - joystickCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Configurar transform del stick pad visual
    if (distance > JOYSTICK_MAX_RADIUS) {
        dx = (dx / distance) * JOYSTICK_MAX_RADIUS;
        dy = (dy / distance) * JOYSTICK_MAX_RADIUS;
    }
    if (joystickPad) {
        joystickPad.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    }

    // Normalizar zona muerta (deadzone)
    const deadzone = 10;
    moveForward = false; moveBackward = false; moveLeft = false; moveRight = false;

    if (distance > deadzone) {
        // En 3D: Adelante = -z, Atrás = +z, Izquierda = -x, Derecha = +x
        // En la pantalla: Arriba = -y de pantalla, Abajo = +y, Izq = -x, Der = +x
        if (dy < -deadzone) moveForward = true;
        if (dy > deadzone) moveBackward = true;
        if (dx < -deadzone) moveLeft = true;
        if (dx > deadzone) moveRight = true;
    }
}

function handleShooting(time: number) {
    if (!isShooting || (!controls.isLocked && !isMobile) || !gameStarted) return;
    const w = weapons[currentWeaponIndex];
    if (w.isReloading) return;

    if (time - w.lastShotTime < w.fireRate) return;

    if (w.ammoCurrent <= 0) {
        if (!w.isReloading) reloadWeapon();
        if (!w.isAutomatic) isShooting = false;
        return;
    }

    w.ammoCurrent--;
    w.lastShotTime = time;
    updateWeaponHUD();

    if (!w.isAutomatic) isShooting = false;
    shoot(w);
}

function shoot(w: Weapon) {
    // Animación básica de retroceso (Recoil)
    weaponGroup.position.z += w.recoilAmount;
    weaponGroup.position.y += Math.min(w.recoilAmount, 0.1);
    weaponGroup.rotation.x += w.recoilAmount / 2;

    flashMat.opacity = 1;
    flash.rotation.z = Math.random() * Math.PI * 2;
    setTimeout(() => { flashMat.opacity = 0; }, 50);

    // Sonido y lógica de proyectil según el arma activa
    if (w.name === "ROCKET LAUNCHER") {
        soundManager.playExplosion(); // Sonido de lanzamiento
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        playerRockets.push(new Rocket(camera.position.clone(), dir));
    } else if (w.name === "FIRE GUN") {
        // El lanzallamas dispara fuego horizontal amplio hacia adelante.
        soundManager.playFlamethrower();
        const fireDir = new THREE.Vector3();
        camera.getWorldDirection(fireDir);
        // Forzar dirección horizontal (ignorar inclinación vertical para que
        // las partículas se extiendan al frente del jugador, no hacia el suelo)
        fireDir.y = 0;
        fireDir.normalize();

        // Lanzar partículas en un arco horizontal ancho (cono flamígero)
        for (let i = 0; i < 6; i++) {
            const spread = (Math.random() - 0.5) * 6; // desplazamiento lateral
            const dist = 4 + Math.random() * 11; // entre 4 y 15 unidades de alcance
            const spawnPos = camera.position.clone()
                .addScaledVector(fireDir, dist)
                .addScaledVector(new THREE.Vector3(-fireDir.z, 0, fireDir.x), spread);
            spawnPos.y = camera.position.y - 0.5 + Math.random() * 0.4;
            flameParticles.spawn(spawnPos, 4);
        }

        // Daño en área real con rango de 15 unidades
        waveManager.activeEnemies.forEach(en => {
            if (en.isDead) return;
            const toEnemy = new THREE.Vector3().subVectors(en.mesh.position, camera.position);
            toEnemy.y = 0;
            const forward = fireDir.clone();
            const dot = toEnemy.clone().normalize().dot(forward); // 1 = directo, <0 = detrás
            const dist = toEnemy.length();
            if (dot > 0.4 && dist < 15) { // solo enemigos frontales hasta 15 unidades
                en.takeDamage(w.damage * damageMultiplier * (1 - dist / 15), fireDir.clone().multiplyScalar(0.3));
            }
        });
        return; // El lanzallamas no usa hitscan
    } else if (w.name === "LASER GUN") {
        soundManager.playLaser();
    } else {
        soundManager.playShot();
    }

    if (w.name !== "ROCKET LAUNCHER") {
        // Detección de impacto instantánea (Hitscan para Pistolas y Láser)
        raycaster.setFromCamera(screenCenter, camera);
        const enemyMeshes: THREE.Object3D[] = [];
        waveManager.activeEnemies.forEach(en => {
            if (!en.isDead) { // Solo añadir si no está muerto
                if ((en as any)._torso) enemyMeshes.push((en as any)._torso as THREE.Object3D);
                if ((en as any)._head) enemyMeshes.push((en as any)._head as THREE.Object3D);
            }
        });

        for (let p = 0; p < w.pellets; p++) {
            const dir = raycaster.ray.direction.clone();
            if (w.pellets > 1) {
                dir.x += (Math.random() - 0.5) * 0.1;
                dir.y += (Math.random() - 0.5) * 0.1;
                dir.normalize();
            }

            const hitRay = new THREE.Raycaster(raycaster.ray.origin, dir, 0, 100);
            const intersects = hitRay.intersectObjects(enemyMeshes);
            if (intersects.length > 0) {
                if (w.name === "LASER GUN") {
                    const hitEnemies = new Set<any>();
                    for (const hit of intersects) {
                        const hitMesh = hit.object as THREE.Mesh;
                        const enemy = waveManager.activeEnemies.find(en => (en as any)._torso === hitMesh || (en as any)._head === hitMesh);
                        if (enemy && !hitEnemies.has(enemy)) {
                            hitEnemies.add(enemy);
                            const isHeadshot = (enemy as any)._head === hitMesh;
                            const finalDamage = w.damage * damageMultiplier * (isHeadshot ? 2 : 1);
                            enemy.takeDamage(finalDamage, dir.clone().multiplyScalar(0.5));
                            showHitMarker(isHeadshot);
                        }
                    }
                } else {
                    const hitMesh = intersects[0].object as THREE.Mesh;
                    const enemy = waveManager.activeEnemies.find(en => (en as any)._torso === hitMesh || (en as any)._head === hitMesh);
                    if (enemy) {
                        const isHeadshot = (enemy as any)._head === hitMesh;
                        const finalDamage = w.damage * damageMultiplier * (isHeadshot ? 2 : 1);
                        enemy.takeDamage(finalDamage, dir.clone().multiplyScalar(0.5));
                        showHitMarker(isHeadshot);
                    }
                }
            }
        }
    }
}

// ---- SISTEMA DE PARTÍCULAS GENÉRICO ----
// Clase única para manejar sangre, fuego y chispas de forma eficiente
class GenericParticleSystem {
    particles: THREE.Points;
    geometry: THREE.BufferGeometry;
    positions: Float32Array;
    velocities: THREE.Vector3[] = [];
    lifetimes: number[] = [];
    maxParticles: number;
    cursor: number = 0;
    config: { color: number, size: number, gravity: number, lifeBase: number, spread: number };

    constructor(max: number, config: any) {
        this.maxParticles = max;
        this.config = config;
        this.geometry = new THREE.BufferGeometry();
        this.positions = new Float32Array(max * 3);
        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

        const mat = new THREE.PointsMaterial({
            color: config.color,
            size: config.size,
            transparent: true,
            opacity: 0.8,
            blending: config.blending || THREE.NormalBlending,
            depthTest: true,
            depthWrite: false,
            sizeAttenuation: true
        });

        this.particles = new THREE.Points(this.geometry, mat);
        this.particles.frustumCulled = false;
        scene.add(this.particles);

        for (let i = 0; i < max; i++) {
            this.velocities.push(new THREE.Vector3());
            this.lifetimes.push(0);
            this.positions[i * 3 + 1] = -100;
        }
    }

    spawn(pos: THREE.Vector3, count: number = 5, customVel?: THREE.Vector3) {
        for (let i = 0; i < count; i++) {
            const idx = this.cursor;
            this.positions[idx * 3] = pos.x + (Math.random() - 0.5) * this.config.spread;
            this.positions[idx * 3 + 1] = pos.y + (Math.random() - 0.5) * this.config.spread;
            this.positions[idx * 3 + 2] = pos.z + (Math.random() - 0.5) * this.config.spread;

            if (customVel) {
                this.velocities[idx].copy(customVel).add(new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2));
            } else {
                this.velocities[idx].set((Math.random() - 0.5) * 4, Math.random() * 5, (Math.random() - 0.5) * 4);
            }

            this.lifetimes[idx] = this.config.lifeBase + Math.random() * 0.5;
            this.cursor = (this.cursor + 1) % this.maxParticles;
        }
        this.geometry.attributes.position.needsUpdate = true;
    }

    update(delta: number) {
        let needsUpdate = false;
        for (let i = 0; i < this.maxParticles; i++) {
            if (this.lifetimes[i] > 0) {
                this.positions[i * 3] += this.velocities[i].x * delta;
                this.positions[i * 3 + 1] += this.velocities[i].y * delta;
                this.positions[i * 3 + 2] += this.velocities[i].z * delta;
                this.velocities[i].y -= this.config.gravity * delta;

                this.lifetimes[i] -= delta;

                // Muere si toca el suelo O si se le acaba el tiempo (y=0.4 evita que traspase las colinas del low poly terrain)
                if (this.positions[i * 3 + 1] <= 0.4 || this.lifetimes[i] <= 0) {
                    this.lifetimes[i] = 0;
                    this.positions[i * 3 + 1] = -100; // Ocultar inmediatamente
                    this.velocities[i].set(0, 0, 0);  // Detener
                    needsUpdate = true; // Force update when hitting floor
                } else {
                    needsUpdate = true; // Normal movement update
                }
            } else if (this.positions[i * 3 + 1] > -100) {
                // EXTREME CLEANUP: If particle is dead but still above 'hidden' Y, force it down
                this.positions[i * 3 + 1] = -100;
                needsUpdate = true;
            }
        }
        // Siempre actualizar el buffer si algo cambió
        if (needsUpdate) this.geometry.attributes.position.needsUpdate = true;
    }

    warmUp() {
        this.spawn(new THREE.Vector3(0, -10, 0), 20);
        this.update(0.1);
        this.lifetimes.fill(0);
        for (let i = 0; i < this.maxParticles; i++) {
            this.positions[i * 3 + 1] = -100;
        }
        this.geometry.attributes.position.needsUpdate = true;
    }
}

// Inicialización de los tres tipos de partículas con la misma clase
const bloodParticles = new GenericParticleSystem(800, { color: 0xff1100, size: 0.18, gravity: 20, lifeBase: 0.8, spread: 0.1 });
const flameParticles = new GenericParticleSystem(500, { color: 0xffaa00, size: 0.4, gravity: -2, lifeBase: 0.4, spread: 2.0, blending: THREE.AdditiveBlending });
const jetpackParticles = new GenericParticleSystem(300, { color: 0xff6600, size: 0.5, gravity: 15, lifeBase: 0.2, spread: 0.5, blending: THREE.AdditiveBlending });
// Partículas de impacto de nieve (blancas y suaves)
const snowImpactParticles = new GenericParticleSystem(400, { color: 0xddeeff, size: 0.22, gravity: 8, lifeBase: 0.6, spread: 0.8 });
const healingParticles = new GenericParticleSystem(400, { color: 0x00ffcc, size: 0.3, gravity: -8, lifeBase: 0.6, spread: 2.5, blending: THREE.AdditiveBlending });

// ---- SISTEMA DE COPOS DE NIEVE ----
class SnowflakeSystem {
    points: THREE.Points;
    positions: Float32Array;
    count: number;
    active: boolean = false;

    constructor(count: number) {
        this.count = count;
        this.positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            this.positions[i * 3]     = (Math.random() - 0.5) * 120;
            this.positions[i * 3 + 1] = Math.random() * 35;
            this.positions[i * 3 + 2] = (Math.random() - 0.5) * 120;
        }
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
        const mat = new THREE.PointsMaterial({ color: 0xddeeff, size: 0.18, transparent: true, opacity: 0.85 });
        this.points = new THREE.Points(geo, mat);
        this.points.frustumCulled = false;
        this.points.visible = false;
    }

    enable() {
        this.active = true;
        this.points.visible = true;
        scene.add(this.points);
    }

    update(delta: number, camPos: THREE.Vector3) {
        if (!this.active) return;
        const pos = this.positions;
        for (let i = 0; i < this.count; i++) {
            pos[i * 3 + 1] -= (1.8 + Math.sin(i) * 0.5) * delta; // Caída
            pos[i * 3]     += Math.sin(i * 0.01 + pos[i * 3 + 1]) * 0.02; // Lateral suave
            if (pos[i * 3 + 1] < -0.5) {
                pos[i * 3]     = camPos.x + (Math.random() - 0.5) * 120;
                pos[i * 3 + 1] = camPos.y + 35;
                pos[i * 3 + 2] = camPos.z + (Math.random() - 0.5) * 120;
            }
        }
        (this.points.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }
}

const snowflakes = new SnowflakeSystem(2000);

// ---- BIOMA NIEVE: FUNCIONES ----
function applySnowBiome() {
    currentBiome = Biome.SNOW;

    // Suelo nevado (Textura procedural)
    const floorCanvas2 = document.createElement('canvas');
    floorCanvas2.width = 512; floorCanvas2.height = 512;
    const floorCtx2 = floorCanvas2.getContext('2d')!;
    floorCtx2.fillStyle = '#b8cfe0';
    floorCtx2.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 4000; i++) {
        const r = Math.random();
        floorCtx2.fillStyle = r > 0.5 ? '#b0c7d8' : '#c3d8e8';
        floorCtx2.fillRect(Math.random() * 512, Math.random() * 512, 5, 5);
        if (r > 0.95) {
            floorCtx2.fillStyle = '#9cb6ca';
            floorCtx2.fillRect(Math.random() * 512, Math.random() * 512, 10, 10);
        }
    }
    const floorTex2 = new THREE.CanvasTexture(floorCanvas2);
    floorTex2.wrapS = THREE.RepeatWrapping;
    floorTex2.wrapT = THREE.RepeatWrapping;
    floorTex2.repeat.set(120, 120);

    const mSnow = floor.material as THREE.MeshStandardMaterial;
    mSnow.map = floorTex2;
    mSnow.color.setHex(0xffffff); // El color base se resetea a blanco para mostrar mapa
    mSnow.needsUpdate = true;

    // Niebla celeste más densa
    scene.fog = new THREE.FogExp2(0x1a3a5a, 0.007);
    scene.background = new THREE.Color(0x0a1a2a);

    // Luz ambiental en azul frío
    ambientLight.color.setHex(0x4488cc);
    ambientLight.intensity = 0.9;

    // Césped: tintar de blanco azulado
    (grassInstanced.material as THREE.MeshStandardMaterial).color.setHex(0x99bbcc);

    // Árboles: tintar de nieve
    trees.forEach(tree => {
        tree.traverse(child => {
            if ((child as THREE.Mesh).isMesh) {
                const m = child as THREE.Mesh;
                const mat = m.material as THREE.MeshStandardMaterial;
                if (mat && mat.color) {
                    const hex = mat.color.getHex();
                    if (hex === 0x1b3022 || hex === 0x3e2723) return; // no troncos ni piñas
                    mat.color.setHex(0xc8dff0); // tintar copa de nieve
                    mat.needsUpdate = true;
                }
            }
        });
    });

    // Activar copos de nieve
    snowflakes.enable();

    // Cambiar música
    soundManager.startSnowMusic();
}

function transitionToSnowBiome() {
    // Mostrar barra de carga CELESTE
    const ls = document.getElementById('loading-screen');
    const lb = document.getElementById('load-bar');
    const lt = ls?.querySelector('.loading-text') as HTMLElement;
    if (ls) {
        ls.style.display = 'flex';
        ls.style.background = 'linear-gradient(to bottom, #0a1a3a, #051020)';
    }
    if (lb) lb.style.background = '#00aaff';
    let prog = 0;
    const iv = setInterval(() => {
        prog += 2;
        if (lb) lb.style.width = `${prog}%`;
        if (lt) lt.innerText = `❄ BIG SNOWFALL APPROACHES... ${prog}%`;
        if (lt) lt.style.color = '#88ccff';
        if (prog >= 100) {
            clearInterval(iv);
            applySnowBiome();
            if (ls) ls.style.display = 'none';

            // Entregamos un Jetpack nuevo y esparcimos munición como reabastecimiento en la Wave 11
            if (!hasJetpack) {
                jetpacks.push(new JetpackPickup(new THREE.Vector3(0, 0, 5)));
            }
            for (let i = 0; i < 4; i++) {
                ammoPickups.push(new AmmoPickup(new THREE.Vector3(-10 + Math.random() * 20, 0, -10 + Math.random() * 20)));
            }

            // Host notifica cambio de música a clientes
            if (isMultiplayer && isHost && socket?.connected) {
                socket.emit('music-change', { track: 'snow' });
            }

            // Abrir tienda normalmente
            openShop();
        }
    }, 30);
}

// ===================================================================
// ====  LAVA BIOME — FUNCIONES PRINCIPALES  =========================
// ===================================================================

let volcanoMesh: THREE.Group | null = null;

function createVolcano() {
    const vol = new THREE.Group();
    const baseMat = new THREE.MeshLambertMaterial({ color: 0x2a0800 });
    const lavaGlowMat = new THREE.MeshBasicMaterial({ color: 0xff4400 });
    const base = new THREE.Mesh(new THREE.ConeGeometry(28, 55, 8, 4), baseMat);
    base.position.y = 27;
    vol.add(base);
    const crater = new THREE.Mesh(new THREE.CylinderGeometry(8, 12, 5, 8), new THREE.MeshLambertMaterial({ color: 0x111100 }));
    crater.position.y = 56;
    vol.add(crater);
    const lavaPool = new THREE.Mesh(new THREE.CircleGeometry(7, 8), lavaGlowMat);
    lavaPool.rotation.x = -Math.PI / 2;
    lavaPool.position.y = 59;
    vol.add(lavaPool);
    const volcLight = new THREE.PointLight(0xff3300, 8, 80);
    volcLight.position.y = 58;
    vol.add(volcLight);
    for (let c = 0; c < 6; c++) {
        const ang = (c / 6) * Math.PI * 2;
        const rock = new THREE.Mesh(
            new THREE.CylinderGeometry(2 + Math.random()*2, 4 + Math.random()*2, 10 + Math.random()*15, 6),
            baseMat
        );
        rock.position.set(Math.cos(ang)*22, (10 + Math.random()*8), Math.sin(ang)*22);
        vol.add(rock);
    }
    vol.position.set(-120, 0, -90);
    scene.add(vol);
    return vol;
}

class Meteor {
    mesh: THREE.Group;
    velocity: THREE.Vector3;
    isDead: boolean = false;
    private trailTimer: number = 0;

    constructor(targetPos: THREE.Vector3) {
        this.mesh = new THREE.Group();
        const geo = new THREE.DodecahedronGeometry(3, 0);
        const mat = new THREE.MeshStandardMaterial({ color: 0x331100, emissive: new THREE.Color(0xff2200), emissiveIntensity: 0.9, roughness: 0.7 });
        const body = new THREE.Mesh(geo, mat);
        this.mesh.add(body);
        const light = new THREE.PointLight(0xff4400, 4, 15);
        body.add(light);
        const startX = -120 + (Math.random() - 0.5) * 30;
        const startZ = -90 + (Math.random() - 0.5) * 30;
        this.mesh.position.set(startX, 80, startZ);
        const dir = new THREE.Vector3(targetPos.x - startX, targetPos.y - 80, targetPos.z - startZ).normalize();
        this.velocity = dir.multiplyScalar(35);
        scene.add(this.mesh);
    }

    update(delta: number) {
        if (this.isDead) return;
        this.mesh.position.addScaledVector(this.velocity, delta);
        this.mesh.rotation.x += delta * 2;
        this.mesh.rotation.z += delta * 1.5;
        // Estela de fuego periódica
        this.trailTimer += delta;
        if (this.trailTimer > 0.08) {
            this.trailTimer = 0;
            flameParticles.spawn(this.mesh.position.clone(), 4);
        }
        if (this.mesh.position.y <= 0.5) this.explode();
    }

    explode() {
        if (this.isDead) return;
        this.isDead = true;
        const impactPos = this.mesh.position.clone();
        flameParticles.spawn(impactPos, 70);
        bloodParticles.spawn(impactPos, 30);
        const boom = new THREE.PointLight(0xff6600, 14, 30);
        boom.position.copy(impactPos);
        boom.position.y = 1;
        scene.add(boom);
        setTimeout(() => scene.remove(boom), 500);
        // Daño al jugador si está cerca (radio 8)
        if (impactPos.distanceTo(camera.position) < 8) {
            lastAttackerName = 'METEOR';
            takeDamage(50);
        }
        scene.remove(this.mesh);
    }
}

const activeMeteors: Meteor[] = [];
let meteorSpawnTimer: number = 0;

function applyLavaBiome() {
    currentBiome = Biome.LAVA;
    scene.background = new THREE.Color(0x1a0600);
    scene.fog = new THREE.FogExp2(0x220800, 0.008);

    // Suelo de lava procedural
    const lavaCanvas = document.createElement('canvas');
    lavaCanvas.width = 512; lavaCanvas.height = 512;
    const lCtx = lavaCanvas.getContext('2d')!;
    for (let cy = 0; cy < 512; cy++) {
        for (let cx = 0; cx < 512; cx++) {
            const n = Math.sin(cx * 0.04) * Math.cos(cy * 0.04) * 0.5 + 0.5;
            const r = Math.floor(180 + n * 75);
            const g = Math.floor(40 + n * 30);
            lCtx.fillStyle = `rgb(${r},${g},0)`;
            lCtx.fillRect(cx, cy, 1, 1);
        }
    }
    const lavaTex = new THREE.CanvasTexture(lavaCanvas);
    lavaTex.wrapS = lavaTex.wrapT = THREE.RepeatWrapping;
    lavaTex.repeat.set(12, 12);
    (floor.material as THREE.MeshLambertMaterial).map = lavaTex;
    (floor.material as THREE.MeshLambertMaterial).color.setHex(0xdd3300);
    (floor.material as THREE.MeshLambertMaterial).needsUpdate = true;

    // Luz ambiental naranja
    scene.children.forEach(c => {
        if (c instanceof THREE.AmbientLight) { c.color.setHex(0xff4400); c.intensity = 0.6; }
    });

    // Árboles quemados
    trees.forEach(t => {
        t.traverse(c => {
            if ((c as THREE.Mesh).isMesh) {
                const mat = (c as THREE.Mesh).material as THREE.MeshLambertMaterial;
                if (mat && mat.color) mat.color.setHex(0x1a0800);
            }
        });
    });

    // Volcán 3D
    if (!volcanoMesh) volcanoMesh = createVolcano();

    // Música
    soundManager.startGameMusic();
    if (isMultiplayer && isHost && socket?.connected) {
        socket.emit('music-change', { track: 'lava' });
    }
}

function transitionToLavaBiome() {
    const ls = document.getElementById('loading-screen');
    const lb = document.getElementById('load-bar');
    const lt = ls?.querySelector('.loading-text') as HTMLElement;
    if (ls) { ls.style.display = 'flex'; ls.style.background = 'linear-gradient(to bottom, #1a0500, #0a0000)'; }
    if (lb) { lb.style.background = '#ff4400'; lb.style.boxShadow = '0 0 20px #ff4400'; }
    let prog = 0;
    const iv = setInterval(() => {
        prog += 2;
        if (lb) lb.style.width = `${prog}%`;
        if (lt) { lt.innerText = `🌋 THE VOLCANO AWAKENS... ${prog}%`; lt.style.color = '#ff8800'; }
        if (prog >= 100) {
            clearInterval(iv);
            applyLavaBiome();
            if (ls) ls.style.display = 'none';
            for (let i = 0; i < 5; i++) {
                ammoPickups.push(new AmmoPickup(new THREE.Vector3(-15 + Math.random() * 30, 0, -15 + Math.random() * 30)));
            }
            openShop();
        }
    }, 30);
}

// ---- CASTLE BIOME ----
function applyCastleBiome() {
    currentBiome = Biome.CASTLE;
    scene.background = new THREE.Color(0x0d0812);
    scene.fog = new THREE.FogExp2(0x1a0d2e, 0.009);

    // Suelo de piedra oscura (castle floor)
    const stoneCanvas = document.createElement('canvas');
    stoneCanvas.width = 512; stoneCanvas.height = 512;
    const sCtx = stoneCanvas.getContext('2d')!;
    for (let cy = 0; cy < 512; cy++) {
        for (let cx = 0; cx < 512; cx++) {
            // Patrón de adoquines medievales
            const blockX = Math.floor(cx / 64);
            const blockY = Math.floor(cy / 48);
            const offset = blockY % 2 === 0 ? 0 : 32;
            const localX = (cx + offset) % 64;
            const localY = cy % 48;
            const isJoint = localX < 2 || localY < 2;
            const noise = (Math.random() * 0.08 - 0.04);
            const base = isJoint ? 0.15 : (0.28 + noise);
            const v = Math.floor(base * 255);
            sCtx.fillStyle = `rgb(${v + 10},${v},${v + 15})`;
            sCtx.fillRect(cx, cy, 1, 1);
        }
    }
    const stoneTex = new THREE.CanvasTexture(stoneCanvas);
    stoneTex.wrapS = stoneTex.wrapT = THREE.RepeatWrapping;
    stoneTex.repeat.set(14, 14);
    (floor.material as THREE.MeshLambertMaterial).map = stoneTex;
    (floor.material as THREE.MeshLambertMaterial).color.setHex(0x444455);
    (floor.material as THREE.MeshLambertMaterial).needsUpdate = true;

    // Luz ambiental violeta/azul oscuro
    scene.children.forEach(c => {
        if (c instanceof THREE.AmbientLight) { c.color.setHex(0x6644aa); c.intensity = 0.5; }
        if (c instanceof THREE.DirectionalLight) { c.color.setHex(0x8866cc); c.intensity = 0.4; }
    });

    // Árboles → muertos y oscuros (estética castillo)
    trees.forEach(t => {
        t.traverse(c => {
            if ((c as THREE.Mesh).isMesh) {
                const mat = (c as THREE.Mesh).material as THREE.MeshLambertMaterial;
                if (mat && mat.color) mat.color.setHex(0x1a1020);
            }
        });
    });

    // Casas → torres de castillo (coloreado oscuro)
    scene.children.forEach(obj => {
        if ((obj as any)._isBuilding) {
            obj.traverse(c => {
                if ((c as THREE.Mesh).isMesh) {
                    const mat = (c as THREE.Mesh).material as THREE.MeshLambertMaterial;
                    if (mat && mat.color) mat.color.setHex(0x3a3050);
                }
            });
        }
    });

    // Torres de castillo (pequeños castillos en lugar de casas)
    createCastleTowers();

    // Música de castillo
    soundManager.startCastleMusic();
    if (isMultiplayer && socket?.connected) {
        socket.emit('music-change', { track: 'castle' });
    }
}

function createCastleTowers() {
    const towerMat = new THREE.MeshLambertMaterial({ color: 0x2a2540 });
    const battleMat = new THREE.MeshLambertMaterial({ color: 0x1a1830 });
    const positions = [
        [-30, 0, -30], [30, 0, -30], [-30, 0, 30], [30, 0, 30],
        [0, 0, -50], [-50, 0, 0], [50, 0, 0], [0, 0, 50]
    ];
    positions.forEach(([x, _y, z]) => {
        const towerGroup = new THREE.Group();
        // Base cilíndrica
        const base = new THREE.Mesh(new THREE.CylinderGeometry(3, 3.5, 8, 8), towerMat);
        base.position.y = 4; towerGroup.add(base);
        // Almenas (merlones) en el tope
        for (let m = 0; m < 8; m++) {
            const angle2 = (m / 8) * Math.PI * 2;
            const merlon = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2, 1.2), battleMat);
            merlon.position.set(Math.cos(angle2) * 2.8, 9.5, Math.sin(angle2) * 2.8);
            towerGroup.add(merlon);
        }
        // Techo cónico
        const roof = new THREE.Mesh(new THREE.ConeGeometry(3.2, 3, 8), new THREE.MeshLambertMaterial({ color: 0x110d20 }));
        roof.position.y = 11.5; towerGroup.add(roof);
        // Muros cortos entre torres
        if (Math.random() > 0.4) {
            const wall = new THREE.Mesh(new THREE.BoxGeometry(8, 5, 1.2), towerMat);
            wall.position.y = 2.5; towerGroup.add(wall);
        }
        towerGroup.position.set(x, 0, z);
        (towerGroup as any)._isCastleTower = true;
        scene.add(towerGroup);
        playerCollidables.push(base);
    });
}

function transitionToCastleBiome() {
    const ls = document.getElementById('loading-screen');
    const lb = document.getElementById('load-bar');
    const lt = ls?.querySelector('.loading-text') as HTMLElement;
    if (ls) { ls.style.display = 'flex'; ls.style.background = 'linear-gradient(to bottom, #0d0812, #1a0d2e)'; }
    if (lb) { lb.style.background = '#8844cc'; lb.style.boxShadow = '0 0 20px #8844cc'; }
    let prog = 0;
    const iv = setInterval(() => {
        prog += 2;
        if (lb) lb.style.width = `${prog}%`;
        if (lt) { lt.innerText = `🏰 DARKNESS FALLS... THE CASTLE AWAITS! ${prog}%`; lt.style.color = '#aa66ff'; }
        if (prog >= 100) {
            clearInterval(iv);
            applyCastleBiome();
            if (ls) ls.style.display = 'none';
            for (let i = 0; i < 6; i++) {
                ammoPickups.push(new AmmoPickup(new THREE.Vector3(-20 + Math.random() * 40, 0, -20 + Math.random() * 40)));
            }
            openShop();
        }
    }, 30);
}

// ---- BIOME-CHANGE & MUSIC-CHANGE MULTIPLAYER LISTENERS ----
// FIXED: Use currentBiome dedup check so host calling transitionToX() first won't retrigger on echo
if (socket) {
    socket.on('biome-change', (data: { biome: string }) => {
        // Dedup: only transition if we're not already in that biome
        if (data.biome === 'snow' && currentBiome !== Biome.SNOW) transitionToSnowBiome();
        else if (data.biome === 'lava' && currentBiome !== Biome.LAVA) transitionToLavaBiome();
        else if (data.biome === 'castle' && currentBiome !== Biome.CASTLE) transitionToCastleBiome();
    });

    socket.on('music-change', (data: { track: string }) => {
        if (data.track === 'snow') soundManager.startSnowMusic();
        else if (data.track === 'castle') soundManager.startCastleMusic();
        else soundManager.startGameMusic();
    });
}


// ---- HIT MARKER ----
function showHitMarker(isHeadshot: boolean = false) {
    if (!crosshair) return;
    crosshair.style.borderColor = isHeadshot ? '#ffaa00' : 'red';
    if (isHeadshot) crosshair.style.borderWidth = '4px';
    crosshair.style.transform = isHeadshot ? 'translate(-50%, -50%) scale(2.0)' : 'translate(-50%, -50%) scale(1.5)';
    setTimeout(() => {
        crosshair.style.borderColor = 'white';
        crosshair.style.borderWidth = '2px';
        crosshair.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
}

// ---- VARIABLES DE FÍSICA Y MOVIMIENTO ----
// Variables y cálculos para simular el desplazamiento, salto y gravedad del jugador
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let isSprinting = false;
let isJetpacking = false;

// Variables para el joystick táctil
let joystickActive = false;
let joystickCenter = { x: 0, y: 0 };
let currentTouchId: number | null = null;
let lookTouchId: number | null = null;
let lastLookX = 0;
let lastLookY = 0; // Estado para mantener presionada la barra espaciadora

// Velocidades incrementadas para un movimiento terrestre más rápido
const walkSpeed = 55.0; // Reducido levemente
const sprintSpeed = 85.0; // Reducido para no ser tan rápido
let speed = walkSpeed;
const mass = 100.0;
let prevTime = performance.now();

const onKeyDown = (event: KeyboardEvent) => {
    if (!gameStarted) return;
    switch (event.code) {
        case 'ArrowUp': case 'KeyW': moveForward = true; break;
        case 'ArrowLeft': case 'KeyA': moveLeft = true; break;
        case 'ArrowDown': case 'KeyS': moveBackward = true; break;
        case 'ArrowRight': case 'KeyD': moveRight = true; break;
        case 'Space':
            // Saltos más lentos y activación del Jetpack si está disponible
            if (camera.position.y <= 1.61 && playerStamina > 15 && !hasJetpack && staminaCooldown <= 0) {
                velocity.y += 20; // Salto más lento y flotante
                playerStamina -= 15;
                updateStatsHUD();
            } else if (hasJetpack) {
                isJetpacking = true;
            }
            break;
        case 'ShiftLeft': case 'ShiftRight': isSprinting = true; break;
        case 'KeyR': reloadWeapon(); break;
        case 'KeyQ': isRevivingKey = true; break;
        // Teclas rápidas de armas
        case 'Digit1': if (playerInventory.includes(0)) switchWeapon(0); break;
        case 'Digit2': if (playerInventory.includes(1)) switchWeapon(1); break;
        case 'Digit3': if (playerInventory.includes(2)) switchWeapon(2); break;
        case 'Digit4': if (playerInventory.includes(3)) switchWeapon(3); break;
        case 'Digit5': if (playerInventory.includes(4)) switchWeapon(4); break;
    }
};

const onKeyUp = (event: KeyboardEvent) => {
    if (!gameStarted) return;
    switch (event.code) {
        case 'ArrowUp': case 'KeyW': moveForward = false; break;
        case 'ArrowLeft': case 'KeyA': moveLeft = false; break;
        case 'ArrowDown': case 'KeyS': moveBackward = false; break;
        case 'ArrowRight': case 'KeyD': moveRight = false; break;
        case 'Space': isJetpacking = false; break;
        case 'ShiftLeft': case 'ShiftRight': isSprinting = false; break;
        case 'KeyQ': isRevivingKey = false; break;
    }
};

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

// ---- TIENDA BLACK MARKET (Refactoreada) ----
const shopCoinsEl = document.getElementById('shop-coins') as HTMLElement;
const purchaseFlashEl = document.getElementById('purchase-flash') as HTMLElement;

const shopItems = [
    { id: 'health', cost: 50, action: () => { playerHealth = Math.min(playerHealth + 30, maxPlayerHealth); } },
    {
        id: 'ammo', cost: 75, action: () => {
            weapons.forEach(w => { w.ammoCurrent = w.magSize; w.ammoReserve = w.magSize * 4; });
            updateWeaponHUD();
        }
    },
    {
        id: 'maxhp', cost: 200, action: () => {
            maxPlayerHealth += 20; playerHealth = Math.min(playerHealth + 20, maxPlayerHealth);
        }
    },
    { id: 'speed', cost: 150, action: () => { walkSpeedMultiplier = Math.min(walkSpeedMultiplier + 0.1, 1.5); } },
    { id: 'damage', cost: 300, action: () => { damageMultiplier = Math.min(damageMultiplier + 0.25, 3.0); } },
    {
        id: 'rapidfire', cost: 500, action: () => {
            weapons.forEach(w => { w.fireRate = Math.max(50, w.fireRate * 0.85); });
        }
    }
];

function updateShopCards() {
    shopItems.forEach(item => {
        const cost = item.cost;
        // Actualizar el precio en todas las tarjetas (desktop y mobile)
        [document.getElementById(`buy-${item.id}`), document.getElementById(`mb-buy-${item.id}`)].forEach(el => {
            if (!el) return;
            // Asequibilidad
            cost > playerCoins ? el.classList.add('cant-afford') : el.classList.remove('cant-afford');
            // Precio visual — animar si el precio subió
            const priceEl = el.querySelector('.card-price') as HTMLElement | null;
            if (priceEl) {
                const prev = parseInt(priceEl.innerText.replace(/[^0-9]/g, ''), 10);
                priceEl.innerText = `$${cost.toLocaleString()}`;
                if (prev > 0 && cost > prev) {
                    // Flash rojo-naranja para indicar que subió
                    priceEl.style.transition = 'color 0s';
                    priceEl.style.color = '#ff6600';
                    setTimeout(() => {
                        priceEl.style.transition = 'color 0.6s';
                        priceEl.style.color = '';
                    }, 50);
                }
            }
        });
    });
}

function tryBuy(itemKey: string) {
    const item = shopItems.find(i => i.id === itemKey);
    if (!item) return;
    if (playerCoins >= item.cost) {
        playerCoins -= item.cost;
        item.action();
        
        itemsBought++;
        if (itemsBought >= 5) unlockAchievement(3, "Consumer");
        
        // Escalar el precio +$100 fijos por nivel comprado (excepto salud que siempre es 50)
        if (item.id !== 'health') {
            item.cost += 100;
        }
        updateStatsHUD();
        if (shopCoinsEl) shopCoinsEl.innerText = playerCoins.toString();
        const scm = document.getElementById('shop-coins-mobile');
        if (scm) scm.innerText = playerCoins.toString();
        showPurchaseFeedback(true);
        updateShopCards();
    } else {
        const ids = [`buy-${itemKey}`, `mb-buy-${itemKey}`];
        ids.forEach(id => {
            const card = document.getElementById(id);
            if (card) {
                card.style.borderColor = '#ff3333';
                card.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
                setTimeout(() => { card.style.borderColor = ''; card.style.boxShadow = ''; }, 300);
            }
        });
    }
}

// Asignar listeners automáticamente
shopItems.forEach(item => {
    document.getElementById(`buy-${item.id}`)?.addEventListener('click', () => tryBuy(item.id));
    document.getElementById('mb-buy-' + item.id)?.addEventListener('click', () => tryBuy(item.id));
});

function openShop() {
    isUIShowing = true; shopOpen = true;
    myShopReady = false;
    updateShopReadyUI();
    if (isMultiplayer && socket?.connected) socket.emit('shop-ready', { ready: false }); // Sync initial unready state
    const coinsStr = playerCoins.toString();
    if (shopCoinsEl) shopCoinsEl.innerText = coinsStr;
    const shopCoinsMobile = document.getElementById('shop-coins-mobile');
    if (shopCoinsMobile) shopCoinsMobile.innerText = coinsStr;
    updateShopCards();
    const menuId = isMobile ? 'shop-menu-mobile' : 'shop-menu';
    const menu = document.getElementById(menuId);
    if (menu) menu.style.display = 'flex';
    controls.unlock();
}

let myShopReady = false;

function updateShopPlayersList(players: any[]) {
    ['shop-players', 'shop-players-mobile'].forEach(id => {
        const container = document.getElementById(id);
        if (!container) return;
        container.innerHTML = players.map(p => 
            `<div style="color:${p.id === socket?.id ? '#0f0' : (p.shopReady ? '#aaa' : '#fff')}">
                ${p.platform === 'mobile' ? '📱' : '💻'} ${p.username}: ${p.shopReady ? '✅' : '⏳'}
            </div>`
        ).join('');
    });
}

function updateShopReadyUI() {
    const text = myShopReady ? '❌ CANCEL READY' : '✔ READY FOR NEXT WAVE';
    const bg = myShopReady ? '#a00' : '#0a0';
    ['shop-close', 'shop-close-mobile'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.innerText = text;
            btn.style.background = bg;
            btn.style.boxShadow = `0 0 10px ${bg}`;
        }
    });
}

function toggleShopReady() {
    if (!isMultiplayer) {
        actuallyCloseShopAndStartNextWave();
        return;
    }
    myShopReady = !myShopReady;
    updateShopReadyUI();
    if (socket?.connected) socket.emit('shop-ready', { ready: myShopReady });
}

function actuallyCloseShopAndStartNextWave() {
    isUIShowing = false; shopOpen = false;
    [document.getElementById('shop-menu'), document.getElementById('shop-menu-mobile')].forEach(m => { if (m) m.style.display = 'none'; });
    if (gameStarted) {
        if (mainMenu) mainMenu.style.display = 'none';
        if (!isMobile) controls.lock();
        startNextWaveWithLoading();
    }
}

// FIXED: Removed waveManager.preSpawnWave() which was resetting currentWave to 0 every time the shop closed.
// The wave counter must NEVER reset between waves. Only call startNextWave() to advance forward.
function startNextWaveWithLoading() {
    loadingScreen.style.display = 'flex';
    let progress = 0;
    const nextWaveNum = waveManager.currentWave + 1;
    const interval = setInterval(() => {
        progress += 3;
        if (loadBar) loadBar.style.width = `${progress}%`;
        const txt = loadingScreen.querySelector('.loading-text') as HTMLElement;
        if (txt) txt.innerText = t('LOADING_WAVE', { wave: nextWaveNum, progress: progress });
        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.style.display = 'none';
            waveManager.startNextWave();
        }
    }, 20);
}

function showPurchaseFeedback(success: boolean) {
    if (success && purchaseFlashEl) {
        purchaseFlashEl.style.display = 'block';
        setTimeout(() => purchaseFlashEl.style.display = 'none', 150);
    }
}

// Cerrar tienda / Toggle Ready
document.getElementById('shop-close')?.addEventListener('click', toggleShopReady);
document.getElementById('shop-close-mobile')?.addEventListener('click', toggleShopReady);

// ---- SPECTATOR GLOBALS ----
let isSpectator = false;
let spectatingPlayerId: string | null = null;
// ---- CICLO DE ANIMACIÓN (RENDER LOOP) ----
// Ciclo principal que corre en cada frame: dibuja la escena y actualiza todas las físicas
let bobAngle = 0;
let frameCount = 0;
let lastFpsTime = performance.now();

function animate() {
    requestAnimationFrame(animate);
    const time = performance.now();

    // Rotar las nubes lentamente
    cloudGroup.rotation.y += 0.0005;

    frameCount++;
    if (time - lastFpsTime >= 1000) {
        if (fpsEl && gameStarted) fpsEl.innerText = t('UI_FPS') + frameCount.toString();
        frameCount = 0;
        lastFpsTime = time;
    }

    // CORRECCIÓN DE RENDIMIENTO Y MOVIMIENTO: Limitar el delta máximo a 0.1 (100ms) para evitar teletransportes por tirones de lag
    const delta = Math.min((time - prevTime) / 1000, 0.1);

    // Si el juego está en pausa, no actualizamos físicas ni enemigos, solo renderizamos el frame
    if (isPaused) {
        prevTime = time;
        renderer.render(inLobby3D ? lobbyScene : scene, inLobby3D ? lobbyCamera : camera);
        return;
    }

    if (isSpectator) {
        // SPECTATOR MODE: bypass normal physics, snap camera to alive player
        const p = spectatingPlayerId ? remotePlayers.get(spectatingPlayerId) : null;
        if (p) {
            camera.position.lerp(p.group.position, 0.2); 
            camera.position.y += 1.6;
        } else {
            // Find another one if current target is gone
            const pids = Array.from(remotePlayers.keys());
            if (pids.length > 0) spectatingPlayerId = pids[0];
            else spectatingPlayerId = null;
        }
    } else if ((controls.isLocked === true || isMobile) && gameStarted) {
        if (isDowned) {
            downedTimer -= delta;
            const dtEl = document.getElementById('downed-timer');
            if (dtEl) dtEl.innerText = downedTimer.toFixed(1);
            if (downedTimer <= 0) {
                isDowned = false;
                const ds = document.getElementById('downed-screen');
                if (ds) ds.style.display = 'none';
                if (socket?.connected) socket.emit('player-died-final', { name: myUsername });
                gameOver();
            } else {
                speed = 0; velocity.x = 0; velocity.z = 0; // Lock movement
                velocity.y -= 9.8 * 8.0 * delta; // Gravity only
                camera.position.y += (velocity.y * delta);
                if (camera.position.y <= 0.5) camera.position.y = 0.5;
            }
            // Skip the rest of normal loop controls
            return; 
        }

        // Muerte de Jugador: Revivir a otro
        if (isMultiplayer) {
            let closestDowned: { id: string, distSq: number } | null = null;
            remotePlayers.forEach((rp, id) => {
                if ((rp as any).isDowned) {
                    const d = camera.position.distanceToSquared(rp.group.position);
                    if (d < 16) { // ~4 meters
                        if (!closestDowned || d < closestDowned.distSq) {
                            closestDowned = { id, distSq: d };
                        }
                    }
                }
            });

            if (closestDowned) {
                const rpEl = document.getElementById('revive-prompt');
                if (rpEl) rpEl.style.display = 'flex';

                if (isRevivingKey) {
                    reviveTargetId = (closestDowned as any).id;
                    speed = 0; velocity.x = 0; velocity.z = 0; // Freeze while healing
                    reviveProgress += delta;
                    
                    // Disparo de efecto inicial por red a todos (en progreso)
                    if (reviveProgress <= delta * 2) {
                        if ((socket as any)?.connected) (socket as any).emit('player-reviving', { targetId: reviveTargetId });
                    }

                    const fill = document.getElementById('revive-bar-fill');
                    if (fill) fill.style.width = Math.min((reviveProgress / 3.0) * 100, 100) + '%';

                    if (reviveProgress >= 3.0) {
                        if ((socket as any)?.connected) (socket as any).emit('player-revived', { targetId: reviveTargetId });
                        reviveProgress = 0;
                        reviveTargetId = null;
                        if (rpEl) rpEl.style.display = 'none';
                    }
                } else {
                    reviveProgress = 0;
                    reviveTargetId = null;
                    const fill = document.getElementById('revive-bar-fill');
                    if (fill) fill.style.width = '0%';
                }
            } else {
                reviveProgress = 0;
                reviveTargetId = null;
                const rpEl = document.getElementById('revive-prompt');
                if (rpEl) rpEl.style.display = 'none';
            }
        }

        // 🔥 Aplicar debuff de fuego progresivo
        if (playerFireDebuff > 0) {
            playerFireDebuff -= delta;
            takeDamage(5 * delta); // 5 de daño por segundo
            
            // Partículas de fuego sobre la cámara
            if (Math.random() > 0.5) {
                const firePos = camera.position.clone();
                firePos.y -= 0.5;
                firePos.x += (Math.random() - 0.5) * 0.5;
                firePos.z += (Math.random() - 0.5) * 0.5;
                flameParticles.spawn(firePos, 1);
            }
        }

        // ❄ Aplicar debuff de lentitud por nieve
        if (playerSlowDebuff > 0) {
            playerSlowDebuff -= delta;
            if (playerSlowDebuff <= 0) {
                playerSlowDebuff = 0;
                const overlay = document.getElementById('slow-overlay');
                if (overlay) overlay.style.opacity = '0';
            }
        }

        handleShooting(time);

        if (staminaCooldown > 0) {
            staminaCooldown -= delta;
            isSprinting = false; // Block sprinting visually & logically
        }

        const isMoving = moveForward || moveBackward || moveLeft || moveRight;
        if (isSprinting && isMoving && playerStamina > 0 && camera.position.y <= 1.7 && staminaCooldown <= 0) {
            // Al aplicar slow, el sprint se fuerza a velocidad de caminata
            const slowFactor = playerSlowDebuff > 0 ? 0.5 : 1.0;
            speed = sprintSpeed * walkSpeedMultiplier * slowFactor;
            playerStamina -= 20 * delta;
            if (playerStamina <= 0) {
                playerStamina = 0;
                staminaCooldown = 2.0; // 2 seconds penalty
                isSprinting = false;
            }
            updateStatsHUD();
        } else {
            const slowFactor = playerSlowDebuff > 0 ? 0.5 : 1.0;
            speed = walkSpeed * walkSpeedMultiplier * slowFactor;
            if (staminaCooldown <= 0 && playerStamina < MAX_STAMINA && camera.position.y <= 1.7) {
                playerStamina += 10 * delta;
                if (playerStamina > MAX_STAMINA) playerStamina = MAX_STAMINA;
                updateStatsHUD();
            }
        }

        // Aplicar fricción
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        // Aplicar Gravedad y Lógica de Jetpack
        if (isJetpacking && hasJetpack && playerJetpackFuel > 0) {
            // LÍMITE DE ALTITUD: Solo aplicar fuerza ascendente si está por debajo de las nubes (Y=45)
            if (camera.position.y < 45.0) {
                velocity.y += 35.0 * delta; // Fuerza ascendente del Jetpack
            } else {
                velocity.y += 9.8 * 8.0 * delta; // Cancelar gravedad precisamente para flotar, o dejar caer ligeramente
                // Para solo flotar con un pequeño balanceo:
                velocity.y = Math.sin(time / 200) * 0.5;
            }

            playerJetpackFuel -= 5 * delta; // Consumir combustible más lento para ~20s de vuelo total
            updateStatsHUD();
            jetpackParticles.spawn(camera.position, 3);

            // Lógica de destrucción del Jetpack
            if (playerJetpackFuel <= 0) {
                playerJetpackFuel = 0;
                hasJetpack = false;
                soundManager.playExplosion();
                jetpackParticles.spawn(camera.position, 30); // Ráfaga final de chispas
                document.getElementById('fuel-bar')!.style.display = 'none';
                updateStatsHUD();

                // Añadir un destello rojo
                const flash = document.createElement('div');
                flash.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,100,0,0.4);pointer-events:none;z-index:100;';
                document.body.appendChild(flash);
                setTimeout(() => flash.remove(), 150);
            }
        } else {
            // Gravedad normal - más lenta y flotante
            velocity.y -= 9.8 * 8.0 * delta;
        }

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize();

        // Acceleration
        if (moveForward || moveBackward) velocity.z -= direction.z * speed * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * speed * delta;

        // Actualizar proyectiles enemigos (Lásers)
        for (let i = enemyProjectiles.length - 1; i >= 0; i--) {
            const lp = enemyProjectiles[i];
            lp.update(delta);
            if (lp.isDead) {
                lp.destroy();
                enemyProjectiles.splice(i, 1);
            }
        }

        // Lógica de colisión con deslizamiento (Sliding Collision)
        const collisionY = camera.position.y - 1.0; 
        const oldPosZ = camera.position.z;
        controls.moveForward(-velocity.z * delta);
        for (let i = 0; i < collisionDirections.length; i++) {
            // Verificar colisión tanto en el nivel del pecho como al nivel de los pies (0.5)
            collisionRaycaster.set(new THREE.Vector3(camera.position.x, collisionY, camera.position.z), collisionDirections[i]);
            const hitPecho = collisionRaycaster.intersectObjects(playerCollidables, true).some(h => h.distance < 0.6);
            collisionRaycaster.set(new THREE.Vector3(camera.position.x, 0.5, camera.position.z), collisionDirections[i]);
            const hitPies = collisionRaycaster.intersectObjects(playerCollidables, true).some(h => h.distance < 0.6);

            if (hitPecho || hitPies) {
                camera.position.z = oldPosZ; velocity.z = 0; break;
            }
        }

        const oldPosX = camera.position.x;
        controls.moveRight(-velocity.x * delta);
        for (let i = 0; i < collisionDirections.length; i++) {
            collisionRaycaster.set(new THREE.Vector3(camera.position.x, collisionY, camera.position.z), collisionDirections[i]);
            const hitPecho = collisionRaycaster.intersectObjects(playerCollidables, true).some(h => h.distance < 0.6);
            collisionRaycaster.set(new THREE.Vector3(camera.position.x, 0.5, camera.position.z), collisionDirections[i]);
            const hitPies = collisionRaycaster.intersectObjects(playerCollidables, true).some(h => h.distance < 0.6);
            
            if (hitPecho || hitPies) {
                camera.position.x = oldPosX; velocity.x = 0; break;
            }
        }

        // Lógica matemática infalible (Cilindros) para estructuras grandes
        for (const cyl of collisionCylinders) {
            const dx = camera.position.x - cyl.x;
            const dz = camera.position.z - cyl.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            // Solo empujar si los pies del jugador están por debajo de la altura máxima del cuerpo
            if (dist < cyl.radius && (camera.position.y - 1.6) < cyl.height) {
                const push = cyl.radius - dist;
                camera.position.x += (dx / dist) * push;
                camera.position.z += (dz / dist) * push;
            }
        }

        // Lógica de colisión estricta AABB paralela a cilindros
        const px = camera.position.x;
        const pz = camera.position.z;
        const py = camera.position.y - 1.6;
        for (const box of environmentBoxes) {
            // Expandir hitbox virtualmente 0.5 unidades por cada cara
            const minX = box.min.x - 0.5;
            const maxX = box.max.x + 0.5;
            const minZ = box.min.z - 0.5;
            const maxZ = box.max.z + 0.5;
            // No limitamos py superior para no bloquear caer sobre cajas
            if (px > minX && px < maxX && pz > minZ && pz < maxZ && py < box.max.y) {
                const dx1 = px - minX;
                const dx2 = maxX - px;
                const dz1 = pz - minZ;
                const dz2 = maxZ - pz;
                const min = Math.min(dx1, dx2, dz1, dz2);
                if (min === dx1) { camera.position.x = minX; velocity.x = 0; }
                else if (min === dx2) { camera.position.x = maxX; velocity.x = 0; }
                else if (min === dz1) { camera.position.z = minZ; velocity.z = 0; }
                else if (min === dz2) { camera.position.z = maxZ; velocity.z = 0; }
            }
        }

        // Movimiento vertical
        camera.position.y += (velocity.y * delta);

        // Colisión con el suelo y techos: raycast hacia abajo para aterrizar en edificios / terreno
        const downRay = new THREE.Raycaster(
            camera.position.clone(),
            new THREE.Vector3(0, -1, 0),
            0,
            Math.max(1.7, -velocity.y * delta + 1.6)
        );
        const downHits = downRay.intersectObjects(playerCollidables, false);
        if (downHits.length > 0 && velocity.y <= 0) {
            // Aterrizar en la superficie
            camera.position.y = downHits[0].point.y + 1.6;
            velocity.y = 0;
        }

        // Suelo firme al nivel de la tierra (y=1.6)
        if (camera.position.y < 1.6) {
            velocity.y = 0;
            camera.position.y = 1.6;
        }

        // Límites del mapa (Corrección de fluidez)
        const mapLimit = 60;
        if (camera.position.x > mapLimit) camera.position.x = mapLimit;
        if (camera.position.x < -mapLimit) camera.position.x = -mapLimit;
        if (camera.position.z > mapLimit) camera.position.z = mapLimit;
        if (camera.position.z < -mapLimit) camera.position.z = -mapLimit;
    }

    if (gameStarted) {
        // Balanceo de arma y recuperación de retroceso (Independiente del bloqueo del mouse para mayor suavidad)
        const isMoving = moveForward || moveBackward || moveLeft || moveRight;
        if (controls.isLocked || isMobile) {
            if (isMoving && camera.position.y <= 1.7) {
                bobAngle += delta * 15;
                weaponGroup.position.y = -0.3 + Math.sin(bobAngle) * 0.015;
                weaponGroup.position.x = 0.25 + Math.cos(bobAngle / 2) * 0.02;
            } else {
                weaponGroup.position.y = THREE.MathUtils.lerp(weaponGroup.position.y, -0.3, 0.1);
                weaponGroup.position.x = THREE.MathUtils.lerp(weaponGroup.position.x, 0.25, 0.1);
                bobAngle = 0;
            }
        }

        weaponGroup.position.z = THREE.MathUtils.lerp(weaponGroup.position.z, -0.4, 0.15);
        weaponGroup.rotation.x = THREE.MathUtils.lerp(weaponGroup.rotation.x, 0, 0.15);

        // ---- CONTROLADOR DE REDIMENSIÓN (RESIZE) ----
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Actualizar el ciclo de la lógica del juego
        if (frameCount % 2 === 0) {
            waveManager.update(delta * 2, camera.position, time);
        }
        bloodParticles.update(delta);
        flameParticles.update(delta);
        jetpackParticles.update(delta);
        snowImpactParticles.update(delta);
        healingParticles.update(delta);
        snowflakes.update(delta, camera.position);
        // Actualizar bolas de nieve
        for (let i = snowballProjectiles.length - 1; i >= 0; i--) {
            snowballProjectiles[i].update(delta);
            if (snowballProjectiles[i].isDead) snowballProjectiles.splice(i, 1);
        }
        multiplayerUpdate(); // Phase 12: sync position to server

        // Interpolación suave de jugadores remotos cada frame (independiente de la tasa de red)
        if (isMultiplayer) {
            const lerpFactor = Math.min(1, delta * 18); // ~18 = suave pero sin retraso notable
            remotePlayers.forEach(rp => {
                const target = rp.group.userData.targetPos as THREE.Vector3 | undefined;
                const targetRotY = rp.group.userData.targetRotY as number | undefined;
                if (target) {
                    rp.group.position.lerp(target, lerpFactor);
                }
                if (targetRotY !== undefined) {
                    // Interpolar ángulo con wrap-around para evitar giro de 360° falso
                    let diff = targetRotY - rp.group.rotation.y;
                    while (diff > Math.PI) diff -= 2 * Math.PI;
                    while (diff < -Math.PI) diff += 2 * Math.PI;
                    rp.group.rotation.y += diff * lerpFactor;
                }
            });
        }

        // Actualizar Proyectiles y Objetos Recogibles
        for (let i = playerRockets.length - 1; i >= 0; i--) {
            playerRockets[i].update(delta);
            if (playerRockets[i].isDead) {
                playerRockets[i].destroy();
                playerRockets.splice(i, 1);
            }
        }
        for (let i = enemyProjectiles.length - 1; i >= 0; i--) {
            enemyProjectiles[i].update(delta);
            if (enemyProjectiles[i].isDead) {
                enemyProjectiles[i].destroy();
                enemyProjectiles.splice(i, 1);
            }
        }
        for (let i = jetpacks.length - 1; i >= 0; i--) {
            jetpacks[i].update(time, camera.position);
            if (jetpacks[i].isPickedUp) {
                jetpacks.splice(i, 1);
            }
        }
        for (let i = weaponPickups.length - 1; i >= 0; i--) {
            weaponPickups[i].update(time, camera.position);
            if (weaponPickups[i].isPickedUp) {
                weaponPickups.splice(i, 1);
            }
        }
        for (let i = ammoPickups.length - 1; i >= 0; i--) {
            ammoPickups[i].update(time, camera.position);
            if (ammoPickups[i].isPickedUp) {
                ammoPickups.splice(i, 1);
            }
        }

        // ---- METEORITOS (solo en bioma Lava, desde Wave 25) ----
        if (currentBiome === Biome.LAVA && waveManager.currentWave >= 25 && !waveManager.isBreak) {
            meteorSpawnTimer += delta;
            const interval = 8 + Math.random() * 4; // 8-12 segundos
            if (meteorSpawnTimer >= interval) {
                meteorSpawnTimer = 0;
                const angle = Math.random() * Math.PI * 2;
                const r = 15 + Math.random() * 50;
                const landPos = new THREE.Vector3(Math.cos(angle) * r, 0, Math.sin(angle) * r);
                activeMeteors.push(new Meteor(landPos));
            }
        }
        for (let i = activeMeteors.length - 1; i >= 0; i--) {
            activeMeteors[i].update(delta);
            if (activeMeteors[i].isDead) activeMeteors.splice(i, 1);
        }

        if (!shopOpen && shopMarker) {
            shopMarker.rotation.y += delta * 2;
            shopMarker.position.y = 8 + Math.sin(time / 500) * 0.5;
        }
    }

    prevTime = time;
    renderer.render(inLobby3D ? lobbyScene : scene, inLobby3D ? lobbyCamera : camera);
}

// Application initialization
loadSettings();
applyTranslations();

animate();

// Phase 12: Initialize multiplayer UI buttons
initMultiplayerUI();

// ---- SATISFACCIÓN DE REPRODUCCIÓN DE AUDIO (AUDIO AUTOPLAY) ----
// Los navegadores modernos bloquean el sonido hasta que el usuario interactúa.
// Este listener activa la música del menú en el primer clic que haga el usuario.
document.addEventListener('click', () => {
    if (!gameStarted) {
        soundManager.startMenuMusic();
    }
}, { once: true });
