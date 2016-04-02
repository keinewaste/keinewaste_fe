var path = require('path');
var config = require('config');
var compression = require('compression');
var express = require('express');
var router = require('router');
var favicon = require('serve-favicon');
var useragent = require('express-useragent');

var app = express();

app.use(compression());
app.use(favicon(path.join(config.server.staticPath, 'favicon.ico')));
app.use(express.static(config.server.staticPath));

app.use(useragent.express());
app.use('/', router);

module.exports = app;