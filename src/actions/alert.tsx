import {ThunkDispatch} from "redux-thunk";
import { SetAlertAction, RemoveAlertAction } from "../interfaces/action";
import { State } from "../interfaces/state";
import { SetAlertPayload } from "../interfaces/action";

export const setAlert = (payload: SetAlertPayload) => (dispatch: ThunkDispatch<State, undefined, SetAlertAction>) => {
    dispatch({
        type: 'SET_ALERT',
        payload: payload 
    });
};

export const removeAlert = () => (dispatch: ThunkDispatch<State, undefined, RemoveAlertAction>) => {
    dispatch({
        type: 'REMOVE_ALERT'
    });
}