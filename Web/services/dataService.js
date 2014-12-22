var configDB = require('../config/database.js');
var mongoskin = require('mongoskin');
var db = mongoskin.db(configDB.url);

exports.insertDocument = function (collectionName, doc) {
    db.collection(collectionName).insert(doc, {w:1}, function(err, results) {
        if (err) {
            console.log(err);
            throw err;
        }
    });
};

exports.getCollectionItems = function(collectionName, fn) {
    db.collection(collectionName).find({}).toArray(function(err, results) {
        if (err) {
            console.log(err);
            throw err;
        }        
        fn(results);
    });
};

exports.getCollectionItem = function(collectionName, id, fn) {
    db.collection(collectionName).findById(id, function(err, result) {
        if (err) {
            console.log(err);
            throw err;
        }
        fn(result);
    });
};

exports.saveResponse = function (doc) {
    this.insertDocument("formsubmissions", doc);
};

exports.getSubmissionDetail = function (id, fn) {
    this.getCollectionItem("formsubmissions", id, function (doc) {
        fn(doc);
    });
};

exports.getSubmissions = function (fn) {
    this.getCollectionItems("formsubmissions", function (docs) {
        fn(docs);
    });
};