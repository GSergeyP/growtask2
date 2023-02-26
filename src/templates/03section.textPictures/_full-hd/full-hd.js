import { leftData, rightData } from '../textPictures.Const';

const FullHD = () => {
  return(
    `<div class="textPictures-left">`+
      leftData.map((item) => (
        `<${item.tag} class="${item.class}">${item.title}</${item.tag}>`
      )).join("")+
    `</div>`+
    `<div class="textPictures-right">`+
      rightData.map((item) => (
          `<img src="${require(`../../../static/img/general/textPictures/${item.url}`)}" class="${item.class}"/>`
        )).join("")+
    `</div>`
  )
}

export default FullHD;