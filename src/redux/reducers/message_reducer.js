import { NEW_MESSAGE, ERASE_MESSAGE } from '../actions/index';

const defaultState = {
    record: {},
    newMessage: false
};

export default function messageStore(state = defaultState, action) {
    switch(action.type) {
        case NEW_MESSAGE:
            return {
                ...state,
                record: action.record,
                newMessage: true
            }
        case ERASE_MESSAGE:
            return {
                ...state,
                newMessage: false
            }
        default:
            return state;
    }
}