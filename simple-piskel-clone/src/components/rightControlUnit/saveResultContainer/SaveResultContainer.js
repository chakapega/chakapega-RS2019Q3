import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';

import './SaveResultContainer.scss';

const UPNG = require('upng-js');
const GIF = require('gif.js');
const download = require('downloadjs');

class SaveResultContainer extends Component {
  saveResultToApng = () => {
    const { arrayOfCanvasFrames, activePreviewAnimationFps, activeCanvasSize } = this.props;
    const delay = 1000 / activePreviewAnimationFps;
    const arrayOfFrames = [];
    const arrayOfDelays = [];

    arrayOfCanvasFrames.forEach(canvasFrame => {
      if (canvasFrame.imageData.data) arrayOfFrames.push(canvasFrame.imageData.data.buffer);
      arrayOfDelays.push(delay);
    });

    if (arrayOfFrames.length) {
      const result = UPNG.encode(arrayOfFrames, +activeCanvasSize, +activeCanvasSize, 0, arrayOfDelays);

      download(result, 'animation.apng', 'apng');
    }
  };

  saveResultToGif = () => {
    const { activePreviewAnimationFps, activeCanvasSize } = this.props;
    const delay = 1000 / activePreviewAnimationFps;
    const arrayOfPreviewCanvases = Array.from(document.querySelectorAll('.preview-list-canvas'));
    const gif = new GIF({
      width: +activeCanvasSize,
      height: +activeCanvasSize
    });

    arrayOfPreviewCanvases.forEach(previewCanvas => {
      gif.addFrame(previewCanvas, { delay });
    });
    gif.on('finished', resultGif => {
      download(resultGif, 'animation.gif', 'gif');
    });
    gif.render();
  };

  render() {
    return (
      <div className='save-result-container'>
        <button type='button' className='save-result-button_apng' onClick={this.saveResultToApng}>
          Save result to APNG
        </button>
        <button type='button' className='save-result-button_gif' onClick={this.saveResultToGif}>
          Save result to GIF
        </button>
      </div>
    );
  }
}

SaveResultContainer.propTypes = {
  arrayOfCanvasFrames: PropTypes.arrayOf(object).isRequired,
  activeCanvasSize: PropTypes.string.isRequired,
  activePreviewAnimationFps: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  arrayOfCanvasFrames: state.canvasFrame.arrayOfCanvasFrames,
  activeCanvasSize: state.tool.activeCanvasSize,
  activePreviewAnimationFps: state.previewAnimation.activePreviewAnimationFps
});

export default connect(mapStateToProps)(SaveResultContainer);
