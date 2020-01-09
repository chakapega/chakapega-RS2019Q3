import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';

import './CanvasFrame.scss';

class CanvasFrame extends Component {
  showHiddenButtonsOnCanvasFrame = () => {
    const { id, arrayOfCanvasFrames } = this.props;

    if (arrayOfCanvasFrames.length > 1)
      document
        .querySelector(`#delete-canvas-frame-button-container_${id}`)
        .classList.remove('delete-canvas-frame-button-container_hidden');
    document
      .querySelector(`#duplicate-canvas-frame-button-container_${id}`)
      .classList.remove('duplicate-canvas-frame-button-container_hidden');
  };

  hideButtonsOnCanvasFrame = () => {
    const { id } = this.props;

    document
      .querySelector(`#delete-canvas-frame-button-container_${id}`)
      .classList.add('delete-canvas-frame-button-container_hidden');
    document
      .querySelector(`#duplicate-canvas-frame-button-container_${id}`)
      .classList.add('duplicate-canvas-frame-button-container_hidden');
  };

  render() {
    const { id, isActive, changeActiveCanvasFrame, deleteCanvasFrame } = this.props;
    const className = isActive
      ? 'preview-list-canvas-container preview-list-canvas-container_active'
      : 'preview-list-canvas-container';

    return (
      <li
        className='canvas-frame'
        onMouseEnter={this.showHiddenButtonsOnCanvasFrame}
        onMouseLeave={this.hideButtonsOnCanvasFrame}
      >
        <button type='button' className={className} onClick={() => changeActiveCanvasFrame(id)}>
          <canvas id={`preview-canvas_${id}`} className='preview-list-canvas' />
        </button>
        <div
          id={`delete-canvas-frame-button-container_${id}`}
          className='delete-canvas-frame-button-container delete-canvas-frame-button-container_hidden'
        >
          <button
            type='button'
            className='delete-canvas-frame-button'
            aria-label='delete frame'
            title='delete frame'
            onClick={() => deleteCanvasFrame(id)}
          />
        </div>
        <div
          id={`duplicate-canvas-frame-button-container_${id}`}
          className='duplicate-canvas-frame-button-container duplicate-canvas-frame-button-container_hidden'
        >
          <button
            type='button'
            className='duplicate-canvas-frame-button'
            aria-label='duplicate frame'
            title='duplicate frame'
          />
        </div>
      </li>
    );
  }
}

CanvasFrame.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  changeActiveCanvasFrame: PropTypes.func.isRequired,
  deleteCanvasFrame: PropTypes.func.isRequired,
  arrayOfCanvasFrames: PropTypes.arrayOf(object).isRequired
};

export default CanvasFrame;
