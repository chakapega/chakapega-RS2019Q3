export default class ImageLoaderContainer {
  constructor(canvas) {
    this.loadButton = document.querySelector(".main__load-image-button");

    this.cityInput = document.querySelector("#main__city-input");

    this.accessKey =
      "7e62259f5206d0bce83ad314f5bc96f19747715f380f2d50524ed17fc2a0203e";

    this.canvas = canvas;
  }

  getSelectedCity() {
    this.selectedCity = this.cityInput.value;
  }

  async loadImage() {
    const { selectedCity, accessKey } = this;

    const url = `https://api.unsplash.com/photos/random?query=town,${selectedCity}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    this.canvas.drawImage(data.urls.small);

    localStorage.setItem("urlLoadImage", data.urls.small);
  }

  addClickHandlerToLoadButton() {
    this.loadButton.addEventListener("click", () => {
      this.getSelectedCity();

      this.loadImage();
    });
  }
}
