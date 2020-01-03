import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  canvasSizeThirtyTwo,
  canvasSizeSixtyFour,
  canvasSizeOneHundredAndTwentyEight
} from '../../constants/constants';
import { changeCanvasSize } from '../../store/leftControlUnit/actions';

import './CanvasSizeSelector.scss';

class CanvasSizeSelector extends Component {
  componentDidMount() {
    const { activeCanvasSize } = this.props;
    document.querySelector(`.canvas-size-button_${activeCanvasSize}`).classList.add('canvas-size-button_active');
  }

  changeSize = event => {
    const { activeCanvasSize, changeCanvasSizeAction } = this.props;
    const selectedCanvasSize = event.target.getAttribute('aria-label');

    if (selectedCanvasSize !== activeCanvasSize) {
      document.querySelector('.canvas-size-button_active').classList.remove('canvas-size-button_active');
      document.querySelector(`.canvas-size-button_${selectedCanvasSize}`).classList.add('canvas-size-button_active');

      changeCanvasSizeAction(selectedCanvasSize);
    }
  };

  render() {
    return (
      <div className='canvas-size-selector'>
        <button
          className='canvas-size-button canvas-size-button_32'
          type='button'
          aria-label={canvasSizeThirtyTwo}
          onClick={this.changeSize}
        >
          32x32
        </button>
        <button
          className='canvas-size-button canvas-size-button_64'
          type='button'
          aria-label={canvasSizeSixtyFour}
          onClick={this.changeSize}
        >
          64x64
        </button>
        <button
          className='canvas-size-button canvas-size-button_128'
          type='button'
          aria-label={canvasSizeOneHundredAndTwentyEight}
          onClick={this.changeSize}
        >
          128x128
        </button>
      </div>
    );
  }
}

CanvasSizeSelector.propTypes = {
  activeCanvasSize: PropTypes.string.isRequired,
  changeCanvasSizeAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeCanvasSize: state.tool.activeCanvasSize
});

const mapDispatchToProps = dispatch => ({
  changeCanvasSizeAction: selectedCanvasSize => dispatch(changeCanvasSize(selectedCanvasSize))
});

export default connect(mapStateToProps, mapDispatchToProps)(CanvasSizeSelector);
