import { combineReducers } from 'redux';

import toolsReducer from './toolsReducer';

const rootReducer = combineReducers({
  tool: toolsReducer
});

export default rootReducer;
