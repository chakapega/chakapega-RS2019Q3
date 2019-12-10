export default class Loader {
  constructor() {
    this.loader = document.querySelector('.loader');
  }

  showLoader() {
    this.loader.classList.remove('loader_hidden');
  }

  hideLoader() {
    setTimeout(() => this.loader.classList.add('loader_hidden'), 800);
  }
}
