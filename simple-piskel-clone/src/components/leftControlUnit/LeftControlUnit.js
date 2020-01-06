import React from 'react';

import CanvasSizeSelector from './tools/CanvasSizeSelector';
import PenSizeSelector from './tools/PenSizeSelector';
import ToolsContainer from './tools/ToolsContainer';
import ColorsSelector from './tools/ColorsSelector';
import PreviewList from './previewList/PreviewList';

import './LeftControlUnit.scss';

const LeftControlUnit = () => {
  return (
    <div className='main__left-control-unit'>
      <div className='tool-container-wrapper'>
        <CanvasSizeSelector />
        <PenSizeSelector />
        <ToolsContainer />
        <ColorsSelector />
      </div>
      <PreviewList />
    </div>
  );
};

export default LeftControlUnit;
