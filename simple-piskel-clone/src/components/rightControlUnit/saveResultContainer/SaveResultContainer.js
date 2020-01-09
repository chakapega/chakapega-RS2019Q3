import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';

import './SaveResultContainer.scss';

const UPNG = require('upng-js');
const download = require('downloadjs');

class SaveResultContainer extends Component {
  saveResultToApng = () => {
    const { arrayOfCanvasFrames, activePreviewAnimationFps, activeCanvasSize } = this.props;
    const delay = 1000 / activePreviewAnimationFps;
    const arrayOfFrames = [];
    const arrayOfDelays = [];

    arrayOfCanvasFrames.forEach(canvasFrame => {
      arrayOfFrames.push(canvasFrame.imageData.data.buffer);
      arrayOfDelays.push(delay);
    });

    const result = UPNG.encode(arrayOfFrames, +activeCanvasSize, +activeCanvasSize, 0, arrayOfDelays);

    download(result, 'animation.apng', 'apng');
  };

  render() {
    return (
      <div className='save-result-container'>
        <button type='button' className='save-result-button_apng' onClick={this.saveResultToApng}>
          Save result to APNG
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
