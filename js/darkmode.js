const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }

  // Verifica se a página já foi totalmente carregada antes de aplicar o tema
  if (document.readyState === "complete") {
    document.body.style.visibility = "visible";
  } else {
    document.addEventListener("DOMContentLoaded", function() {
      document.body.style.visibility = "visible";
    });
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Salva ou remove o tema do localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
