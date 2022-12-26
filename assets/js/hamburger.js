let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav-collapse');

const toggleMenu = () => {
  menu.classList.toggle('is-active');
  hamburger.classList.toggle('is-active');
}

hamburger.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_menu = target == menu || menu.contains(target);
  let its_hamburger = target == hamburger;
  let menu_is_active = menu.classList.contains('is-active');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});