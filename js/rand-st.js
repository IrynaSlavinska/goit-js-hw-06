const colors = [
  "LightCyan",
  "PaleTurquoise",
  "Aquamarine",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "CadetBlue",
  "SteelBlue",
  "LightSteelBlue",
  "MediumSlateBlue",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
];

const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];

document.body.style.backgroundColor = color;

// index styles
const indexStyleUl = document.querySelector("ul");
indexStyleUl.classList = "container list";
const indexStyleLi = indexStyleUl.children;
