# English Readme

# 🎨 Brick Color Converter

A web tool for converting Roblox BrickColor to RGB, RGB (0–1), HEX, or HSV (HSB).

Why not give it a try?

[![Button](https://img.shields.io/badge/Press_this-Black?style=flat)](https://cocoawebsoftware.github.io/Brick-Color-to-RGB/)

Press this button to go to the conversion tool page.
*This tool was developed for Roblox players.

---

## Features

- RGB Conversion
- RGB (0–1) Conversion
- HEX Conversion
- HSV/HSB Conversion (Unified Display)
- One-click Copy
- Color Preview

---

## 📄 BrickColor.txt
This txt file contains the RGB equivalents for almost all Roblox colors.
This RGB is converted to HSV (HSB) and HEX.
Data Reading Method
Name ID RGB RGB(0-1)
[Example: White 1 242,243,243 0.950,0.953,0.953]
The format is space-separated.
* Names can contain multiple words.
* RGB is `number, number, number`.

---
## 🚀 How to Use

1. Click [![Button](https://img.shields.io/badge/Press_this-Black?style=flat)](https://cocoawebsoftware.github.io/Brick-Color-to-RGB/) to jump to the page.
2. Enter the BrickColor name.
3. Select the conversion format.
4. Copy with the Copy button.

Example: Bright red

---

## A Brief Explanation 🧠 About HSV

HSV and HSB have the same structure.

360° = the same color as 0°.

---

## Development Notes

- Data is loaded using fetch("./BrickColor.txt")
- RGB is loaded using regular expressions.
- HSV is generated internally.

---
## Credits
Creator: cocoawebsoftware

---
## 📜 License
MIT
