import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store'
import 'antd/dist/antd.min.css';

//by following we hook our app component to root div
ReactDOM.render(
    <Router>
        <Provider store={store}>
                <App/>
        </Provider>
    </Router>
    , document.getElementById('root'));