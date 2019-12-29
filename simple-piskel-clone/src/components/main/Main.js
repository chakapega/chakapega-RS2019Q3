import React from 'react';

import './Main.scss';

import WrappedCanvas from '../canvas/Canvas';
import LeftControlUnit from '../leftControlUnit/LeftControlUnit';
import RightControlUnit from '../rightControlUnit/RightControlUnit';

const Main = () => {
  return (
    <main className='main'>
      <LeftControlUnit />
      <WrappedCanvas />
      <RightControlUnit />
    </main>
  );
};

export default Main;
