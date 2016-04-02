const Promise = require('bluebird');
const path = require('path');
const _ = require('lodash');
const config = require('config');

const readFile = Promise.promisify(require('fs').readFile);

const ejs = require('ejs');
const React = require('react');
const ReactDOM = require('react-dom/server');
const Provider = require('react-redux').Provider;

const client = require('client/index-server');
const App = client.App;
const configureStore = client.configureStore;

const baseViewPath = path.join(__dirname, '../views/index.ejs');

exports.render = function (data, assets, userAgent) {
    return readFile(baseViewPath, 'utf-8')
        .then(viewTemplate => {
            console.log('PERFORMANCE PDP: Html render start');


            const store = configureStore(data);
            const component = React.createElement(Provider, { store: store }, React.createElement(App, null));

            const renderTime = new Date().getTime();
            const html = ejs.render(viewTemplate, {
                isDev: config.isDev,
                state: store.getState(),
                content: ReactDOM.renderToString(component),
                userAgent: userAgent,
                assets: assets
            });

            console.log('PERFORMANCE PDP: Html render finish', (new Date().getTime() - renderTime));

            return html;
        });
};
