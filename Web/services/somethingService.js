var DataServiceType = require('../mongo-stuff.js');
var dataService = new DataServiceType();

exports.saveForm = function (request, reply) {
    var data = JSON.stringify(request.payload);
    dataService.insertDocument(data);
    return true;
}

exports.getSubmissions = function(request, reply) {
    dataService.getSubmissions(function(docs) {
        reply(docs);
    });
    return true;
}

exports.getSubmissionDetail = function (request, reply) {
    dataService.getSubmissionDetail(request.query.id, function(doc) {
        reply(doc);
    });
    return true;
}