import { leftData, rightData } from '../info.Const';

const FullHD = () => {
  return(
    `<div class="info-left">`+
      leftData.map((item) => (
        `<${item.tag} ${item.url ? `href="#${item.url}"` : ""} class="${item.class}">${item.title}</${item.tag}>`
      )).join("")+
    `</div>`+
    `<div class="info-right">`+
    rightData.map((item) => (
        `<img src="${require(`../../../static/img/general/info/${item.url}`)}" class="${item.class}"/>`
      )).join("")+
    `</div>`
  )
}

export default FullHD;