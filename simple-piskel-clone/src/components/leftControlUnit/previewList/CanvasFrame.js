import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './CanvasFrame.scss';

class CanvasFrame extends Component {
  showHiddenButtonsOnCanvasFrame = id => {
    document
      .querySelector(`#delete-canvas-button_${id}`)
      .classList.remove('delete-canvas-frame-button-container_hidden');
  };

  hideButtonsOnCanvasFrame = id => {
    document.querySelector(`#delete-canvas-button_${id}`).classList.add('delete-canvas-frame-button-container_hidden');
  };

  render() {
    const { id, isActive, changeActiveCanvasFrame, deleteCanvasFrame } = this.props;
    const className = isActive
      ? 'preview-list-canvas-container preview-list-canvas-container_active'
      : 'preview-list-canvas-container';

    return (
      <li className='canvas-frame'>
        <button
          type='button'
          className={className}
          onClick={() => changeActiveCanvasFrame(id)}
          onMouseEnter={() => this.showHiddenButtonsOnCanvasFrame(id)}
          onMouseLeave={() => this.hideButtonsOnCanvasFrame(id)}
        >
          <canvas id={`preview-canvas_${id}`} className='preview-list-canvas' />
        </button>
        <div
          id={`delete-canvas-button_${id}`}
          className='delete-canvas-frame-button-container delete-canvas-frame-button-container_hidden'
          onMouseEnter={() => this.showHiddenButtonsOnCanvasFrame(id)}
          onMouseLeave={() => this.hideButtonsOnCanvasFrame(id)}
        >
          <button
            type='button'
            className='delete-canvas-frame-button'
            aria-label='delete frame'
            onClick={() => deleteCanvasFrame(id)}
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
  deleteCanvasFrame: PropTypes.func.isRequired
};

export default CanvasFrame;
