import { leftData, rightData } from '../info.Const';

const Mobile = () => {
  return(
    leftData.map((item) => (
      `<${item.tag} ${item.url ? `href="#${item.url}"` : ""} class="${item.class}">${item.title}</${item.tag}>`
    )).join("")+
    rightData.map((item) => (
      `<img src="${require(`../../../static/img/general/info/${item.url}`)}" class="${item.class}"/>`
    )).join("")
  )
}

export default Mobile;