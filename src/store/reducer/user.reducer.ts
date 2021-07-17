import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOGIN_FAILURE,
  LOGIN_INVALID_CREDENTIALS,
} from "../constants";
import { ActionI } from "../../interfaces";
const initialState = {
  message: null,
  type: null,
};

const user = (state = initialState, action: ActionI) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return { ...state, message: action.payload, type: USER_LOGGED_IN };
    case LOGIN_FAILURE:
      return { ...state, message: action.payload, type: LOGIN_FAILURE };
    case USER_LOGGED_OUT:
      return { ...state, message: action.payload, type: USER_LOGGED_OUT };
    case LOGIN_INVALID_CREDENTIALS:
      return {
        ...state,
        message: action.payload,
        type: LOGIN_INVALID_CREDENTIALS,
      };
    default:
      return state;
  }
};

export default user;
