var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var mongoUrl = 'mongodb://noinkuser:password1@ds061248.mongolab.com:61248/multivision';


function insertDocument(url) {
    MongoClient.connect(url, function (err, db) {
        console.log("Connected to mongo");
        
        var formSubmissions = db.collection('formsubmissions');
        
        var document = { formName: "Employee Form", firstName: "B.B.", lastName: "King" };
        
        formSubmissions.insert(document, { w: 1 }, function (err, records) {
            console.log("Record added");
        });
        
        db.close();
    });
}

insertDocument(mongoUrl);