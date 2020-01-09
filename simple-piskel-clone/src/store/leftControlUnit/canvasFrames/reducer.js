import {
  MAP_IMAGE_DATA_TO_STATE,
  ADD_NEW_CANVAS_FRAME,
  CHANGE_ACTIVE_CANVAS_FRAME,
  DELETE_ALL_ADDED_CANVAS_FRAMES,
  DELETE_CANVAS_FRAME,
  ADD_DUPLICATE_CANVAS_FRAME
} from './actionsTypes';

const initialState = {
  arrayOfCanvasFrames: [{ id: new Date().getTime(), isActive: true, imageData: {} }]
};
const createNewArrayOfCanvasFramesWithAddedNewFrame = state => {
  if (state.arrayOfCanvasFrames.length === 5) return [...state.arrayOfCanvasFrames];

  const newCanvasFrame = { id: new Date().getTime(), isActive: true, imageData: {} };

  state.arrayOfCanvasFrames.forEach(canvasFrame => {
    if (canvasFrame.isActive === true) canvasFrame.isActive = false;
  });

  return [...state.arrayOfCanvasFrames, newCanvasFrame];
};
const createNewArrayOfCanvasFramesWithAddedDuplicateFrame = (state, id) => {
  const newArrayOfCanvasFrames = [];
  const duplicateFrame = { id: new Date().getTime(), isActive: true, imageData: {} };

  state.arrayOfCanvasFrames.forEach(canvasFrame => {
    if (canvasFrame.isActive === true) canvasFrame.isActive = false;

    newArrayOfCanvasFrames.push(canvasFrame);

    if (canvasFrame.id === id) {
      duplicateFrame.imageData = canvasFrame.imageData;
      newArrayOfCanvasFrames.push(duplicateFrame);
    }
  });

  return newArrayOfCanvasFrames;
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
        arrayOfCanvasFrames: createNewArrayOfCanvasFramesWithAddedNewFrame(state)
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
    case DELETE_ALL_ADDED_CANVAS_FRAMES:
      return { ...state, arrayOfCanvasFrames: [{ id: 1, isActive: true, imageData: {} }] };
    case DELETE_CANVAS_FRAME:
      return {
        ...state,
        arrayOfCanvasFrames: state.arrayOfCanvasFrames.filter(canvasFrame => canvasFrame.id !== action.payload)
      };
    case ADD_DUPLICATE_CANVAS_FRAME:
      return {
        ...state,
        arrayOfCanvasFrames: createNewArrayOfCanvasFramesWithAddedDuplicateFrame(state, action.payload)
      };
    default:
      return state;
  }
};

export default canvasFramesReducer;
