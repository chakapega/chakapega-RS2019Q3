import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';

import CanvasFrame from './CanvasFrame';
import { addNewCanvasFrame, changeActiveCanvasFrame } from '../../../store/leftControlUnit/canvasFrames/actions';

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

      if (imageData.data) ctx.putImageData(imageData, 0, 0);
    });
  };

  addNewCanvasFrame = () => {
    const { addNewCanvasFrameAction } = this.props;

    addNewCanvasFrameAction();
  };

  changeActiveCanvasFrame = event => {
    const { changeActiveCanvasFrameAction } = this.props;
    const { id } = event.currentTarget;

    changeActiveCanvasFrameAction(+id);
  };

  render() {
    const { arrayOfCanvasFrames } = this.props;

    return (
      <div className='preview-list-container'>
        <ul className='preview-list'>
          {arrayOfCanvasFrames.map(canvasFrame => (
            <CanvasFrame
              key={canvasFrame.id}
              id={canvasFrame.id}
              isActive={canvasFrame.isActive}
              imageData={canvasFrame.imageData}
              changeActiveCanvasFrame={this.changeActiveCanvasFrame}
            />
          ))}
        </ul>
        <button type='button' className='add-new-frame-button' onClick={this.addNewCanvasFrame}>
          Add new frame
        </button>
      </div>
    );
  }
}

PreviewList.propTypes = {
  arrayOfCanvasFrames: PropTypes.arrayOf(object).isRequired,
  addNewCanvasFrameAction: PropTypes.func.isRequired,
  changeActiveCanvasFrameAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  arrayOfCanvasFrames: state.canvasFrame.arrayOfCanvasFrames
});
const mapDispatchToProps = dispatch => ({
  addNewCanvasFrameAction: () => dispatch(addNewCanvasFrame()),
  changeActiveCanvasFrameAction: id => dispatch(changeActiveCanvasFrame(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PreviewList);
