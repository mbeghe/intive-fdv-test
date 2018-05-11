import { ADD_RECORD } from '../actions/index';

const defaultState = {
    recordList: []
};

export default function recordStore(state = defaultState, action) {
    switch(action.type) {
        
        case ADD_RECORD:
            return {
                ...state,
                recordList: state.recordList.concat(action.newrecord)
            }
        default:
            return state;
    }
}