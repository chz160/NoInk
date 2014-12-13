var hapi = require("hapi");
var port = parseInt(process.env.PORT, 10) || 1337;
var server = new hapi.Server();
server.connection({ port: port });

server.register({ register: require('lout'), options: { endpoint: '/docs'} }, function (err) {
    console.log(err);
});

var api = require("./routes/api");
server.route(api);

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

server.start(function () {
    console.log('Server running at:', server.info.uri);
});