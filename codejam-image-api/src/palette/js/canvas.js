export default class Canvas {
  constructor(store) {
    this.canvas = document.querySelector('#main__canvas');

    this.ctx = this.canvas.getContext('2d');

    this.isMouseDown = false;

    this.store = store;
    this.store.drawImage = this.drawImage;
  };

  ctxBeginPath() {
    this.ctx.beginPath();
  };

  addMouseDownHandler() {
    this.canvas.addEventListener('mousedown', () => {
      this.isMouseDown = true;
    });
  };

  addMouseUpHandler() {
    this.canvas.addEventListener('mouseup', () => {
      this.isMouseDown = false;

      this.ctxBeginPath();
    });
  };

  setCtxLineWidth() {
    this.ctx.lineWidth = 1 * 2;
  };

  addMouseMoveHandler() {
    this.canvas.addEventListener('mousemove', event => {
      if (this.isMouseDown && this.store.isPencilActive) {
        this.ctx.lineTo(event.layerX, event.layerY);
        this.ctx.stroke();

        this.ctxBeginPath();
        this.ctx.arc(event.layerX, event.layerY, 1, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctxBeginPath();
        this.ctx.moveTo(event.layerX, event.layerY);
      };
    });
  };

  drawImage(url) {
    const image = new Image();

    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };

    image.src = url;
  };
};
