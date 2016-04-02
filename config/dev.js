var path = require('path');
var root = path.resolve(__dirname, '..');
var webpackDevServerPort = 3002;
var webpackDevServerHost = 'localhost';
var publicFolderPath = path.resolve(root, './public');
var publicFolderDistPath = path.join(publicFolderPath, 'dist');

module.exports = {
    isDev: true,
    webpack: {
        devServer: {
            port: webpackDevServerPort,
            host: webpackDevServerHost
        },
        assets: {
            path: publicFolderDistPath,
            publicPath: `http://${webpackDevServerHost}:${webpackDevServerPort}/dist/`
        }
    }
};
