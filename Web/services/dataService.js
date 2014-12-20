var url = 'mongodb://noinkuser:password1@ds061248.mongolab.com:61248/multivision';
var mongoskin = require('mongoskin');
var db = mongoskin.db(url);


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


//var MongoClient = require('mongodb').MongoClient, 
//    assert = require('assert');
//ObjectId = require('mongodb').ObjectID;

//exports.insertDocument = function (collectionName, doc) {
//    MongoClient.connect(url, function (err, db) {
//        if (err) throw err;
//        console.log("Connected to mongo...");
//        var collection = db.collection(collectionName);
//        collection.insert(doc, { w: 1 }, function (err, result) {
//            console.log(err);
//            if (err) throw err;
//            db.close();
//        });
//    }
//    );
//};

//exports.getCollectionItems = function (collectionName, fn) {
//    MongoClient.connect(url, function (err, db) {
//        if (err) throw err;
//        console.log("Connected to mongo...");
//        var collection = db.collection(collectionName);
//        collection.find().toArray(function (err, docs) {
//            fn(docs);
//        });
//    }
//    );
//};

//exports.getCollectionItem = function (collectionName, id, fn) {
//    MongoClient.connect(url, function (err, db) {
//        if (err) throw err;
//        console.log("Connected to mongo...");
//        var collection = db.collection(collectionName);
//        collection.findOne({ _id: new ObjectId(id) }, function (err, doc) {
//            fn(doc);
//        });
//    }
//    );
//};




exports.insertFormSubmission = function (doc) {
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

