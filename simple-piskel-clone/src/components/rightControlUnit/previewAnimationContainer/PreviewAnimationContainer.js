import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';

import { changeFpsPreviewAnimation } from '../../../store/rightControlUnit/actions';

import './PreviewAnimationContainer.scss';

class PreviewAnimationContainer extends Component {
  componentDidMount() {
    const { activeCanvasSize, activePreviewAnimationFps } = this.props;

    this.canvas = document.querySelector('#preview-animation-canvas');
    this.canvas.width = +activeCanvasSize;
    this.canvas.height = +activeCanvasSize;
    this.ctx = this.canvas.getContext('2d');
    this.currentFrame = 0;

    this.initialSetIntervalId = setInterval(() => {
      requestAnimationFrame(this.cyclicCanvasFrameDisplay);
    }, 1000 / activePreviewAnimationFps);
  }

  componentDidUpdate(prevProps) {
    const { activePreviewAnimationFps, activeCanvasSize } = this.props;
    clearInterval(this.initialSetIntervalId);

    if (prevProps.activeCanvasSize !== activeCanvasSize) this.setCanvasSize(activeCanvasSize);

    if (activePreviewAnimationFps > 0)
      this.initialSetIntervalId = setInterval(() => {
        requestAnimationFrame(this.cyclicCanvasFrameDisplay);
      }, 1000 / activePreviewAnimationFps);
  }

  setCanvasSize = activeCanvasSize => {
    this.canvas.width = +activeCanvasSize;
    this.canvas.height = +activeCanvasSize;
  };

  cyclicCanvasFrameDisplay = () => {
    const { arrayOfCanvasFrames, activeCanvasSize } = this.props;

    this.ctx.clearRect(0, 0, +activeCanvasSize, +activeCanvasSize);

    if (arrayOfCanvasFrames[this.currentFrame].imageData.data)
      this.ctx.putImageData(arrayOfCanvasFrames[this.currentFrame].imageData, 0, 0);

    this.currentFrame += 1;

    if (this.currentFrame >= arrayOfCanvasFrames.length) this.currentFrame = 0;
  };

  changeFps = event => {
    const { changeFpsPreviewAnimationAction } = this.props;
    const selectedFps = +event.target.value;

    changeFpsPreviewAnimationAction(selectedFps);
  };

  render() {
    const { activePreviewAnimationFps } = this.props;
    return (
      <div className='preview-animation-container'>
        <div className='preview-animation-canvas-container'>
          <canvas id='preview-animation-canvas' />
        </div>
        <div className='preview-animation-fps-selector-container'>
          <span className='preview-animation-fps-indicator'>{`${activePreviewAnimationFps} FPS`}</span>
          <input
            type='range'
            id='preview-animation-fps-selector-input'
            min='0'
            max='24'
            defaultValue={activePreviewAnimationFps}
            onChange={this.changeFps}
          />
        </div>
      </div>
    );
  }
}

PreviewAnimationContainer.propTypes = {
  arrayOfCanvasFrames: PropTypes.arrayOf(object).isRequired,
  activeCanvasSize: PropTypes.string.isRequired,
  changeFpsPreviewAnimationAction: PropTypes.func.isRequired,
  activePreviewAnimationFps: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  arrayOfCanvasFrames: state.canvasFrame.arrayOfCanvasFrames,
  activeCanvasSize: state.tool.activeCanvasSize,
  activePreviewAnimationFps: state.previewAnimation.activePreviewAnimationFps
});
const mapDispatchToProps = dispatch => ({
  changeFpsPreviewAnimationAction: selectedFps => dispatch(changeFpsPreviewAnimation(selectedFps))
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewAnimationContainer);
