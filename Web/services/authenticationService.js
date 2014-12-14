var DataServiceType = require('./dataService.js');
var dataService = new DataServiceType();

exports.register = function (request, reply) {
    reply(true);
}

exports.login = function (request, reply) {
    reply(true);
}

exports.logout = function (request, reply) {
    reply(true);
}