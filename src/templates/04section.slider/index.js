import Devices from '../../assist/devices';
import FullHD from './_full-hd/full-hd';
import HD from './_hd/hd';
import Tablet from './_tablet/tablet';
import Mobile from './_mobile/mobile';
import { sliderData } from './slider.Const';
import '../../../src/static/img/general/slider/img';

document.getElementById('slider').innerHTML =  
  Devices() == 'mobile' ? Mobile() :
  Devices() == 'tablet' ? Tablet() :
  Devices() == 'hd' ? HD() :
  Devices() == 'full-hd' && FullHD();


//////////////////////////////////////
var bgStart; //Стартовый номер фона карусели
if(!bgStart) bgStart = 0;

var totalCard; //Количество отображаемыыых кард
if(Devices() == 'full-hd' || Devices() == 'hd') {
  totalCard = 4
  ///////////////////////////////////////
  /*     органы управления мышью        */
  // Выбор предыдущего фона Карусели мышью
  const sliderPrev = document.querySelector('.slider-icon__prev');

  sliderPrev.addEventListener('click', () => {
    bgStart -= 3;
    if(bgStart < 0) bgStart += sliderData.length;
    sliderView();
  });
  // Выбор следующего фона Карусели мышью
  const sliderNext = document.querySelector('.slider-icon__next')
  sliderNext.addEventListener('click', () => {
    bgStart -= 5;
    if(bgStart < 0) bgStart += sliderData.length;
    sliderView();
  });
  ///////////////////////////////////////
}
else {
  totalCard = 3;
  ///////////////////////////////////////
  /*     органы управления touch       */
  //Получение области действия touch
  const sliderControl = document.querySelector('.slider-container');

  var touchStart = null; //Точка начала касания
  var touchPosition = null; //Текущая позиция

  //Перехватываем события
  sliderControl.addEventListener('touchstart', (e) => TouchStart(e)); //Начало касания
  sliderControl.addEventListener('touchmove', (e) => TouchMove(e));   //Движение пальцем по экрану
  sliderControl.addEventListener('touchend', (e) => TouchEnd(e));    //Прекращение касания
  sliderControl.addEventListener('touchcancel', (e) => TouchEnd(e));  //Отмена касания

  const TouchStart = (e) => {
    // Получение начала касания
    touchStart = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
  }

  const TouchMove = (e) => {
    // Получение текущей позиции
    touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
  }
  const TouchEnd = (e) => {
    CheckAction(); // Определение свайпа по осям 
    //Очищаем позиции
    touchStart = null;
    touchPosition = null;
  }
  const CheckAction = () => {
    let d = { // Пределение отрезков свайпа по осям
      x: touchStart.x - touchPosition.x,
      y: touchStart.y - touchPosition.y
    };
    if(Math.abs(d.x) > Math.abs(d.y)) { // Определение движения свайпа по осям
      if(d.x > 0) { // Свайп в лево

        bgStart -= 2;
        if(bgStart < 0) bgStart += sliderData.length;
        sliderView();
      }
      else { // Свайп в право	
        bgStart -= 4;
        if(bgStart < 0) bgStart += sliderData.length;
        sliderView();
      }
    }    
  }
}
/////////////////////////////////////
const sliderView = () => { // Функция формирования сортировки фонов slider

  for(let i = 0; i < totalCard; i++) {
    if(bgStart > sliderData.length - 1) bgStart -= sliderData.length; 

    document.getElementById(`slider-item__${i}`).style.backgroundImage = `url('./img/${sliderData[bgStart].url}')`;
    document.getElementById(`slider-item__title-${i}`).innerHTML = `${sliderData[bgStart].title}`;
    bgStart++;
  }
}

// Функция перезапуска slider
const timer = () => {
  sliderView();
  setTimeout(() => {
    if(Devices() == 'full-hd' || Devices() == 'hd') {
      bgStart -= 5;
      if(bgStart < 0) bgStart += sliderData.length;
    }
    else {
      bgStart -= 4;
      if(bgStart < 0) bgStart += sliderData.length;
    }
    timer();
  }, 10000);
};

document.addEventListener('DOMContentLoaded', timer);