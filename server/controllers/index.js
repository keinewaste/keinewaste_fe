const Promise = require('bluebird');
const config = require('config');
const _ = require('lodash');

const htmlRenderer = require('server/utils/html-renderer');
const webpackAssets = require('webpack-assets.json');


module.exports = function(req, res) {
    const assets = buildAssets();

    htmlRenderer.render({}, assets, req.useragent)
        .then(html => {
            res.send(html);
        });
};


function buildAssets() {
    return {
        javascript: _.values(webpackAssets.javascript),
        styles: _.values(webpackAssets.styles)
    };
}
