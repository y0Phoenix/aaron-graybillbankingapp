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

    constructor(data: account) {
        const {name, email, password} = data;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const initialState: Account[] = [];

export default function(state = initialState, action: AccountAction) {
    const {type, payload} = action;
    switch (type) {
        case 'CREATE_ACCOUNT':
            state.push(new Account(payload));
            return state;
        default:
            return state;
    }
}