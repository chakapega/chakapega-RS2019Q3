import { CHANGE_TOOL_SIZE } from '../actions/toolActionTypes';

const initialState = {
  toolSize: '1'
};

const changeToolSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOOL_SIZE:
      return { ...state, toolSize: action.payload };
    default:
      return state;
  }
};

export default changeToolSizeReducer;
