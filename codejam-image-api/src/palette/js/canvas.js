export default class Canvas {
  constructor(store) {
    this.canvas = document.querySelector("#main__canvas");

    this.ctx = this.canvas.getContext("2d");

    this.isMouseDown = false;

    this.store = store;
    this.store.drawImage = this.drawImage;
  }

  ctxBeginPath() {
    this.ctx.beginPath();
  }

  addMouseDownHandler() {
    this.canvas.addEventListener("mousedown", () => {
      this.isMouseDown = true;
    });
  }

  addMouseUpHandler() {
    this.canvas.addEventListener("mouseup", () => {
      this.isMouseDown = false;

      this.ctxBeginPath();
    });
  }

  setCanvasSize() {
    if (this.canvas.width !== this.store.canvasVirtualFieldSize) {
      this.canvas.width = this.store.canvasVirtualFieldSize;
      this.canvas.height = this.store.canvasVirtualFieldSize;
    }
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawOnCanvas(event) {
    if (this.isMouseDown && this.store.isPencilActive) {
      const correctionNumber = 512 / this.store.canvasVirtualFieldSize;

      this.setCanvasSize();

      this.ctx.lineTo(
        event.layerX / correctionNumber,
        event.layerY / correctionNumber
      );
      this.ctx.stroke();

      this.ctxBeginPath();
      this.ctx.moveTo(
        event.layerX / correctionNumber,
        event.layerY / correctionNumber
      );
    }
  }

  addMouseMoveHandler() {
    this.canvas.addEventListener("mousemove", event =>
      this.drawOnCanvas(event)
    );
  }

  drawImage(url) {
    this.setCanvasSize();

    this.clearCanvas();

    const image = new Image();

    image.onload = () => {
      let correctionNumber = 0;
      let horizontalShift = 0;
      let verticalShift = 0;

      if (image.height > image.width) {
        correctionNumber = this.canvas.height / image.height;

        image.height *= correctionNumber;
        image.width *= correctionNumber;

        horizontalShift = (this.canvas.width - image.width) / 2;
      } else if (image.height < image.width) {
        correctionNumber = this.canvas.width / image.width;

        image.height *= correctionNumber;
        image.width *= correctionNumber;

        verticalShift = (this.canvas.height - image.height) / 2;
      }

      this.ctx.drawImage(
        image,
        horizontalShift,
        verticalShift,
        image.width,
        image.height
      );
    };

    image.src = url;
  }
}
