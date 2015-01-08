var sminkApp = angular.module('SmInkApp', ['ngRoute'], function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
$(function () {
    $('input, textarea').placeholder();
});