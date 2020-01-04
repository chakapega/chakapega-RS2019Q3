import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toolSizeOne, toolSizeTwo, toolSizeThree, toolSizeFour } from '../../helpers/constants';
import { changeToolSize } from '../../store/leftControlUnit/actions';

import './PenSizeSelector.scss';

class PenSizeSelector extends Component {
  componentDidMount() {
    const { activeToolSize } = this.props;
    document.querySelector(`.pen-size-button_${activeToolSize}`).classList.add('pen-size-button_active');
  }

  changeSize = event => {
    const { activeToolSize, changeToolSizeAction } = this.props;
    const selectedToolSize = event.target.getAttribute('aria-label');

    if (selectedToolSize !== activeToolSize) {
      document.querySelector('.pen-size-button_active').classList.remove('pen-size-button_active');
      document.querySelector(`.pen-size-button_${selectedToolSize}`).classList.add('pen-size-button_active');

      changeToolSizeAction(selectedToolSize);
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
  activeToolSize: PropTypes.string.isRequired,
  changeToolSizeAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  activeToolSize: state.tool.activeToolSize
});

const mapDispatchToProps = dispatch => ({
  changeToolSizeAction: selectedToolSize => dispatch(changeToolSize(selectedToolSize))
});

export default connect(mapStateToProps, mapDispatchToProps)(PenSizeSelector);
