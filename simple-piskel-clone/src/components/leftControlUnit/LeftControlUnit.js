import React from 'react';

import CanvasSizeSelector from './CanvasSizeSelector';
import PenSizeSelector from './PenSizeSelector';
import ToolsContainer from './ToolsContainer';
import ColorsSelector from './ColorsSelector';

import './LeftControlUnit.scss';

const LeftControlUnit = () => {
  return (
    <div className='main__left-control-unit'>
      <CanvasSizeSelector />
      <PenSizeSelector />
      <ToolsContainer />
      <ColorsSelector />
    </div>
  );
};

export default LeftControlUnit;
