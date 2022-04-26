import { ThunkDispatch } from "redux-thunk";
import { BalanceAction } from "../interfaces/action";
import { State } from "../interfaces/state";

export const deposit = (amount: string) => (dispatch: ThunkDispatch<State, undefined, BalanceAction>) => {
    dispatch({
        type: 'DEPOSIT',
        payload: amount
    });
};

export const withdraw = (amount: string) => (dispatch: ThunkDispatch<State, undefined, BalanceAction>) => {
    dispatch({
        type: 'WITHDRAW',
        payload: amount
    });
};