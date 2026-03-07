import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

// ---- UI ELEMENTS ----
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
let playerJetpackFuel = 0;
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

// ---- UPGRADES STATE (Phase 4) ----
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

// Phase 9 Kill Feed tracking
let lastAttackerName = "UNKNOWN";

interface Weapon {
    name: string;
    damage: number;
    fireRate: number; // ms
    magSize: number;
    ammoCurrent: number;
    ammoReserve: number;
    reloadTime: number; // ms
    recoilAmount: number;
    isReloading: boolean;
    lastShotTime: number;
    isAutomatic: boolean;
    pellets: number;
}

const weapons: Weapon[] = [
    { name: "PISTOL", damage: 25, fireRate: 200, magSize: 12, ammoCurrent: 12, ammoReserve: 48, reloadTime: 1200, recoilAmount: 0.1, isReloading: false, lastShotTime: 0, isAutomatic: false, pellets: 1 },
    { name: "SHOTGUN", damage: 15, fireRate: 800, magSize: 6, ammoCurrent: 6, ammoReserve: 24, reloadTime: 2000, recoilAmount: 0.3, isReloading: false, lastShotTime: 0, isAutomatic: false, pellets: 8 },
    { name: "ASSAULT RIFLE", damage: 20, fireRate: 100, magSize: 30, ammoCurrent: 30, ammoReserve: 120, reloadTime: 1800, recoilAmount: 0.05, isReloading: false, lastShotTime: 0, isAutomatic: true, pellets: 1 },
    { name: "MINIGUN", damage: 12, fireRate: 50, magSize: 200, ammoCurrent: 200, ammoReserve: 400, reloadTime: 3000, recoilAmount: 0.02, isReloading: false, lastShotTime: 0, isAutomatic: true, pellets: 1 },
    { name: "ROCKET LAUNCHER", damage: 100, fireRate: 1200, magSize: 1, ammoCurrent: 1, ammoReserve: 5, reloadTime: 2500, recoilAmount: 0.5, isReloading: false, lastShotTime: 0, isAutomatic: false, pellets: 1 },
    { name: "LASER PISTOL", damage: 35, fireRate: 300, magSize: 20, ammoCurrent: 20, ammoReserve: 60, reloadTime: 1500, recoilAmount: 0.0, isReloading: false, lastShotTime: 0, isAutomatic: false, pellets: 1 }
];

// ---- SCENE SETUP ----
// Configuración principal del mundo 3D (escena, cámara y renderizador)
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a0b2e);
scene.fog = new THREE.FogExp2(0x1a0b2e, 0.025);

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1.6, 0);

const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
renderer.setSize(window.innerWidth, window.innerHeight);
// Limit pixel ratio to 1 for best performance on low-end machines
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.0));
// Disable shadows entirely for a significant FPS boost
renderer.shadowMap.enabled = false;
document.body.appendChild(renderer.domElement);

// ---- SOUND SYSTEM ----
// Este sistema administra todos los efectos de sonido y la música de fondo del juego
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

    startMenuMusic() {
        // Detener cualquier rastro de música anterior
        this.stopMusic();
        if (this.ctx.state === 'suspended') this.ctx.resume();

        // Cargar canción local para el menú (la misma que el juego, para que empiece desde el inicio)
        this.bgAudio = new Audio('/tu-cancion.mp3');
        this.bgAudio.loop = true;
        this.bgAudio.volume = 0.05; // Más suave en el menú
        this.bgAudio.play().catch(() => {
            console.log('Audio blocked by browser, waiting for user interaction.');
        });
    }

    startGameMusic() {
        // Si ya hay música sonando (del menú), solo ajustamos el volumen y seguimos
        if (this.bgAudio) {
            this.bgAudio.volume = 0.08; // Volumen un poco más alto en acción
            return;
        }

        // Si por alguna razón no estaba, la creamos
        this.bgAudio = new Audio('/tu-cancion.mp3');
        this.bgAudio.loop = true;
        this.bgAudio.volume = 0.08;
        this.bgAudio.play().catch(() => { });
    }

    stopMusic() {
        // Detener el oscilador del menú si está activo
        if (this.menuOsc) { this.menuOsc.stop(); this.menuOsc.disconnect(); this.menuOsc = null; }
        if (this.gameOsc) { this.gameOsc.stop(); this.gameOsc.disconnect(); this.gameOsc = null; }
        if (this.musicGain) { this.musicGain.disconnect(); this.musicGain = null; }
        // Detener y limpiar el audio de Suno si existe
        if (this.bgAudio) {
            this.bgAudio.pause();
            this.bgAudio.src = '';
            this.bgAudio = null;
        }
    }
}
const soundManager = new SoundManager();

// Start menu music on first body interaction to respect autoplay rules
document.body.addEventListener('click', () => {
    if (!gameStarted && !soundManager.menuOsc) soundManager.startMenuMusic();
}, { once: true });

// ---- PROJECTILES ----
// Clases que controlan el disparo y el movimiento de los proyectiles visibles (láser y cohetes)
class Laser {
    mesh: THREE.Mesh;
    velocity: THREE.Vector3;
    isDead: boolean = false;
    shooterName: string;

