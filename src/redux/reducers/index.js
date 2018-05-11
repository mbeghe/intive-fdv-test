import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import recordStore from './record_reducer';
import countriesStore from './countries_reducer';

const rootReducer =  combineReducers({
    form: formReducer,
    recordStore,
    countriesStore
})

export default rootReducer;