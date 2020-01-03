import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toolPen, toolEraser, toolColorPicker, toolPaintBucket } from '../../constants/constants';
import ToolButton from './ToolButton';
import { changeTool } from '../../store/leftControlUnit/actions';

import './ToolsContainer.scss';

class ToolsContainer extends Component {
  componentDidMount() {
    const { activeTool } = this.props;
    document.querySelector(`.tool_${activeTool}`).classList.add('tool_active');
  }

  changeTool = event => {
    const selectedTool = event.currentTarget.getAttribute('title');
    const { activeTool, changeTool } = this.props;

    if (selectedTool !== activeTool) {
      document.querySelector('.tool_active').classList.remove('tool_active');
      document.querySelector(`.tool_${selectedTool}`).classList.add('tool_active');

      changeTool(selectedTool);
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
  changeTool: PropTypes.func.isRequired,
  activeTool: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  activeTool: state.tool.activeTool
});

const mapDispatchToProps = dispatch => ({
  changeTool: selectedTool => dispatch(changeTool(selectedTool))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer);
