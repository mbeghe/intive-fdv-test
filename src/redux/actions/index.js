export const ADD_RECORD = 'ADD_RECORD';
export const GET_COUNTRIES_REQUEST = 'GET_COUNTRIES_REQUEST';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAILURE = 'GET_COUNTRIES_FAILURE';
export const NEW_MESSAGE = 'NEW_MESSAGE';
export const ERASE_MESSAGE = 'ERASE_MESSAGE';

export function addRecord(newrecord){
    return {
        type: ADD_RECORD,
        newrecord

    }
}
export function newMessage(record){
    return {
        type: NEW_MESSAGE,
        record

    }
}
export function fadeOutMessage(){
    return dispatch => {
        setTimeout(() => {
            dispatch({ type: ERASE_MESSAGE })
          }, 5000)
    }
}

function getCountriesRequest() {
    return {
        type: GET_COUNTRIES_REQUEST
    }
}

function getCountriesSuccess(countries) {
    return {
        type: GET_COUNTRIES_SUCCESS,
        countries
    }
}

function getCountriesFailure(errorMsg) {
    return {
        type: GET_COUNTRIES_FAILURE,
        errorMsg
    }
}

export function getCountries() {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name';
    return dispatch => {
        dispatch(getCountriesRequest());

        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
            .then(json => {
                dispatch(getCountriesSuccess(json));
            })
            .catch(err => {
                dispatch(getCountriesFailure(err.message));
            });
    }
}

