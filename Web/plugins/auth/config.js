var Confidence = require("confidence");

var store = new Confidence.Store({
    provider: {
        $filter: 'env',
        production: {
            facebook: {
                provider: 'facebook',
                password: 'hapiauth',
                clientId: '330752823775005', // fill in your FB ClientId here
                clientSecret: 'd357ece0c4a1c16f9e72110172c79277', // fill in your FB Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            },
            google: {
                provider: 'google',
                password: 'hapiauth',
                clientId: '716573943630-ta92nqaesirpgtloour4qklb2t848qfr.apps.googleusercontent.com', // fill in your Google ClientId here
                clientSecret: 'smSH5Yi5t1j28Fj5TdH3fyvl', // fill in your Google Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            }
        },
        staging: {
            facebook: {
                provider: 'facebook',
                password: 'hapiauth',
                clientId: '', // fill in your FB ClientId here
                clientSecret: '', // fill in your FB Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            },
            google: {
                provider: 'google',
                password: 'hapiauth',
                clientId: '', // fill in your Google ClientId here
                clientSecret: '', // fill in your Google Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            }
        }, // this is the default configuration if no env.ENVIRONMENT varaible is set.
        $default: {
            facebook: {
                provider: 'facebook',
                password: 'hapiauth',
                clientId: '330754070441547', // fill in your FB ClientId here
                clientSecret: '871d0a922840fb27a97098ca9ee1417c', // fill in your FB Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            },
            google: {
                provider: 'google',
                password: 'hapiauth',
                clientId: '716573943630-5qiccl0hvaek6ai9cb7crqujnjjhecho.apps.googleusercontent.com', // fill in your Google ClientId here
                clientSecret: 'GqWJpFGFXU81Z46JmvniqfnA', // fill in your Google Client Secret here
                isSecure: false // Terrible idea but required if not using HTTPS
            }
        }
    }
});

var criteria = {
    env: process.env.ENVIRONMENT
};

exports.get = function(key) {
    return store.get(key, criteria);
};