    constructor(pos: THREE.Vector3, dir: THREE.Vector3, shooterName: string = "ROBOT") {
        this.mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.1, 0.8), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
        this.mesh.position.copy(pos);
        // Look in direction of travel
        const target = pos.clone().add(dir);
        this.mesh.lookAt(target);
        this.velocity = dir.multiplyScalar(20); // Laser speed
        this.shooterName = shooterName;
        scene.add(this.mesh);
        soundManager.playShot(); // Reuse shoot sound for laser
    }

    update(delta: number) {
        this.mesh.position.addScaledVector(this.velocity, delta);

        // Raycast against player geometry
        const dist = camera.position.distanceTo(this.mesh.position);
        if (dist < 1.0) {
            lastAttackerName = this.shooterName;
            takeDamage(15);
            this.isDead = true;
            return;
        }

        // Environment collision (simple Y check or bounds)
        if (this.mesh.position.y < 0 || Math.abs(this.mesh.position.x) > 60 || Math.abs(this.mesh.position.z) > 60) {
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

// ---- WEAPON PICKUPS ----
// Objetos 3D que representan las armas tiradas en el suelo que el jugador puede recoger
class WeaponPickup {
    mesh: THREE.Group; weaponIdx: number; isPickedUp: boolean = false;
    constructor(weaponIdx: number, pos: THREE.Vector3) {
        this.weaponIdx = weaponIdx; this.mesh = new THREE.Group(); this.mesh.position.copy(pos);
        const w = weapons[weaponIdx];
        const model = new THREE.Group();

        let color = 0xffff00; // Minigun - Yellow
        if (w.name.includes("ROCKET")) color = 0xff3300; // Rocket - Red
        if (w.name.includes("LASER")) color = 0x00ffff; // Laser - Cyan

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

// ---- AMMO PICKUPS ----
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

// ---- JETPACK PICKUP ----
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
        light.position.y = 0.5;

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
// Scatter 1 jetpack specifically further away, surrounded by purple
jetpacks.push(new JetpackPickup(new THREE.Vector3(15, 0, -25)));

const playerInventory: number[] = [0];
let currentWeaponIndex = 0;
const weaponIndices = [3, 4, 5];

function switchWeapon(index: number) {
    if (currentWeaponIndex === index) return;
    // Removed isReloading check to allow switching even during reload
    currentWeaponIndex = index;
    updateWeaponHUD();
    updateWeaponVisuals();
    // Reset weapon position to avoid being stuck in 'reloading position'
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
    if (weaponNameEl) weaponNameEl.innerText = w.name;
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
    const v = document.getElementById('damage-vignette');
    if (v) {
        if (playerHealth < 30) {
            v.style.opacity = '1'; const i = (30 - playerHealth) / 30;
            v.style.boxShadow = `inset 0 0 ${i * 100}px rgba(255,0,0,${i})`;
        } else v.style.opacity = '0';
    }
    if (playerHealth <= 0 && gameStarted) gameOver();
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

    // Play hurt sound if available (or grunt)
    if ((soundManager as any).playHurt) {
        (soundManager as any).playHurt();
    } else {
        soundManager.playGroan(); // Fallback
    }

    if (playerHealth <= 0) {
        playerHealth = 0;
        gameOver();
    }
}

function gameOver() {
    gameStarted = false;
    soundManager.stopMusic();
    controls.unlock();

    const goScreen = document.getElementById('game-over');
    if (goScreen) {
        goScreen.style.display = 'flex';
        // Mostrar cuántas oleadas se sobrevivió
        const finalStats = document.getElementById('final-stats');
        if (finalStats) {
            finalStats.innerText = `Waves Survived: ${waveManager.currentWave > 0 ? waveManager.currentWave - 1 : 0}`;
        }
        // Mostrar quién nos mató
        const killedByEl = document.getElementById('killed-by');
        if (killedByEl) {
            killedByEl.innerText = `KILLED BY: ${lastAttackerName == 'UNKNOWN' ? 'A GRUESOME MONSTER' : lastAttackerName}`;
        }
    }

    uiLayer.style.display = 'none';
    crosshair.style.display = 'none';
    document.getElementById('mobile-controls')!.style.display = 'none'; // ocultar en móvil
}

// ---- CLOUD SYSTEM ----
// Sistema para crear y animar las nubes flotantes en el cielo del juego
const cloudGroup = new THREE.Group();
function createClouds() {
    const cloudMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15, // MORE TRANSPARENT
        flatShading: true,
        fog: false // ENSURE VISIBILITY
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


// ---- LIGHTING ----

// ---- LIGHTING ----
const ambientLight = new THREE.HemisphereLight(0x1a0b3e, 0x0a0a1a, 0.1); // Much darker ambient
scene.add(ambientLight);

// Spooky orange point light near Black Market to add color variety
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

// ---- INITIALIZE WORLD ----
createClouds();
shopMarker = createShopMarker();

// eerie purple/blue fill light on opposite side of map
const fillLight = new THREE.PointLight(0x3300ff, 2, 40);
fillLight.position.set(-30, 5, 30);
scene.add(fillLight);

// The Moon & Moon Light
const moonLight = new THREE.DirectionalLight(0xffffff, 0.4); // Much darker moonlight
moonLight.position.set(-60, 100, -120);
moonLight.castShadow = true;
// Optimize shadows for larger reach - tighter frustum for performance
moonLight.shadow.camera.left = -80;
moonLight.shadow.camera.right = 80;
moonLight.shadow.camera.top = 80;
moonLight.shadow.camera.bottom = -80;
moonLight.shadow.mapSize.width = 512; // Smaller map for FPS
moonLight.shadow.mapSize.height = 512;
scene.add(moonLight);

// GIANT WHITE MOON
const moonGeo = new THREE.SphereGeometry(14, 32, 32);
const moonMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false }); // NO FOG
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

// ---- COLLISION SYSTEM ----
// Sistema de colisiones para evitar que el jugador atraviese las paredes o los modelos
// Two separate arrays: one for PLAYER movement, one for ENEMY bullet detection
const playerCollidables: THREE.Object3D[] = []; // walls, buildings, boundary
const collidables: THREE.Object3D[] = [];        // same + enemy torsos (kept for compatibility)
const collisionRaycaster = new THREE.Raycaster();
const collisionDirections = [
    new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0),
    new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1)
    // Reduced from 8 to 4 directions for PERFORMANCE
];

// ---- TERRAIN & GRASS ----
// Low poly main floor
const floorGeo = new THREE.PlaneGeometry(300, 300, 32, 32);
const pos = floorGeo.attributes.position;
for (let i = 0; i < pos.count; i++) {
    if (i % 33 !== 0 && i % 33 !== 32 && Math.floor(i / 33) !== 0 && Math.floor(i / 33) !== 32) {
        pos.setZ(i, Math.random() * 0.8 - 0.4); // Randomize heights for bumpy low poly terrain
    }
}
floorGeo.computeVertexNormals();
const floorMat = new THREE.MeshStandardMaterial({
    color: 0x221a15, // Muted brownish earth
    roughness: 0.9,
    metalness: 0.1,
    flatShading: true
});
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;
scene.add(floor);

// ---- BOUNDARIES ----
const boundaryRadius = 145;
const boundaryGeo = new THREE.CylinderGeometry(boundaryRadius, boundaryRadius, 10, 32, 1, true);
const boundaryMat = new THREE.MeshBasicMaterial({ visible: false });
const boundary = new THREE.Mesh(boundaryGeo, boundaryMat);
boundary.position.y = 5;
scene.add(boundary);
collidables.push(boundary);
playerCollidables.push(boundary); // Boundary applies to player

// High-Performance Instanced Grass
const grassWidth = 0.2;
const grassHeight = 0.9;
const grassGeo = new THREE.ConeGeometry(grassWidth, grassHeight, 3);
grassGeo.translate(0, grassHeight / 2, 0); // origin to bottom

const grassMat = new THREE.MeshStandardMaterial({
    color: 0x3a4d1a, // Darker olive green
    flatShading: true
});
// More grass triangles for a richer ground look
const grassCount = 1000;
const grassInstanced = new THREE.InstancedMesh(grassGeo, grassMat, grassCount);
// grassInstanced.receiveShadow = true; // Turn off shadows for grass to boost FPS

const dummy = new THREE.Object3D();
for (let i = 0; i < grassCount; i++) {
    const x = (Math.random() - 0.5) * 120;
    const z = (Math.random() - 0.5) * 120;

    if (Math.abs(x) < 3 && Math.abs(z) < 3) continue;

    dummy.position.set(x, 0, z);
    dummy.rotation.y = Math.random() * Math.PI;
    dummy.rotation.x = (Math.random() - 0.5) * 0.2; // slight bend
    dummy.rotation.z = (Math.random() - 0.5) * 0.2;
    dummy.scale.setScalar(0.5 + Math.random());
    dummy.updateMatrix();
    grassInstanced.setMatrixAt(i, dummy.matrix);
}
scene.add(grassInstanced);

// ---- TREES ----
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
    tree.add(trunk);

    // Dead Branches instead of leaves
    const branchMat = new THREE.MeshLambertMaterial({ color: 0x221100 });
    for (let i = 0; i < 5; i++) {
        const branchGeo = new THREE.CylinderGeometry(0.05, 0.1, 1.5, 4);
        const branch = new THREE.Mesh(branchGeo, branchMat);
        branch.position.y = 2 + Math.random() * 2;
        branch.rotation.x = Math.random() * Math.PI;
        branch.rotation.z = Math.random() * Math.PI;
        branch.castShadow = true;
        tree.add(branch);
    }

    // PINE VARIANT (Video style)
    if (Math.random() > 0.5) {
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

const trees: THREE.Group[] = [];
for (let i = 0; i < 60; i++) {
    const tree = createTree();
    const angle = Math.random() * Math.PI * 2;
    const radius = 10 + Math.random() * 50;
    tree.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    tree.rotation.y = Math.random() * Math.PI;

    // Random height variation
    tree.scale.setScalar(0.8 + Math.random() * 0.6);
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
        leaf.position.set((Math.random() - 0.5) * 0.8, (Math.random() * 0.5), (Math.random() - 0.5) * 0.8);
        leaf.scale.setScalar(0.5 + Math.random() * 0.8);
        leaf.castShadow = true;
        leaf.receiveShadow = true;
        bush.add(leaf);
    }
    return bush;
}

for (let i = 0; i < 40; i++) {
    const bush = createBush();
    const angle = Math.random() * Math.PI * 2;
    const radius = 5 + Math.random() * 80;
    bush.position.set(Math.cos(angle) * radius, 0.4, Math.sin(angle) * radius);
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
    playerCollidables.push(base);

    // Middle tier
    const mid = new THREE.Mesh(new THREE.BoxGeometry(4, 6, 4), stoneMat);
    mid.position.y = 11;
    tower.add(mid);
    playerCollidables.push(mid);

    // Top tier
    const top = new THREE.Mesh(new THREE.BoxGeometry(3, 4, 3), stoneMat);
    top.position.y = 16;
    tower.add(top);
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

// Casa con colisiones en las paredes Y en el techo para que el jetpack aterrice sobre ella
function createHouse() {
    const house = new THREE.Group();
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x4e342e });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x212121 });

    const base = new THREE.Mesh(new THREE.BoxGeometry(5, 4, 5), wallMat);
    base.position.y = 2;
    house.add(base);
    playerCollidables.push(base);

    // Roof visual
    const roof = new THREE.Mesh(new THREE.ConeGeometry(4, 3, 4), roofMat);
    roof.position.y = 5.5;
    roof.rotation.y = Math.PI / 4;
    house.add(roof);

    // Invisible flat collider on top of the walls so player can land on the flat roof area
    const roofCollider = new THREE.Mesh(
        new THREE.BoxGeometry(5, 0.2, 5),
        new THREE.MeshBasicMaterial({ visible: false })
    );
    roofCollider.position.y = 4.1; // just above the top of the walls
    house.add(roofCollider);
    playerCollidables.push(roofCollider);

    return house;
}

