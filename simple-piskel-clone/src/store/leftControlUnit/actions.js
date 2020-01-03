import { CHANGE_TOOL_SIZE, CHANGE_TOOL, CHANGE_CANVAS_SIZE } from './actionsTypes';

export const changeToolSize = selectedToolSize => {
  return {
    type: CHANGE_TOOL_SIZE,
    payload: selectedToolSize
  };
};

export const changeTool = selectedTool => {
  return {
    type: CHANGE_TOOL,
    payload: selectedTool
  };
};

export const changeCanvasSize = selectedCanvasSize => {
  return {
    type: CHANGE_CANVAS_SIZE,
    payload: selectedCanvasSize
  };
};
