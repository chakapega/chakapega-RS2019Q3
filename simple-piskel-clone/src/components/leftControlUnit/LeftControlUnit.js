import React from 'react';

import { WrappedPenSizeSelector } from './PenSizeSelector';

import './LeftControlUnit.scss';

const LeftControlUnit = () => {
  return (
    <div className='main__left-control-unit'>
      <WrappedPenSizeSelector />
    </div>
  );
};

export default LeftControlUnit;
