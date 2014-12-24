var path = require('path');
var authenticationService = require(path.join(__dirname, '../services/authenticationService.js'));
var somethingService = require(path.join(__dirname, '../services/somethingService.js'));
var mailService = require(path.join(__dirname, '../services/mailService.js'));

module.exports = function () {
    var serviceLocator = require(path.join(__dirname, "../services/serviceLocator.js"));
    var app = serviceLocator.resolve("app");
    app.get('/api/login', authenticationService.login);
    app.get('/api/logout', authenticationService.logout);
    app.post('/api/register', authenticationService.register);
    app.post("/api/saveResponse", somethingService.saveResponse);
    app.get('/api/getResponses', somethingService.getResponses);
    app.get('/api/getResponse', somethingService.getResponse);
    app.post('/api/sendMail', mailService.sendMail);
    app.get('/api/getStates', somethingService.getStates);
    app.get('/api/getRequest', somethingService.getRequest);
};