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
        clothHex = 0x111111; // Black jacket
        darkHex = 0x221144; // Dark messy hair
        pantsHex = 0x111111; // Black pants
    } else if (skinId === 'mugman') {
        skinHex = 0xffffff; // White body/cup
        clothHex = 0x111111; // Black body like cuphead
        darkHex = 0xffffff; // White gloves
        pantsHex = 0x0000dd; // Blue shorts
    } else if (skinId === 'aj') {
        skinHex = 0x5c3a21; // Dark skin
        clothHex = 0xffffff; // White shirt
        darkHex = 0x111111; // Bald/short dark hair
        pantsHex = 0x000088; // Blue jeans
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
        // High collar
        const collar = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.4, 0.45), new THREE.MeshStandardMaterial({color: 0x111111}));
        collar.position.set(0, 0.1, -0.05);
        torso.add(collar);
        // Gold uniform accents
        const goldMat = new THREE.MeshBasicMaterial({color: 0xffcc00});
        const stripe1 = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 0.6), goldMat); stripe1.position.set(-0.25, 0, 0.191); torso.add(stripe1);
        const stripe2 = new THREE.Mesh(new THREE.PlaneGeometry(0.04, 0.6), goldMat); stripe2.position.set(0.25, 0, 0.191); torso.add(stripe2);
        // Messy dark hair
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.3, 0.55), darkMat); hair.position.y = 0.28; head.add(hair);
        const spike = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 4), darkMat); spike.position.set(0, 0.4, -0.1); spike.rotation.x= -0.2; head.add(spike);
    } else if (skinId === 'mugman') {
        // Overalls and buttons identical to cuphead
        const overalls = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.5), pantsMat); overalls.position.set(0, 0, 0.191); torso.add(overalls);
        const btnGeo = new THREE.SphereGeometry(0.04);
        const btnMat = new THREE.MeshStandardMaterial({ color: 0xffcc00 }); // Yellow buttons
        const b1 = new THREE.Mesh(btnGeo, btnMat); b1.position.set(-0.15, 0.15, 0.2);
        const b2 = new THREE.Mesh(btnGeo, btnMat); b2.position.set(0.15, 0.15, 0.2);
        torso.add(b1, b2);
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
        skinMat.color.setHex(0x5c3a21); // Ensure dark skin for head/arms
        // Blue sweater vest
        const vest = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.6, 0.4), new THREE.MeshStandardMaterial({color: 0x0055ff}));
        vest.position.set(0, -0.05, 0); torso.add(vest);
        // Glasses (Black frames)
        const frameMat = new THREE.MeshBasicMaterial({color: 0x111111});
        const lFrame = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.05), frameMat); lFrame.position.set(-0.12, 0.05, 0.25); head.add(lFrame);
        const rFrame = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.05), frameMat); rFrame.position.set(0.12, 0.05, 0.25); head.add(rFrame);
        const bridge = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.02, 0.05), frameMat); bridge.position.set(0, 0.05, 0.25); head.add(bridge);
        // Short black hair
        const hair = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.1, 0.55), darkMat); hair.position.y = 0.25; head.add(hair);
    }

    // Default to cyan, but custom colours for certain skins
    const eyeMat = new THREE.MeshBasicMaterial({ color: (skinId === 'light_yagami' || skinId === 'pomni') ? 0x822f2f : (skinId === 'lawliet' || skinId === 'cuphead' || skinId === 'mugman' || skinId === 'geto') ? 0x111111 : (skinId === 'lelouch') ? 0xaa00ee : 0x00ffcc });
    const eyeGeo = new THREE.PlaneGeometry(0.12, 0.09);
    const lEye = new THREE.Mesh(eyeGeo, eyeMat); lEye.position.set(-0.12, 0.05, 0.245);
    const rEye = new THREE.Mesh(eyeGeo, eyeMat); rEye.position.set(0.12, 0.05, 0.245);
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

    const readyText = isReady ? 'READY' : 'NOT READY';
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
            showPickupNotice(`${p.username} JOINED!`);
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
    socket.on('game-start', (data: { hostId: string }) => {
        isHost = (socket!.id === data.hostId);
        if (!isHost) waveManager.isNetworkClient = true;
        hideAllMpScreens();
        
        // Fix: Call beginLoadingSequence immediately instead of waiting for controls.lock() 
        // to succeed, since browsers block pointer lock from WebSocket events.
        beginLoadingSequence();
        
        if (!isMobile) {
            // Attempt to lock pointer, but if blocked, user will just have to click later.
            try { controls.lock(); } catch(e) {}
        }
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

    socket.on('player-died', (data: { id: string, name: string }) => {
        const p = remotePlayers.get(data.id);
        if (p) {
            // Pose de muerto: rotar todo el grupo 90° para tumbarlo de espaldas
            p.group.rotation.set(Math.PI / 2, p.group.rotation.y, 0);
            p.group.position.y = 0.15; // Pegado al suelo, antes estaba muy alto (0.95)

            // Quitar arma de la mano derecha
            const rArmRef = p.group.userData.rArmRef;
            if (rArmRef) {
                const wm = rArmRef.getObjectByName('weapon_mesh');
                if (wm) rArmRef.remove(wm);
            }
            // Quitar etiquetas flotantes
            const lbl = p.group.getObjectByName('name_label');
            if (lbl) p.group.remove(lbl);
            const wlbl = p.group.getObjectByName('weapon_label');
            if (wlbl) p.group.remove(wlbl);

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
}

function cleanup3DLobby() {
    inLobby3D = false;
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
        if (myRoomCode) {
            sessionStorage.setItem('rejoinRoom', myRoomCode);
            sessionStorage.setItem('rejoinUsername', myUsername);
            sessionStorage.setItem('rejoinPlatform', isMobile ? 'mobile' : 'pc');
        }
        location.reload();
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
        this.playTrack('/game.mp3', 0.08);
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
        this.bgAudio.loop = (path === '/lobby.mp3' || path === '/game.mp3');
        this.bgAudio.volume = volume;
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
            this.isDead = true;
            return;
        }

        // Colisión con el entorno (verificación simple de altura Y o límites)
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
// Scatter 1 jetpack specifically further away, surrounded by purple
jetpacks.push(new JetpackPickup(new THREE.Vector3(35, 0, -40)));

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

    // Reproducir sonido de daño si está disponible
    if ((soundManager as any).playHurt) {
        (soundManager as any).playHurt();
    } else {
        soundManager.playGroan(); // Alternativa (quejido)
    }

    if (playerHealth <= 0) {
        playerHealth = 0;
        gameOver();
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
    new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1)
    // Reducido de 8 a 4 direcciones para mejorar el RENDIMIENTO
];

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

const trees: THREE.Group[] = [];
for (let i = 0; i < 60; i++) {
    const tree = createTree();
    const angle = seededRandom() * Math.PI * 2;
    const radius = 10 + seededRandom() * 50;
    tree.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    tree.rotation.y = seededRandom() * Math.PI;

    // Random height variation
    tree.scale.setScalar(0.8 + seededRandom() * 0.6);
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
    const angle = seededRandom() * Math.PI * 2;
    const radius = 5 + seededRandom() * 80;
    bush.position.set(Math.cos(angle) * radius, 0.4, Math.sin(angle) * radius);
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

// Casa: el cubo visible (BoxGeometry) ES la colisión. Nada invisible.
function createHouse() {
    const house = new THREE.Group();
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x4e342e });
    const roofMat = new THREE.MeshLambertMaterial({ color: 0x212121 });

    // Cuerpo principal de la casa — el cubo visible actua como colisionador completo
    const base = new THREE.Mesh(new THREE.BoxGeometry(5, 4, 5), wallMat);
    base.position.y = 2;  // centro en Y=2 => pies en y=0, techo en y=4
    base.castShadow = true;
    base.receiveShadow = true;
    house.add(base);

    // Tejado visual: Restaurado a dimensiones originales y con colisión
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 4, 3, 4), roofMat);
    roof.position.y = 5.5; // Centro 5.5 superior
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    house.add(roof);

    return house;
}

