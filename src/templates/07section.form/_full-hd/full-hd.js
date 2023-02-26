import Icons from '../../../components/icons';
import { infoData, iconsData, formData } from '../form.Const';

const FullHD = () => {
  return(
    `<div class="form-div">`+
      infoData.map((item) => (
        `<${item.tag} class="${item.class}">${item.title}</${item.tag}>`
      )).join("")+
      iconsData.map((item) => (
        `<a href="${item.url}">`+
          Icons(`${item.class}`, `${item.icon}`)+
        `</a>`
      )).join("")+
      `<form class="form-form" method="post">`+
        formData.map((item) => (
          `<input 
            type="${item.type}" 
            class="${item.class}"
            autocomplite="off"
            ${(item.type == 'text') ? `id="${item.id}" placeholder="${item.placeholder}"` :  
              (item.type == 'button') ? `id="${item.id}" value="${item.placeholder}"` : 
              (item.type == 'checkbox') ? `id="${item.id}"` : ""} 
          >`+
          `${(item.type == 'checkbox') ? `<label for="${item.id}" >${item.placeholder}</label>` : ""}`
        )).join("")+
        formData.map((item) => (
          (item.type == 'text') ? `<label for="${item.id}"></label>` : ""
        )).join("")+
      `</form>`+
    `</div>`
  )
}

export default FullHD;