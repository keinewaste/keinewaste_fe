var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var config = require('config').webpack;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

var argv = require('minimist')(process.argv.slice(2));
var root = path.resolve(__dirname, '..');
var clientFolder = path.resolve(root, './client');

var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));

var projectDependencies = ['config'];
var dependencies = Object.keys(require(path.resolve(root, 'package.json')).dependencies);

var nodeModules = dependencies.concat(projectDependencies).map(function (mod) {
    var obj = {};
    obj[mod] = 'commonjs ' + mod;
    return obj;
});


module.exports = {
    entry: {
        'index-server': [
            path.resolve(clientFolder, 'index-server.js')
        ]
    },
    output: {
        path: argv.path || config.webpack.build.path,
        publicPath: config.lambda.publicPath,
        library: '[name]',
        libraryTarget: 'commonjs2',
        filename: '[name].js'
    },
    target: 'node',
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/\.css$|\.scss$/, 'node-noop'),
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                // Useful to reduce the size of client-side libraries, e.g. react
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: clientFolder
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
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
            browsers: ['last 2 versions']
        })
    ],
    resolve: {
        root: root
    },
    externals: nodeModules
};
