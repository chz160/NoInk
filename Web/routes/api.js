var path = require('path');
var express = require('express');
var router = express.Router();

var appDir = path.dirname(require.main.filename);
var authenticationService = require(path.join(appDir, '../services/authenticationService.js'));
var somethingService = require(path.join(appDir, '../services/somethingService.js'));
var mailService = require(path.join(appDir, '../services/mailService.js'));

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