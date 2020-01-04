import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toolPen, toolEraser, realCanvasSize, toolColorPicker } from '../../helpers/constants';
import { rgbToHex, getCorrectionNumber } from '../../helpers/helpers';
import { changeFirstCanvasColor } from '../../store/leftControlUnit/actions';

import './Canvas.scss';

class Canvas extends Component {
  componentDidMount() {
    const { activeCanvasSize } = this.props;

    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = +activeCanvasSize;
    this.canvas.height = +activeCanvasSize;
    this.oldX = null;
    this.oldY = null;
  }

  componentDidUpdate() {
    const { activeCanvasSize } = this.props;
    if (this.canvas.width !== +activeCanvasSize) {
      this.setCanvasSize();
    }
  }

  setCanvasSize = () => {
    const { activeCanvasSize } = this.props;

    this.canvas.width = +activeCanvasSize;
    this.canvas.height = +activeCanvasSize;
  };

  /* eslint-disable */
  getLineCoordinates = (x, y, prevX, prevY) => {
    const { activeCanvasSize } = this.props;
    const correctionNumber = getCorrectionNumber(realCanvasSize, activeCanvasSize);
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

  draw = event => {
    const { activeCanvasSize, activeToolSize, activeTool, activeFirstCanvasColor } = this.props;
    const correctionNumber = getCorrectionNumber(realCanvasSize, activeCanvasSize);

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
    const correctionNumber = getCorrectionNumber(realCanvasSize, activeCanvasSize);

    if (event.buttons === 1 && activeTool === toolEraser) {
      const x = Math.round(event.nativeEvent.layerX / correctionNumber);
      const y = Math.round(event.nativeEvent.layerY / correctionNumber);

      if (this.oldX !== null) {
        this.getLineCoordinates(x, y, this.oldX, this.oldY).forEach(({ x, y }) => {
          this.ctx.beginPath();
          this.ctx.clearRect(Math.round(x), Math.round(y), +activeToolSize, +activeToolSize);
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
  /* eslint-enable */

  chooseColor = event => {
    const { activeCanvasSize, activeTool, changeFirstCanvasColorAction } = this.props;
    const correctionNumber = getCorrectionNumber(realCanvasSize, activeCanvasSize);

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

  render() {
    const { activeTool } = this.props;
    let handler;

    switch (activeTool) {
      case toolPen:
        handler = this.draw;
        break;
      case toolEraser:
        handler = this.erase;
        break;
      default:
        break;
    }

    return (
      <canvas id='canvas' className={`active-tool_${activeTool}`} onMouseMove={handler} onClick={this.chooseColor} />
    );
  }
}

Canvas.propTypes = {
  activeToolSize: PropTypes.string.isRequired,
  activeTool: PropTypes.string.isRequired,
  activeCanvasSize: PropTypes.string.isRequired,
  activeFirstCanvasColor: PropTypes.string.isRequired,
  changeFirstCanvasColorAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeToolSize: state.tool.activeToolSize,
  activeTool: state.tool.activeTool,
  activeCanvasSize: state.tool.activeCanvasSize,
  activeFirstCanvasColor: state.tool.activeFirstCanvasColor
});

const mapDispatchToProps = dispatch => ({
  changeFirstCanvasColorAction: selectedFirstCanvasColor => dispatch(changeFirstCanvasColor(selectedFirstCanvasColor))
});

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
