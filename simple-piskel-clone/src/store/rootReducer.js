import { combineReducers } from 'redux';

import leftControlUnitReducer from './leftControlUnit/tools/reducer';
import canvasFramesReducer from './leftControlUnit/canvasFrames/reducer';
import rightControlUnitReducer from './rightControlUnit/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
  tool: leftControlUnitReducer,
  canvasFrame: canvasFramesReducer,
  previewAnimation: rightControlUnitReducer,
  user: authReducer
});

export default rootReducer;
