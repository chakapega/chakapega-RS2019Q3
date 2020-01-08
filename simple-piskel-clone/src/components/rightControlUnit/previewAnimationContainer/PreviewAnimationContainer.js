import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';

import './PreviewAnimationContainer.scss';

class PreviewAnimationContainer extends Component {
  componentDidMount() {
    const { activeCanvasSize } = this.props;
    this.canvas = document.querySelector('#preview-animation-canvas');
    this.canvas.width = +activeCanvasSize;
    this.canvas.height = +activeCanvasSize;
    this.ctx = this.canvas.getContext('2d');
    this.currentFrame = 0;

    setInterval(() => {
      requestAnimationFrame(this.cyclicCanvasFrameDisplay);
    }, 1000 / 5);
  }

  cyclicCanvasFrameDisplay = () => {
    const { arrayOfCanvasFrames, activeCanvasSize } = this.props;

    this.ctx.clearRect(0, 0, +activeCanvasSize, +activeCanvasSize);

    if (arrayOfCanvasFrames[this.currentFrame].imageData.data)
      this.ctx.putImageData(arrayOfCanvasFrames[this.currentFrame].imageData, 0, 0);

    this.currentFrame += 1;

    if (this.currentFrame >= arrayOfCanvasFrames.length) this.currentFrame = 0;
  };

  render() {
    return (
      <div className='preview-animation-container'>
        <div className='preview-animation-canvas-container'>
          <canvas id='preview-animation-canvas' />
        </div>
      </div>
    );
  }
}

PreviewAnimationContainer.propTypes = {
  arrayOfCanvasFrames: PropTypes.arrayOf(object).isRequired,
  activeCanvasSize: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  arrayOfCanvasFrames: state.canvasFrame.arrayOfCanvasFrames,
  activeCanvasSize: state.tool.activeCanvasSize
});

export default connect(mapStateToProps)(PreviewAnimationContainer);
