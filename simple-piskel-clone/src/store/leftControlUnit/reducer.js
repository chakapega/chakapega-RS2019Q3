import { toolSizeOne, toolPen, canvasSizeThirtyTwo } from '../../constants/constants';
import { CHANGE_TOOL_SIZE, CHANGE_TOOL, CHANGE_CANVAS_SIZE } from './actionsTypes';

const initialState = {
  activeToolSize: toolSizeOne,
  activeTool: toolPen,
  activeCanvasSize: canvasSizeThirtyTwo
};

const leftControlUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOOL_SIZE:
      return { ...state, activeToolSize: action.payload };
    case CHANGE_TOOL:
      return { ...state, activeTool: action.payload };
    case CHANGE_CANVAS_SIZE:
      return { ...state, activeCanvasSize: action.payload };
    default:
      return state;
  }
};

export default leftControlUnitReducer;
