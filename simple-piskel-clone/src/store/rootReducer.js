import { combineReducers } from 'redux';

import leftControlUnitReducer from './leftControlUnit/tools/reducer';
import canvasFramesReducer from './leftControlUnit/canvasFrames/reducer';

const rootReducer = combineReducers({
  tool: leftControlUnitReducer,
  canvasFrame: canvasFramesReducer
});

export default rootReducer;
