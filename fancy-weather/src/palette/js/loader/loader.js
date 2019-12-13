export default class Loader {
  constructor() {
    this.contentContainer = document.querySelector('.content-container');
    this.loader = document.querySelector('.loader');
  }

  showLoader() {
    this.contentContainer.classList.add('content-container_blur');
    this.loader.classList.remove('loader_hidden');
  }

  hideLoader() {
    setTimeout(() => {
      this.contentContainer.classList.remove('content-container_blur');
      this.loader.classList.add('loader_hidden');
    }, 1000);
  }
}
