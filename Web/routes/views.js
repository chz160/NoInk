var express = require('express');
var router = express.Router();

module.exports = [
    router.get('/', function (req, res) { res.render('index'); }),
    router.get('/submissions', function (req, res) { res.render('submissions'); }),
    router.get('/register', function (req, res) { res.render('register'); }),
    router.get('/requestSubmission', function (req, res) { res.render('requestSubmission'); }),
    router.get('/emergencyContact', function (req, res) { res.render('emergencyContact'); }),
    router.get('/emergencyContactView', function (req, res) { res.render('emergencyContactView'); }),
    router.get('/phone', function (req, res) { res.render('phone'); }),
    router.get('/phoneView', function (req, res) { res.render('phoneView'); }),
    router.get('/address', function (req, res) { res.render('address'); }),
    router.get('/addressView', function (req, res) { res.render('addressView'); }),
    router.get('/emailAddress', function (req, res) { res.render('emailAddress'); }),
    router.get('/emailAddressView', function (req, res) { res.render('emailAddressView'); })
];