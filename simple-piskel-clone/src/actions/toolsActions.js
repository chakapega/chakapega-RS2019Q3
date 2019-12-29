import { CHANGE_TOOL_SIZE, CHANGE_TOOL } from './tooslActionsTypes';

export const changeToolSize = toolSize => {
  return {
    type: CHANGE_TOOL_SIZE,
    payload: toolSize
  };
};

export const changeTool = selectedTool => {
  return {
    type: CHANGE_TOOL,
    payload: selectedTool
  };
};
