var DataServiceType = require('../mongo-stuff.js');
var dataService = new DataServiceType();

function SomethingService() {
    //do stuff
}

SomethingService.prototype.saveForm = function (request, reply) {
    var data = JSON.stringify(request.payload);
    dataService.insertDocument(data);
    return true;
}

SomethingService.prototype.getSubmissions = function(request, reply) {
    dataService.getSubmissions(function(docs) {
        reply(docs);
    });
    return true;
}

SomethingService.prototype.getSubmissionDetail = function (request, reply) {
    dataService.getSubmissionDetail(request.query.id, function(doc) {
        reply(doc);
    });
    return true;
}

module.exports = SomethingService;