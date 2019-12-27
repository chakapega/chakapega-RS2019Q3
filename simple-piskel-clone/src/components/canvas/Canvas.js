import React, { Component } from 'react';

import './Canvas.css';

export default class Canvas extends Component {
  state = {
    isMouseDown: false,
  };

  componentDidMount() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 128;
    this.canvas.height = 128;
    this.correctionNumber = 512 / 128;
  }

  mouseDown = () => {
    this.setState({
      isMouseDown: true,
    });
  };

  mouseUp = () => {
    this.setState({
      isMouseDown: false,
    });
    this.ctx.beginPath();
  };

  draw = event => {
    const { isMouseDown } = this.state;
    const x = Math.round(event.nativeEvent.layerX / this.correctionNumber);
    const y = Math.round(event.nativeEvent.layerY / this.correctionNumber);

    if (isMouseDown) {
      this.ctx.rect(x, y, 1, 1);
      this.ctx.fill();
    }
  };

  render() {
    return (
      <canvas
        id="canvas"
        onMouseMove={this.draw}
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}
      ></canvas>
    );
  }
}
