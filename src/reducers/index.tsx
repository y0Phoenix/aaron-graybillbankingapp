import { combineReducers } from "redux";
import alert from "./alert";
import account from "./account";

export default combineReducers({
    alert,
    account
});