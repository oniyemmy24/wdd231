const menuButton = document.getElementById('menu');
const navMenu = document.getElementById('navMenu');


menuButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuButton.classList.toggle('open');
});
