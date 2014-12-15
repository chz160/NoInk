var path = require('path');
var appDir = path.dirname(require.main.filename);

var hapi = require("hapi");
var joi = require("joi");

var authenticationService = require(appDir + '/services/authenticationService');
var somethingService = require(appDir + '/services/somethingService.js');
var mailService = require(appDir + '/services/mailService.js');

module.exports = [
    { method: 'POST', path: '/api/login', config: authenticationService.login },
    { method: 'GET', path: '/api/logout', config: authenticationService.logout },
    { method: 'POST', path: '/api/register', config: authenticationService.register },
    { method: "POST", path: "/api/saveForm", config: { handler: somethingService.saveForm, validate: { query: { name: joi.string() } } } },
    { method: "GET", path: "/api/getSubmissions", config: { handler: somethingService.getSubmissions, validate: { query: { name: joi.string() } } } },
    { method: "GET", path: "/api/getSubmissionDetail", config: { handler: somethingService.getSubmissionDetail } },
    { method: "POST", path: "/api/sendMail", config: { handler: mailService.sendMail, validate: { query: { name: joi.string() } } } },
    { method: "GET", path: "/api/getStates", config: { handler: somethingService.getStates } }
];