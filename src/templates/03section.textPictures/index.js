import Devices from '../../assist/devices';
import FullHD from './_full-hd/full-hd';
import HD from './_hd/hd';
import Tablet from './_tablet/tablet';
import Mobile from './_mobile/mobile';

document.getElementById('textPictures').innerHTML =  
  Devices() == 'mobile' ? Mobile() :
  Devices() == 'tablet' ? Tablet() :
  Devices() == 'hd' ? HD() :
  Devices() == 'full-hd' && FullHD();


// Прокрутка фото в tablet/mobile
const start = () => {
  (Devices() == 'mobile' || Devices() == 'tablet') && handleSlider();
}

const handleSlider = () => {
  //Получение блока его контекста
  const container = document.querySelector(".textPictures-right"),
        slider = document.querySelector(".textPictures-right__container");

  var touchStart = null,																					//Точка начала касания
      touchPosition = null, 																			//Текущая позиция
      move; 																											//Движение фото

  //Перехватываем события
  container.addEventListener("touchstart", (e) => TouchStart(e)); 	//Начало касания
  container.addEventListener("touchmove", (e) => TouchMove(e)); 		//Движение пальцем по экрану
  container.addEventListener("touchend", (e) => TouchEnd(e));				//Пользователь отпустил экран
  container.addEventListener("touchcancel", (e) => TouchEnd(e));		//Отмена касания

  const TouchStart = (e, move) => {																//Получаем текущую позицию касания
    touchStart = e.changedTouches[0].clientX ;
  }

  const TouchMove = (e) => {																			//Получаем новую позицию
    
    touchPosition = e.changedTouches[0].clientX ;
    move = Number(slider.style.left.replace('px', ''));
    
    if(!move) move = 0;

    CheckAction(move); 																						//Перемещаем фото
  }
  const TouchEnd = () => {																				//Очищаем позиции
    touchStart = null;
    touchPosition = null;
  }

  const CheckAction = (move) => {

    const width = slider.scrollWidth - container.clientWidth + 16, 			//Длина скрытых фото
          d = touchStart - touchPosition; 												//Получаем расстояния от начальной до конечной точек

    if(move - d >= -width && move - d <= 0) {
      move = move - d;
      touchStart = touchPosition;
      slider.style.left = move + 'px';
    }	
  }
}

document.addEventListener('DOMContentLoaded', start);