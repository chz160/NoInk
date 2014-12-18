var Confidence = require("confidence");

var store = new Confidence.Store({
    'provider': {
        '$filter': 'env',
        'development': {
            'facebookAuth' : {
                'clientID'      : '330754070441547',
                'clientSecret'  : '871d0a922840fb27a97098ca9ee1417c',
                'callbackURL'   : 'http://localhost:1337/auth/facebook/callback'
            },
            'twitterAuth' : {
                'consumerKey'       : 'X74DWvl8YtNsuzI0E84d45rXT',
                'consumerSecret'    : 'jKoS00dEsUgmRzWf492aK5ZnQnn18LMWYZ8eFTiTKoxjpFejBX',
                'callbackURL'       : 'http://localhost:1337/auth/twitter/callback'
            },
            'googleAuth' : {
                'clientID'      : '716573943630-5qiccl0hvaek6ai9cb7crqujnjjhecho.apps.googleusercontent.com',
                'clientSecret'  : 'GqWJpFGFXU81Z46JmvniqfnA',
                'callbackURL'   : 'http://localhost:1337/auth/google/callback'
            }
        },
        '$default': {
            'facebookAuth' : {
                'clientID'      : '330752823775005',
                'clientSecret'  : 'd357ece0c4a1c16f9e72110172c79277',
                'callbackURL'   : 'http://ec2-54-68-202-243.us-west-2.compute.amazonaws.com/auth/facebook/callback'
            },
            'twitterAuth' : {
                'consumerKey'       : 'NRTcpmSFTOWgNOpIXNT8G0K5c',
                'consumerSecret'    : 'nSGbd6vZD2TMqQYbanlTGwqcUBn6QuKC9CbWnDNqNlnzNcmyZl',
                'callbackURL'       : 'http://ec2-54-68-202-243.us-west-2.compute.amazonaws.com/auth/twitter/callback'
            },
            'googleAuth' : {
                'clientID'      : '716573943630-ta92nqaesirpgtloour4qklb2t848qfr.apps.googleusercontent.com',
                'clientSecret'  : 'smSH5Yi5t1j28Fj5TdH3fyvl',
                'callbackURL'   : 'http://ec2-54-68-202-243.us-west-2.compute.amazonaws.com/auth/google/callback'
            }
        }
    }
});

var criteria = {
    env: process.env.ENVIRONMENT
};

exports.get = function (key) {
    return store.get(key, criteria);
};
//module.exports = {
//    'facebookAuth' : {
//        'clientID'      : '330754070441547', // your App ID
//        'clientSecret'  : '871d0a922840fb27a97098ca9ee1417c', // your App Secret
//        'callbackURL'   : 'http://localhost:1337/auth/facebook/callback'
//    },
//    'twitterAuth' : {
//        'consumerKey'       : 'X74DWvl8YtNsuzI0E84d45rXT',
//        'consumerSecret'    : 'jKoS00dEsUgmRzWf492aK5ZnQnn18LMWYZ8eFTiTKoxjpFejBX',
//        'callbackURL'       : 'http://localhost:1337/auth/twitter/callback'
//    },
//    'googleAuth' : {
//        'clientID'      : '716573943630-5qiccl0hvaek6ai9cb7crqujnjjhecho.apps.googleusercontent.com',
//        'clientSecret'  : 'GqWJpFGFXU81Z46JmvniqfnA',
//        'callbackURL'   : 'http://localhost:1337/auth/google/callback'
//    }
//};