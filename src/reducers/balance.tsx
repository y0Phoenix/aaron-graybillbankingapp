import { BalanceAction } from "../interfaces/action";


export default function(state = '0.00', action: BalanceAction) {
    const {type, payload} = action;
    switch (type) {
        case 'WITHDRAW':
            state = (parseFloat(state) - parseFloat(payload)).toFixed(2);
            return state;
        case 'DEPOSIT':
            state = (parseFloat(state) + parseFloat(payload)).toFixed(2);
            return state;
        default:
            return state;
    }
};