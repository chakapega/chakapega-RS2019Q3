import '../css/style.scss';

import Store from './store';
import ToolPencil from './toolPencil';
import Canvas from './canvas';
import ImageloaderContainer from './imageLoaderContainer';

class App {
  constructor() {
    this.store = new Store();

    this.toolPencil = new ToolPencil(this.store);

    this.canvas = new Canvas(this.store);

    this.imageloaderContainer = new ImageloaderContainer(this.canvas);
  };

  start() {
    this.toolPencil.addClickHandler();

    this.canvas.addMouseDownHandler();
    this.canvas.addMouseUpHandler();
    this.canvas.addMouseMoveHandler();
    this.canvas.setCtxLineWidth();

    this.imageloaderContainer.addClickHandlerToLoadButton();
  };
};

new App().start();