// Añadir la Torre
const mainTower = createTower();
mainTower.position.set(-60, 0, 60);
scene.add(mainTower);

// Añadir Casas
for (let i = 0; i < 10; i++) {
    const house = createHouse();
    const angle = (i / 10) * Math.PI * 2 + seededRandom();
    const radius = 25 + seededRandom() * 35;
    house.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    house.rotation.y = seededRandom() * Math.PI;
    house.updateMatrixWorld(true);
    scene.add(house);
    
    // Empujar a las colisiones DESPUÉS de acomodar su matriz para que raycaster con false detecte el mundo
    house.children.forEach(c => {
        if (c instanceof THREE.Mesh) {
            collidables.push(c);
            playerCollidables.push(c);
        }
    });
}

// Añadir el edificio del Black Market en una posición FIJA que coincida con el marcador del cielo
const BM_X = 30, BM_Z = -40; // coincide con la posición de shopMarker definida más adelante
const blackMarket = createBlackMarketBuilding();
blackMarket.position.set(BM_X, 0, BM_Z);
scene.add(blackMarket);

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
    const angle = Math.random() * Math.PI * 2;
    const radius = 15 + Math.random() * 45;
    car.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    car.rotation.y = Math.random() * Math.PI;
    scene.add(car);
}

// Distribuir vallas
for (let i = 0; i < 15; i++) {
    const fence = createFence();
    const angle = Math.random() * Math.PI * 2;
    const radius = 10 + Math.random() * 50;
    fence.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
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

// Definición de los diferentes tipos de enemigos y sus características (salud, velocidad, daño)
enum EnemyType {
    STANDARD,
    TANK,
    FAST,
    HUMANOID,   // New: Pale skin, blue shirt
    ZOMBIE_ON_FIRE, // New: Phase 15
    ROBOT,
    BOSS_GOLIATH,
    BOSS_SENTINEL,
    BOSS_FINAL_ROBOT // Final boss for Stage 15
}

interface EnemyStats {
    health: number;
    speed: number;
    damage: number;
    shirtColor: number; // Para la ropa
    skinColor: number; // Para la cabeza/brazos
    size: number;
    attackRange: number;
    attackCooldown: number;
    reward: number;
    name: string; // Nombre añadido para el feed de muertes (kill feed)
}

const ENEMY_DATA: Record<EnemyType, EnemyStats> = {
    // Standard: Purple shirt (matches video!), green zombie skin
    [EnemyType.STANDARD]: { health: 70, speed: 2.2, damage: 10, shirtColor: 0x673ab7, skinColor: 0x558b2f, size: 1.0, attackRange: 1.5, attackCooldown: 1000, reward: 15, name: "ZOMBIE" },
    // Tank: Pale gray-green skin, dark jacket
    [EnemyType.TANK]: { health: 180, speed: 1.3, damage: 25, shirtColor: 0x37474f, skinColor: 0x6d4c41, size: 1.4, attackRange: 1.8, attackCooldown: 1500, reward: 50, name: "TANK ZOMBIE" },
    // Fast: Yellow-green Skin, red shirt
    [EnemyType.FAST]: { health: 40, speed: 3.8, damage: 5, shirtColor: 0xb71c1c, skinColor: 0x827717, size: 0.85, attackRange: 1.2, attackCooldown: 500, reward: 30, name: "FAST ZOMBIE" },
    // Humanoid: Pale skin, blue shirt (From video!)
    [EnemyType.HUMANOID]: { health: 60, speed: 2.5, damage: 12, shirtColor: 0x2196f3, skinColor: 0xd1d1d1, size: 1.0, attackRange: 1.5, attackCooldown: 900, reward: 20, name: "HUMAN ZOMBIE" },
    // Zombie on Fire: Naranja, daño progresivo
    [EnemyType.ZOMBIE_ON_FIRE]: { health: 90, speed: 2.5, damage: 5, shirtColor: 0xdd4400, skinColor: 0xffaa00, size: 1.0, attackRange: 1.5, attackCooldown: 900, reward: 40, name: "ZOMBIE ON FIRE" },
    // Robot: Grey metal, cyan glow (Wave 3+)
    [EnemyType.ROBOT]: { health: 250, speed: 2.5, damage: 15, shirtColor: 0x444444, skinColor: 0x888888, size: 1.1, attackRange: 15.0, attackCooldown: 2000, reward: 100, name: "ROBOT" },
    // Boss Goliath: Massive, slow zombie (Wave 5)
    [EnemyType.BOSS_GOLIATH]: { health: 1200, speed: 1.8, damage: 45, shirtColor: 0x1a1a1a, skinColor: 0x2d3d1d, size: 2.5, attackRange: 2.5, attackCooldown: 1200, reward: 500, name: "GOLIATH" },
    // Boss Sentinel: Advanced Robot (Wave 10)
    [EnemyType.BOSS_SENTINEL]: { health: 2000, speed: 1.2, damage: 20, shirtColor: 0x222222, skinColor: 0x555555, size: 2.2, attackRange: 18.0, attackCooldown: 250, reward: 1000, name: "SENTINEL" },
    // Final Boss: Gigantic Robot Zombie (Stage 15)
    [EnemyType.BOSS_FINAL_ROBOT]: { health: 6000, speed: 4.5, damage: 40, shirtColor: 0x000000, skinColor: 0x555555, size: 4.5, attackRange: 15.0, attackCooldown: 300, reward: 5000, name: "ULTIMATE MECHA-ZOMBIE" },
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

        // Si es ZOMBIE_ON_FIRE, usar material emisivo naranja en lugar de PointLight (mejor rendimiento)
        if (this.type === EnemyType.ZOMBIE_ON_FIRE) {
            const glowMat = new THREE.MeshStandardMaterial({
                color: 0xff4400, emissive: 0xff2200, emissiveIntensity: 1.5, roughness: 0.4
            });
            // Aplicar el material emisivo al torso del zombie
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

        this.isFlinching = true;
        this.flinchTimer = 0.12;

        // Flash all parts white
        for (const part of this.bodyParts) {
            (part.mesh.material as THREE.MeshStandardMaterial).color.setHex(0xffffff);
        }

        // Horizontal push only, floor snap
        const safePush = pushDir.clone();
        safePush.y = 0;
        
        // Jefes finales no tienen retroceso
        const isBoss = (this.type === EnemyType.BOSS_GOLIATH || this.type === EnemyType.BOSS_SENTINEL || this.type === EnemyType.BOSS_FINAL_ROBOT);
        if (!isBoss) {
            this.mesh.position.add(safePush);
        }
        
        this.mesh.position.y = 0;

        if (this.health <= 0) {
            this.die();
        }
    }

    die(fromNetwork: boolean = false) {
        this.isDead = true;
        if (!fromNetwork) {
            // Only give coins + emit kill to server when killed locally
            playerCoins += ENEMY_DATA[this.type].reward;
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
        
        // Efecto visual de fuego para ZOMBIE_ON_FIRE
        if (this.type === EnemyType.ZOMBIE_ON_FIRE) {
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

        if (this.type === EnemyType.ROBOT || this.type === EnemyType.BOSS_SENTINEL) {
            // LÓGICA DE ATAQUE A DISTANCIA: Apuntar directamente a la altura de la cámara del jugador
            const spawnPos = this.mesh.position.clone();
            spawnPos.y += 1.5 * ENEMY_DATA[this.type].size; // disparar desde el "ojo" del robot
            // Apuntar a la posición real de la cámara en el mundo (incluye altura al volar)
            const targetPos = camera.position.clone();
            const dir = new THREE.Vector3().subVectors(targetPos, spawnPos).normalize();
            const laser = new Laser(spawnPos, dir, ENEMY_DATA[this.type].name); // Pasar el nombre del tirador
            enemyProjectiles.push(laser);
            soundManager.playBeep();
        } else {
            // LÓGICA DE ATAQUE CUERPO A CUERPO
            lastAttackerName = ENEMY_DATA[this.type].name; // Establecer nombre del atacante
            
            if (this.type === EnemyType.ZOMBIE_ON_FIRE) {
                playerFireDebuff = 3.0; // Aplica debuff de quemadura de 3 segundos
            }
            
            takeDamage(this.damage); // Usar función global de daño
            soundManager.playGroan();

            const flash = document.createElement('div');
            flash.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(255,0,0,0.3);pointer-events:none;z-index:100;';
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 100);
        }
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
    maxWaves: number = 10; // Reducido a 10 oleadas
    isGameOver: boolean = false;
    isNetworkClient: boolean = false; // set to true if multiplayer and NOT host
    syncTimer: number = 0;

    startNextWave() {
        if (this.currentWave >= this.maxWaves) return;

        this.isBreak = false;
        soundManager.startGameMusic();
        this.currentWave++;

        // SPANW WEAPON DROPS
        this.spawnWeaponDrop(this.currentWave);

        if (this.currentWave === this.maxWaves) {
            // Stage Final: El Jefe
            this.enemiesToSpawn = 1;
            this.spawnRate = 3000;
        } else {
            this.enemiesToSpawn = 6 + (this.currentWave * 4); // 10, 14, 18, 22...
            this.spawnRate = Math.max(400, 2000 - (this.currentWave * 120));
        }

        // Esconder pantalla de WAVE COMPLETE
        const wc = document.getElementById('wave-complete');
        if (wc) wc.style.display = 'none';

        if (enemiesEl) enemiesEl.innerText = this.enemiesToSpawn.toString();
        if (hordeEl) hordeEl.innerText = `Enemies: 0 (To Spawn: ${this.enemiesToSpawn})`;
        if (stageEl) {
            stageEl.innerText = `WAVE ${this.currentWave}`;
            if (this.currentWave === this.maxWaves) {
                stageEl.innerText = "FINAL WAVE: BOSS";
                stageEl.style.color = '#ff0000';
            } else {
                stageEl.style.color = '#ff3333';
            }
        }
    }

    spawnWeaponDrop(wave: number) {
        if (wave === 1) {
            // Wave 1: Laser Gun (Index 1) celeste (eliminado jetpack duplicado verde)
            activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(-15, 0, -10), 1, 'weapon', 0x00ffff));
        } else if (wave === 2) {
            // Wave 2: Rocket Launcher (Index 2) rojo
            activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(20, 0, -25), 2, 'weapon', 0xff0000));
        } else if (wave === 3) {
            // Wave 3: Mini Gun (Index 3) amarillo
            activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(-5, 0, -35), 3, 'weapon', 0xffff00));
        } else if (wave === 4) {
            // Wave 4: Fire Gun (Index 4) naranja
            activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(-20, 0, -45), 4, 'weapon', 0xffaa00));
        } else if (wave >= 5) {
            // Higher waves: drop ammo & fuel refills
            activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(-5, 0, 10), 0, 'ammo', 0xaaaaaa));
            if (hasJetpack) {
                activeWeaponDrops.push(new WeaponDrop(new THREE.Vector3(5, 0, 10), 0, 'fuel', 0xaa00ff));
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

        if (this.currentWave === this.maxWaves) {
            this.victory();
            return;
        }

        // Host drives wave transitions for all players
        if (isMultiplayer && isHost && socket?.connected) {
            socket.emit('wave-complete', { wave: this.currentWave });
        }

        const wc = document.getElementById('wave-complete');
        const wcWave = document.getElementById('wc-wave');
        if (wc) wc.style.display = 'flex';
        if (wcWave) wcWave.innerText = `WAVE ${this.currentWave} COMPLETE!`;

        setTimeout(() => {
            if (wc) wc.style.display = 'none';
            openShop();
        }, 1500);

        if (stageEl) stageEl.innerText = `RESTORING...`;
    }

    victory() {
        if (this.isGameOver) return;
        this.isGameOver = true;
        
        // El host le avisa al resto de la partida que ya terminaron (ganaron)
        if (isMultiplayer && isHost && socket?.connected) {
            socket.emit('game-victory');
        }

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
        if (playerHealth > 0) allPlayers.push(playerPos);

        if (isMultiplayer && isHost) {
            // Solo los jugadores remotos vivos (en remotePlayers) son objetivos válidos
            remotePlayers.forEach(rp => {
                allPlayers.push(rp.group.position);
            });
        }

        // Si no hay jugadores vivos, los enemigos se quedan quietos
        if (allPlayers.length === 0) return;

        for (let i = this.activeEnemies.length - 1; i >= 0; i--) {
            const en = this.activeEnemies[i];
            
            let closestPos = playerPos;
            let targetIsLocal = true;
            if (isMultiplayer && isHost && allPlayers.length > 1) {
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
            hordeEl.innerText = `Enemies: ${this.enemiesAlive} (To Spawn: ${this.enemiesToSpawn})`;
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
        // Non-host clients don't self-spawn - they receive spawn commands from host
        if (this.isNetworkClient) return;

        if (this.enemiesToSpawn <= 0) return;

        let type = EnemyType.STANDARD;
        const r = Math.random();

        if (this.currentWave === this.maxWaves) { // Wave 10
            type = EnemyType.BOSS_FINAL_ROBOT;
        } else if (this.currentWave === 9) {
            // Wave 9: Zombis en fuego y rápidos
            if (r > 0.4) type = EnemyType.ZOMBIE_ON_FIRE;
            else if (r > 0.2) type = EnemyType.FAST;
            else type = EnemyType.ROBOT;
        } else if (this.currentWave === 8) {
            // Wave 8: Robots gigante (Sentinel)
            if (r > 0.6) type = EnemyType.BOSS_SENTINEL;
            else if (r > 0.3) type = EnemyType.ROBOT;
            else type = EnemyType.TANK;
        } else if (this.currentWave === 5 || this.currentWave === 6) {
            // Wave 5 & 6: Zombis gigantes (Goliath)
            if (r > 0.7) type = EnemyType.BOSS_GOLIATH;
            else if (r > 0.4) type = EnemyType.TANK;
            else type = EnemyType.STANDARD;
        } else if (this.currentWave === 7) {
            if (r > 0.6) type = EnemyType.ROBOT;
            else if (r > 0.3) type = EnemyType.FAST;
            else type = EnemyType.STANDARD;
        } else if (this.currentWave >= 3) {
            // Wave 3-4: Introduce robots y zombies grandes
            if (r > 0.7) type = EnemyType.ROBOT;
            else if (r > 0.5) type = EnemyType.TANK;
            else type = EnemyType.STANDARD;
        } else if (this.currentWave === 2) {
            if (r > 0.7) type = EnemyType.FAST;
            else if (r > 0.5) type = EnemyType.HUMANOID;
            else type = EnemyType.STANDARD;
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
        soundManager.bgAudio.volume = masterVolume * musicVolume;
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

linkSliderAndInput('opt-master-vol', 'opt-master-vol-val', (v) => {
    masterVolume = v / 100;
    applyVolumes();
});

linkSliderAndInput('opt-music-vol', 'opt-music-vol-val', (v) => {
    musicVolume = v / 100;
    applyVolumes();
});

linkSliderAndInput('opt-sfx-vol', 'opt-sfx-vol-val', (v) => {
    sfxVolume = v / 100;
    applyVolumes();
});

// --- Sensitivity ---
linkSliderAndInput('opt-sensitivity', 'opt-sensitivity-val', (v) => {
    (controls as any).pointerSpeed = v / 100;
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

// ==== CONTROLES TÁCTILES VIRTUALES (MÓVIL) ==== //

// Función auxiliar acortada para recuperar elementos del DOM
const getEl = (id: string) => document.getElementById(id);

// 1. Botones de Acción (Salto/Jetpack, Recarga, Disparo)
getEl('btn-mobile-jump')?.addEventListener('touchstart', (e) => {
    e.preventDefault();
    // Maneja el salto o el uso del jetpack al tocar el botón de salto.
    // Si el jugador no tiene jetpack y tiene suficiente resistencia, realiza un salto normal.
    // Si el jugador tiene jetpack, activa el modo jetpack.
    if (camera.position.y <= 1.61 && playerStamina > 15 && !hasJetpack) {
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
            depthTest: false,
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

                // Muere si toca el suelo O si se le acaba el tiempo
                if (this.positions[i * 3 + 1] <= 0.05 || this.lifetimes[i] <= 0) {
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
            if (camera.position.y <= 1.61 && playerStamina > 15 && !hasJetpack) {
                velocity.y += 20; // Salto más lento y flotante
                playerStamina -= 15;
                updateStatsHUD();
            } else if (hasJetpack) {
                isJetpacking = true;
            }
            break;
        case 'ShiftLeft': case 'ShiftRight': isSprinting = true; break;
        case 'KeyR': reloadWeapon(); break;
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
        [document.getElementById(`buy-${item.id}`), document.getElementById(`mb-buy-${item.id}`)].forEach(el => {
            if (el) playerCoins < cost ? el.classList.add('cant-afford') : el.classList.remove('cant-afford');
        });
    });
}

function tryBuy(itemKey: string) {
    const item = shopItems.find(i => i.id === itemKey);
    if (!item) return;
    if (playerCoins >= item.cost) {
        playerCoins -= item.cost;
        item.action();
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
        if (txt) txt.innerText = `READYING WAVE ${nextWaveNum}... ${progress}%`;
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
        if (fpsEl && gameStarted) fpsEl.innerText = frameCount.toString();
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
    } else if ((controls.isLocked === true || isMobile) && gameStarted && playerHealth > 0) {
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

        handleShooting(time);

        // Lógica de resistencia (Stamina)
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
        for (let i = 0; i < 4; i++) {
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
        for (let i = 0; i < 4; i++) {
            collisionRaycaster.set(new THREE.Vector3(camera.position.x, collisionY, camera.position.z), collisionDirections[i]);
            const hitPecho = collisionRaycaster.intersectObjects(playerCollidables, true).some(h => h.distance < 0.6);
            collisionRaycaster.set(new THREE.Vector3(camera.position.x, 0.5, camera.position.z), collisionDirections[i]);
            const hitPies = collisionRaycaster.intersectObjects(playerCollidables, true).some(h => h.distance < 0.6);
            
            if (hitPecho || hitPies) {
                camera.position.x = oldPosX; velocity.x = 0; break;
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

        if (!shopOpen && shopMarker) {
            shopMarker.rotation.y += delta * 2;
            shopMarker.position.y = 8 + Math.sin(time / 500) * 0.5;
        }
    }

    prevTime = time;
    renderer.render(inLobby3D ? lobbyScene : scene, inLobby3D ? lobbyCamera : camera);
}

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
