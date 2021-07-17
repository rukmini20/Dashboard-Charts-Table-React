import { combineReducers } from "redux";
import user from "./user.reducer";
import dashboard from './dashboard.reducer'
const reducer = combineReducers({ user, dashboard });

export default reducer;
