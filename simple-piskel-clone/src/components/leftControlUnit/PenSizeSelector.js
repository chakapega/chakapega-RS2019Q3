import React, { Component } from 'react';

import './PenSizeSelector.scss';

export default class PenSizeSelector extends Component {
  render() {
    return (
      <div className='pen-size-selector'>
        <button
          className='pen-size-button pen-size-button_first'
          type='button'
          aria-label='1'
        />
        <button
          className='pen-size-button pen-size-button_active pen-size-button_second'
          type='button'
          aria-label='2'
        />
        <button
          className='pen-size-button pen-size-button_third'
          type='button'
          aria-label='3'
        />
        <button
          className='pen-size-button pen-size-button_fourth'
          type='button'
          aria-label='4'
        />
      </div>
    );
  }
}
