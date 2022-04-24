export interface BalanceAction {
    type: string,
    payload: {
        name: string,
        amount: number,
        additional: {
            email: string,
            password: string
        }
    }
};