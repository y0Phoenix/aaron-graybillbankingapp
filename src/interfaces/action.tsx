export interface AccountAction {
    type: string,
    payload: AccountPayload
};

export interface AccountPayload {
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