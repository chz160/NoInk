var http = require('http');
var port = process.env.port || 1337;

var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var url = 'mongodb://noinkuser:password1@ds061248.mongolab.com:61248/multivision';

MongoClient.connect(url, function(err, db) {
    console.log("Connected to mongo");
    db.close();
});

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);