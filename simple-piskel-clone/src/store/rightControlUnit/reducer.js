import { CHANGE_FPS_PREVIEW_ANIMATION } from './actionsTypes';
import { previewAnimationFpsTen } from '../../constants/constants';

const initialState = {
  activePreviewAnimationFps: previewAnimationFpsTen
};

const rightControlUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FPS_PREVIEW_ANIMATION:
      return { ...state, activePreviewAnimationFps: action.payload };
    default:
      return state;
  }
};

export default rightControlUnitReducer;
