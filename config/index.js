var assign = require('lodash/assign');
var config = require(`config/${(process.env.APP_MODE || 'dev')}`);
var consts = require('config/consts');
var defaultConfig = require('config/default');

module.exports = assign({}, { consts: consts }, defaultConfig, config);