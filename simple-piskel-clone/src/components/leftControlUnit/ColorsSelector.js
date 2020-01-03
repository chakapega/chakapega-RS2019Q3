import React, { Component } from 'react';

import './ColorsSelector.scss';

export default class ColorsSelector extends Component {
  componentDidMount() {
    this.firstColorInput = document.querySelector('#first-color-input');
    this.secondColorInput = document.querySelector('#second-color-input');
  }

  swapColors = () => {
    const futureFirstColor = this.secondColorInput.value;
    const futureSecondColor = this.firstColorInput.value;

    this.firstColorInput.value = futureFirstColor;
    this.secondColorInput.value = futureSecondColor;
  };

  render() {
    return (
      <div className='colors-selector'>
        <input type='color' id='first-color-input' name='first-color' defaultValue='#000000' />
        <input type='color' id='second-color-input' name='second-color' defaultValue='#ffffff' />
        <button type='button' className='colors-change-button' onClick={this.swapColors}>
          <i className='colors-change-icon' />
        </button>
      </div>
    );
  }
}
