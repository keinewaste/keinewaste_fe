var path = require('path');
var config = require('config');
var compression = require('compression');
var express = require('express');
var router = require('router');
var favicon = require('serve-favicon');
var useragent = require('express-useragent');
var routerMiddleware = require('server/utils/html-renderer').middleware;
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();

var cookieParser = require('cookie-parser');


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


// load the cookie-parsing middleware
app.use(cookieParser());

app.use(compression());
app.use(express.static(config.server.staticPath));

app.use(useragent.express());

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 6000
    }

}));
app.get('*', routerMiddleware);

module.exports = app;