// Add Tower
const mainTower = createTower();
mainTower.position.set(-60, 0, 60);
scene.add(mainTower);

// Add Houses
for (let i = 0; i < 10; i++) {
    const house = createHouse();
    const angle = (i / 10) * Math.PI * 2 + Math.random();
    const radius = 25 + Math.random() * 35;
    house.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    house.rotation.y = Math.random() * Math.PI;
    scene.add(house);
}

// Add the Black Market building at a FIXED position that aligns with the sky marker
const BM_X = 30, BM_Z = -40; // matches shopMarker position defined later
const blackMarket = createBlackMarketBuilding();
blackMarket.position.set(BM_X, 0, BM_Z);
scene.add(blackMarket);

// Floating "BLACK MARKET" 3D text label above the building
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

// Scatter cars
for (let i = 0; i < 8; i++) {
    const car = createRuinedCar();
    const angle = Math.random() * Math.PI * 2;
    const radius = 15 + Math.random() * 45;
    car.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    car.rotation.y = Math.random() * Math.PI;
    scene.add(car);
}

// Scatter fences
for (let i = 0; i < 15; i++) {
    const fence = createFence();
    const angle = Math.random() * Math.PI * 2;
    const radius = 10 + Math.random() * 50;
    fence.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    fence.rotation.y = Math.random() * Math.PI;
    scene.add(fence);
}

// Scatter EXACTLY 3 Weapon Pickups (Minigun, Rocket, Laser) - More accessible
const uniqueWeaponIndices = [3, 4, 5];
const spawnDistances = [25, 35, 45]; // Closer to start
const spawnAngles = [Math.PI * 0.3, Math.PI * 1.1, Math.PI * 1.7];

for (let i = 0; i < 3; i++) {
    const wIdx = uniqueWeaponIndices[i];
    const angle = spawnAngles[i];
    const radius = spawnDistances[i];
    const pos = new THREE.Vector3(Math.cos(angle) * radius, 0.5, Math.sin(angle) * radius);
    weaponPickups.push(new WeaponPickup(wIdx, pos));
}

// Scatter Ammo Pickups
for (let i = 0; i < 15; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 20 + Math.random() * 70;
    const pos = new THREE.Vector3(Math.cos(angle) * radius, 0.5, Math.sin(angle) * radius);
    ammoPickups.push(new AmmoPickup(pos));
}

// Definición de los diferentes tipos de enemigos y sus características (salud, velocidad, daño)
enum EnemyType {
    STANDARD,
    TANK,
    FAST,
    ROBOT,
    BOSS_GOLIATH,
    BOSS_SENTINEL
}

interface EnemyStats {
    health: number;
    speed: number;
    damage: number;
    shirtColor: number; // For clothes
    skinColor: number; // For head/arms
    size: number;
    attackRange: number;
    attackCooldown: number;
    reward: number;
    name: string; // Added name for kill feed
}

