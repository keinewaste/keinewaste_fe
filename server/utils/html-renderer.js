const Promise = require('bluebird');
const path = require('path');
const _ = require('lodash');
const config = require('config');
const webpackAssets = require('webpack-assets.json');
const readFile = Promise.promisify(require('fs').readFile);

const ejs = require('ejs');
const React = require('react');
const ReactDOM = require('react-dom/server');
const Provider = require('react-redux').Provider;
const ReactRouter = require('react-router');

const RouterContext = ReactRouter.RouterContext;

const ReactRouterRedux = require('react-router-redux');

const routes = require('client/routes').routes;
const client = require('client/index-server');

const App = client.App;
const configureStore = client.configureStore;

const baseViewPath = path.join(__dirname, '../views/index.ejs');

function buildAssets() {
    return {
        javascript: _.values(webpackAssets.javascript),
        styles: _.values(webpackAssets.styles)
    };
}

exports.render = function render(data, userAgent) {
    return readFile(baseViewPath, 'utf-8')
        .then(viewTemplate => {
            const store = configureStore(browserHistory, initialState);
            const history = ReactRouterRedux.syncHistoryWithStore(browserHistory, store);


            const component = React.createElement(Provider, {store: store}, React.createElement(ReactRouter.Router, {
                history,
                routers
            }));

            const renderTime = new Date().getTime();
            const html = ejs.render(viewTemplate, {
                isDev: config.isDev,
                state: store.getState(),
                content: ReactDOM.renderToString(component),
                userAgent: userAgent,
                assets: buildAssets()
            });

            return html;
        });
};


exports.middleware = function (req, res) {
    const memoryHistory = ReactRouter.createMemoryHistory(req.url);
    const store = configureStore(memoryHistory);
    const history = ReactRouterRedux.syncHistoryWithStore(memoryHistory, store);

    // check user session
    ReactRouter.match({history, routes, location: req.url}, (error, redirectLocation, renderProps) => {

        if (error) {
            res.status(500).send(error.message)
        } else if (redirectLocation) {
            res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            const content = (
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );

            readFile(baseViewPath, 'utf-8')
                .then(viewTemplate => {
                    const html = ejs.render(viewTemplate, {
                        isDev: config.isDev,
                        state: store.getState(),
                        content: ReactDOM.renderToString(content),
                        //userAgent: userAgent,
                        assets: buildAssets()
                    });
                    return res.send(html);
                });
        } else {
            // no errors, no redirect, we just didn't match anything
            res.status(404).send('Not Found')
        }
    })
};
