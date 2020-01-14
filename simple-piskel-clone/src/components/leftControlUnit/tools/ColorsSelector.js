import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeFirstCanvasColor, changeSecondCanvasColor } from '../../../store/leftControlUnit/tools/actions';

import './ColorsSelector.scss';

class ColorsSelector extends Component {
  componentDidMount() {
    this.firstColorInput = document.querySelector('#first-color-input');
    this.secondColorInput = document.querySelector('#second-color-input');
  }

  swapColors = () => {
    const { changeFirstCanvasColorAction, changeSecondCanvasColorAction } = this.props;
    const futureFirstColor = this.secondColorInput.value;
    const futureSecondColor = this.firstColorInput.value;

    changeFirstCanvasColorAction(futureFirstColor);
    changeSecondCanvasColorAction(futureSecondColor);
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
          value={activeFirstCanvasColor}
          onChange={this.changeColor}
        />
        <input
          type='color'
          id='second-color-input'
          name='second-color'
          value={activeSecondCanvasColor}
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
  changeFirstCanvasColorAction: PropTypes.func.isRequired,
  changeSecondCanvasColorAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeFirstCanvasColor: state.tool.activeFirstCanvasColor,
  activeSecondCanvasColor: state.tool.activeSecondCanvasColor
});

const mapDispatchToProps = dispatch => ({
  changeFirstCanvasColorAction: selectedFirstCanvasColor => dispatch(changeFirstCanvasColor(selectedFirstCanvasColor)),
  changeSecondCanvasColorAction: selectedSecondCanvasColor =>
    dispatch(changeSecondCanvasColor(selectedSecondCanvasColor))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorsSelector);
