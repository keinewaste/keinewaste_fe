var path = require('path');
var webpack = require('webpack');
var config = require('config').webpack;
var autoprefixer = require('autoprefixer');

var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var root = path.resolve(__dirname, '..');
var clientFolder = path.resolve(root, './client');

// dynamic hash that should be added to the public path
var assetsHash = process.env.WEBPACK_ASSETS_HASH || '';

module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            path.resolve(clientFolder, 'index.js')
        ]
    },
    output: {
        path: config.assets.path,
        filename: '[name].js',
        publicPath: config.assets.publicPath.replace('{commit}', assetsHash)
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        // optimizations
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        webpackIsomorphicToolsPlugin
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: clientFolder
            },
            { test: /\.css$|\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer&importLoaders=3&sourceMap!postcss!sass?outputStyle=expanded&sourceMap') },
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
