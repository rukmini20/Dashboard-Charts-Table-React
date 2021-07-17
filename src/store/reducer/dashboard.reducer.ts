import {
DASHBOARD_FETCH_FAILURE, DASHBOARD_FETCH_SUCCESS
} from "../constants";
import { ActionI } from "../../interfaces";
const initialState = {
  dashboard: null,
  type: null,
};

const dashboard = (state = initialState, action: ActionI) => {
  switch (action.type) {
    case DASHBOARD_FETCH_SUCCESS:
      return { ...state, dashboard: action.payload, type: DASHBOARD_FETCH_SUCCESS };
    case DASHBOARD_FETCH_FAILURE:
      return { ...state, dashboard: action.payload, type: DASHBOARD_FETCH_FAILURE };
    default:
      return state;
  }
};

export default dashboard;
