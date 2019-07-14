import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './rootReducer';
import './index.css';
import App from './App';
const initialUser = { name: '' };

// import * as serviceWorker from './serviceWorker';

// const store = createStore(combineForms({
//     quoteForm: {},
//   }));
 
const loggerMiddleware = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,loggerMiddleware));
const app = <Provider store={store}><App /></Provider>
ReactDOM.render(app, document.getElementById('root'));

// serviceWorker.unregister();
