var MongoClient = require('mongodb').MongoClient, 
    assert = require('assert');
    ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://noinkuser:password1@ds061248.mongolab.com:61248/multivision';

var DataService = function () {

};

function getCollection() {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        console.log("Connected to mongo...");
        var formSubmissions = db.collection('formsubmissions');
        return formSubmissions;
    });
};

DataService.prototype.insertDocument = function(doc) {
    MongoClient.connect(url, function(err, db) {
            if (err) throw err;

            console.log("Connected to mongo...");

            //var data = JSON.parse(doc);

            var formSubmissions = db.collection('formsubmissions');
            formSubmissions.insert(doc, { w: 1 }, function(err, result) {
                console.log(err);
                if (err) throw err;
                db.close();
            });
        }
    );
};

DataService.prototype.getSubmissions = function(fn) {
    MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            console.log("Connected to mongo...");
            var formSubmissions = db.collection('formsubmissions');
            formSubmissions.find().toArray(function(err, docs) {
                fn(docs);
            });
        }
    );
};

DataService.prototype.getSubmissionDetail = function (id, fn) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("Connected to mongo...");
        var formSubmissions = db.collection('formsubmissions');
        formSubmissions.findOne({_id: new ObjectId(id) }, function (err, doc) {
            fn(doc);
        });
    }
    );
};

module.exports = DataService;