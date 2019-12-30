import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toolSizeOne, toolSizeTwo, toolSizeThree, toolSizeFour } from '../../constants/constants';
import { changeToolSize } from '../../actions/toolsActions';

import './PenSizeSelector.scss';

class PenSizeSelector extends Component {
  constructor() {
    super();

    this.toolSize = toolSizeOne;
  }

  componentDidMount() {
    document.querySelector(`.pen-size-button_${this.toolSize}`).classList.add('pen-size-button_active');
  }

  changeSize = event => {
    const { changeToolSizeAction } = this.props;
    const selectedSize = event.target.getAttribute('aria-label');

    if (selectedSize !== this.toolSize) {
      document.querySelector('.pen-size-button_active').classList.remove('pen-size-button_active');
      document.querySelector(`.pen-size-button_${selectedSize}`).classList.add('pen-size-button_active');

      this.toolSize = selectedSize;

      changeToolSizeAction(selectedSize);
    }
  };

  render() {
    return (
      <div className='pen-size-selector'>
        <button
          className='pen-size-button pen-size-button_1'
          type='button'
          aria-label={toolSizeOne}
          onClick={this.changeSize}
        />
        <button
          className='pen-size-button pen-size-button_2'
          type='button'
          aria-label={toolSizeTwo}
          onClick={this.changeSize}
        />
        <button
          className='pen-size-button pen-size-button_3'
          type='button'
          aria-label={toolSizeThree}
          onClick={this.changeSize}
        />
        <button
          className='pen-size-button pen-size-button_4'
          type='button'
          aria-label={toolSizeFour}
          onClick={this.changeSize}
        />
      </div>
    );
  }
}

PenSizeSelector.propTypes = {
  changeToolSizeAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  toolSize: state.toolSize
});

const mapDispatchToProps = dispatch => ({
  changeToolSizeAction: toolSize => dispatch(changeToolSize(toolSize))
});

const WrappedPenSizeSelector = connect(mapStateToProps, mapDispatchToProps)(PenSizeSelector);

export default WrappedPenSizeSelector;