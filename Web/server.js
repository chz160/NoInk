var hapi = require("hapi"), 
    passport = require('passport');

var port = parseInt(process.env.PORT, 10) || 1337;
var server = new hapi.Server();
server.connection({ port: port });

server.register({ register: require('lout'), options: { endpoint: '/api/docs'} }, function (err) {
    console.log(err);
});

var api = require("./routes/api");
server.route(api);

server.route({
    method: 'GET',
    path: '/scripts/{path*}',
    config: {
        handler: {
            directory: {
                path: './node_modules',
                listing: false,
                index: false
            }
        },
        plugins: {
            lout: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/{path*}',
    config: {
        handler: {
            directory: {
                path: './views',
                listing: false,
                index: true
            }
        },
        plugins: {
            lout: false
        }
    }
});

//passport.use(new LocalStrategy(
//    function (username, password, done) {
//        User.findOne({ username: username }, function (err, user) {
//            if (err) { return done(err); }
//            if (!user) {
//                return done(null, false, { message: 'Incorrect username.' });
//            }
//            if (!user.validPassword(password)) {
//                return done(null, false, { message: 'Incorrect password.' });
//            }
//            return done(null, user);
//        });
//    }
//));

server.start(function () {
    console.log('Server running at:', server.info.uri);
});