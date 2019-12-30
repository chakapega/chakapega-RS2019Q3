import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toolPen, toolEraser, toolColorPicker, toolPaintBucket } from '../../constants/constants';
import ToolButton from './ToolButton';
import { changeToolAction } from '../../actions/toolsActions';

import './ToolsContainer.scss';

class ToolsContainer extends Component {
  constructor() {
    super();

    this.state = {
      activeTool: toolPen
    };
  }

  componentDidMount() {
    const { activeTool } = this.state;
    document.querySelector(`.tool_${activeTool}`).classList.add('tool_active');
  }

  changeTool = event => {
    const selectedTool = event.currentTarget.getAttribute('title');
    const { activeTool } = this.state;
    const { changeToolAction } = this.props;

    if (selectedTool !== activeTool) {
      document.querySelector('.tool_active').classList.remove('tool_active');
      document.querySelector(`.tool_${selectedTool}`).classList.add('tool_active');

      this.setState({
        activeTool: selectedTool
      });

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

const mapDispatchToProps = dispatch => ({
  changeToolAction: selectedTool => dispatch(changeToolAction(selectedTool))
});

const WrappedToolsContainer = connect(null, mapDispatchToProps)(ToolsContainer);

export default WrappedToolsContainer;
