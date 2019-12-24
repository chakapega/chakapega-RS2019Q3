export default class GrayscaleButton {
  constructor(canvas) {
    this.grayscaleButton = document.querySelector(".main__grayscale-button");
    this.canvas = canvas;
  }

  addClickHandler() {
    this.grayscaleButton.addEventListener("click", () =>
      this.canvas.grayscale()
    );
  }
}
