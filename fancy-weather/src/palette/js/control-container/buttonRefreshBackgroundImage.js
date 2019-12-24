export default class ButtonRefreshBackgroundImage {
  constructor() {
    this.buttonRefreshBackgroundImage = document.querySelector('.button_refresh-background-image');
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data));
  }

  addClickHandler() {
    this.buttonRefreshBackgroundImage.addEventListener('click', () => this.broadcast());
  }
}
