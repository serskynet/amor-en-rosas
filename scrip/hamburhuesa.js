// hamburguesa.js

// Este script es para manejar el menú móvil
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('active');
  }
}

// Opcional: también puedes cerrar el menú al hacer click en un enlace
const mobileLinks = document.querySelectorAll('#mobileMenu a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
    }
  });
});
