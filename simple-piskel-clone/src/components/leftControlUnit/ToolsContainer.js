import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toolPen, toolEraser, toolColorPicker, toolPaintBucket } from '../../constants/constants';
import ToolButton from './ToolButton';
import { changeTool } from '../../actions/toolsActions';

import './ToolsContainer.scss';

class ToolsContainer extends Component {
  constructor() {
    super();

    this.selectedTool = 'pen';
  }

  componentDidMount() {
    document.querySelector(`.tool_${this.selectedTool}`).classList.add('tool_active');
  }

  changeTool = event => {
    const { changeToolAction } = this.props;
    const selectedTool = event.currentTarget.getAttribute('title');

    if (selectedTool !== this.selectedTool) {
      document.querySelector('.tool_active').classList.remove('tool_active');
      document.querySelector(`.tool_${selectedTool}`).classList.add('tool_active');

      this.selectedTool = selectedTool;

      changeToolAction(selectedTool);
    }
  };

  render() {
    return (
      <div className='tools-container'>
        <ToolButton toolName={toolPen} changeTool={this.changeTool} />
        <ToolButton toolName={toolEraser} changeTool={this.changeTool} />
        <ToolButton toolName={toolColorPicker} changeTool={this.changeTool} />
        <ToolButton toolName={toolPaintBucket} changeTool={this.changeTool} />
      </div>
    );
  }
}

ToolsContainer.propTypes = {
  changeToolAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  selectedTool: state.selectedTool
});

const mapDispatchToProps = dispatch => ({
  changeToolAction: selectedTool => dispatch(changeTool(selectedTool))
});

const WrappedToolsContainer = connect(mapStateToProps, mapDispatchToProps)(ToolsContainer);

export default WrappedToolsContainer;
