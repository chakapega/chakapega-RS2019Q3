import { MAP_IMAGE_DATA_TO_STATE } from './actionsTypes';

const initialState = {
  arrayOfCanvasFrames: [{ id: 1, isActive: true, imageData: {} }]
};

const canvasFramesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_IMAGE_DATA_TO_STATE:
      return {
        ...state,
        arrayOfCanvasFrames: state.arrayOfCanvasFrames.map(canvasFrame => {
          if (canvasFrame.isActive) {
            return { ...canvasFrame, imageData: action.payload };
          }
          return canvasFrame;
        })
      };
    default:
      return state;
  }
};

export default canvasFramesReducer;