const ENEMY_DATA: Record<EnemyType, EnemyStats> = {
    // Standard: Purple shirt (matches video!), green zombie skin
    [EnemyType.STANDARD]: { health: 70, speed: 2.2, damage: 10, shirtColor: 0x673ab7, skinColor: 0x558b2f, size: 1.0, attackRange: 1.5, attackCooldown: 1000, reward: 15, name: "ZOMBIE" },
    // Tank: Pale gray-green skin, dark jacket
    [EnemyType.TANK]: { health: 180, speed: 1.3, damage: 25, shirtColor: 0x37474f, skinColor: 0x6d4c41, size: 1.4, attackRange: 1.8, attackCooldown: 1500, reward: 50, name: "TANK ZOMBIE" },
    // Fast: Yellow-green Skin, red shirt
    [EnemyType.FAST]: { health: 40, speed: 3.8, damage: 5, shirtColor: 0xb71c1c, skinColor: 0x827717, size: 0.85, attackRange: 1.2, attackCooldown: 500, reward: 30, name: "FAST ZOMBIE" },
    // Robot: Grey metal, cyan glow (Wave 3+)
    [EnemyType.ROBOT]: { health: 250, speed: 2.5, damage: 15, shirtColor: 0x444444, skinColor: 0x888888, size: 1.1, attackRange: 15.0, attackCooldown: 2000, reward: 100, name: "ROBOT" },
    // Boss Goliath: Massive, slow zombie (Wave 5)
    [EnemyType.BOSS_GOLIATH]: { health: 1200, speed: 1.8, damage: 45, shirtColor: 0x1a1a1a, skinColor: 0x2d3d1d, size: 2.5, attackRange: 2.5, attackCooldown: 1200, reward: 500, name: "GOLIATH" },
    // Boss Sentinel: Advanced Robot (Wave 10)
    [EnemyType.BOSS_SENTINEL]: { health: 2000, speed: 1.2, damage: 20, shirtColor: 0x222222, skinColor: 0x555555, size: 2.2, attackRange: 18.0, attackCooldown: 250, reward: 1000, name: "SENTINEL" },
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
    spawnY: number = -2.0; // Start below ground
    spawnTime: number = 2.0; // 2 seconds to rise
    spawnTimer: number = 0;
    shirtColor: number;
    skinColor: number;
    isAlive: boolean = true;
    private avoidVector = new THREE.Vector3(); // For collision avoidance
    // Store references for easy color restore
    bodyParts: { mesh: THREE.Mesh; color: number }[] = [];

    constructor(type: EnemyType, position: THREE.Vector3) {
        this.type = type;
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

        if (this.type === EnemyType.ROBOT || this.type === EnemyType.BOSS_SENTINEL) {
            const metMat = new THREE.MeshStandardMaterial({ color: stats.skinColor, metalness: 0.8, roughness: 0.2 });
            const glowMat = new THREE.MeshBasicMaterial({ color: this.type === EnemyType.BOSS_SENTINEL ? 0xff00ff : 0x00ffff });

            // Mechanical Base / "Feet"
            const ballGeo = new THREE.SphereGeometry(0.4 * s, 12, 12);
            const ball = addPart(new THREE.Mesh(ballGeo, metMat), stats.skinColor);
            ball.position.set(0, 0.4 * s, 0);
            this.mesh.add(ball);

            // Mechanical Torso (Core)
            const coreGeo = new THREE.CylinderGeometry(0.5 * s, 0.6 * s, 0.8 * s, 8);
            const core = addPart(new THREE.Mesh(coreGeo, metMat), stats.skinColor);
            core.position.set(0, 1.0 * s, 0);
            this.mesh.add(core);

            // Spherical Head
            const headGeo = new THREE.SphereGeometry(0.35 * s, 16, 16);
            const head = addPart(new THREE.Mesh(headGeo, metMat), stats.skinColor);
            head.position.set(0, 1.6 * s, 0);
            this.mesh.add(head);

            // Glowing Eye / Visor
            const visorGeo = new THREE.BoxGeometry(0.4 * s, 0.1 * s, 0.1 * s);
            const visor = new THREE.Mesh(visorGeo, glowMat);
            visor.position.set(0, 0.05 * s, 0.3 * s);
            head.add(visor);

            // Antennae
            const antGeo = new THREE.CylinderGeometry(0.02 * s, 0.02 * s, 0.4 * s);
            const antL = new THREE.Mesh(antGeo, metMat);
            antL.position.set(-0.15 * s, 0.3 * s, 0);
            antL.rotation.z = -0.3;
            const antR = new THREE.Mesh(antGeo, metMat);
            antR.position.set(0.15 * s, 0.3 * s, 0);
            antR.rotation.z = 0.3;
            head.add(antL, antR);

            // Mechanical Arms / Cannons
            const armGeo = new THREE.BoxGeometry(0.2 * s, 0.2 * s, 0.7 * s);
            const lArm = addPart(new THREE.Mesh(armGeo, metMat), stats.skinColor);
            lArm.position.set(-0.6 * s, 1.1 * s, 0.2 * s);
            const rArm = addPart(new THREE.Mesh(armGeo, metMat), stats.skinColor);
            rArm.position.set(0.6 * s, 1.1 * s, 0.2 * s);
            this.mesh.add(lArm, rArm);

            (this as any)._torso = core;
            collidables.push(core);
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
            collidables.push(torso);
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
            child.frustumCulled = false; // Cada parte individual (torso, cabeza, brazos, etc)
            if ((child as THREE.Mesh).geometry) {
                (child as THREE.Mesh).geometry.computeBoundingSphere(); // Refrescar bounding sphere
            }
        });

        // (torso set in type-conditional blocks above)
    }

    takeDamage(amount: number, pushDir: THREE.Vector3) {
        if (this.isDead) return;
        this.health -= amount;

        this.isFlinching = true;
        this.flinchTimer = 0.12;

        // Flash all parts white
        for (const part of this.bodyParts) {
            (part.mesh.material as THREE.MeshStandardMaterial).color.setHex(0xffffff);
        }

        // Horizontal push only, floor snap
        const safePush = pushDir.clone();
        safePush.y = 0;
        this.mesh.position.add(safePush);
        this.mesh.position.y = 0;

        // USER REQUEST: Blood only on death to reduce lag. 
        // Small hit flash is handled by flinching color change.

        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        this.isDead = true;
        playerCoins += ENEMY_DATA[this.type].reward;
        updateStatsHUD();

        // Spawn blood particles BEFORE removing the mesh so position is still valid
        const deathPos = this.mesh.position.clone();
        deathPos.y += 1.0;
        bloodParticles.spawn(deathPos, 60); // Aumentar cantidad de partículas al morir para mejor feedback visual

        // En lugar de remover instantáneamente, podemos hacerlo invisible o esperar un frame
        // para asegurar que las partículas se originen en el lugar correcto.
        this.mesh.visible = false;

        // Remove from collidables
        const torso = (this as any)._torso as THREE.Mesh;
        const collIdx = collidables.indexOf(torso);
        if (collIdx > -1) collidables.splice(collIdx, 1);

        // Remover de la escena después de un micro-delay
        setTimeout(() => {
            scene.remove(this.mesh);
        }, 50);
    }

    update(delta: number, playerPos: THREE.Vector3, time: number) {
        if (this.isDead) return;

        // Spawn Rise Animation
        if (this.spawnTimer < this.spawnTime) {
            // SPARK DIRT PARTICLES AT START OF RISE
            if (this.spawnTimer === 0) {
                const dirtPos = this.mesh.position.clone();
                dirtPos.y = 0.1;
                bloodParticles.spawn(dirtPos, 15); // "Dirt" burst
            }
            this.spawnTimer += delta;
            this.mesh.position.y = THREE.MathUtils.lerp(this.spawnY, 0, this.spawnTimer / this.spawnTime);
            return; // Don't move while rising
        }

        if (this.isFlinching) {
            this.flinchTimer -= delta;
            if (this.flinchTimer <= 0) {
                this.isFlinching = false;
                // Restore each part's original color from bodyParts array
                for (const part of this.bodyParts) {
                    (part.mesh.material as THREE.MeshStandardMaterial).color.setHex(part.color);
                }
            }
            return;
        }

        const playerPosXZ = new THREE.Vector3(playerPos.x, 0, playerPos.z);
        const enemyPosXZ = new THREE.Vector3(this.mesh.position.x, 0, this.mesh.position.z);
        const dist = enemyPosXZ.distanceTo(playerPosXZ);

        // Chase range increased to 200 (map wide)
        if (dist > this.attackRange && dist < 200) {
            // Move towards player
            const dir = new THREE.Vector3().subVectors(playerPos, this.mesh.position).normalize();

            // --- SIMPLE COLLISION AVOIDANCE ---
            // Cast rays to detect obstacles and steer away
            const ray = new THREE.Raycaster(this.mesh.position, dir, 0, 1.5);
            const intersects = ray.intersectObjects(playerCollidables, true);

            if (intersects.length > 0) {
                // Steering behavior: try to go perpendicular to the wall
                const normal = intersects[0].face?.normal || new THREE.Vector3(0, 0, 1);
                dir.add(normal.multiplyScalar(0.8)).normalize();
            }

            this.mesh.position.add(dir.multiplyScalar(this.speed * delta));
            this.mesh.lookAt(playerPos.x, this.mesh.position.y, playerPos.z);
        } else if (dist <= this.attackRange) {
            if (time - this.lastAttackTime > this.attackCooldown) {
                this.attackPlayer(playerPos);
                this.lastAttackTime = time;
            }
        }

        // Floor snap + subtle wobble
        this.bobOffset += delta * 4;
        this.mesh.position.y = Math.max(0, Math.sin(this.bobOffset) * 0.04);
        this.mesh.rotation.z = Math.sin(this.bobOffset * 0.5) * 0.03;

        // Fall-through protection
        if (this.mesh.position.y < -2) this.die();

        // BOSS LOGIC: Pulsing eyes or subtle scale shift
        if (this.type === EnemyType.BOSS_GOLIATH || this.type === EnemyType.BOSS_SENTINEL) {
            const bossScale = ENEMY_DATA[this.type].size + Math.sin(time * 0.002) * 0.05;
            this.mesh.scale.setScalar(bossScale);
        }
    }

    attackPlayer(playerPos: THREE.Vector3) {
        if (this.isDead) return;

        if (this.type === EnemyType.ROBOT || this.type === EnemyType.BOSS_SENTINEL) {
            // RANGED LOGIC: Aim directly at the player camera height
            const spawnPos = this.mesh.position.clone();
            spawnPos.y += 1.5 * ENEMY_DATA[this.type].size; // fire from the "eye" of the robot
            // Target the camera's actual world position (includes height when flying)
            const targetPos = camera.position.clone();
            const dir = new THREE.Vector3().subVectors(targetPos, spawnPos).normalize();
            const laser = new Laser(spawnPos, dir, ENEMY_DATA[this.type].name); // Pass shooter name
            enemyProjectiles.push(laser);
            soundManager.playBeep();
        } else {
            // MELEE LOGIC
            lastAttackerName = ENEMY_DATA[this.type].name; // Set attacker name
            takeDamage(this.damage); // Use global takeDamage
            soundManager.playGroan();

            const flash = document.createElement('div');
            flash.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,0,0,0.3);pointer-events:none;z-index:100;';
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 100);
        }
    }
}



// ---- WAVE SYSTEM ----
// Este sistema controla la aparición por oleadas de los enemigos y maneja los jefes
class WaveManager {
    currentWave: number = 0;
    enemiesToSpawn: number = 0;
    enemiesAlive: number = 0;
    spawnTimer: number = 0;
    spawnRate: number = 2000; // ms
    activeEnemies: Enemy[] = [];
    isBreak: boolean = false; // True between waves

    startNextWave() {
        this.isBreak = false;
        // currentWave is incremented in preSpawnWave now

        // VIDEO BEHAVIOR: Make all pre-spawned enemies visible
        this.activeEnemies.forEach(en => {
            en.mesh.visible = true;
        });

        // Hide wave complete screen
        const wc = document.getElementById('wave-complete');
        if (wc) wc.style.display = 'none';
        if (enemiesEl) enemiesEl.innerText = this.enemiesAlive.toString();
        if (stageEl) {
            stageEl.innerText = `WAVE ${this.currentWave}`;
            stageEl.style.color = '#ff0000';
            setTimeout(() => { if (stageEl) stageEl.style.color = '#ff3333'; }, 500);
        }
    }

    preSpawnWave() {
        this.currentWave++;
        this.activeEnemies = this.activeEnemies.filter(en => !en.isDead);

        let count = 4 + (this.currentWave * 4);
        this.enemiesToSpawn = count;
        this.enemiesAlive = 0;

        // BOSS WAVE LOGIC
        if (this.currentWave === 5) {
            const bossPos = new THREE.Vector3(50, 0, 50);
            this.activeEnemies.push(new Enemy(EnemyType.BOSS_GOLIATH, bossPos));
            this.enemiesAlive++;
        } else if (this.currentWave === 10) {
            const bossPos = new THREE.Vector3(50, 0, 50);
            this.activeEnemies.push(new Enemy(EnemyType.BOSS_SENTINEL, bossPos));
            this.enemiesAlive++;
        }

        for (let i = 0; i < count; i++) {
            let type = EnemyType.STANDARD;
            const rand = Math.random();
            if (this.currentWave >= 3) {
                if (rand > 0.75) type = EnemyType.ROBOT;
                else if (rand > 0.55) type = EnemyType.TANK;
                else if (rand > 0.35) type = EnemyType.FAST;
            } else if (this.currentWave >= 2) {
                if (rand > 0.8) type = EnemyType.FAST;
                else if (rand > 0.6) type = EnemyType.TANK;
            }

            this.spawnEnemyWithType(type);
        }

        this.enemiesToSpawn = 0; // All spawned in advance
    }

