import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './style.css';
import App from './App';
import store from "./redux/index";
import {Provider} from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App /> 
    </Router>
    </Provider>,
    document.getElementById('root')
);

