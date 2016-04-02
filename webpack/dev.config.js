var path = require('path');
var webpack = require('webpack');
var config = require('../config').webpack;
var autoprefixer = require('autoprefixer');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

var host = config.devServer.host || 'localhost';
var port = config.devServer.port;
var root = path.resolve(__dirname, '..');
var clientFolder = path.resolve(root, './client');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: [
            'webpack-hot-middleware/client?path=http://' + host + ':' + port + '/__webpack_hmr',
            path.resolve(clientFolder, 'index.js')
        ]
    },
    output: {
        path: config.assets.path,
        filename: '[name].js',
        publicPath: config.assets.publicPath
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        webpackIsomorphicToolsPlugin.development()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: { presets: ['react-hmre'] },
                exclude: /node_modules/,
                include: clientFolder
            },
            { test: /\.css$|\.scss$/, loader: 'style!css?-autoprefixer&importLoaders=3&sourceMap!postcss!sass?outputStyle=expanded&sourceMap' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
            { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=1024' }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['ie > 8', 'last 2 versions']
        })
    ],
    resolve: {
        root: root
    }
};