    spawnEnemyWithType(type: EnemyType) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 50 + Math.random() * 30;
        const pos = new THREE.Vector3(
            camera.position.x + Math.cos(angle) * radius,
            0,
            camera.position.z + Math.sin(angle) * radius
        );
        const enemy = new Enemy(type, pos);
        this.activeEnemies.push(enemy);
        this.enemiesAlive++;
    }

    waveComplete() {
        if (this.isBreak) return;
        this.isBreak = true;

        // VIDEO BEHAVIOR: Show shop immediately without prompt
        setTimeout(() => {
            const wc = document.getElementById('wave-complete');
            if (wc) wc.style.display = 'none';
            openShop();
        }, 1200); // Small delay to enjoy the victory

        if (stageEl) stageEl.innerText = `RESTORING...`;
    }

    update(delta: number, playerPos: THREE.Vector3, time: number) {
        // Spawning logic removed from here to fix lag - now done in preSpawnWave

        // Update active enemies
        for (let i = this.activeEnemies.length - 1; i >= 0; i--) {
            const en = this.activeEnemies[i];
            en.update(delta, playerPos, time);
            if (en.isDead) {
                this.activeEnemies.splice(i, 1);
                this.enemiesAlive--;
                if (enemiesEl) enemiesEl.innerText = this.enemiesAlive.toString();
            }
        }

        if (hordeEl) {
            hordeEl.innerText = `Enemies: ${this.enemiesAlive}`;
        }

        // Wave completion
        // Wave completion check
        if (this.enemiesToSpawn === 0 && this.enemiesAlive === 0 && !this.isBreak) {
            this.waveComplete();
        }
    }

    spawnEnemy() {
        const angle = Math.random() * Math.PI * 2;
        const radius = 45 + Math.random() * 30; // Further away (45 to 75 units)
        const pos = new THREE.Vector3(
            camera.position.x + Math.cos(angle) * radius,
            0,
            camera.position.z + Math.sin(angle) * radius
        );

        let type = EnemyType.STANDARD;
        const rand = Math.random();
        if (this.currentWave >= 3) {
            if (rand > 0.8) type = EnemyType.TANK;
            else if (rand > 0.6) type = EnemyType.FAST;
        } else if (this.currentWave >= 2) {
            if (rand > 0.8) type = EnemyType.FAST;
        }

        const enemy = new Enemy(type, pos);
        this.activeEnemies.push(enemy);
        this.enemiesToSpawn--;
        this.enemiesAlive++;
    }
}

const waveManager = new WaveManager();

// ---- PLAYER CONTROLS & WEAPON ----
// Configuración de los controles del ratón (vista cámara) y eventos del teclado
const controls = new PointerLockControls(camera, document.body);

// Función que extrae la lógica de carga para poder llamarla desde PC o Móvil
function beginLoadingSequence() {
    if (gameStarted) return;

    document.getElementById('main-menu')!.style.display = 'none';
    loadingScreen.style.display = 'flex';
    uiLayer.style.display = 'none';
    crosshair.style.display = 'none';

    // Si es móvil, mostramos los controles virtuales (el contenedor invisible por ahora)
    if (isMobile) {
        document.getElementById('mobile-controls')!.style.display = 'block';
    }

    // Pre-compile shaders for fluidity
    renderer.compile(scene, camera);

    let progress = 0;
    const loadInterval = setInterval(() => {
        progress += 1; // Even slower loading for more "work" feel
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
    // Show loading screen IMMEDIATELY upon getting lock permission (si es PC)
    if (!gameStarted) {
        beginLoadingSequence();
    }
});

controls.addEventListener('unlock', () => {
    // Este evento se dispara cuando el puntero se libera (ESC del navegador)
    // GUARD: No mostrar el menú principal si se desbloqueó por una UI interna o si es móvil
    if (gameStarted && !isUIShowing && !isMobile) {
        // El jugador presionó ESC durante la partida → mostrar pantalla de PAUSA
        isPaused = true;
        isUIShowing = true;
        pauseScreen.style.display = 'flex';
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
    }
});

// UI Elements for Platform Selection
const menuButtonsDiv = document.getElementById('menu-buttons') as HTMLElement;
const platformSelectionDiv = document.getElementById('platform-selection') as HTMLElement;

btnStart.addEventListener('click', () => {
    // En lugar de lockear de inmediato, preguntamos la plataforma
    menuButtonsDiv.style.display = 'none';
    platformSelectionDiv.style.display = 'flex';
});

document.getElementById('btn-platform-back')?.addEventListener('click', () => {
    platformSelectionDiv.style.display = 'none';
    menuButtonsDiv.style.display = 'block';
});

document.getElementById('btn-platform-pc')?.addEventListener('click', () => {
    isMobile = false;
    controls.lock(); // Solicita el bloqueo del puntero (esto dispara el evento 'lock' y carga)
});

document.getElementById('btn-platform-mobile')?.addEventListener('click', () => {
    isMobile = true;
    (async () => {
        // Intenta poner en pantalla completa si es posible en móvil
        if (document.documentElement.requestFullscreen) {
            try { await document.documentElement.requestFullscreen(); } catch (e) { }
        }
    })();
    beginLoadingSequence(); // Móvil no usa PointerLock, inicia directo
});

document.getElementById('btn-options')?.addEventListener('click', () => {
    alert("Options coming soon!");
});
document.getElementById('btn-exit')?.addEventListener('click', () => {
    alert("You cannot escape the night!");
});

// ---- PAUSE / RESUME LOGIC ----
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
    // Volver a bloquear el puntero para reanudar el juego
    controls.lock();
}

// El botón "RESUME" en la pantalla de pausa llama a resumeGame
document.getElementById('btn-resume')?.addEventListener('click', resumeGame);

// ---- START GAME FUNCTION ----
// Esta función esconde la pantalla de carga y muestra la interfaz de juego real
function startGame() {
    gameStarted = true;
    isPaused = false;                         // Asegurarse de que no estamos en pausa
    loadingScreen.style.display = 'none';    // Esconder la pantalla de carga
    uiLayer.style.display = 'block';         // Mostrar el HUD del juego
    crosshair.style.display = 'block';       // Mostrar la mira de apuntado
    prevTime = performance.now();            // Resetear el tiempo para evitar un delta enorme
    waveManager.startNextWave();             // Iniciar la primera oleada de enemigos
}

// Low Poly Gun attached to camera
const weaponGroup = new THREE.Group();
const weaponMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, flatShading: true });
const barrelMaterial = new THREE.MeshStandardMaterial({ color: 0x666666, flatShading: true });

function updateWeaponVisuals() {
    // Clear existing
    const children = [...weaponGroup.children];
    for (const child of children) {
        if (child !== flash) weaponGroup.remove(child);
    }

    const w = weapons[currentWeaponIndex];
    if (w.name === "PISTOL") {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.18, 0.4), weaponMaterial);
        b.position.set(0, -0.1, 0);
        const brl = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.35, 6), barrelMaterial);
        brl.rotation.x = Math.PI / 2; brl.position.set(0, -0.05, -0.3);
        weaponGroup.add(b, brl);
    } else if (w.name === "SHOTGUN") {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.8), weaponMaterial);
        b.position.set(0, -0.1, 0);
        const brl = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.7, 8), barrelMaterial);
        brl.rotation.x = Math.PI / 2; brl.position.set(0, -0.05, -0.6);
        weaponGroup.add(b, brl);
    } else if (w.name === "ASSAULT RIFLE") {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.22, 0.7), weaponMaterial);
        b.position.set(0, -0.1, 0);
        const brl = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.8, 6), barrelMaterial);
        brl.rotation.x = Math.PI / 2; brl.position.set(0, -0.05, -0.8);
        const mag = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.3, 0.15), weaponMaterial);
        mag.position.set(0, -0.3, -0.1);
        weaponGroup.add(b, brl, mag);
    } else if (w.name === "MINIGUN") {
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
    } else if (w.name === "LASER PISTOL") {
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.25, 0.5), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0x00ffff, emissiveIntensity: 0.2 }));
        b.position.set(0, -0.1, 0);
        const brl = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.6), new THREE.MeshStandardMaterial({ color: 0x00ffff }));
        brl.position.set(0, -0.05, -0.4);
        weaponGroup.add(b, brl);
    }
}

