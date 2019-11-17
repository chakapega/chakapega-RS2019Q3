export default class SwitcherContainer {
  constructor(store) {
    this.switcherContainer = document.querySelector('.main__switcher-container');

    this.button128x128 = document.querySelector('.switcher-button_128x128');
    this.button256x256 = document.querySelector('.switcher-button_256x256');
    this.button512x512 = document.querySelector('.switcher-button_512x512');

    this.store = store;

    this.store.canvasVirtualFieldSize = 128;
  };

  addClickHandler() {
    this.switcherContainer.addEventListener('click', event => {
      switch (event.target.textContent) {
        case '128x128':
          this.store.canvasVirtualFieldSize = 128;

          break;
        case '256x256':
          this.store.canvasVirtualFieldSize = 256;

          break;
        case '512x512':
          this.store.canvasVirtualFieldSize = 512;

          break;

        default:
          break;
      };
    });
  };
};
