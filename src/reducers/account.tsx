import {AccountAction} from "../interfaces/action";

interface account {
    name: string,
    email: string,
    password: string
}

class Account {
    name: string;
    email: string;
    password: string;
    balance: number;

    constructor(data: account) {
        const {name, email, password} = data;
        this.name = name;
        this.email = email;
        this.password = password;
        this.balance = 0;
    }
}

const initialState: Account[] = [];

export default function(state = initialState, action: AccountAction) {
    const {type, payload} = action;
    if (payload) var {name, amount, additional} = payload;
    const i = state.map(account => account.name).indexOf(name);
    if (i <= -1 && type !== 'CREATE_ACCOUNT') return state; 
    switch (type) {
        case 'DEPOSIT':
            state[i].balance = state[i].balance + amount
            return state;
        case 'WITHDRAW':
            state[i].balance = state[i].balance - amount
            return state;
        case 'CREATE_ACCOUNT':
            state.push(new Account({...additional, name}));
            return state;
        default:
            return state;
    }
}