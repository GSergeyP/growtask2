const Mobile = () => {
  let content = []; 

  for(let i = 0; i < 3; i++) {
    content.push(
      `<div class="slider-item" id="slider-item__${i}">`+
        `<p class="slider-item__title" id="slider-item__title-${i}"></p>`+
        `<span class="slider-item__span"></span>`+
      `</div>`
    )
  }
  return(
    `<h2 class="slider-h2">Сверстай слайдер</h2>`+
    `<div class="slider-container">`+
      content.map((item) => (item)).join("")+
    `<div>`
  )
}

export default Mobile;