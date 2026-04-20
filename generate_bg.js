const fs = require('fs');

const width = 1920;
const height = 1080;

function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Generates a low-poly gem or trophy geometry
function generatePolygon(cx, cy, radius, sides, colorBase, pointiness) {
    let points = [];
    const angleStep = (Math.PI * 2) / sides;
    for (let i = 0; i < sides; i++) {
        const a = i * angleStep;
        let r = radius;
        if (i % 2 !== 0) r = radius * pointiness;
        r += randomRange(-radius * 0.1, radius * 0.1);
        const px = cx + Math.cos(a) * r;
        const py = cy + Math.sin(a) * r;
        points.push(`${px},${py}`);
    }
    
    // Slight random color variations
    const lightnessOffset = randomRange(-15, 15);
    // HSL parsed via regex is hard, we'll just inject random opacity on top
    
    return `<polygon points="${points.join(' ')}" fill="${colorBase}" stroke="rgba(0,0,0,0.5)" stroke-width="2" transform="rotate(${randomRange(0,360)} ${cx} ${cy})" opacity="${randomRange(0.4, 0.8)}" />`;
}

// Generates a multifaceted low poly gem
function generateGem(cx, cy, size, hue) {
    let svg = '';
    const topNode = `${cx},${cy - size}`;
    const bottomNode = `${cx},${cy + size}`;
    const leftNode = `${cx - size*0.7},${cy}`;
    const rightNode = `${cx + size*0.7},${cy}`;
    const c1 = `${cx - size*0.4},${cy - size*0.4}`;
    const c2 = `${cx + size*0.4},${cy - size*0.4}`;

    svg += `<polygon points="${leftNode} ${c1} ${topNode}" fill="hsl(${hue}, 80%, 30%)" opacity="0.7"/>`;
    svg += `<polygon points="${topNode} ${c2} ${rightNode}" fill="hsl(${hue}, 80%, 40%)" opacity="0.7"/>`;
    svg += `<polygon points="${leftNode} ${bottomNode} ${rightNode} ${c2} ${c1}" fill="hsl(${hue}, 80%, 20%)" opacity="0.6"/>`;
    svg += `<polygon points="${leftNode} ${c1} ${cx},${cy} ${bottomNode}" fill="hsl(${hue}, 90%, 15%)" opacity="0.8"/>`;
    svg += `<polygon points="${rightNode} ${c2} ${cx},${cy} ${bottomNode}" fill="hsl(${hue}, 90%, 25%)" opacity="0.8"/>`;
    
    return `<g transform="rotate(${randomRange(0, 360)} ${cx} ${cy}) scale(${randomRange(0.8, 1.3)})">${svg}</g>`;
}

// Generate multifaceted trophy
function generateTrophy(cx, cy, size) {
    let svg = '';
    const color = "hsl(45, 90%, 40%)";
    const dark = "hsl(45, 90%, 20%)";
    const light = "hsl(45, 90%, 50%)";

    svg += `<polygon points="${cx - size*0.4},${cy - size} ${cx + size*0.4},${cy - size} ${cx},${cy}" fill="${color}" opacity="0.6"/>`;
    svg += `<polygon points="${cx - size*0.4},${cy - size} ${cx},${cy - size + size*0.2} ${cx},${cy}" fill="${light}" opacity="0.5"/>`;
    // Base
    svg += `<polygon points="${cx},${cy} ${cx - size*0.3},${cy + size*0.6} ${cx + size*0.3},${cy + size*0.6}" fill="${dark}" opacity="0.6"/>`;

    return `<g transform="rotate(${randomRange(-20, 20)} ${cx} ${cy}) scale(${randomRange(0.6, 1.2)})">${svg}</g>`;
}

let svgData = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">\n`;
svgData += `<defs>
<radialGradient id="bgGrad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
  <stop offset="0%" stop-color="#1a0000" />
  <stop offset="100%" stop-color="#050000" />
</radialGradient>
</defs>\n`;

svgData += `<rect width="100%" height="100%" fill="url(#bgGrad)" />\n`;

// Generate background jewels (Red tones)
for (let i = 0; i < 60; i++) {
    const cx = randomRange(0, width);
    const cy = randomRange(0, height);
    const size = randomRange(20, 80);
    svgData += generateGem(cx, cy, size, randomRange(0, 15)); // Reddish
}

for (let i = 0; i < 40; i++) {
    const cx = randomRange(0, width);
    const cy = randomRange(0, height);
    const size = randomRange(10, 50);
    svgData += generatePolygon(cx, cy, size, Math.floor(randomRange(5, 8)), `hsl(0, 0%, ${randomRange(10, 30)}%)`, randomRange(0.6, 0.9)); // Dark rocks
}

for (let i = 0; i < 25; i++) {
    const cx = randomRange(0, width);
    const cy = randomRange(0, height);
    const size = randomRange(40, 100);
    svgData += generateTrophy(cx, cy, size); // Golden trophies
}

// Foreground fog/vignette to ensure readability
svgData += `<rect width="100%" height="100%" fill="black" opacity="0.6" />\n`;
svgData += `<rect width="100%" height="100%" fill="radial-gradient(circle, transparent 20%, black 100%)" opacity="0.8" />\n`;

svgData += `</svg>`;

fs.writeFileSync('public/ach_bg.svg', svgData);
console.log('Background generated successfully!');
