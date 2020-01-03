import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toolPen, toolEraser } from '../../constants/constants';

import './Canvas.scss';

class Canvas extends Component {
  componentDidMount() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 32;
    this.canvas.height = 32;
    this.correctionNumber = 512 / 32;
    this.oldX = null;
    this.oldY = null;
  }

  /* eslint-disable */
  getLineCoordinates = (x, y, prevX, prevY) => {
    const { correctionNumber } = this;
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
    const { activeToolSize, activeTool } = this.props;
    if (event.buttons === 1 && activeTool === toolPen) {
      const x = Math.round(event.nativeEvent.layerX / this.correctionNumber);
      const y = Math.round(event.nativeEvent.layerY / this.correctionNumber);

      if (this.oldX !== null) {
        this.getLineCoordinates(x, y, this.oldX, this.oldY).forEach(({ x, y }) => {
          this.ctx.beginPath();
          this.ctx.rect(Math.round(x), Math.round(y), +activeToolSize, +activeToolSize);
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
    const { activeToolSize, activeTool } = this.props;
    if (event.buttons === 1 && activeTool === toolEraser) {
      const x = Math.round(event.nativeEvent.layerX / this.correctionNumber);
      const y = Math.round(event.nativeEvent.layerY / this.correctionNumber);

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

    return <canvas id='canvas' onMouseMove={handler} />;
  }
}

Canvas.propTypes = {
  activeToolSize: PropTypes.string.isRequired,
  activeTool: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  activeToolSize: state.tool.activeToolSize,
  activeTool: state.tool.activeTool
});

export default connect(mapStateToProps)(Canvas);
