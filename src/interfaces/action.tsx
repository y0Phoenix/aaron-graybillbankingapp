export interface BalanceAction {
    type: string,
    payload: BalancePayload
};

export interface BalancePayload {
    name: string,
    amount: number,
    additional: {
        email: string,
        password: string
    }
}

export interface SetAlertAction {
    type: string,
    payload: {
        title: string,
        text: string
        type: string,
        show: boolean
    }
};

export interface SetAlertPayload {
    title: string,
    text: string,
    type: string,
    show: boolean
}

export interface RemoveAlertAction {
    type: string
};