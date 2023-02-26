const infoData = [
  {
    tag: 'h2',
    title: 'Форма ОС',
    class: 'form-h2',
  },
  {
    tag: 'p',
    title: 'Сверстай форму обратной связи. Будет круто, если заявку будут приходить сюда: a@growtask.ru',
    class: 'form-p',
  },
  {
    tag: 'h4',
    title: 'Не забудь вставить соц.сети',
    class: 'form-h4',
  },
];
const iconsData = [
  {
    url: 'https://vk.com/growtask',
    icon: 'vk',
    class: 'class="form-icon__vk"',
  },
  {
    url: 'https://t.me/growtask',
    icon: 'telegram',
    class: 'class="form-icon__telegram"',
  },
];

const formData = [
  {
    type: 'text',
    id: 'form-question',
    class: 'form-input item1',
    placeholder: 'Напиши вопрос*',
  },
  {
    type: 'text',
    id: 'form-contact',
    class: 'form-input item2',
    placeholder: 'Телефон или почта*',
  },
  {
    type: 'text',
    id: 'form-name',
    class: 'form-input item1',
    placeholder: 'Твоё имя*',
  },
  {
    type: 'text',
    id: 'form-network',
    class: 'form-input item2',
    placeholder: 'Соц.сеть или мессенджер',
  },
  {
    type: 'button',
    id: 'form-button',
    class: 'form-button',
    placeholder: 'Отправить заявку'
  },
  {
    type: 'checkbox',
    id: 'form-checkbox',
    class: 'form-checkbox',
    placeholder: 'Согласие с политикой'
  },
];

export { infoData, iconsData, formData };

