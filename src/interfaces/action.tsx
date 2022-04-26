export interface AccountAction {
    type: string,
    payload: AccountPayload
};

export interface AccountPayload {
    name: string
    email: string,
    password: string
}

export interface SetAlertAction {
    type: string,
    payload: {
        title: string,
        text: string
        type: string
    }
};

export interface SetAlertPayload {
    title: string,
    text: string,
    type: string
}

export interface RemoveAlertAction {
    type: string
};

export interface BalanceAction {
    payload: string,
    type: string
};