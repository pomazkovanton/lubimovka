// Открытие / Закрытие меню
const openMenu = (menu, openIcon, closeIcon) => {
  openIcon.classList.toggle('header__nav-ico-menu_show');
  closeIcon.classList.toggle('header__nav-ico-cross_show');
  menu.classList.toggle('header__nav_opened');
};

export default openMenu;
