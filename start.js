var fs = require('fs');
var config = require('config');

var babelrc = fs.readFileSync('.babelrc');
var babelConfig;

try {
    babelConfig = JSON.parse(babelrc);
} catch(err) {
    console.error('ERROR: parsing .babelrc file', err);
}

require('babel-core/register')(babelConfig);

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./webpack/webpack-isomorphic-tools'))
    .development(config.isDev)
    .server(__dirname, function() {
        require('./server');
    });