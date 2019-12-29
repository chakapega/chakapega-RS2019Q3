import React from 'react';

import WrappedPenSizeSelector from './PenSizeSelector';
import WrappedToolsContainer from './ToolsContainer';

import './LeftControlUnit.scss';

const LeftControlUnit = () => {
  return (
    <div className='main__left-control-unit'>
      <WrappedPenSizeSelector />
      <WrappedToolsContainer />
    </div>
  );
};

export default LeftControlUnit;
