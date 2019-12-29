import React from 'react';
import PropTypes from 'prop-types';

import './ToolButton.scss';

const ToolButton = ({ toolName, changeTool }) => {
  return (
    <button
      className={`tool tool_${toolName}`}
      type='button'
      aria-label={toolName}
      title={toolName}
      onClick={changeTool}
    >
      <i className={`tool-icon tool-icon_${toolName}`} />
    </button>
  );
};

ToolButton.propTypes = {
  toolName: PropTypes.string.isRequired,
  changeTool: PropTypes.func.isRequired
};

export default ToolButton;
