import { combineReducers } from 'redux';

import changeToolSizeReducer from './changeToolSizeReducer';

const rootReducer = combineReducers({
  tool: changeToolSizeReducer
});

export default rootReducer;
