import { GET_COUNTRIES_FAILURE, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS } from '../actions/index';

const defaultState = {
    countries: [],
    loading: false,
    error: false,
    errorMsg: ""
};

export default function countriesStore(state = defaultState, action) {
    switch(action.type) {
        
        case GET_COUNTRIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case GET_COUNTRIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
                errorMsg: action.errorMsg
            }
        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.countries,
                loading: false,
                error: false
            }
        default:
            return state;
    }
}