updateWeaponVisuals();
weaponGroup.position.set(0.25, -0.3, -0.4);
camera.add(weaponGroup);
scene.add(camera);

// Muzzle Flash
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
    if (weaponNameEl) weaponNameEl.innerText = "RELOADING...";

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

// ==== VIRTUAL TOUCH CONTROLS (MOBILE) ==== //

// Helpers to get elements
const getEl = (id: string) => document.getElementById(id);

// 1. Action Buttons
getEl('btn-mobile-jump')?.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (camera.position.y <= 1.61 && playerStamina > 15 && !hasJetpack) {
        velocity.y += 20;
        playerStamina -= 15;
        updateStatsHUD();
    } else if (hasJetpack) {
        isJetpacking = true;
    }
});
getEl('btn-mobile-jump')?.addEventListener('touchend', (e) => {
    e.preventDefault();
    isJetpacking = false;
});

getEl('btn-mobile-reload')?.addEventListener('touchstart', (e) => { e.preventDefault(); reloadWeapon(); });

getEl('btn-mobile-shoot')?.addEventListener('touchstart', (e) => { e.preventDefault(); isShooting = true; });
getEl('btn-mobile-shoot')?.addEventListener('touchend', (e) => { e.preventDefault(); isShooting = false; });

// 1.5 Weapon Buttons
getEl('btn-mw-1')?.addEventListener('touchstart', (e) => { e.preventDefault(); if (playerInventory.includes(0)) switchWeapon(0); });
getEl('btn-mw-2')?.addEventListener('touchstart', (e) => { e.preventDefault(); if (playerInventory.includes(5)) switchWeapon(5); });
getEl('btn-mw-3')?.addEventListener('touchstart', (e) => { e.preventDefault(); if (playerInventory.includes(4)) switchWeapon(4); });
getEl('btn-mw-4')?.addEventListener('touchstart', (e) => { e.preventDefault(); if (playerInventory.includes(3)) switchWeapon(3); });

getEl('btn-mobile-interact')?.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (uiLayer.style.display !== 'none' && !shopOpen) { openShop(); } // Check distance logic omitted for brevity, keeping simple for mobile layout
});

// 2. Camera Look Area
const lookArea = getEl('mobile-look-area');
lookArea?.addEventListener('touchstart', (e: TouchEvent) => {
    e.preventDefault();
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
    e.preventDefault();
    lookTouchId = null;
});

// 3. Virtual Joystick
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

    // Normalizar deadzone
    const deadzone = 10;
    moveForward = false; moveBackward = false; moveLeft = false; moveRight = false;

    if (distance > deadzone) {
        // En 3D Forward = -z, backward = +z, left = -x, right = +x
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
    // Basic Recoil Animation
    weaponGroup.position.z += w.recoilAmount;
    weaponGroup.position.y += Math.min(w.recoilAmount, 0.1);
    weaponGroup.rotation.x += w.recoilAmount / 2;

    flashMat.opacity = 1;
    flash.rotation.z = Math.random() * Math.PI * 2;
    setTimeout(() => { flashMat.opacity = 0; }, 50);

    // Sound & Projectile
    if (w.name === "ROCKET LAUNCHER") {
        soundManager.playExplosion(); // Launch burst
        const dir = new THREE.Vector3();
        camera.getWorldDirection(dir);
        playerRockets.push(new Rocket(camera.position.clone(), dir));
    } else if (w.name === "LASER PISTOL") {
        soundManager.playLaser();
    } else {
        soundManager.playShot();
    }

    if (w.name !== "ROCKET LAUNCHER") {
        // Hitscan (Standard & Laser Pistol)
        raycaster.setFromCamera(screenCenter, camera);
        const enemyMeshes = waveManager.activeEnemies.map(en => (en as any)._torso).filter(m => m);

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
                if (w.name === "LASER PISTOL") {
                    const hitEnemies = new Set<any>();
                    for (const hit of intersects) {
                        const hitMesh = hit.object as THREE.Mesh;
                        const enemy = waveManager.activeEnemies.find(en => (en as any)._torso === hitMesh);
                        if (enemy && !hitEnemies.has(enemy)) {
                            hitEnemies.add(enemy);
                            enemy.takeDamage(w.damage * damageMultiplier, dir.clone().multiplyScalar(0.5));
                            showHitMarker();
                        }
                    }
                } else {
                    const hitMesh = intersects[0].object as THREE.Mesh;
                    const enemy = waveManager.activeEnemies.find(en => (en as any)._torso === hitMesh);
                    if (enemy) {
                        enemy.takeDamage(w.damage * damageMultiplier, dir.clone().multiplyScalar(0.5));
                        showHitMarker();
                    }
                }
            }
        }
    }
}

// ---- PARTICLE SYSTEM ----
// Sistema optimizado de partículas utilizado para dibujar la sangre de los enemigos
class ParticleSystem {
    particles: THREE.Points;
    geometry: THREE.BufferGeometry;
    positions: Float32Array;
    velocities: THREE.Vector3[] = [];
    lifetimes: number[] = [];
    maxParticles: number = 1000; // Increased gore limit
    cursor: number = 0;

    constructor() {
        this.geometry = new THREE.BufferGeometry();
        this.positions = new Float32Array(this.maxParticles * 3);
        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

        // Material de las particulas de sangre:
        // - Color rojo brillante
        // - Tamaño reducido (0.18) para que parezcan "gotas" o cuadrados pequeños de píxel
        // - depthTest: false hace que siempre se dibujen encima
        const mat = new THREE.PointsMaterial({
            color: 0xff1100,    // Rojo brillante
            size: 0.18,         // Cuadrados pequeños (sangre granulada)
            transparent: true,
            opacity: 0.9,
            depthTest: false,
            depthWrite: false,
            sizeAttenuation: true
        });

        this.particles = new THREE.Points(this.geometry, mat);
        this.particles.renderOrder = 999; // Renderizar por encima de todo
        this.particles.frustumCulled = false; // EVITAR que el sistema de partículas desaparezca
        scene.add(this.particles);

        // Pre-inicializar arrays de velocidades y tiempos de vida
        for (let i = 0; i < this.maxParticles; i++) {
            this.velocities.push(new THREE.Vector3());
            this.lifetimes.push(0);
            // Esconder todas las partículas debajo del mapa al inicio
            this.positions[i * 3 + 1] = -100;
        }
    }

    spawn(position: THREE.Vector3, count: number = 5) {
        for (let i = 0; i < count; i++) {
            const idx = this.cursor;
            this.positions[idx * 3] = position.x;
            this.positions[idx * 3 + 1] = position.y;
            this.positions[idx * 3 + 2] = position.z;

            this.velocities[idx].set(
                (Math.random() - 0.5) * 4,
                Math.random() * 5,       // Fly up higher
                (Math.random() - 0.5) * 4
            );
            this.lifetimes[idx] = 0.8 + Math.random() * 0.8; // Longer lifetime

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

                this.velocities[i].y -= 9.8 * delta;  // Gravity
                // Bounce off floor
                if (this.positions[i * 3 + 1] < 0.05 && this.velocities[i].y < 0) {
                    this.positions[i * 3 + 1] = 0.05;
                    this.velocities[i].y *= -0.1;  // Slight bounce, then stay on ground
                    this.velocities[i].x *= 0.3;
                    this.velocities[i].z *= 0.3;
                }
                this.lifetimes[i] -= delta;

                if (this.lifetimes[i] <= 0) {
                    this.positions[i * 3] = 0;
                    this.positions[i * 3 + 1] = -100; // Hide
                    this.positions[i * 3 + 2] = 0;
                }
                needsUpdate = true;
            }
        }
        if (needsUpdate) this.geometry.attributes.position.needsUpdate = true;
    }

    warmUp() {
        // Run a dummy spawn to initialize shaders and buffers
        this.spawn(new THREE.Vector3(0, -10, 0), 50);
        this.update(0.1);
        // Reset cursor and hidden state
        for (let i = 0; i < this.maxParticles; i++) {
            this.lifetimes[i] = 0;
            this.positions[i * 3 + 1] = -100;
        }
        this.geometry.attributes.position.needsUpdate = true;
    }
}

