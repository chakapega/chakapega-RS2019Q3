import CHANGE_FPS_PREVIEW_ANIMATION from './actionsTypes';
import { previewAnimationFpsTen } from '../../shared/constants';

const initialState = {
  activePreviewAnimationFps: +localStorage.getItem('activePreviewAnimationFps') || previewAnimationFpsTen
};

const rightControlUnitReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FPS_PREVIEW_ANIMATION:
      localStorage.setItem('activePreviewAnimationFps', action.payload);
      return { ...state, activePreviewAnimationFps: action.payload };
    default:
      return state;
  }
};

export default rightControlUnitReducer;
