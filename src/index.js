import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './store/reducer';

//store initializing
const rootReducer = combineReducers({
    product: reducer,
    form: formReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));
ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
