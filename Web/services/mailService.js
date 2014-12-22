var configMail = require('../config/mail.js');


var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var transportOptions = {
    auth: {
        api_user: configMail.apiUser,
        api_key: configMail.apiKey
    }
};
var transporter = nodemailer.createTransport(sgTransport(transportOptions));

exports.sendMail = function(req, res) {
    var requestData = req.body;
    var newRequest = {
        firstName: requestData.firstName,
        lastName: requestData.lastName,
        email: requestData.email
    };
    
    var dataService = require('./dataService.js');

    dataService.insertDocument2('inforequests', newRequest, function(results) {
        var id = results[0]._id.toString();
        var from = configMail.from;
        var subject = 'Employment Application Request';
        var url = 'http://ec2-54-68-202-243.us-west-2.compute.amazonaws.com/form?id=' + id;
        //var url = 'http://localhost/form?id=' + id;
        var messageTemplate = '<p>' + requestData.firstName + ' ' + requestData.lastName + ', your employer needs some additional information from you. Please visit <a href=\'' + url + '\'>Employment Application Form</a> and provide your information.<p>The NoInk Team</p>';
        console.log(messageTemplate);
        
        var mailOptions = {
            from: from,
            to: requestData.email,
            subject: subject,
            html: messageTemplate
        };
        
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                res.send({ msg: 'failure' });
            } else
                res.send({ msg: 'success' });
        });
    });

    return true;
};

