import Icons from '../../../components/icons';
import { navData } from '../nav.Const';

const HD = () => {
  return(
    `<div class="nav-icon">`+
      `<div class="nav-icon__item">`+
        Icons('class="nav-icon__item-icon"', 'logo')+
        `<a href="#top"><h4>Наверх</h4></a>`+
      `</div>`+
    `</div>`+
    `<nav class="nav-nav">`+
      navData.map((item) => (
        `<a class="${item.class}" href="#${item.url}">${item.title}</a>`
      )).join("")+
    `</nav>`
  )
}

export default HD;