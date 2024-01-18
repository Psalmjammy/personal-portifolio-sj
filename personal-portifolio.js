const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('navMenu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navMenu.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navMenu.classList.remove('active');
    menuOpen = false;
  }
});
