function show(){
  const input = nameInput.value.trim();
  resultDiv.innerHTML = "";

  if (!input) {
    preview.style.background = "transparent";
    return;
  }

  const c = findBrick(input);
  if (!c) {
    preview.style.background = "transparent";
    return;
  }

  preview.style.background = `rgb(${c.r},${c.g},${c.b})`;

  let text = "";

  if (modeSel.value === "rgb") {
    text = `${c.r}, ${c.g}, ${c.b}`;
  }
  else if (modeSel.value === "hex") {
    text = rgbToHex(c.r,c.g,c.b);
  }
  else if (modeSel.value === "hsv") {
    const hsv = rgbToHsv(c.r,c.g,c.b);
    text = `${hsv.h}, ${hsv.s}, ${hsv.v}`;
  }
  else if (modeSel.value === "rgb01") {
    const r = (c.r/255).toFixed(3);
    const g = (c.g/255).toFixed(3);
    const b = (c.b/255).toFixed(3);
    text = `${r}, ${g}, ${b}`;
  }

  const div = document.createElement("div");
  div.className = "out";

  const code = document.createElement("code");
  code.textContent = text;

  const btn = document.createElement("button");
  btn.textContent = "Copy";
  btn.onclick = () => navigator.clipboard.writeText(text);

  div.appendChild(code);
  div.appendChild(btn);
  resultDiv.appendChild(div);
}
