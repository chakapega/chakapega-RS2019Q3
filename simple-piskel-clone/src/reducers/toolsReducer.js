import { CHANGE_TOOL_SIZE, CHANGE_TOOL } from '../actions/tooslActionsTypes';
import {
  toolSizeOne,
  toolSizeTwo,
  toolSizeThree,
  toolSizeFour,
  toolPen,
  toolEraser,
  toolColorPicker,
  toolPaintBucket
} from '../constants/constants';

const initialState = {
  toolSize: toolSizeOne,
  activeTool: toolPen
};

const toolsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOOL_SIZE:
      return { ...state, toolSize: action.payload };
    case CHANGE_TOOL:
      return { ...state, activeTool: action.payload };
    default:
      return state;
  }
};

export default toolsReducer;
