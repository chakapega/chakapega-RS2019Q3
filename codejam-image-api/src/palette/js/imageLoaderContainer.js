import { accessKey, url } from "./constants";

export default class ImageLoaderContainer {
  constructor(canvas) {
    this.loadButton = document.querySelector(".main__load-image-button");
    this.cityInput = document.querySelector("#main__city-input");
    this.accessKey = accessKey;
    this.canvas = canvas;
    this.url = url;
  }

  getSelectedCity() {
    this.selectedCity = this.cityInput.value;
  }

  async loadImage() {
    const response = await fetch(url + this.selectedCity + this.accessKey);
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
