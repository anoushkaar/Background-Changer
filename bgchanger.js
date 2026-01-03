// Function to set solid color
function setSolidColor(color) {
  document.body.style.backgroundColor = color;
  document.getElementById(
    "currentColor"
  ).textContent = `Current Color: ${color}`;
}

// Solid color buttons
const colors = {
  orange: "orange",
  green: "green",
  blue: "blue",
  yellow: "yellow",
  purple: "purple",
  black: "black",
  pink: "pink",
  gray: "gray",
};

for (const [id, color] of Object.entries(colors)) {
  document.getElementById(id).addEventListener("click", function () {
    setSolidColor(color);
  });
}

// Random color button
document.getElementById("random").addEventListener("click", function () {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  setSolidColor(randomColor);
});

// Reset button
document.getElementById("reset").addEventListener("click", function () {
  setSolidColor("white");
});

// Custom color picker
document.getElementById("colorPicker").addEventListener("input", function (e) {
  setSolidColor(e.target.value);
});
