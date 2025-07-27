// Mostrar/ocultar menú lateral
function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
}

// Animación de contenido al cargar
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-in").forEach(el => {
    setTimeout(() => {
      el.classList.add("visible");
    }, 300);
  });
});
