// loader.js

// Este script es para ocultar el loader cuando la página termina de cargar
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.style.display = 'none';
    }
  });
  