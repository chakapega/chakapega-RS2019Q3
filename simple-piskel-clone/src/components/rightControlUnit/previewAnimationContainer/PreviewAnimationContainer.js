import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';

import changeFpsPreviewAnimation from '../../../store/rightControlUnit/actions';

import './PreviewAnimationContainer.scss';

class PreviewAnimationContainer extends Component {
  componentDidMount() {
    const { activeCanvasSize, activePreviewAnimationFps } = this.props;

    this.canvas = document.querySelector('#preview-animation-canvas');
    this.fullScreenButtonContainer = document.querySelector('.full-screen-button-container');
    this.canvas.width = +activeCanvasSize;
    this.canvas.height = +activeCanvasSize;
    this.ctx = this.canvas.getContext('2d');
    this.currentFrame = 0;
    this.setIntervalId = this.startAnimation(activePreviewAnimationFps);
  }

  componentDidUpdate(prevProps) {
    const { activePreviewAnimationFps, activeCanvasSize } = this.props;

    clearInterval(this.setIntervalId);

    this.currentFrame = 0;

    if (prevProps.activeCanvasSize !== activeCanvasSize) this.setCanvasSize(activeCanvasSize);
    this.setIntervalId = this.startAnimation(activePreviewAnimationFps);
  }

  startAnimation = activePreviewAnimationFps => {
    return setInterval(() => {
      requestAnimationFrame(this.cyclicCanvasFrameDisplay);
    }, 1000 / activePreviewAnimationFps);
  };

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

  showFullScreenButtonContainer = () => {
    if (this.fullScreenButtonContainer)
      this.fullScreenButtonContainer.classList.remove('full-screen-button-container_hidden');
  };

  hideFullScreenButtonContainer = () => {
    if (this.fullScreenButtonContainer)
      this.fullScreenButtonContainer.classList.add('full-screen-button-container_hidden');
  };

  fullScreenAnimationPreview = () => {
    if (
      'fullscreenEnabled' in document ||
      'webkitFullscreenEnabled' in document ||
      'mozFullScreenEnabled' in document ||
      'msFullscreenEnabled' in document
    ) {
      if (
        document.fullscreenEnabled ||
        document.webkitFullscreenEnabled ||
        document.mozFullScreenEnabled ||
        document.msFullscreenEnabled
      ) {
        const previewAnimationCanvas = document.querySelector('#preview-animation-canvas');

        if ('requestFullscreen' in previewAnimationCanvas) {
          previewAnimationCanvas.requestFullscreen();
        } else if ('webkitRequestFullscreen' in previewAnimationCanvas) {
          previewAnimationCanvas.webkitRequestFullscreen();
        } else if ('mozRequestFullScreen' in previewAnimationCanvas) {
          previewAnimationCanvas.mozRequestFullScreen();
        } else if ('msRequestFullscreen' in previewAnimationCanvas) {
          previewAnimationCanvas.msRequestFullscreen();
        }
      }
    }
  };

  render() {
    const { activePreviewAnimationFps } = this.props;
    return (
      <div className='preview-animation-container'>
        <div
          className='preview-animation-canvas-container'
          onMouseEnter={this.showFullScreenButtonContainer}
          onMouseLeave={this.hideFullScreenButtonContainer}
        >
          <canvas id='preview-animation-canvas' />
          <div className='full-screen-button-container full-screen-button-container_hidden'>
            <button
              type='button'
              className='full-screen-button'
              aria-label='full-screen-button'
              title='full screen'
              onClick={this.fullScreenAnimationPreview}
            />
          </div>
        </div>
        <div className='preview-animation-fps-selector-container'>
          <span className='preview-animation-fps-indicator'>{`${activePreviewAnimationFps} FPS`}</span>
          <input
            type='range'
            id='preview-animation-fps-selector-input'
            min='1'
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
