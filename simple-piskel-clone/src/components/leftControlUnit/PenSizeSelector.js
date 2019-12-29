import React, { Component } from 'react';

import './PenSizeSelector.scss';

export default class PenSizeSelector extends Component {
  constructor() {
    super();

    this.activeButton = 'first';
  }

  componentDidMount() {
    document.querySelector(`.pen-size-button_${this.activeButton}`).classList.add('pen-size-button_active');
  }

  changeSize = event => {
    const selectedSize = event.target.getAttribute('aria-label');

    document.querySelector('.pen-size-button_active').classList.remove('pen-size-button_active');
    document.querySelector(`.pen-size-button_${selectedSize}`).classList.add('pen-size-button_active');
  };

  render() {
    return (
      <div className='pen-size-selector'>
        <button
          className='pen-size-button pen-size-button_first'
          type='button'
          aria-label='first'
          onClick={this.changeSize}
        />
        <button
          className='pen-size-button pen-size-button_second'
          type='button'
          aria-label='second'
          onClick={this.changeSize}
        />
        <button
          className='pen-size-button pen-size-button_third'
          type='button'
          aria-label='third'
          onClick={this.changeSize}
        />
        <button
          className='pen-size-button pen-size-button_fourth'
          type='button'
          aria-label='fourth'
          onClick={this.changeSize}
        />
      </div>
    );
  }
}
