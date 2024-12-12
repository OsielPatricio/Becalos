// Obtener los elementos del menú
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Agregar un event listener para el clic en el botón
menuToggle.addEventListener('click', () => {
    // Alternar la clase 'active' para mostrar/ocultar el menú
    navMenu.classList.toggle('active');
});
