import {
  CHANGE_TOOL_SIZE,
  CHANGE_TOOL,
  CHANGE_CANVAS_SIZE,
  CHANGE_FIRST_CANVAS_COLOR,
  CHANGE_SECOND_CANVAS_COLOR
} from './actionsTypes';

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

export const changeFirstCanvasColor = selectedFirstCanvasColor => {
  return {
    type: CHANGE_FIRST_CANVAS_COLOR,
    payload: selectedFirstCanvasColor
  };
};

export const changeSecondCanvasColor = selectedSecondCanvasColor => {
  return {
    type: CHANGE_SECOND_CANVAS_COLOR,
    payload: selectedSecondCanvasColor
  };
};
