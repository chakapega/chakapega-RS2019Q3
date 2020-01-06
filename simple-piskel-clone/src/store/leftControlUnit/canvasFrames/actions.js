import { MAP_IMAGE_DATA_TO_STATE } from './actionsTypes';

export const mapImageDataToState = imageData => {
  return {
    type: MAP_IMAGE_DATA_TO_STATE,
    payload: imageData
  };
};
