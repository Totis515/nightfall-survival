const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'public');

const getBaseSVG = (iconPath, extraDefs = '') => `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="goldTop" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#FFD700" /><stop offset="100%" stop-color="#B8860B" /></linearGradient>
    <linearGradient id="goldLeft" x1="100%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#DAA520" /><stop offset="100%" stop-color="#8B6508" /></linearGradient>
    <linearGradient id="goldRight" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FFEC8B" /><stop offset="100%" stop-color="#CD9B1D" /></linearGradient>
    <linearGradient id="goldBottom" x1="50%" y1="100%" x2="50%" y2="0%"><stop offset="0%" stop-color="#8B6508" /><stop offset="100%" stop-color="#FFD700" /></linearGradient>
    <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#ff3333"/><stop offset="100%" stop-color="#660000"/></linearGradient>
    <linearGradient id="redGlow" x1="50%" y1="50%" r="50%"><stop offset="0%" stop-color="#ff0000" stop-opacity="0.8"/><stop offset="100%" stop-color="#000000" stop-opacity="0"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#000" flood-opacity="0.8"/></filter>
    <filter id="iconShadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#2a0000" flood-opacity="0.9"/></filter>
    ${extraDefs}
  </defs>

  <g filter="url(#shadow)">
    <!-- Hexagon Low-poly background -->
    <polygon points="50,5 95,28 50,50" fill="url(#goldTop)" stroke="#B8860B" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="5,28 50,5 50,50" fill="url(#goldLeft)" stroke="#DAA520" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="95,28 95,72 50,50" fill="url(#goldRight)" stroke="#FFEC8B" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="5,72 5,28 50,50" fill="#B8860B" stroke="#CD9B1D" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="5,72 50,50 50,95" fill="url(#goldBottom)" stroke="#8B6508" stroke-width="1.5" stroke-linejoin="round"/>
    <polygon points="50,95 50,50 95,72" fill="#DAA520" stroke="#B8860B" stroke-width="1.5" stroke-linejoin="round"/>
  </g>

  <!-- Glowing aura -->
  <circle cx="50" cy="50" r="30" fill="url(#redGlow)" opacity="0.6" />

  <!-- 3D Poly Emblem -->
  <g filter="url(#iconShadow)">
    ${iconPath}
  </g>
</svg>
`;

