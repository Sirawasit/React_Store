import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore, legacy_createStore,applyMiddleware } from 'redux'
import  reducers  from "./reducers";
import { Provider } from 'react-redux';
import reduxThunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk ));


ReactDOM.render(
    <Provider store = {store} >
        <App />
    </Provider> 
    , document.getElementById('root'));

reportWebVitals();
