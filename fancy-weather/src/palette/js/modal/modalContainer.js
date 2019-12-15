export default class ModalContainer {
  constructor() {
    this.modalContainer = document.querySelector('.modal-container');
  }

  addClickHandler() {
    this.modalContainer.addEventListener('click', event => {
      if (event.target.className === 'modal-container' || event.target.className === 'modal_close-icon') {
        this.close();
      }
    });
  }

  show() {
    this.modalContainer.classList.remove('modal-container_hidden');
  }

  close() {
    this.modalContainer.classList.add('modal-container_hidden');
  }
}
