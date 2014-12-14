var hapi = require("hapi");

var port = parseInt(process.env.PORT, 10) || 1337;
var server = new hapi.Server();
server.connection({ port: port });

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

server.register([
    { register: require('lout'), options: { endpoint: '/api/docs' } }, 
    require('bell'),
    require('hapi-auth-cookie'),
    require('./plugins/auth')], function (err) {
    if (err) throw err;
    // Declare an authentication strategy using the bell scheme
    // with the name of the provider, cookie encryption password,
    // and the OAuth client credentials.
    server.auth.strategy('twitter', 'bell', {
        provider: 'twitter',
        password: 'cookie_encryption_password',
        clientId: 'my_twitter_client_id',
        clientSecret: 'my_twitter_client_secret',
        isSecure: false     // Terrible idea but required if not using HTTPS
    });
        
    // Use the 'twitter' authentication strategy to protect the
    // endpoint handling the incoming authentication credentials.
    // This endpoints usually looks up the third party account in
    // the database and sets some application state (cookie) with
    // the local application account information.
    server.route({
        method: ['GET', 'POST'], // Must handle both GET and POST
        path: '/login',          // The callback endpoint registered with the provider
        config: {
            auth: {
                strategy: 'twitter',
                mode: 'try'
            },
            handler: function (request, reply) {
                    
                // Perform any account lookup or registration, setup local session,
                // and redirect to the application. The third-party credentials are
                // stored in request.auth.credentials. Any query parameters from
                // the initial request are passed back via request.auth.credentials.query.
                if (!request.auth.isAuthenticated) {
                    return reply('Authentication failed due to: ' + request.auth.error.message);
                }
                return reply.redirect('/home');
            }
        }
    });
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});