const bloodParticles = new ParticleSystem();

class FireParticleSystem {
    particles: THREE.Points;
    geometry: THREE.BufferGeometry;
    positions: Float32Array;
    velocities: THREE.Vector3[] = [];
    lifetimes: number[] = [];
    maxParticles: number = 300;
    cursor: number = 0;

    constructor() {
        this.geometry = new THREE.BufferGeometry();
        this.positions = new Float32Array(this.maxParticles * 3);
        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));

        const mat = new THREE.PointsMaterial({
            color: 0xff6600,
            size: 0.5,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending,
            sizeAttenuation: true
        });

        this.particles = new THREE.Points(this.geometry, mat);
        scene.add(this.particles);

        for (let i = 0; i < this.maxParticles; i++) {
            this.velocities.push(new THREE.Vector3());
            this.lifetimes.push(0);
        }
    }

    spawn(position: THREE.Vector3, count: number = 3) {
        for (let i = 0; i < count; i++) {
            const idx = this.cursor;
            this.positions[idx * 3] = position.x + (Math.random() - 0.5) * 0.5;
            this.positions[idx * 3 + 1] = position.y - 0.8;
            this.positions[idx * 3 + 2] = position.z + (Math.random() - 0.5) * 0.5;

            this.velocities[idx].set(
                (Math.random() - 0.5) * 2,
                -2 - Math.random() * 3,
                (Math.random() - 0.5) * 2
            );
            this.lifetimes[idx] = 0.2 + Math.random() * 0.3;
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

                this.lifetimes[i] -= delta;
                if (this.lifetimes[i] <= 0) {
                    this.positions[i * 3 + 1] = -100;
                }
                needsUpdate = true;
            }
        }
        if (needsUpdate) this.geometry.attributes.position.needsUpdate = true;
    }
}
const jetpackParticles = new FireParticleSystem();

// ---- HIT MARKER ----
function showHitMarker() {
    if (!crosshair) return;
    crosshair.style.borderColor = 'red';
    crosshair.style.transform = 'translate(-50%, -50%) scale(1.5)';
    setTimeout(() => {
        crosshair.style.borderColor = 'white';
        crosshair.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
}

// ---- PHYSICS & MOVEMENT VARIABLES ----
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
let lastLookY = 0; // State for Spacebar hold

// Increased speeds for faster ground movement
const walkSpeed = 60.0;
const sprintSpeed = 100.0;
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
            // Slower jumps, and activate Jetpack if available
            if (camera.position.y <= 1.61 && playerStamina > 15 && !hasJetpack) {
                velocity.y += 20; // Slower, floatier jump
                playerStamina -= 15;
                updateStatsHUD();
            } else if (hasJetpack) {
                isJetpacking = true;
            }
            break;
        case 'ShiftLeft': case 'ShiftRight': isSprinting = true; break;
        case 'KeyR': reloadWeapon(); break;
        // Weapon Hotkeys: 1=Pistol(0), 2=Laser(5), 3=Rocket(4), 4=Minigun(3)
        case 'Digit1': if (playerInventory.includes(0)) switchWeapon(0); break;
        case 'Digit2': if (playerInventory.includes(5)) switchWeapon(5); break;
        case 'Digit3': if (playerInventory.includes(4)) switchWeapon(4); break;
        case 'Digit4': if (playerInventory.includes(3)) switchWeapon(3); break;
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
    }
};

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

// ---- BLACK MARKET SHOP (Phase 4) ----
// Lógica de la tienda secreta: comprobar si tienes dinero y aplicar la mejora comprada
const interactPrompt = document.getElementById('interact-prompt')!;
const shopMenu = document.getElementById('shop-menu')!;
const shopCoinsEl = document.getElementById('shop-coins')!;
const purchaseFlashEl = document.getElementById('purchase-flash')!;

// nearBlackMarket removed - shop is wave-triggered only

function updateShopCards() {
    // Update visual state of all cards based on current balance
    const cards = document.querySelectorAll('.shop-card');
    cards.forEach(card => {
        const id = card.id;
        let cost = 0;
        if (id === 'buy-health') cost = 50;
        else if (id === 'buy-ammo') cost = 75;
        else if (id === 'buy-maxhp') cost = 200;
        else if (id === 'buy-speed') cost = 150;
        else if (id === 'buy-damage') cost = 300;
        else if (id === 'buy-rapidfire') cost = 500;

        if (playerCoins < cost) {
            card.classList.add('cant-afford');
        } else {
            card.classList.remove('cant-afford');
        }
    });
}

function openShop() {
    isUIShowing = true; // Set flag
    shopOpen = true;
    shopCoinsEl.innerText = playerCoins.toString();
    updateShopCards();
    shopMenu.style.display = 'flex';
    controls.unlock(); // This triggers 'unlock' event
}

function closeShop() {
    isUIShowing = false; // Reset flag
    shopOpen = false;
    shopMenu.style.display = 'none';

    // DIRECTLY START NEXT WAVE WITH LOADING
    if (gameStarted) {
        mainMenu.style.display = 'none';
        controls.lock(); // LOCK IMMEDIATELY on user click to avoid browser blockage
        startNextWaveWithLoading();
    }
}

function startNextWaveWithLoading() {
    loadingScreen.style.display = 'flex';
    if (loadBar) loadBar.style.width = '0%';

    // PRE-SPAWN ALL ENEMIES NOW WHILE LOADING BAR IS UP
    waveManager.preSpawnWave();

    const loadingText = loadingScreen.querySelector('.loading-text') as HTMLElement;
    if (loadingText) loadingText.innerText = 'PREPARING NEXT WAVE...';

    let progress = 0;
    const interval = setInterval(() => {
        progress += 2;
        if (loadBar) loadBar.style.width = `${progress}%`;

        if (loadingText) {
            if (progress < 25) loadingText.innerText = `RESTORING NAVMESH... ${progress}%`;
            else if (progress < 50) loadingText.innerText = `CALIBRATING HORDES... ${progress}%`;
            else if (progress < 75) loadingText.innerText = `PRE-RENDERING WAVE ${waveManager.currentWave}... ${progress}%`;
            else loadingText.innerText = `READYING WAVE ${waveManager.currentWave}... ${progress}%`;
        }

        if (progress >= 100) {
            clearInterval(interval);
            loadingScreen.style.display = 'none';
            prevTime = performance.now();
            waveManager.startNextWave();
        }
    }, 40);
}

function toggleShop() {
    if (shopOpen) closeShop();
    else openShop();
}

function showPurchaseFeedback(success: boolean) {
    if (success) {
        purchaseFlashEl.style.display = 'block';
        setTimeout(() => purchaseFlashEl.style.display = 'none', 150);
    }
}

function tryBuy(cost: number, action: () => void, elementId: string) {
    if (playerCoins >= cost) {
        playerCoins -= cost;
        action();
        updateStatsHUD();
        shopCoinsEl.innerText = playerCoins.toString();
        showPurchaseFeedback(true);
        updateShopCards();
    } else {
        const card = document.getElementById(elementId);
        if (card) {
            card.style.borderColor = '#ff3333';
            card.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
            setTimeout(() => {
                card.style.borderColor = '';
                card.style.boxShadow = '';
            }, 300);
        }
    }
}

