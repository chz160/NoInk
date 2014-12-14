var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var url = 'mongodb://noinkuser:password1@ds061248.mongolab.com:61248/multivision';

var DataService = function () {

};


DataService.prototype.insertDocument = function(doc) {
    MongoClient.connect(url, function(err, db) {
            if (err) throw err;

            console.log("Connected to mongo...");

            var data = JSON.parse(doc);

            var formSubmissions = db.collection('formsubmissions');
            formSubmissions.insert(data, { w: 1 }, function(err, result) {
                console.log(err);
                if (err) throw err;
                db.close();
            });
        }
    );
};

module.exports = DataService;