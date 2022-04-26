import {ThunkDispatch} from "redux-thunk";
import { AccountAction, AccountPayload, SetAlertAction } from "../interfaces/action";
import { State } from "../interfaces/state";

export const addAccount = (payload: AccountPayload) => (dispatch: ThunkDispatch<State, undefined, AccountAction>) => {
    dispatch({
        type: 'CREATE_ACCOUNT',
        payload: payload
    });
};

export const updateAccount = (payload: AccountPayload, type: string) => (dispatch: ThunkDispatch<State, undefined, AccountAction>) => {
    dispatch({
        type: type,
        payload: payload
    });
};