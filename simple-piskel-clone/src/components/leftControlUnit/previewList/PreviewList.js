import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CanvasFrame from './CanvasFrame';

import './PreviewList.scss';

class PreviewList extends Component {
  componentDidUpdate() {
    this.displayImagesOnCanvas();
  }

  displayImagesOnCanvas = () => {
    const { arrayOfCanvasFrames } = this.props;

    arrayOfCanvasFrames.forEach(canvasFrame => {
      const { id, imageData } = canvasFrame;
      const { width, height } = imageData;
      const canvas = document.querySelector(`#preview-canvas_${id}`);
      const ctx = canvas.getContext('2d');

      canvas.width = width;
      canvas.height = height;
      ctx.putImageData(canvasFrame.imageData, 0, 0);
    });
  };

  render() {
    const { arrayOfCanvasFrames } = this.props;

    return (
      <ul className='preview-list'>
        {arrayOfCanvasFrames.map(canvasFrame => (
          <CanvasFrame
            key={canvasFrame.id}
            id={canvasFrame.id}
            isActive={canvasFrame.isActive}
            imageData={canvasFrame.imageData}
          />
        ))}
      </ul>
    );
  }
}

PreviewList.propTypes = {
  arrayOfCanvasFrames: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  arrayOfCanvasFrames: state.canvasFrame.arrayOfCanvasFrames
});

export default connect(mapStateToProps)(PreviewList);
