module.exports = [
    {
        // Use the 'twitter' authentication strategy to protect the
        // endpoint handling the incoming authentication credentials.
        // This endpoints usually looks up the third party account in
        // the database and sets some application state (cookie) with
        // the local application account information.

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
                return reply.redirect('/submissions');
            }
        }
    },
    { method: 'GET', path: '/', handler: function (request, reply) { reply.view('index'); } },
    { method: 'GET', path: '/submissions', handler: function (request, reply) { reply.view('submissions'); } },
    { method: 'GET', path: '/register', handler: function (request, reply) { reply.view('register'); } },
    { method: 'GET', path: '/requestSubmission', handler: function (request, reply) { reply.view('requestSubmission'); } },
    { method: 'GET', path: '/emergencyContact', handler: function (request, reply) { reply.view('emergencyContact'); } },
    { method: 'GET', path: '/emergencyContactView', handler: function (request, reply) { reply.view('emergencyContactView'); } },
    { method: 'GET', path: '/phone', handler: function (request, reply) { reply.view('phone'); } },
    { method: 'GET', path: '/phoneView', handler: function (request, reply) { reply.view('phoneView'); } },
    { method: 'GET', path: '/scripts/{path*}', config: { handler: { directory: { path: './node_modules', listing: false, index: false } }, plugins: { lout: false } } }, 
    { method: 'GET', path: '/public/{path*}', config: { handler: { directory: { path: './public', listing: false, index: true } }, plugins: { lout: false } } }
];