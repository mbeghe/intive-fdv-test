import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { loadState, saveState } from './localStorage';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './redux/reducers'

const persistedState = loadState();
const store = createStore(rootReducer,
    persistedState, 
    composeWithDevTools(
    applyMiddleware(thunk)
));

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
); 