var hapi = require("hapi");
var joi = require("joi");

var SomethingServiceType = require('../services/somethingService.js');
var somethingService = new SomethingServiceType();

module.exports = [
    { method: "POST", path: "/api/saveForm", config: { handler: somethingService.saveForm, validate: { query: { name: joi.string() } } } },
    { method: "GET", path: "/api/getSubmissions", config: { handler: somethingService.getSubmissions, validate: { query: { name: joi.string() } } } },
    { method: "GET", path: "/api/getSubmissionDetail", config: { handler: somethingService.getSubmissionDetail } }
];