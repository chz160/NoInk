﻿var DataServiceType = require('../mongo-stuff.js');

var dataService = new DataServiceType();

function SomethingService() {
    //do stuff
}

SomethingService.prototype.doSomething = function (request, reply) {
    reply(request.query.name);
    return true;
}

SomethingService.prototype.saveForm = function (request, reply) {
    var data = JSON.stringify(request.payload);
    dataService.insertDocument(data);
    console.log(JSON.stringify(request.payload));
    reply(request.payload);
    return true;
}

SomethingService.prototype.getSubmissions = function(request, reply) {
    dataService.getSubmissions(request, reply);
    return true;
}

module.exports = SomethingService;