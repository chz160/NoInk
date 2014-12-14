var hapi = require("hapi");
var joi = require("joi");

var DataServiceType = require('../mongo-stuff.js');
var dataService = new DataServiceType();

exports.register = function (request, reply) {
    reply(true);
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