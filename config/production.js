var path = require('path');
var root = path.resolve(__dirname, '..');
var publicFolderPath = path.resolve(root, './public');

module.exports = {
    isProduction: true,
    domain: 'http://www.keinewaste.org',
    webpack: {
        assets: {
            path: path.join(publicFolderPath, 'dist'),
            publicPath: '//cdn1.net/assets/{commit}/'
        },
        build: {
            path: path.join(root, 'build/client')
        }
    }
};
