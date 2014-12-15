var hapi = require("hapi"),
    swig = require('swig');

var port = parseInt(process.env.PORT, 10) || 80;
var server = new hapi.Server();
server.connection({ port: port });

swig.setDefaults({ varControls: ['[[', ']]'] });

server.views({
    engines: {
        html: swig
    },
    relativeTo: __dirname,
    path: './views',
    isCached: false
});

server.register([
    { register: require('bell') },
    { register: require('hapi-auth-cookie') },
    { register: require('./plugins/auth') }], function (err) {
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
    
    //Load the API routes
    var apiRoutes = require("./routes/api");
    server.route(apiRoutes);

    var viewRoutes = require("./routes/views");
    server.route(viewRoutes);
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});