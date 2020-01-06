import { combineReducers } from 'redux';

import leftControlUnitReducer from './leftControlUnit/reducer';
import canvasFramesReducer from './leftControlUnit/canvasFrames/reducer';

const rootReducer = combineReducers({
  tool: leftControlUnitReducer,
  canvasFrame: canvasFramesReducer
});

export default rootReducer;
