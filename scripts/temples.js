// FOOTER DATES
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = document.getElementById("currentyear");
  const lastModified = document.getElementById("lastModified");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }

  // HAMBURGER MENU
  const menuButton = document.getElementById("menu-button");
  const navMenu = document.querySelector(".nav-menu");

  menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");
    menuButton.textContent = isOpen ? "✖" : "☰"; // Change icon
  });
});
