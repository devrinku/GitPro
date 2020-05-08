import { SET_ALERT, CLEAR_ALERT } from "../types";
export default (state, action) => {
  switch (action.type) {
    case CLEAR_ALERT:
      return null;
    case SET_ALERT:
      return action.payload;
    default:
      return null;
  }
};
