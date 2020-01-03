import { combineReducers } from 'redux';

import leftControlUnitReducer from './leftControlUnit/reducer';

const rootReducer = combineReducers({
  tool: leftControlUnitReducer
});

export default rootReducer;
