import CHANGE_USER_UID from './actionsTypes';

const changeUserUid = userUid => {
  return {
    type: CHANGE_USER_UID,
    payload: userUid
  };
};

export default changeUserUid;