const svgs = {
    'ach_blood.svg': getBaseSVG(`
        <!-- Low poly blood drop -->
        <polygon points="50,22 65,55 50,75" fill="url(#redGradient)"/>
        <polygon points="50,22 35,55 50,75" fill="#aa0000"/>
        <polygon points="35,55 50,75 40,65" fill="#660000"/>
        <polygon points="65,55 50,75 55,60" fill="#ff6666"/>
    `),
    'ach_slayer.svg': getBaseSVG(`
        <!-- Low poly skull -->
        <polygon points="35,30 65,30 50,50" fill="url(#redGradient)"/>
        <polygon points="35,30 30,50 50,50" fill="#aa0000"/>
        <polygon points="65,30 70,50 50,50" fill="#ff6666"/>
        <polygon points="30,50 40,70 50,50" fill="#770000"/>
        <polygon points="70,50 60,70 50,50" fill="#aa0000"/>
        <polygon points="40,70 60,70 50,50" fill="#ff3333"/>
        <polygon points="45,70 55,70 50,80" fill="#440000"/>
    `),
    'ach_consumer.svg': getBaseSVG(`
        <!-- Low poly shopping cart / stash -->
        <polygon points="30,40 70,40 50,70" fill="url(#redGradient)"/>
        <polygon points="30,40 20,30 70,40" fill="#aa0000"/>
        <polygon points="70,40 80,50 50,70" fill="#ff6666"/>
        <polygon points="30,40 25,60 50,70" fill="#770000"/>
        <circle cx="35" cy="75" r="5" fill="#440000" />
        <circle cx="65" cy="75" r="5" fill="#440000" />
    `),
    'ach_forest.svg': getBaseSVG(`
        <!-- Low poly Pine Tree -->
        <polygon points="50,20 65,45 35,45" fill="url(#redGradient)"/>
        <polygon points="50,35 70,60 30,60" fill="#aa0000"/>
        <polygon points="45,60 55,60 55,80 45,80" fill="#552200"/>
    `),
    'ach_polar.svg': getBaseSVG(`
        <!-- Low poly Snowflake -->
        <polygon points="50,20 55,45 45,45" fill="url(#redGradient)"/>
        <polygon points="50,80 55,55 45,55" fill="#aa0000"/>
        <polygon points="20,50 45,45 45,55" fill="#ff6666"/>
        <polygon points="80,50 55,45 55,55" fill="#770000"/>
        <polygon points="30,30 45,45 50,50" fill="#bbbbbb"/>
        <polygon points="70,70 55,55 50,50" fill="#dddddd"/>
        <polygon points="30,70 45,55 50,50" fill="#aaaaaa"/>
        <polygon points="70,30 55,45 50,50" fill="#cccccc"/>
    `),
    'ach_lava.svg': getBaseSVG(`
        <!-- Low poly Volcano -->
        <polygon points="50,30 75,70 25,70" fill="#aa0000"/>
        <polygon points="40,30 50,50 60,30" fill="url(#redGradient)"/>
        <polygon points="50,20 55,10 45,15" fill="#ffaa00"/>
        <polygon points="40,15 35,5 45,10" fill="#ffdd00"/>
        <polygon points="60,15 65,5 55,10" fill="#ff3333"/>
    `),
    'ach_castle.svg': getBaseSVG(`
        <!-- Low poly Castle -->
        <polygon points="30,40 45,40 45,75 30,75" fill="#aa0000"/>
        <polygon points="55,40 70,40 70,75 55,75" fill="#770000"/>
        <polygon points="40,55 60,55 60,75 40,75" fill="url(#redGradient)"/>
        <polygon points="45,65 55,65 55,75 45,75" fill="#220000"/>
        <polygon points="25,40 37.5,25 50,40" fill="#ff6666"/>
        <polygon points="50,40 62.5,25 75,40" fill="#bb0000"/>
    `),
    'ach_shield.svg': getBaseSVG(`
        <!-- Low poly Shield (Untouchable) -->
        <polygon points="50,20 80,30 50,80" fill="url(#redGradient)"/>
        <polygon points="50,20 20,30 50,80" fill="#aa0000"/>
        <polygon points="50,30 70,38 50,70" fill="#ff6666"/>
        <polygon points="50,30 30,38 50,70" fill="#770000"/>
    `),
    'ach_headshot.svg': getBaseSVG(`
        <!-- Low poly Target/Crosshair (Headhunter) -->
        <path d="M50,15 L50,30 M50,70 L50,85 M15,50 L30,50 M70,50 L85,50" stroke="url(#redGradient)" stroke-width="4" stroke-linecap="round"/>
        <circle cx="50" cy="50" r="15" fill="none" stroke="#aa0000" stroke-width="4"/>
        <circle cx="50" cy="50" r="5" fill="#ff3333"/>
        <polygon points="50,40 60,50 50,60 40,50" fill="#660000"/>
    `),
    'ach_coins.svg': getBaseSVG(`
        <!-- Low poly Coin/Diamond -->
        <polygon points="50,25 75,50 50,75" fill="url(#redGradient)"/>
        <polygon points="50,25 25,50 50,75" fill="#aa0000"/>
        <polygon points="50,35 65,50 50,65" fill="#ffaa00"/>
        <polygon points="50,35 35,50 50,65" fill="#cc8800"/>
    `),
};

for(const [name, content] of Object.entries(svgs)){
    fs.writeFileSync(path.join(outDir, name), content.trim());
}
console.log('Successfully wrote 10 SVG icons.');
