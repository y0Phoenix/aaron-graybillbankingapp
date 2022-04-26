import { SetAlertAction } from "../interfaces/action";
import { Alert } from "../interfaces/state";


const initialState: Alert = {
    title: '',
    text: '',
    type: '',
    show: false
};

export default function(state = initialState, action: SetAlertAction) {
    const {type, payload} = action;
    switch (type) {
        case 'SET_ALERT':
            state = {...payload, show: true};
            return state;
        case 'REMOVE_ALERT':
            state = {title: '', text: '', type: '', show: false}
            return state;
        default:
            return state
    }
}