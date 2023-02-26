import Devices from '../../assist/devices';
import FullHD from './_full-hd/full-hd';
import HD from './_hd/hd';
import Tablet from './_tablet/tablet';
import Mobile from './_mobile/mobile';

document.getElementById('form').innerHTML =  
  Devices() == 'mobile' ? Mobile() :
  Devices() == 'tablet' ? Tablet() :
  Devices() == 'hd' ? HD() :
  Devices() == 'full-hd' && FullHD();


const formValidation = () => { //Валидация выполнена только на заполненные поля
  const $ = document.getElementById.bind(document),
        button = $('form-button'),
        formQquestion = $('form-question'),
        formContact = $('form-contact'),
        formName = $('form-name'),
        formNetwork = $('form-network'),
        formCheckbox = $('form-checkbox');


  button.addEventListener('click', () => {
    let questionErr,//Определяем переменные ошибок со значением по умолчанию
        contactErr,
        nameErr,
        question = formQquestion.value,
        contact = formContact.value,
        name = formName.value,
        network = formNetwork.value,
        checkbox = formCheckbox.checked;

    if(!question.trim()) questionErr = true
    else questionErr = false;
    if(!contact.trim()) contactErr = true
    else contactErr = false;
    if(!name.trim()) nameErr = true
    else nameErr = false;

    if(questionErr || contactErr || nameErr) {
      if(questionErr) document.querySelector(`[for="${formQquestion.id}"]`).classList.add('err')
      else document.querySelector(`[for="${formQquestion.id}"]`).classList.remove('err');
      if(contactErr) document.querySelector(`[for="${formContact.id}"]`).classList.add('err')
      else document.querySelector(`[for="${formContact.id}"]`).classList.remove('err');
      if(nameErr) document.querySelector(`[for="${formName.id}"]`).classList.add('err')
      else  document.querySelector(`[for="${formName.id}"]`).classList.remove('err');
    }
    else { 
      let dataPreview = 'Вы ввели следующие данные: \n' +
        'Вопрос: ' + question + '\n' +
        'Контакты: ' + contact + '\n' +
        'Имя: ' + name + '\n' +
        'Соц.сеть: ' + network + '\n' +
        'Согласие с политикой: ' + checkbox + '\n';
      alert(dataPreview);

      document.querySelector(`[for="${formQquestion.id}"]`).classList.remove('err');
      document.querySelector(`[for="${formContact.id}"]`).classList.remove('err');
      document.querySelector(`[for="${formName.id}"]`).classList.remove('err');

      formQquestion.value = '';
      formContact.value = '';
      formName.value = '';
      formNetwork.value = '';
      formCheckbox.checked = false;
    }
  })
}

document.addEventListener('DOMContentLoaded', formValidation);