import {
  SET_USERS,
  GET_REPOS,
  SET_SINGLE_USER,
  CLEAR_ALL,
  SET_LOADING,
  SET_PATH,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_PATH:
      return {
        ...state,
        path: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case CLEAR_ALL:
      return {
        ...state,
        users: [],
        singleUser: {},
        repos: [],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_SINGLE_USER:
      return {
        ...state,
        singleUser: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
