export default class Loader {
  constructor() {
    this.contentContainer = document.querySelector('.content-container');
    this.loaderContainer = document.querySelector('.loader-container');
  }

  showLoader() {
    this.contentContainer.classList.add('content-container_blur');
    this.loaderContainer.classList.remove('loader-container_hidden');
  }

  hideLoader() {
    setTimeout(() => {
      this.contentContainer.classList.remove('content-container_blur');
      this.loaderContainer.classList.add('loader-container_hidden');
    }, 1000);
  }
}
