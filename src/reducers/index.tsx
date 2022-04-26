import { combineReducers } from "redux";
import alert from "./alert";
import account from "./account";
import balance from "./balance";

export default combineReducers({
    alert,
    account,
    balance
});