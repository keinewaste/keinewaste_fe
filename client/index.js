import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Polyfills
import 'es6-promise';

import './assets/styles/main.scss';
import App from './react/containers/app';
import configureStore from './react/store/configure-store';


const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);