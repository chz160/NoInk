var hapi = require("hapi");
var joi = require("joi");

var SomethingServiceType = require('../services/somethingService.js');
var somethingService = new SomethingServiceType();

module.exports = [
    { method: "GET", path: "/api/ping", config: { handler: ping } },
    { method: "GET", path: "/api/something", config: { handler: somethingHandler, validate: { query: { name: joi.string() } } } }
];

function ping(request, reply) {
    return reply(Date.now());
}

function somethingHandler(request, reply) {
    somethingService.doSomething(request, reply);
}