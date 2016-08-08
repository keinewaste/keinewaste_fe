var api = require('./api/consultants.js');

function Consultants(config) {
    this.init(config);
}

Consultants.prototype.init = function (client) {
    this.client = client;

    return this;
};


Consultants.prototype.GetAll = function (params, callback) {
    this.client.callApi(api, 'GetAll', params, callback);
};

module.exports = new Consultants();
