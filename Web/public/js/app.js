var noInkApp = angular.module('NoInkApp', [], function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

$(function () {
    $('input, textarea').placeholder();
});