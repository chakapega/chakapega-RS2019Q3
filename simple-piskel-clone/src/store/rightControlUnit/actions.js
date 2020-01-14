import CHANGE_FPS_PREVIEW_ANIMATION from './actionsTypes';

const changeFpsPreviewAnimation = fps => {
  return {
    type: CHANGE_FPS_PREVIEW_ANIMATION,
    payload: fps
  };
};

export default changeFpsPreviewAnimation;
