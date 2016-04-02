var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('config').webpack;
var webpackConfig = require('./dev.config');

var app = express();

var host = config.devServer.host || 'localhost';
var port = config.devServer.port;

var serverOptions = {
    contentBase: 'http://' + host + ':' + port,
    hot: true,
    inline: true,
    lazy: false,
    watchOptions: {
        aggregateTimeout: 1000,
        poll: true
    },
    publicPath: config.assets.publicPath,
    noInfo: true,
    stats: { colors: true },
    quiet: true
};

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));


app.listen(port, (error) => {
    if (error) {
        console.info(error);
    } else {
        console.info(`==>  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
    }
});
