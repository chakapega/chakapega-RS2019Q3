import React from 'react';
import PropTypes from 'prop-types';

import './CanvasFrame.scss';

const CanvasFrame = ({ id }) => {
  return (
    <li className='canvas-frame'>
      <div className='preview-list-canvas-container'>
        <canvas id={`preview-canvas_${id}`} className='preview-list-canvas' />
      </div>
    </li>
  );
};

CanvasFrame.propTypes = {
  id: PropTypes.number.isRequired
};

export default CanvasFrame;
