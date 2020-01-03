import { toolSizeOne, toolPen } from '../../constants/constants';
import { CHANGE_TOOL_SIZE, CHANGE_TOOL } from './actionsTypes';

const initialState = {
  toolSize: toolSizeOne,
  activeTool: toolPen
};

const leftControlUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOOL_SIZE:
      return { ...state, toolSize: action.payload };
    case CHANGE_TOOL:
      return { ...state, activeTool: action.payload };
    default:
      return state;
  }
};

export default leftControlUnitReducer;
