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
  activeToolSize: localStorage.getItem('activeToolSize') || toolSizeOne,
  activeTool: localStorage.getItem('activeTool') || toolPen,
  activeCanvasSize: localStorage.getItem('activeCanvasSize') || canvasSizeThirtyTwo,
  activeFirstCanvasColor: localStorage.getItem('activeFirstCanvasColor') || blackCanvasColor,
  activeSecondCanvasColor: localStorage.getItem('activeSecondCanvasColor') || whiteCanvasColor
};

const leftControlUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOOL_SIZE:
      localStorage.setItem('activeToolSize', action.payload);
      return { ...state, activeToolSize: action.payload };
    case CHANGE_TOOL:
      localStorage.setItem('activeTool', action.payload);
      return { ...state, activeTool: action.payload };
    case CHANGE_CANVAS_SIZE:
      localStorage.setItem('activeCanvasSize', action.payload);
      return { ...state, activeCanvasSize: action.payload };
    case CHANGE_FIRST_CANVAS_COLOR:
      localStorage.setItem('activeFirstCanvasColor', action.payload);
      return { ...state, activeFirstCanvasColor: action.payload };
    case CHANGE_SECOND_CANVAS_COLOR:
      localStorage.setItem('activeSecondCanvasColor', action.payload);
      return { ...state, activeSecondCanvasColor: action.payload };
    default:
      return state;
  }
};

export default leftControlUnitReducer;
