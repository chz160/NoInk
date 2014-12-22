var configDB = require('../config/database.js');
var responseCollection = configDB.responseCollection;
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

exports.insertDocument2 = function (collectionName, doc, fn) {
    db.collection(collectionName).insert(doc, { w: 1 }, function (err, results) {
        if (err) {
            console.log(err);
            throw err;
        }
        fn(results);
    });
};


exports.getCollectionItems = function (collectionName, fn) {
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
    this.insertDocument(responseCollection, doc);
};

exports.getResponse = function (id, fn) {
    this.getCollectionItem(responseCollection, id, function (doc) {
        fn(doc);
    });
};

exports.getResponses = function (fn) {
    this.getCollectionItems(responseCollection, function (docs) {
        fn(docs);
    });
};

exports.getRequest = function (id, fn) {
    this.getCollectionItem('inforequests', id, function (doc) {
        fn(doc);
    });
};