
const menuToggle = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});