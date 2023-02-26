import Icons from '../../../components/icons';
import { questionAnswerData } from '../questionAnswer.Const';

const Tablet = () => {
  return(
    `<h2 class="questionAnswer-h2">Ответы на вопросы</h2>`+
    questionAnswerData.map((item, index) => (
      `<div class="questionAnswer-item">`+
        `<span class="questionAnswer-item__span">`+
          Icons(`class="questionAnswer-item__icon" id="questionAnswer-item__icon${index}"`, 'close')+
        `</span>`+
        `<p class="questionAnswer-item__title" id="questionAnswer-item__title${index}">${item.title}</p>`+
        `<p class="questionAnswer-item__msg" id="questionAnswer-item__msg${index}">${item.msg}</p>`+
      `</div>`
    )).join("")
  )
}

export default Tablet;
  
