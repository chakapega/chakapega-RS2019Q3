import React from 'react';

import './Main.css';

import Canvas from '../canvas/Canvas';
import LeftControlUnit from '../leftControlUnit/LeftControlUnit';
import RightControlUnit from '../rightControlUnit/RightControlUnit';

const Main = () => {
  return (
    <main className="main">
      <LeftControlUnit />
      <Canvas />
      <RightControlUnit />
    </main>
  );
};

export default Main;
