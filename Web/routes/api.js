var path = require('path');
var express = require('express');
var router = express.Router();

var appDir = path.dirname(require.main.filename);
var authenticationService = require(path.join(appDir, '../services/authenticationService.js'));
var somethingService = require(path.join(appDir, '../services/somethingService.js'));
var mailService = require(path.join(appDir, '../services/mailService.js'));

//module.exports = [
//    { method: 'POST', path: '/api/login', config: authenticationService.login },
//    { method: 'GET', path: '/api/logout', config: authenticationService.logout },
//    { method: 'POST', path: '/api/register', config: authenticationService.register },
//    { method: "POST", path: "/api/saveForm", config: { handler: somethingService.saveForm, validate: { query: { name: joi.string() } } } },
//    { method: "GET", path: "/api/getSubmissions", config: { handler: somethingService.getSubmissions, validate: { query: { name: joi.string() } } } },
//    { method: "GET", path: "/api/getSubmissionDetail", config: { handler: somethingService.getSubmissionDetail } },
//    { method: "POST", path: "/api/sendMail", config: { handler: mailService.sendMail, validate: { query: { name: joi.string() } } } },
//    { method: "GET", path: "/api/getStates", config: { handler: somethingService.getStates } }
//];

module.exports = [
    router.get('/login', authenticationService.login),
    router.get('/logout', authenticationService.logout),
    router.post('/register', authenticationService.register),
    router.post("/saveForm", somethingService.saveForm),
    router.get('/getSubmissions', somethingService.getSubmissions),
    router.get('/getSubmissionDetail', somethingService.getSubmissionDetail),
    router.post('/sendMail', mailService.sendMail),
    router.get('/getStates', somethingService.getStates)
];