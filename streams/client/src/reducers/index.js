import { combineReducers } from "redux";
import { reducer as fromReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducers";

export default combineReducers({
    auth: authReducer,
    form: fromReducer,
    streams: streamReducer
});