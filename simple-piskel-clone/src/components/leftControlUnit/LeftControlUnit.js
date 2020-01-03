import React from 'react';

import PenSizeSelector from './PenSizeSelector';
import ToolsContainer from './ToolsContainer';

import './LeftControlUnit.scss';

const LeftControlUnit = () => {
  return (
    <div className='main__left-control-unit'>
      <PenSizeSelector />
      <ToolsContainer />
    </div>
  );
};

export default LeftControlUnit;
