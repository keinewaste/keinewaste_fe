import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Polyfills
import 'es6-promise';

import './assets/styles/main.scss';

import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { configureStore, DevTools } from './react/store/store';

import injectTapEventPlugin from 'react-tap-event-plugin';

import { routes } from './routes';

injectTapEventPlugin();

const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
//
//render(
//    <Provider store={store}>
//        <DevTools />
//    </Provider>,
//    document.getElementById('devtools')
//);