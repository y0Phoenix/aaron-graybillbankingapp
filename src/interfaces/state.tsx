export interface State {
    alert: Alert,
    account: Array<User>,
    balance: string 
};

export interface Alert {
    title: string,
    text: string,
    type: string,
    show: boolean
};

export interface User {
    name: string,
    email: string,
    password: string
};