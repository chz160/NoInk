var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var options = {
    auth: {
        api_user: 'dlawless',
        api_key: 'password1'
    }
};
var transporter = nodemailer.createTransport(sgTransport(options));

exports.sendMail = function(request, reply) {
    transporter.sendMail({
        from: 'derekhlawless@gmail.com',
        to: 'derekhlawless@gmail.com',
        subject: '42',
        text: 'Is the answer to life...'
    }, function(err, info) {
        console.log(err);
    });
    return true;
}

