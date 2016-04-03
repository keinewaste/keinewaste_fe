const Promise = require('bluebird');
const config = require('config');
const _ = require('lodash');


module.exports = function(req, res) {
    res.json({ success: true });
};


module.exports.getSession = function(req, res) {

};

module.exports.saveSession = function(req, res) {
    let data = req.body;
    const accessToken = data.accessToken;

    const token = req.session.token;

    console.log(req.session);

    //console.log(accessToken, res.cookies.token);

    if (accessToken && token !== accessToken) {
        req.session.token = accessToken;

        res.json({ success: true })


    }
};

