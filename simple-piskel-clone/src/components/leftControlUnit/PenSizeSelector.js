import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toolSizeOne, toolSizeTwo, toolSizeThree, toolSizeFour } from '../../constants/constants';
import { changeToolSize } from '../../store/leftControlUnit/actions';

import './PenSizeSelector.scss';

class PenSizeSelector extends Component {
  componentDidMount() {
    const { toolSize } = this.props;
    document.querySelector(`.pen-size-button_${toolSize}`).classList.add('pen-size-button_active');
  }

  changeSize = event => {
    const { toolSize, changeToolSizeAction } = this.props;
    const selectedSize = event.target.getAttribute('aria-label');

    if (selectedSize !== toolSize) {
      document.querySelector('.pen-size-button_active').classList.remove('pen-size-button_active');
      document.querySelector(`.pen-size-button_${selectedSize}`).classList.add('pen-size-button_active');

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
  toolSize: PropTypes.string.isRequired,
  changeToolSizeAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  toolSize: state.tool.toolSize
});

const mapDispatchToProps = dispatch => ({
  changeToolSizeAction: toolSize => dispatch(changeToolSize(toolSize))
});

export default connect(mapStateToProps, mapDispatchToProps)(PenSizeSelector);
