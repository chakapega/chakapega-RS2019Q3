import React, { Component } from 'react';

import './SaveResultContainer.scss';

export default class SaveResultContainer extends Component {
  saveResultToGif = () => {
    console.log('go');
  };

  render() {
    return (
      <div className='save-result-container'>
        <button type='button' className='save-result-button' onClick={this.saveResultToGif}>
          Save result to GIF
        </button>
      </div>
    );
  }
}
