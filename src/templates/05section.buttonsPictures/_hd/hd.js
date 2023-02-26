const HD = () => {
  let content = []; 

  for(let i = 0; i < 3; i++) {
    content.push(
      `<div class="buttonsPictures-button" id="buttonsPictures-button__${i}">`+
        `<span class="buttonsPictures-img" id="buttonsPictures-img__${i}"></span>`+
        `<span class="buttonsPictures-text" id="buttonsPictures-text__${i}"></span>`+
      `</div>`
    )
  }
  return(
    `<div class="buttonsPictures-window"></div>`+
    content.map((item) => (item)).join("")
  )
}

export default HD;