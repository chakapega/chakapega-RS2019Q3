import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { changeToolSize } from '../../actions/tool';

import './PenSizeSelector.scss';

class PenSizeSelector extends Component {
  constructor() {
    super();

    this.activeButton = '1';
  }

  componentDidMount() {
    document.querySelector(`.pen-size-button_${this.activeButton}`).classList.add('pen-size-button_active');
  }

  changeSize = event => {
    const { changeToolSizeAction } = this.props;
    const selectedSize = event.target.getAttribute('aria-label');

    document.querySelector('.pen-size-button_active').classList.remove('pen-size-button_active');
    document.querySelector(`.pen-size-button_${selectedSize}`).classList.add('pen-size-button_active');

    this.activeButton = selectedSize;

    changeToolSizeAction(selectedSize);
  };

  render() {
    return (
      <div className='pen-size-selector'>
        <button className='pen-size-button pen-size-button_1' type='button' aria-label='1' onClick={this.changeSize} />
        <button className='pen-size-button pen-size-button_2' type='button' aria-label='2' onClick={this.changeSize} />
        <button className='pen-size-button pen-size-button_3' type='button' aria-label='3' onClick={this.changeSize} />
        <button className='pen-size-button pen-size-button_4' type='button' aria-label='4' onClick={this.changeSize} />
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

export const WrappedPenSizeSelector = connect(mapStateToProps, mapDispatchToProps)(PenSizeSelector);
