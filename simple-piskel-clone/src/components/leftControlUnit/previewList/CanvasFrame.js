import React from 'react';
import PropTypes from 'prop-types';

import './CanvasFrame.scss';

const CanvasFrame = ({ id, isActive, changeActiveCanvasFrame }) => {
  const className = isActive
    ? 'preview-list-canvas-container preview-list-canvas-container_active'
    : 'preview-list-canvas-container';

  return (
    <li className='canvas-frame'>
      <button type='button' id={id} className={className} onClick={changeActiveCanvasFrame}>
        <canvas id={`preview-canvas_${id}`} className='preview-list-canvas' />
      </button>
    </li>
  );
};

CanvasFrame.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  changeActiveCanvasFrame: PropTypes.func.isRequired
};

export default CanvasFrame;
