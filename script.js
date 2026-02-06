// Comprehensive Roblox BrickColor Database and Conversion Functions

// Define a BrickColor database
const BrickColorDatabase = {
    'BrickColor1': { R: 255, G: 0, B: 0 }, // Red
    'BrickColor2': { R: 0, G: 255, B: 0 }, // Green
    'BrickColor3': { R: 0, G: 0, B: 255 }, // Blue
    // Add more BrickColor mappings here
};

// Function to convert BrickColor to RGB
function BrickColorToRGB(brickColor) {
    if (BrickColorDatabase[brickColor]) {
        return BrickColorDatabase[brickColor];
    } else {
        throw new Error('Invalid BrickColor');
    }
}

// Function to convert RGB to BrickColor
function RGBToBrickColor(r, g, b) {
    for (const [key, value] of Object.entries(BrickColorDatabase)) {
        if (value.R === r && value.G === g && value.B === b) {
            return key;
        }
    }
    throw new Error('No matching BrickColor found for this RGB value');
}

// Example Usage
try {
    const rgb = BrickColorToRGB('BrickColor1');
    console.log(rgb); // { R: 255, G: 0, B: 0 }
} catch (error) {
    console.error(error);
}

try {
    const brickColor = RGBToBrickColor(255, 0, 0);
    console.log(brickColor); // BrickColor1
} catch (error) {
    console.error(error);
}