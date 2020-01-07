import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  toolPen,
  toolEraser,
  realCanvasSize,
  toolColorPicker,
  toolPaintBucket,
  hoverColorOverExtraCanvas
} from '../../constants/constants';
import { rgbToHex, customHexToRgb } from '../../helpers/helpers';
import { changeFirstCanvasColor } from '../../store/leftControlUnit/tools/actions';
import { mapImageDataToState } from '../../store/leftControlUnit/canvasFrames/actions';

import './Canvas.scss';

class Canvas extends Component {
  componentDidMount() {
    const { activeCanvasSize } = this.props;

    this.canvas = document.querySelector('#canvas');
    this.extraCanvas = document.querySelector('#extra-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.extraCtx = this.extraCanvas.getContext('2d');
    this.canvas.width = +activeCanvasSize;
    this.canvas.height = +activeCanvasSize;
    this.extraCanvas.width = +activeCanvasSize;
    this.extraCanvas.height = +activeCanvasSize;
    this.oldX = null;
    this.oldY = null;
  }

  componentDidUpdate() {
    const { activeCanvasSize } = this.props;
    if (this.canvas.width !== +activeCanvasSize) {
      this.setCanvasSize();
    }
  }

  /* eslint-disable */
  draw = event => {
    const { activeCanvasSize, activeToolSize, activeTool, activeFirstCanvasColor } = this.props;
    const correctionNumber = this.getCorrectionNumber(activeCanvasSize);

    if (event.buttons === 1 && activeTool === toolPen) {
      const x = Math.round(event.nativeEvent.layerX / correctionNumber);
      const y = Math.round(event.nativeEvent.layerY / correctionNumber);

      if (this.oldX !== null) {
        this.getLineCoordinates(x, y, this.oldX, this.oldY).forEach(({ x, y }) => {
          this.ctx.beginPath();
          this.ctx.rect(Math.round(x), Math.round(y), +activeToolSize, +activeToolSize);
          this.ctx.fillStyle = activeFirstCanvasColor;
          this.ctx.fill();
        });
      }

      this.oldX = x;
      this.oldY = y;
    } else if (event.buttons !== 1) {
      this.oldX = null;
      this.oldY = null;
    }
  };

  erase = event => {
    const { activeCanvasSize, activeToolSize, activeTool } = this.props;
    const correctionNumber = this.getCorrectionNumber(activeCanvasSize);

    if (event.buttons === 1 && activeTool === toolEraser) {
      const x = Math.round(event.nativeEvent.layerX / correctionNumber);
      const y = Math.round(event.nativeEvent.layerY / correctionNumber);

      if (this.oldX !== null) {
        this.getLineCoordinates(x, y, this.oldX, this.oldY).forEach(({ x, y }) => {
          this.ctx.beginPath();
          this.ctx.clearRect(Math.round(x), Math.round(y), +activeToolSize, +activeToolSize);
        });
      }

      this.oldX = x;
      this.oldY = y;
    } else if (event.buttons !== 1) {
      this.oldX = null;
      this.oldY = null;
    }
  };

  getLineCoordinates = (x, y, prevX, prevY) => {
    const { activeCanvasSize } = this.props;
    const correctionNumber = this.getCorrectionNumber(activeCanvasSize);
    const coordinates = [];
    const dx = Math.abs(x - prevX);
    const dy = Math.abs(y - prevY);
    const sx = x < prevX ? 1 / correctionNumber : -1 / correctionNumber;
    const sy = y < prevY ? 1 / correctionNumber : -1 / correctionNumber;
    let error = dx - dy;

    while (true) {
      const doubleError = error * 2;

      coordinates.push({ x, y });

      if (x === prevX && y === prevY) {
        break;
      }
      if (doubleError > -dy) {
        error -= dy;
        x += sx;
      }
      if (doubleError < dx) {
        error += dx;
        y += sy;
      }
    }

    return coordinates;
  };

  setPixel = (imageData, x, y, color) => {
    const offset = (y * imageData.width + x) * 4;
    const [r, g, b, a] = color;

    imageData.data[offset + 0] = r;
    imageData.data[offset + 1] = g;
    imageData.data[offset + 2] = b;
    imageData.data[offset + 3] = a;
  };

  floodFill = (ctx, x, y, fillColor) => {
    const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    const targetColor = this.getPixel(imageData, x, y);

    if (!this.colorsMatch(targetColor, fillColor)) {
      const pixelsToCheck = [x, y];

      while (pixelsToCheck.length > 0) {
        const y = pixelsToCheck.pop();
        const x = pixelsToCheck.pop();
        const currentColor = this.getPixel(imageData, x, y);

        if (this.colorsMatch(currentColor, targetColor)) {
          this.setPixel(imageData, x, y, fillColor);
          pixelsToCheck.push(x + 1, y);
          pixelsToCheck.push(x - 1, y);
          pixelsToCheck.push(x, y + 1);
          pixelsToCheck.push(x, y - 1);
        }
      }

      ctx.putImageData(imageData, 0, 0);
    }
  };
  /* eslint-enable */

  fillPixel = event => {
    const { activeCanvasSize, activeToolSize, activeFirstCanvasColor } = this.props;

    const correctionNumber = this.getCorrectionNumber(activeCanvasSize);
    const x = Math.round(event.nativeEvent.layerX / correctionNumber);
    const y = Math.round(event.nativeEvent.layerY / correctionNumber);

    this.ctx.beginPath();
    this.ctx.rect(x, y, +activeToolSize, +activeToolSize);
    this.ctx.fillStyle = activeFirstCanvasColor;
    this.ctx.fill();
  };

  erasePixel = event => {
    const { activeCanvasSize, activeToolSize } = this.props;

    const correctionNumber = this.getCorrectionNumber(activeCanvasSize);
    const x = Math.round(event.nativeEvent.layerX / correctionNumber);
    const y = Math.round(event.nativeEvent.layerY / correctionNumber);

    this.ctx.beginPath();
    this.ctx.clearRect(x, y, +activeToolSize, +activeToolSize);
  };

  getCorrectionNumber = activeCanvasSize => {
    return realCanvasSize / +activeCanvasSize;
  };

  chooseColor = event => {
    const { activeCanvasSize, activeTool, changeFirstCanvasColorAction } = this.props;
    const correctionNumber = this.getCorrectionNumber(activeCanvasSize);

    if (activeTool === toolColorPicker) {
      const x = Math.round(event.nativeEvent.layerX / correctionNumber);
      const y = Math.round(event.nativeEvent.layerY / correctionNumber);
      const imageData = this.ctx.getImageData(x, y, 1, 1).data;
      const [r, g, b, a] = imageData;

      if (a !== 0) {
        changeFirstCanvasColorAction(rgbToHex(r, g, b));
      }
    }
  };

  paintBucket = event => {
    const { activeTool, activeCanvasSize, activeFirstCanvasColor } = this.props;

    if (activeTool === toolPaintBucket) {
      const correctionNumber = this.getCorrectionNumber(activeCanvasSize);
      const x = Math.round(event.nativeEvent.layerX / correctionNumber);
      const y = Math.round(event.nativeEvent.layerY / correctionNumber);
      const { r, g, b } = customHexToRgb(activeFirstCanvasColor);

      this.floodFill(this.ctx, x, y, [r, g, b, 255]);
    }
  };

  setCanvasSize = () => {
    const { activeCanvasSize } = this.props;

    this.canvas.width = +activeCanvasSize;
    this.canvas.height = +activeCanvasSize;
    this.extraCanvas.width = +activeCanvasSize;
    this.extraCanvas.height = +activeCanvasSize;

    this.getImageData();
  };

  getPixel = (imageData, x, y) => {
    if (x < 0 || y < 0 || x >= imageData.width || y >= imageData.height) {
      return [-1, -1, -1, -1];
    }
    const offset = (y * imageData.width + x) * 4;

    return imageData.data.slice(offset, offset + 4);
  };

  colorsMatch = (a, b) => {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
  };

  hoverOnExtraCanvas = event => {
    const { activeCanvasSize, activeToolSize } = this.props;
    const correctionNumber = this.getCorrectionNumber(activeCanvasSize);
    const { width, height } = this.extraCanvas;
    const x = Math.round(event.nativeEvent.layerX / correctionNumber);
    const y = Math.round(event.nativeEvent.layerY / correctionNumber);

    this.extraCtx.beginPath();
    this.extraCtx.clearRect(0, 0, width, height);
    this.extraCtx.rect(x, y, +activeToolSize, +activeToolSize);
    this.extraCtx.fillStyle = hoverColorOverExtraCanvas;
    this.extraCtx.fill();
  };

  clearExtraCanvas = () => {
    const { width, height } = this.extraCanvas;

    this.extraCtx.beginPath();
    this.extraCtx.clearRect(0, 0, width, height);
  };

  hideExtraCanvas = () => {
    this.extraCanvas.classList.add('extra-canvas_hidden');
  };

  showExtraCanvas = () => {
    this.extraCanvas.classList.remove('extra-canvas_hidden');
  };

  getImageData = () => {
    const { mapImageDataToStateAction } = this.props;
    const { width, height } = this.canvas;
    const imageData = this.ctx.getImageData(0, 0, width, height);

    mapImageDataToStateAction(imageData);
  };

  render() {
    const { activeTool } = this.props;
    let onMouseMoveHandler;
    let onClickHandler;

    switch (activeTool) {
      case toolPen:
        onMouseMoveHandler = this.draw;
        break;
      case toolEraser:
        onMouseMoveHandler = this.erase;
        break;
      case toolColorPicker:
        onClickHandler = this.chooseColor;
        break;
      case toolPaintBucket:
        onClickHandler = this.paintBucket;
        break;
      default:
        break;
    }

    const onMouseDownExtraCanvas = event => {
      this.hideExtraCanvas();

      if (activeTool === toolPen) this.fillPixel(event);
      if (activeTool === toolEraser) this.erasePixel(event);
      if (onClickHandler) onClickHandler(event);
    };
    const onMouseUpCanvas = () => {
      this.showExtraCanvas();
      this.getImageData();
      this.oldX = null;
      this.oldY = null;
    };
    const onMouseLeaveCanvas = event => {
      if (event.buttons === 1) {
        this.getImageData();
        this.oldX = null;
        this.oldY = null;
      }
    };

    return (
      <div className='canvas-container'>
        <canvas
          id='canvas'
          className={`active-tool_${activeTool}`}
          onMouseMove={onMouseMoveHandler}
          onMouseUp={onMouseUpCanvas}
          onMouseLeave={onMouseLeaveCanvas}
        />
        <canvas
          id='extra-canvas'
          className={`extra-canvas active-tool_${activeTool}`}
          onMouseMove={this.hoverOnExtraCanvas}
          onMouseDown={onMouseDownExtraCanvas}
          onMouseLeave={this.clearExtraCanvas}
        />
      </div>
    );
  }
}

Canvas.propTypes = {
  activeToolSize: PropTypes.string.isRequired,
  activeTool: PropTypes.string.isRequired,
  activeCanvasSize: PropTypes.string.isRequired,
  activeFirstCanvasColor: PropTypes.string.isRequired,
  changeFirstCanvasColorAction: PropTypes.func.isRequired,
  mapImageDataToStateAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeToolSize: state.tool.activeToolSize,
  activeTool: state.tool.activeTool,
  activeCanvasSize: state.tool.activeCanvasSize,
  activeFirstCanvasColor: state.tool.activeFirstCanvasColor
});
const mapDispatchToProps = dispatch => ({
  changeFirstCanvasColorAction: selectedFirstCanvasColor => dispatch(changeFirstCanvasColor(selectedFirstCanvasColor)),
  mapImageDataToStateAction: imageData => dispatch(mapImageDataToState(imageData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
