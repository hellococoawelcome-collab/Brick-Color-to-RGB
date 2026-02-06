// Roblox BrickColor Database
const BrickColors = {
    'White': [242, 243, 243],
    'Grey': [161, 165, 162],
    'Bright red': [196, 40, 28],
    'Bright blue': [13, 105, 172],
    // Add all other colors here up to ID 1032
    // ...
};

// Function to get RGB values by BrickColor name
function getRGB(colorName) {
    return BrickColors[colorName] || null;
}

export { getRGB };