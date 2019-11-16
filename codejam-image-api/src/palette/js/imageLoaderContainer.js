export default class ImageLoaderContainer {
  constructor() {
    this.loadButton = document.querySelector('.main__load-image-button');
    this.cityInput = document.querySelector('#main__city-input');
    this.selectedCity;
    this.accesKey = '7e62259f5206d0bce83ad314f5bc96f19747715f380f2d50524ed17fc2a0203e';
  }

  getSelectedCity() {
    this.selectedCity = this.cityInput.value;

    console.log(this.selectedCity);
  }

  loadImage() {
    
  }

  addClickHandlerToLoadButton() {
    this.loadButton.addEventListener('click', () => {
      this.getSelectedCity();

    })
  }
}
