import { MAP_IMAGE_DATA_TO_STATE, ADD_NEW_CANVAS_FRAME, CHANGE_ACTIVE_CANVAS_FRAME } from './actionsTypes';

export const mapImageDataToState = imageData => {
  return {
    type: MAP_IMAGE_DATA_TO_STATE,
    payload: imageData
  };
};
export const addNewCanvasFrame = () => {
  return {
    type: ADD_NEW_CANVAS_FRAME
  };
};
export const changeActiveCanvasFrame = id => {
  return {
    type: CHANGE_ACTIVE_CANVAS_FRAME,
    payload: id
  };
};
