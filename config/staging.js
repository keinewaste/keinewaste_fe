var path = require('path');
var root = path.resolve(__dirname, '..');
var publicFolderPath = path.resolve(root, './public');

module.exports = {
    isProduction: true,
    domain: 'http://sapy.com',
    webpack: {
        assets: {
            path: path.join(publicFolderPath, 'dist'),
            publicPath: '/dist/'
        },
        build: {
            path: path.join(root, 'build/dist')
        }
    },
};
