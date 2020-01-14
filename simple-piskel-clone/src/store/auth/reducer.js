import CHANGE_USER_UID from './actionsTypes';

const initialState = {
  userUid: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_UID:
      return { ...state, userUid: action.payload };
    default:
      return state;
  }
};

export default authReducer;
