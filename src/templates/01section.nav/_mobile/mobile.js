import Icons from '../../../components/icons';
import { navData } from '../nav.Const';

const Mobile = () => {
  return(
    `<div class="nav-icon">`+
      Icons('class="nav-icon__logo"', 'logo')+
      `<h4 class="nav-icon__h4">Меню</h4>`+
      `<span id="nav-modal">`+
        Icons('class="nav-icon__item burger"', 'burger')+
        Icons('class="nav-icon__item close"', 'close')+
      `</span>`+
    `</div>`+
    `<nav class="nav-nav">`+
      navData.map((item) => (
        `<a class="${item.class}" href="#${item.url}">${item.title}</a>`
      )).join("")+
      `<a href="https://vk.com/growtask">${Icons('class="nav-nav__vk"', 'vk')}</a>`+
      `<a href="https://t.me/growtask">${Icons('class="nav-nav__telegram"', 'telegram')}</a>`+
    `</nav>`
  )
}

export default Mobile;