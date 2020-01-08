import {
  toolSizeOne,
  toolPen,
  canvasSizeThirtyTwo,
  blackCanvasColor,
  whiteCanvasColor
} from '../../../shared/constants';
import {
  CHANGE_TOOL_SIZE,
  CHANGE_TOOL,
  CHANGE_CANVAS_SIZE,
  CHANGE_FIRST_CANVAS_COLOR,
  CHANGE_SECOND_CANVAS_COLOR
} from './actionsTypes';

const initialState = {
  activeToolSize: toolSizeOne,
  activeTool: toolPen,
  activeCanvasSize: canvasSizeThirtyTwo,
  activeFirstCanvasColor: blackCanvasColor,
  activeSecondCanvasColor: whiteCanvasColor
};

const leftControlUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOOL_SIZE:
      return { ...state, activeToolSize: action.payload };
    case CHANGE_TOOL:
      return { ...state, activeTool: action.payload };
    case CHANGE_CANVAS_SIZE:
      return { ...state, activeCanvasSize: action.payload };
    case CHANGE_FIRST_CANVAS_COLOR:
      return { ...state, activeFirstCanvasColor: action.payload };
    case CHANGE_SECOND_CANVAS_COLOR:
      return { ...state, activeSecondCanvasColor: action.payload };
    default:
      return state;
  }
};

export default leftControlUnitReducer;
