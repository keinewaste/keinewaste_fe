var api = require('./api/market.js');

function Market(config) {
    this.init(config);
}

Market.prototype.init = function (client) {
    this.client = client;

    return this;
};


Market.prototype.GetAll = function (params, callback) {
    this.client.callApi(api, 'GetAll', params, callback);
};

Market.prototype.GetById = function (params, callback) {
    this.client.callApi(api, 'GetById', params, callback);
};

Market.prototype.GetByUser = function (params, callback) {
    this.client.callApi(api, 'GetByUser', params, callback);
};

Market.prototype.CreateOffer = function (params, callback) {
    this.client.callApi(api, 'CreateOffer', params, callback);
};

Market.prototype.Match = function (params, callback) {
    this.client.callApi(api, 'Match', params, callback);
};

module.exports = new Market();
