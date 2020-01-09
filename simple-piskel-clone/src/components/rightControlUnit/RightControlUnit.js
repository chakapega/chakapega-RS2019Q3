import React from 'react';

import PreviewAnimationContainer from './previewAnimationContainer/PreviewAnimationContainer';
import SaveResultContainer from './saveResultContainer/SaveResultContainer';

import './RightControlUnit.scss';

const RightControlUnit = () => {
  return (
    <div className='main__right-control-unit'>
      <PreviewAnimationContainer />
      <SaveResultContainer />
    </div>
  );
};

export default RightControlUnit;
