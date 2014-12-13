function SomethingService() {
    //do stuff
}

SomethingService.prototype.doSomething = function (request, reply) {
    reply(request.query.name);
    return true;
}

module.exports = SomethingService;