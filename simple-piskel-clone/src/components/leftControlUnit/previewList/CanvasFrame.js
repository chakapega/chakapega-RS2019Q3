import React from 'react';
import PropTypes from 'prop-types';

import './CanvasFrame.scss';

const CanvasFrame = ({ id, isActive }) => {
  const className = isActive
    ? 'preview-list-canvas-container preview-list-canvas-container_active'
    : 'preview-list-canvas-container';

  return (
    <li className='canvas-frame'>
      <div className={className}>
        <canvas id={`preview-canvas_${id}`} className='preview-list-canvas' />
      </div>
    </li>
  );
};

CanvasFrame.propTypes = {
  id: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default CanvasFrame;
