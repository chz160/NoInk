var hapi = require("hapi");
var port = parseInt(process.env.PORT, 10) || 1337;
var server = new hapi.Server();
server.connection({ port: port });

var api = require("./routes/api");
server.route(api);

server.route({
    method: 'GET',
    path: '/{path*}',
    handler: {
        directory: {
            path: './views',
            listing: false,
            index: true
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});