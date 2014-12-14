var DataServiceType = require('./dataService.js');
var hapi = require("hapi");
var joi = require("joi");

var dataService = new DataServiceType();

exports.register = {
    //validate: {
    //    payload: {
    //        email: joi.string().email().required(),
    //        password: joi.string().required()
    //    }
    //},
    handler: function (request, reply) {
        reply('Hi your e-mail is "' + request.payload.email + '", that\'s all!');
    }
}

exports.login = {
    //validate: {
    //    payload: {
    //        email: joi.string().email().required(),
    //        password: joi.string().required()
    //    }
    //},
    handler: function (request, reply) {
        reply('Hi your e-mail is "' + request.payload.email + '", that\'s all!');
    }
}

exports.logout = {
    handler: function (request, reply) {
        reply('Bye!');
    }
}