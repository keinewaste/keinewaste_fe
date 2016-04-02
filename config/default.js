var path = require('path');
var root = path.resolve(__dirname, '..');
var publicFolderPath = path.resolve(root, './public');
var publicFolderDistPath = path.join(publicFolderPath, 'dist');

module.exports = {
    server: {
        staticPath: publicFolderPath
    }
};
