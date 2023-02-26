import Devices from '../../assist/devices';
import FullHD from './_full-hd/full-hd';
import HD from './_hd/hd';
import Tablet from './_tablet/tablet';
import Mobile from './_mobile/mobile';

document.getElementById('nav').innerHTML =  
  Devices() == 'mobile' ? Mobile() :
  Devices() == 'tablet' ? Tablet() :
  Devices() == 'hd' ? HD() :
  Devices() == 'full-hd' && FullHD();

// Показать/скрыть nav в tablet/mobile
const start = () => {
  (Devices() == 'mobile' || Devices() == 'tablet') && handleClick();
}

const handleClick = () => {
  const navModal = document.getElementById('nav-modal'),
        navNav = document.querySelector('.nav-nav'),
        burger = document.querySelector('.burger'),
        close = document.querySelector('.close'),
        icon = document.querySelector('.nav-icon__logo'),
        h4 = document.querySelector('.nav-icon__h4');

  navModal.onclick = () => {
    if(navNav.style.display == 'flex') {
      navNav.style.display = 'none';
      burger.style.display = 'block';
      close.style.display = 'none';
      icon.style.display = 'block';
      h4.style.display = 'none';
    }
    else {
      navNav.style.display = 'flex';
      burger.style.display = 'none';
      close.style.display = 'block';
      icon.style.display = 'none';
      h4.style.display = 'block';
    }
  }   
}

document.addEventListener('DOMContentLoaded', start);