var hapi = require("hapi");
var joi = require("joi");

var SomethingServiceType = require('../services/somethingService.js');
var somethingService = new SomethingServiceType();

module.exports = [
    { method: "GET", path: "/api/ping", config: { handler: ping } },
    { method: "GET", path: "/api/something", config: { handler: somethingHandler, validate: { query: { name: joi.string() } } } },
    { method: "POST", path: "/api/saveForm", config: { handler: saveHandler, validate: { query: { name: joi.string() } } } },
    { method: "GET", path: "/api/getSubmissions", config: { handler: getSubmissions, validate: { query: { name: joi.string() } } } },
    { method: "GET", path: "/api/getSubmissionDetail", config: { handler: somethingService.getSubmissionDetail } }
];

function ping(request, reply) {
    return reply(Date.now());
}

function somethingHandler(request, reply) {
    somethingService.doSomething(request, reply);
}

function saveHandler(request, reply) {
    somethingService.saveForm(request, reply);
}

function getSubmissions(request, reply) {
    somethingService.getSubmissions(function(data) {
        reply(data);
    });
}