document.getElementById('buy-health')?.addEventListener('click', () =>
    tryBuy(50, () => { playerHealth = Math.min(playerHealth + 30, maxPlayerHealth); }, 'buy-health')
);
document.getElementById('buy-ammo')?.addEventListener('click', () =>
    tryBuy(75, () => {
        weapons.forEach(w => {
            w.ammoCurrent = w.magSize;
            w.ammoReserve = w.magSize * 4;
        });
        updateWeaponHUD();
    }, 'buy-ammo')
);
document.getElementById('buy-maxhp')?.addEventListener('click', () =>
    tryBuy(200, () => {
        maxPlayerHealth += 20;
        playerHealth = Math.min(playerHealth + 20, maxPlayerHealth);
    }, 'buy-maxhp')
);
document.getElementById('buy-speed')?.addEventListener('click', () =>
    tryBuy(150, () => { walkSpeedMultiplier = Math.min(walkSpeedMultiplier + 0.1, 1.5); }, 'buy-speed')
);
document.getElementById('buy-damage')?.addEventListener('click', () =>
    tryBuy(300, () => { damageMultiplier = Math.min(damageMultiplier + 0.25, 3.0); }, 'buy-damage')
);
document.getElementById('buy-rapidfire')?.addEventListener('click', () =>
    tryBuy(500, () => {
        weapons.forEach(w => {
            w.fireRate = Math.max(50, w.fireRate * 0.85); // 15% faster
        });
    }, 'buy-rapidfire')
);
document.getElementById('shop-close')?.addEventListener('click', closeShop);

// Wave Complete screen buttons
document.getElementById('wc-shop-btn')?.addEventListener('click', () => {
    const wc = document.getElementById('wave-complete');
    if (wc) wc.style.display = 'none';
    openShop();
});
document.getElementById('wc-next-btn')?.addEventListener('click', () => {
    const wc = document.getElementById('wave-complete');
    if (wc) wc.style.display = 'none';
    waveManager.startNextWave();
    // No controls.lock() needed - pointer lock was never released
});

// ---- ANIMATION LOOP ----
// Ciclo principal que corre en cada frame: dibuja la escena y actualiza todas las físicas
let bobAngle = 0;
let frameCount = 0;
let lastFpsTime = performance.now();

function animate() {
    requestAnimationFrame(animate);
    const time = performance.now();

    // Rotate clouds slowly
    cloudGroup.rotation.y += 0.0005;

    frameCount++;
    if (time - lastFpsTime >= 1000) {
        if (fpsEl && gameStarted) fpsEl.innerText = frameCount.toString();
        frameCount = 0;
        lastFpsTime = time;
    }

    // PERFORMANCE & MOVEMENT FIX: Cap delta max to 0.1 (100ms) to prevent teleporting on lag spikes
    const delta = Math.min((time - prevTime) / 1000, 0.1);

    // Si el juego está en pausa, no actualizamos físicas ni enemigos, solo renderizamos el frame
    if (isPaused) {
        prevTime = time;
        renderer.render(scene, camera);
        return;
    }

    // El juego procesa movimiento en PC solo si el ratón está bloqueado, o SIEMPRE en celular mientras esté activo
    if ((controls.isLocked === true || isMobile) && gameStarted) {
        handleShooting(time);

        // Stamina logic
        const isMoving = moveForward || moveBackward || moveLeft || moveRight;
        if (isSprinting && isMoving && playerStamina > 0 && camera.position.y <= 1.7) {
            speed = sprintSpeed * walkSpeedMultiplier;
            playerStamina -= 20 * delta;
            if (playerStamina < 0) playerStamina = 0;
            updateStatsHUD();
        } else {
            speed = walkSpeed * walkSpeedMultiplier;
            if (playerStamina < MAX_STAMINA && camera.position.y <= 1.7) {
                playerStamina += 10 * delta;
                if (playerStamina > MAX_STAMINA) playerStamina = MAX_STAMINA;
                updateStatsHUD();
            }
        }

        // Apply friction
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        // Apply gravity & Jetpack Logic
        if (isJetpacking && hasJetpack && playerJetpackFuel > 0) {
            // ALTITUDE LIMIT: Only apply upward force if below the clouds (Y=45)
            if (camera.position.y < 45.0) {
                velocity.y += 35.0 * delta; // Upward Jetpack Force
            } else {
                velocity.y += 9.8 * 8.0 * delta; // Cancel gravity precisely to hover, or let it fall slightly
                // To just hover with slight bob:
                velocity.y = Math.sin(time / 200) * 0.5;
            }

            playerJetpackFuel -= 5 * delta; // Deplete fuel slower for 20s total flight
            updateStatsHUD();
            jetpackParticles.spawn(camera.position, 3);

            // Jetpack Destruction Logic
            if (playerJetpackFuel <= 0) {
                playerJetpackFuel = 0;
                hasJetpack = false;
                soundManager.playExplosion();
                jetpackParticles.spawn(camera.position, 30); // Final burst of sparks
                document.getElementById('fuel-bar')!.style.display = 'none';
                updateStatsHUD();

                // Add a red flash
                const flash = document.createElement('div');
                flash.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,100,0,0.4);pointer-events:none;z-index:100;';
                document.body.appendChild(flash);
                setTimeout(() => flash.remove(), 150);
            }
        } else {
            // Normal gravity - Slower/Floaty
            velocity.y -= 9.8 * 8.0 * delta;
        }

        direction.z = Number(moveForward) - Number(moveBackward);
        direction.x = Number(moveRight) - Number(moveLeft);
        direction.normalize();

        // Acceleration
        if (moveForward || moveBackward) velocity.z -= direction.z * speed * delta;
        if (moveLeft || moveRight) velocity.x -= direction.x * speed * delta;

        // Update Enemy Projectiles (Lasers)
        for (let i = enemyProjectiles.length - 1; i >= 0; i--) {
            const lp = enemyProjectiles[i];
            lp.update(delta);
            if (lp.isDead) {
                lp.destroy();
                enemyProjectiles.splice(i, 1);
            }
        }

        // Sliding Collision Logic
        const oldPosZ = camera.position.z;
        controls.moveForward(-velocity.z * delta);
        for (let i = 0; i < 4; i++) {
            collisionRaycaster.set(new THREE.Vector3(camera.position.x, 0.5, camera.position.z), collisionDirections[i]);
            if (collisionRaycaster.intersectObjects(playerCollidables, false).some(h => h.distance < 0.6)) {
                camera.position.z = oldPosZ; velocity.z = 0; break;
            }
        }

        const oldPosX = camera.position.x;
        controls.moveRight(-velocity.x * delta);
        for (let i = 0; i < 4; i++) {
            collisionRaycaster.set(new THREE.Vector3(camera.position.x, 0.5, camera.position.z), collisionDirections[i]);
            if (collisionRaycaster.intersectObjects(playerCollidables, false).some(h => h.distance < 0.6)) {
                camera.position.x = oldPosX; velocity.x = 0; break;
            }
        }

        // Vertical movement
        camera.position.y += (velocity.y * delta);

        // Ground and roof collision: raycast downward to land on buildings / terrain
        const downRay = new THREE.Raycaster(
            camera.position.clone(),
            new THREE.Vector3(0, -1, 0),
            0,
            0.8  // check within 0.8 units below the camera
        );
        const downHits = downRay.intersectObjects(playerCollidables, false);
        if (downHits.length > 0 && velocity.y <= 0) {
            // Land on the surface
            camera.position.y = downHits[0].point.y + 1.6;
            velocity.y = 0;
        }

        // Hard floor at ground level (y=1.6)
        if (camera.position.y < 1.6) {
            velocity.y = 0;
            camera.position.y = 1.6;
        }

        // Map Boundaries (Fluidity Fix)
        const mapLimit = 60;
        if (camera.position.x > mapLimit) camera.position.x = mapLimit;
        if (camera.position.x < -mapLimit) camera.position.x = -mapLimit;
        if (camera.position.z > mapLimit) camera.position.z = mapLimit;
        if (camera.position.z < -mapLimit) camera.position.z = -mapLimit;
    }

    if (gameStarted) {
        // Weapon Bobbing & Recoil Recover (Independent of lock for smoothness)
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

        // ---- RESIZE HANDLER ----
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Update the logic loop call
        if (frameCount % 2 === 0) {
            waveManager.update(delta * 2, camera.position, time);
        }
        bloodParticles.update(delta);
        jetpackParticles.update(delta);

        // Update Projectiles & Pickups
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

        if (!shopOpen && shopMarker) {
            shopMarker.rotation.y += delta * 2;
            shopMarker.position.y = 8 + Math.sin(time / 500) * 0.5;
        }
    }

    prevTime = time;
    renderer.render(scene, camera);
}

animate();

// ---- AUDIOPLAY SATISFACTION ----
// Los navegadores modernos bloquean el sonido hasta que el usuario interactúa.
// Este listener activa la música del menú en el primer clic que haga el usuario.
document.addEventListener('click', () => {
    if (!gameStarted) {
        soundManager.startMenuMusic();
    }
}, { once: true });
