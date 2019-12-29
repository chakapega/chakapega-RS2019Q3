import { CHANGE_TOOL_SIZE } from './toolActionTypes';

export const changeToolSize = toolSize => {
  return {
    type: CHANGE_TOOL_SIZE,
    payload: toolSize
  };
};
