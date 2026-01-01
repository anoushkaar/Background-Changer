// Function to update color display
function updateColorDisplay(color) {
  const display = document.getElementById("colorDisplay");
  display.textContent = `Current Color: ${color}`;
  // Save to localStorage
  localStorage.setItem("lastColor", color);
}

// Function to set solid color
function setSolidColor(color) {
  document.body.style.background = color;
  document.body.style.backgroundColor = color;
  updateColorDisplay(color);
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
  gray: "gray"
};

for (const [id, color] of Object.entries(colors)) {
  document.getElementById(id).addEventListener("click", function () {
    setSolidColor(color);
  });
}

// Random color button
document.getElementById("random").addEventListener("click", function () {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  setSolidColor(randomColor);
});

// Custom color picker
document.getElementById("colorPicker").addEventListener("input", function (e) {
  setSolidColor(e.target.value);
});

// Reset button
document.getElementById("reset").addEventListener("click", function () {
  setSolidColor("whitesmoke");
});

// Load last color from localStorage on page load
window.addEventListener("load", function () {
  const lastColor = localStorage.getItem("lastColor");
  const fallbackColor = "whitesmoke";
  if (lastColor && !lastColor.includes("gradient")) {
    setSolidColor(lastColor);
  } else {
    setSolidColor(fallbackColor);
  }
});

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (e.key === "r" || e.key === "R") {
    document.getElementById("random").click();
  } else if (e.key === "Escape") {
    document.getElementById("reset").click();
  }
});