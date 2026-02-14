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

  // 汎用分離表示関数
  function createGrid(labels, values, colors){
    const wrapper = document.createElement("div");
    wrapper.className = "rgb-grid";

    labels.forEach((label, i) => {
      const box = document.createElement("div");
      box.className = "rgb-box";

      const l = document.createElement("span");
      l.className = "rgb-label";
      l.textContent = label;

      const num = document.createElement("span");
      num.className = "rgb-value";
      num.textContent = values[i];

      if(colors) num.style.color = colors[i];

      box.appendChild(l);
      box.appendChild(num);
      wrapper.appendChild(box);
    });

    resultDiv.appendChild(wrapper);
  }

  if (modeSel.value === "rgb") {
    createGrid(
      ["R","G","B"],
      [c.r, c.g, c.b],
      ["#ff4d4d","#4dff88","#4da6ff"]
    );
  }

  else if (modeSel.value === "rgb01") {
    createGrid(
      ["R","G","B"],
      [
        (c.r/255).toFixed(3),
        (c.g/255).toFixed(3),
        (c.b/255).toFixed(3)
      ],
      ["#ff4d4d","#4dff88","#4da6ff"]
    );
  }

  else if (modeSel.value === "hsv" || modeSel.value === "hsb") {
    const hsv = rgbToHsv(c.r,c.g,c.b);
    createGrid(
      ["H","S","V"],
      [hsv.h, hsv.s, hsv.v],
      ["#ffaa00","#00ffaa","#00aaff"]
    );
  }

  else if (modeSel.value === "hex") {
    const text = rgbToHex(c.r,c.g,c.b);

    const div = document.createElement("div");
    div.className = "out";

    const code = document.createElement("code");
    code.textContent = text;

    div.appendChild(code);
    resultDiv.appendChild(div);
  }
}
