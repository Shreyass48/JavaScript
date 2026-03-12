// Theme Switcher with localStorage
const themeSwitch = document.getElementById("themeSwitch");
const body = document.body;

// Check for saved theme in localStorage, default to 'light'
const savedTheme = localStorage.getItem("theme") || "light";

// Apply saved theme on page load
body.className = savedTheme;
themeSwitch.checked = savedTheme === "dark";

// Toggle theme when switch is clicked
themeSwitch.addEventListener("change", function () {
  if (this.checked) {
    body.className = "dark";
    localStorage.setItem("theme", "dark");
  } else {
    body.className = "light";
    localStorage.setItem("theme", "light");
  }
});
