import { leftData, rightData } from '../textPictures.Const';

const Tablet = () => {
  return(
    `<div class="textPictures-left">`+
      leftData.map((item) => (
        `<${item.tag} class="${item.class}">${item.title}</${item.tag}>`
      )).join("")+
    `</div>`+
    `<div class="textPictures-right">`+
      `<div class="textPictures-right__container">`+
        rightData.map((item) => (
            `<img src="${require(`../../../static/img/general/textPictures/${item.url}`)}" class="${item.class}"/>`
          )).join("")+
      `</div>`+
    `</div>`
  )
}

export default Tablet;
  
