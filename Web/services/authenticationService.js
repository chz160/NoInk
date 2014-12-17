var dataService = require('./dataService.js');

exports.register = function (req, res) {
    res.json('Hi your e-mail is "' + req.payload.email + '", that\'s all!');
}


exports.login =  function (req, res) {
    res.json('Hi your e-mail is "' + req.payload.email + '", that\'s all!');
}

exports.logout = function (req, res) {
    res.json('Bye!');
}