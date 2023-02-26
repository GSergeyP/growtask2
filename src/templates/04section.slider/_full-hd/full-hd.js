import Icons from '../../../components/icons';

const FullHD = () => {
  let content = []; 

  for(let i = 0; i < 4; i++) {
    content.push(
      `<div class="slider-item" id="slider-item__${i}">`+
        `<p class="slider-item__title" id="slider-item__title-${i}"></p>`+
        `<span class="slider-item__span"></span>`+
      `</div>`
    )
  }
  return(
    `<h2 class="slider-h2">Сверстай слайдер</h2>`+
    Icons('class="slider-icon__prev"', 'mark')+
    Icons('class="slider-icon__next"', 'mark')+
    `<div class="slider-container">`+
      content.map((item) => (item)).join("")+
    `<div>`
  )
}

export default FullHD;