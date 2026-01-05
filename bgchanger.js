// Function to set solid color
function setSolidColor(color) {
  document.body.style.backgroundColor = color;
  document.getElementById(
    "currentColor"
  ).textContent = `Current Color: ${color}`;
  localStorage.setItem("lastColor", color);
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

// Load last color on page load
window.addEventListener("load", function () {
  const lastColor = localStorage.getItem("lastColor") || "white";
  setSolidColor(lastColor);
});

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  const key = e.key;
  if (key >= "1" && key <= "8") {
    const colorIds = [
      "orange",
      "green",
      "blue",
      "yellow",
      "purple",
      "black",
      "pink",
      "gray",
    ];
    const index = parseInt(key) - 1;
    document.getElementById(colorIds[index]).click();
  } else if (key === "r" || key === "R") {
    document.getElementById("random").click();
  } else if (key === "Escape") {
    document.getElementById("reset").click();
  }
});

// Copy color to clipboard
document.getElementById("copyColor").addEventListener("click", function () {
  const color = document.body.style.backgroundColor;
  navigator.clipboard.writeText(color).then(() => {
    alert("Color copied to clipboard!");
  });
});
