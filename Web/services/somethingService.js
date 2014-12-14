var DataServiceType = require('./dataService.js');
var dataService = new DataServiceType();

exports.saveForm = function (request, reply) {
    dataService.insertDocument(request.payload);
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