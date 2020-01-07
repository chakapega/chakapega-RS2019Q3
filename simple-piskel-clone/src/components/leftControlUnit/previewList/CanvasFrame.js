import React from 'react';
import PropTypes from 'prop-types';

import './CanvasFrame.scss';

const CanvasFrame = ({ id, isActive, changeActiveCanvasFrame, deleteCanvasFrame }) => {
  const className = isActive
    ? 'preview-list-canvas-container preview-list-canvas-container_active'
    : 'preview-list-canvas-container';

  return (
    <li className='canvas-frame'>
      <button type='button' className={className} onClick={() => changeActiveCanvasFrame(id)}>
        <canvas id={`preview-canvas_${id}`} className='preview-list-canvas' />
      </button>
      <div className='delete-canvas-frame-icon-container'>
        <button
          type='button'
          className='delete-canvas-frame-button'
          aria-label='delete frame'
          onClick={() => deleteCanvasFrame(id)}
        />
      </div>
    </li>
  );
};

CanvasFrame.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  changeActiveCanvasFrame: PropTypes.func.isRequired,
  deleteCanvasFrame: PropTypes.func.isRequired
};

export default CanvasFrame;
