import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';

import './CanvasFrame.scss';

class CanvasFrame extends Component {
  showHiddenButtonsOnCanvasFrame = () => {
    const { id } = this.props;
    const deleteCanvasFrameButtonContainer = document.querySelector(`#delete-canvas-frame-button-container_${id}`);
    const duplicateCanvasFrameButtonContainer = document.querySelector(
      `#duplicate-canvas-frame-button-container_${id}`
    );

    if (deleteCanvasFrameButtonContainer)
      deleteCanvasFrameButtonContainer.classList.remove('delete-canvas-frame-button-container_hidden');
    if (duplicateCanvasFrameButtonContainer)
      duplicateCanvasFrameButtonContainer.classList.remove('duplicate-canvas-frame-button-container_hidden');
  };

  hideButtonsOnCanvasFrame = () => {
    const { id } = this.props;
    const deleteCanvasFrameButtonContainer = document.querySelector(`#delete-canvas-frame-button-container_${id}`);
    const duplicateCanvasFrameButtonContainer = document.querySelector(
      `#duplicate-canvas-frame-button-container_${id}`
    );

    if (deleteCanvasFrameButtonContainer)
      deleteCanvasFrameButtonContainer.classList.add('delete-canvas-frame-button-container_hidden');
    if (duplicateCanvasFrameButtonContainer)
      duplicateCanvasFrameButtonContainer.classList.add('duplicate-canvas-frame-button-container_hidden');
  };

  render() {
    const {
      id,
      isActive,
      changeActiveCanvasFrame,
      deleteCanvasFrame,
      addDuplicateFrame,
      arrayOfCanvasFrames
    } = this.props;
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
        {arrayOfCanvasFrames.length > 1 && (
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
        )}

        {arrayOfCanvasFrames.length < 5 && (
          <div
            id={`duplicate-canvas-frame-button-container_${id}`}
            className='duplicate-canvas-frame-button-container duplicate-canvas-frame-button-container_hidden'
          >
            <button
              type='button'
              className='duplicate-canvas-frame-button'
              aria-label='duplicate frame'
              title='duplicate frame'
              onClick={() => addDuplicateFrame(id)}
            />
          </div>
        )}
      </li>
    );
  }
}

CanvasFrame.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  changeActiveCanvasFrame: PropTypes.func.isRequired,
  deleteCanvasFrame: PropTypes.func.isRequired,
  arrayOfCanvasFrames: PropTypes.arrayOf(object).isRequired,
  addDuplicateFrame: PropTypes.func.isRequired
};

export default CanvasFrame;
