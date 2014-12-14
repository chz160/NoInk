var path = require('path');
var appDir = path.dirname(require.main.filename);

var hapi = require("hapi");
var joi = require("joi");

var authentication = require(appDir + '/services/authenticationService');
var somethingService = require(appDir + '/services/somethingService.js');

module.exports = [
    { method: 'POST', path: '/api/login', config: { handler: authentication.login } },
    { method: 'GET', path: '/api/logout', config: { handler: authentication.logout } },
    { method: 'POST', path: '/api/register', config: { handler: authentication.register } },
    { method: "POST", path: "/api/saveForm", config: { handler: somethingService.saveForm, validate: { query: { name: joi.string() } } } },
    { method: "GET", path: "/api/getSubmissions", config: { handler: somethingService.getSubmissions, validate: { query: { name: joi.string() } } } },
    { method: "GET", path: "/api/getSubmissionDetail", config: { handler: somethingService.getSubmissionDetail } }
];