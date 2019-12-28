import React from 'react';

import './LeftControlUnit.scss';

import PenSizeSelector from './PenSizeSelector';

const LeftControlUnit = () => {
  return (
    <div className='main__left-control-unit'>
      <PenSizeSelector />
    </div>
  );
};

export default LeftControlUnit;
