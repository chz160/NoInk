var path = require('path');
//var express = require('express');
//var router = express.Router();

var appDir = path.dirname(require.main.filename);
var authenticationService = require(path.join(appDir, '../services/authenticationService.js'));
var somethingService = require(path.join(appDir, '../services/somethingService.js'));
var mailService = require(path.join(appDir, '../services/mailService.js'));

module.exports = function (app, passport) {
    app.get('/api/login', authenticationService.login);
    app.get('/api/logout', authenticationService.logout);
    app.post('/api/register', authenticationService.register);
    app.post("/api/saveResponse", somethingService.saveResponse);
    app.get('/api/getResponses', somethingService.getResponses);
    app.get('/api/getResponse', somethingService.getResponse);
    app.post('/api/sendMail', mailService.sendMail);
    app.get('/api/getStates', somethingService.getStates);
};