var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    swig = require('swig'),
    passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session'),
    mongoose = require('mongoose'),
    serviceLocator = require("./services/serviceLocator.js");

var app = express();

serviceLocator.register("passport", passport);
serviceLocator.register("app", app);

var configDB = require('./config/database.js');
mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(); // pass passport for configuration

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
swig.setDefaults({ varControls: ['[[', ']]'] });

//Turn off view caching in dev
if (app.get('env') === 'development') {
    app.set('view cache', false);
    swig.setDefaults({ cache: false });
}

// uncomment after placing favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/scripts', express.static(path.join(__dirname, '/node_modules')));

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.use(function (req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.copyRightedYear = new Date().getFullYear();
    next();
});

//Load the API routes
require("./routes/api")();

//Load the View routes
require("./routes/views")();

//------------------ Authentication -----------------------------


//------------------ End Authentication -------------------------


//------------------ Error Handling -----------------------------
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
//------------------ End Error Handling -------------------------

module.exports = app;