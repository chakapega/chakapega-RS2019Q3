import { MAP_IMAGE_DATA_TO_STATE, ADD_NEW_CANVAS_FRAME, CHANGE_ACTIVE_CANVAS_FRAME } from './actionsTypes';

const initialState = {
  arrayOfCanvasFrames: [{ id: 1, isActive: true, imageData: {} }]
};
const createNewArrayOfCanvasFramesWithAddedElement = state => {
  const newCanvasFrame = { id: 0, isActive: true, imageData: {} };

  state.arrayOfCanvasFrames.forEach(canvasFrame => {
    if (canvasFrame.id === state.arrayOfCanvasFrames.length) {
      newCanvasFrame.id = canvasFrame.id + 1;
    }
    if (canvasFrame.isActive === true) canvasFrame.isActive = false;
  });

  return [...state.arrayOfCanvasFrames, newCanvasFrame];
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
    case ADD_NEW_CANVAS_FRAME:
      return {
        ...state,
        arrayOfCanvasFrames: createNewArrayOfCanvasFramesWithAddedElement(state)
      };
    case CHANGE_ACTIVE_CANVAS_FRAME:
      return {
        ...state,
        arrayOfCanvasFrames: state.arrayOfCanvasFrames.map(canvasFrame => {
          if (canvasFrame.id === action.payload) {
            return { ...canvasFrame, isActive: true };
          }
          return { ...canvasFrame, isActive: false };
        })
      };
    default:
      return state;
  }
};

export default canvasFramesReducer;