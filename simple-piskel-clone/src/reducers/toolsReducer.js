import { CHANGE_TOOL_SIZE, CHANGE_TOOL } from '../actions/tooslActionsTypes';

const initialState = {
  toolSize: '1',
  selectedTool: 'pen'
};

const changeToolSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOOL_SIZE:
      return { ...state, toolSize: action.payload };
    case CHANGE_TOOL:
      return { ...state, selectedTool: action.payload };
    default:
      return state;
  }
};

export default changeToolSizeReducer;
