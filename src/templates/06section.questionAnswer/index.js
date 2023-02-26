import Devices from '../../assist/devices';
import FullHD from './_full-hd/full-hd';
import HD from './_hd/hd';
import Tablet from './_tablet/tablet';
import Mobile from './_mobile/mobile';

document.getElementById('questionAnswer').innerHTML =  
  Devices() == 'mobile' ? Mobile() :
  Devices() == 'tablet' ? Tablet() :
  Devices() == 'hd' ? HD() :
  Devices() == 'full-hd' && FullHD();

const start = () => {  
  const button = document.querySelectorAll('.questionAnswer-item__span');

  for(let i = 0; i < button.length; i++ ) {
    
    button[i].addEventListener('click', () => { 

      const icon = document.getElementById(`questionAnswer-item__icon${i}`),
            title = document.getElementById(`questionAnswer-item__title${i}`),
            msg = document.getElementById(`questionAnswer-item__msg${i}`);

      if(icon.style.transform == 'rotate(0deg)') {
        icon.style.transform = 'rotate(45deg)';
        title.classList.remove('active');
        msg.style.display = 'none';
      }
      else {
        icon.style.transform = 'rotate(0deg)';
        title.classList.add('active');
        msg.style.display = 'block';
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', start);