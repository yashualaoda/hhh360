import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import initReactFastclick from 'react-fastclick';
import store from "@/store/store.js";
import { Provider } from 'react-redux'
initReactFastclick();


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename='/'>
            <Route component={App}></Route>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
