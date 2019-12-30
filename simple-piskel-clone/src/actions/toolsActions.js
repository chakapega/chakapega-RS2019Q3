import { CHANGE_TOOL_SIZE, CHANGE_TOOL } from './tooslActionsTypes';

export const changeToolSize = toolSize => {
  return {
    type: CHANGE_TOOL_SIZE,
    payload: toolSize
  };
};

export const changeToolAction = selectedTool => {
  return {
    type: CHANGE_TOOL,
    payload: selectedTool
  };
};
