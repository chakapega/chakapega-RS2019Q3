import { CHANGE_FPS_PREVIEW_ANIMATION } from './actionsTypes';

export const changeFpsPreviewAnimation = fps => {
  return {
    type: CHANGE_FPS_PREVIEW_ANIMATION,
    payload: fps
  };
};
