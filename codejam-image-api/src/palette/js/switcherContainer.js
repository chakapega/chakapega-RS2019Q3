export default class SwitcherContainer {
  constructor(store, canvas) {
    this.switcherContainer = document.querySelector(
      ".main__switcher-container"
    );

    this.button128x128 = document.querySelector(".switcher-button_128x128");
    this.button256x256 = document.querySelector(".switcher-button_256x256");
    this.button512x512 = document.querySelector(".switcher-button_512x512");

    this.store = store;
    this.store.canvasVirtualFieldSize = 128;

    this.activeButton = this.store.canvasVirtualFieldSize;

    this.button128x128.classList.add("switcher-button-active");

    this.canvas = canvas;
  }

  addClickHandler() {
    this.switcherContainer.addEventListener("click", event =>
      this.canvasSizeSwitcher(event)
    );
  }

  canvasSizeSwitcher(event) {
    switch (event.target.textContent) {
      case "128x128":
        if (this.activeButton !== 128) {
          this.store.canvasVirtualFieldSize = 128;

          this.addClass(this.store.canvasVirtualFieldSize);

          this.canvas.drawImage(localStorage.getItem("urlLoadImage"));
        }

        break;
      case "256x256":
        if (this.activeButton !== 256) {
          this.store.canvasVirtualFieldSize = 256;

          this.addClass(this.store.canvasVirtualFieldSize);

          this.canvas.drawImage(localStorage.getItem("urlLoadImage"));
        }

        break;
      case "512x512":
        if (this.activeButton !== 512) {
          this.store.canvasVirtualFieldSize = 512;

          this.addClass(this.store.canvasVirtualFieldSize);

          this.canvas.drawImage(localStorage.getItem("urlLoadImage"));
        }

        break;

      default:
        break;
    }
  }

  addClass(canvasVirtualFieldSize) {
    if (canvasVirtualFieldSize !== this.activeButton) {
      this.removeClass();

      switch (canvasVirtualFieldSize) {
        case 128:
          this.button128x128.classList.add("switcher-button-active");

          this.activeButton = 128;

          break;
        case 256:
          this.button256x256.classList.add("switcher-button-active");

          this.activeButton = 256;

          break;
        case 512:
          this.button512x512.classList.add("switcher-button-active");

          this.activeButton = 512;

          break;

        default:
          break;
      }
    }
  }

  removeClass() {
    document
      .querySelector(".switcher-button-active")
      .classList.remove("switcher-button-active");
  }
}
