module.exports = function (app, passport) {
    //var express = require('express');
    //var router = express.Router();
    app.get('/', function (req, res) { res.render('index'); });
    
    app.get('/login', function (req, res) { res.render('login', { message: req.flash('loginMessage') }); });
    app.post('/login', passport.authenticate('local-login', { successRedirect : '/profile', failureRedirect : '/login', failureFlash : true }));
    
    app.get('/signup', function (req, res) { res.render('signup', { message: req.flash('signupMessage') }); });
    app.post('/signup', passport.authenticate('local-signup', { successRedirect : '/profile', failureRedirect : '/signup', failureFlash : true }));
    
    app.get('/profile', isLoggedIn, function (req, res) { res.render('profile', { user : req.user }); });
    app.get('/logout', function (req, res) { req.logout(); res.redirect('/'); });
    
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect : '/profile', failureRedirect : '/' }));
    
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
    app.get('/auth/google/callback', passport.authenticate('google', { successRedirect : '/profile', failureRedirect : '/' }));

    app.get('/form', function (req, res) { res.render('form'); });
    app.get('/submissions', isLoggedIn, function (req, res) { res.render('submissions'); });
    app.get('/requestSubmission', isLoggedIn, function (req, res) { res.render('requestSubmission'); });
    app.get('/emergencyContact', function (req, res) { res.render('emergencyContact'); });
    app.get('/emergencyContactView', isLoggedIn, function (req, res) { res.render('emergencyContactView'); });
    app.get('/phone', function (req, res) { res.render('phone'); });
    app.get('/phoneView', isLoggedIn, function (req, res) { res.render('phoneView'); });
    app.get('/address', function (req, res) { res.render('address'); });
    app.get('/addressView', isLoggedIn, function (req, res) { res.render('addressView'); });
    app.get('/emailAddress', function (req, res) { res.render('emailAddress'); });
    app.get('/emailAddressView', isLoggedIn, function (req, res) { res.render('emailAddressView'); });
};

function isLoggedIn(req, res, next) {
    
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    
    // if they aren't redirect them to the home page
    res.redirect('/');
};
