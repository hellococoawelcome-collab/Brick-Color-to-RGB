const BrickColorDatabase = {
    "White": { rgb: [255, 255, 255], hex: "#FFFFFF", hsv: [0, 0, 100] },
    "Black": { rgb: [0, 0, 0], hex: "#000000", hsv: [0, 0, 0] },
    "Bright red": { rgb: [255, 0, 0], hex: "#FF0000", hsv: [0, 100, 100] },
    "Bright blue": { rgb: [0, 0, 255], hex: "#0000FF", hsv: [240, 100, 100] },
    "Bright green": { rgb: [0, 255, 0], hex: "#00FF00", hsv: [120, 100, 100] },
    // Add additional colors...
};

function rgbToHex(rgb) {
    return `#${((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1).toUpperCase()}`;
}

function rgbToHsv(rgb) {
    let r = rgb[0] / 255, g = rgb[1] / 255, b = rgb[2] / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;
    let d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max === min) {
        h = 0; // achromatic
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(v * 100)];
}

module.exports = { BrickColorDatabase, rgbToHex, rgbToHsv };