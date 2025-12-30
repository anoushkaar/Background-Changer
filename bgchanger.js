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

// Function to set gradient
function setGradient(gradient) {
  document.body.style.background = gradient;
  document.body.style.backgroundColor = "";
  updateColorDisplay("Gradient");
  localStorage.setItem("lastColor", gradient);
}

// Solid color buttons
const colors = {
  orange: "orange",
  green: "green",
  blue: "blue",
  yellow: "yellow",
  purple: "purple",
  black: "black",
  pink: "pink"
};

for (const [id, color] of Object.entries(colors)) {
  document.getElementById(id).addEventListener("click", function () {
    setSolidColor(color);
  });
}

// Gradient buttons
const gradients = {
  gradient1: "linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #ff6b6b 100%)", // Sunset
  gradient2: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #00d2ff 100%)", // Ocean
  gradient3: "linear-gradient(135deg, #56ab2f 0%, #a8e063 50%, #2f8f21 100%)", // Forest
  gradient4: "linear-gradient(135deg, #43e97b 0%, #38f9d7 50%, #b721ff 100%)"  // Aurora
};

for (const [id, gradient] of Object.entries(gradients)) {
  document.getElementById(id).addEventListener("click", function () {
    setGradient(gradient);
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
  if (lastColor) {
    if (lastColor.includes("gradient")) {
      setGradient(lastColor);
    } else {
      setSolidColor(lastColor);
    }
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