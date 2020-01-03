import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeFirstCanvasColor } from '../../store/leftControlUnit/actions';

import './ColorsSelector.scss';

class ColorsSelector extends Component {
  componentDidMount() {
    this.firstColorInput = document.querySelector('#first-color-input');
    this.secondColorInput = document.querySelector('#second-color-input');
  }

  swapColors = () => {
    const { changeFirstCanvasColorAction } = this.props;
    const futureFirstColor = this.secondColorInput.value;
    const futureSecondColor = this.firstColorInput.value;

    this.firstColorInput.value = futureFirstColor;
    this.secondColorInput.value = futureSecondColor;

    changeFirstCanvasColorAction(futureFirstColor);
  };

  changeColor = event => {
    const { changeFirstCanvasColorAction } = this.props;
    const selectedFirstCanvasColor = event.target.value;

    changeFirstCanvasColorAction(selectedFirstCanvasColor);
  };

  render() {
    const { activeFirstCanvasColor, activeSecondCanvasColor } = this.props;

    return (
      <div className='colors-selector'>
        <input
          type='color'
          id='first-color-input'
          name='first-color'
          defaultValue={activeFirstCanvasColor}
          onChange={this.changeColor}
        />
        <input
          type='color'
          id='second-color-input'
          name='second-color'
          defaultValue={activeSecondCanvasColor}
          onChange={this.changeColor}
        />
        <button type='button' className='colors-change-button' onClick={this.swapColors}>
          <i className='colors-change-icon' />
        </button>
      </div>
    );
  }
}

ColorsSelector.propTypes = {
  activeFirstCanvasColor: PropTypes.string.isRequired,
  activeSecondCanvasColor: PropTypes.string.isRequired,
  changeFirstCanvasColorAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeFirstCanvasColor: state.tool.activeFirstCanvasColor,
  activeSecondCanvasColor: state.tool.activeSecondCanvasColor
});

const mapDispatchToProps = dispatch => ({
  changeFirstCanvasColorAction: selectedFirstCanvasColor => dispatch(changeFirstCanvasColor(selectedFirstCanvasColor))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorsSelector);
