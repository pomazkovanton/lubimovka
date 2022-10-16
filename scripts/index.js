import {
  buttonMenu, menu, iconOpenMenu, iconCloseMenu,
} from './variables';
import openMenu from './menu';

const handleOpenMenu = () => {
  openMenu(menu, iconOpenMenu, iconCloseMenu);
};

// Обработчики событий
buttonMenu.addEventListener('click', handleOpenMenu);
