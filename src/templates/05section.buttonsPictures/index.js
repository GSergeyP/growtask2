import Devices from '../../assist/devices';
import FullHD from './_full-hd/full-hd';
import HD from './_hd/hd';
import Tablet from './_tablet/tablet';
import Mobile from './_mobile/mobile';
import { buttonsPicturesData } from './buttonsPictures';
import '../../../src/static/img/general/buttonsPictures/img';

document.getElementById('buttonsPictures').innerHTML =  
  Devices() == 'mobile' ? Mobile() :
  Devices() == 'tablet' ? Tablet() :
  Devices() == 'hd' ? HD() :
  Devices() == 'full-hd' && FullHD();

var imgSelect;

if(!imgSelect) {
  imgSelect = 0;
  for(let i = 0; i <buttonsPicturesData.length; i++) {
    
    window['handleclick' + i] = document.getElementById(`buttonsPictures-button__${i}`);
    window['handleclick' + i].addEventListener('click', () => {
      imgSelect = i;
      buttonsPicturesView();
    });

    document.getElementById(`buttonsPictures-img__${i}`).style.backgroundImage = `url('./img/${buttonsPicturesData[i].url}')`;
    document.getElementById(`buttonsPictures-text__${i}`).innerHTML = `${buttonsPicturesData[i].title}`;
  }
}

const buttonsPicturesView = () => {

  for(let i = 0; i < buttonsPicturesData.length; i++) {
    if(i == imgSelect) {
      document.getElementById(`buttonsPictures-button__${i}`).classList.add('active');
      document.querySelector(`.buttonsPictures-window`).style.backgroundImage = `url('./img/${buttonsPicturesData[i].url}')`;
    }
    else {
      document.getElementById(`buttonsPictures-button__${i}`).classList.remove('active');
    }
  }
}

document.addEventListener('DOMContentLoaded', buttonsPicturesView);