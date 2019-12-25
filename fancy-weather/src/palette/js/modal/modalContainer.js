import { locationNotFound } from '../helpers/constants';

export default class ModalContainer {
  constructor() {
    this.modalContainer = document.querySelector('.modal-container');
    this.modalText = document.querySelector('.modal_text');
  }

  addClickHandler() {
    this.modalContainer.addEventListener('click', event => {
      if (event.target.className === 'modal-container' || event.target.className === 'modal_close-icon') {
        this.hide();
      }
    });
  }

  show() {
    this.modalText.textContent = locationNotFound[localStorage.getItem('selectedLanguage')];
    this.modalContainer.classList.remove('modal-container_hidden');
  }

  hide() {
    this.modalContainer.classList.add('modal-container_hidden');
  }
}
