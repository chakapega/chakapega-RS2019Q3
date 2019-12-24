import "../scss/style.scss";

import Store from "./store";
import Canvas from "./canvas";
import SwitcherContainer from "./switcherContainer";
import ToolPencil from "./toolPencil";
import ImageloaderContainer from "./imageLoaderContainer";
import GrayscaleButton from "./grayscaleButton";

class App {
  constructor() {
    this.store = new Store();
    this.canvas = new Canvas(this.store);
    this.switcherContainer = new SwitcherContainer(this.store, this.canvas);
    this.toolPencil = new ToolPencil(this.store);
    this.imageloaderContainer = new ImageloaderContainer(this.canvas);
    this.grayscaleButton = new GrayscaleButton(this.canvas);
  }

  start() {
    this.toolPencil.addClickHandler();
    this.canvas.addMouseDownHandler();
    this.canvas.addMouseUpHandler();
    this.canvas.addMouseMoveHandler();
    this.imageloaderContainer.addClickHandlerToLoadButton();
    this.switcherContainer.addClickHandler();

    if (localStorage.getItem("urlLoadImage")) {
      this.canvas.drawImage(localStorage.getItem("urlLoadImage"));
    }
    this.grayscaleButton.addClickHandler();
  }
}

new App().start();
