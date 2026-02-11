// Menú móvil
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("nav__toggle--open");
    navLinks.classList.toggle("nav__links--open");
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
      navToggle.classList.remove("nav__toggle--open");
      navLinks.classList.remove("nav__links--open");
    }
  });
}

// Año dinámico en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}

// Scroll suave para los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

