var noInkApp = angular.module('NoInkApp', []);

noInkApp.controller('DataCtrl', function ($scope, $http) {
    $scope.person = {};
    $scope.sexes = ["Male", "Female"];
    $scope.states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "DC", "WV", "WI", "WY"];
    $scope.save = function () {
        $http({
            method: "POST",
            url: "/api/saveForm",
            data: $scope.person
        });
    };
});


noInkApp.controller('SubmissionCtrl', function($scope, $http) {
    $scope.getSubmissions = function() {
        $http({
            method: "GET",
            url: "/api/getSubmissions"
        }).success(function(data) {
            $scope.submissions = data;
            debugger;
            console.log(data);
        }).error(function(data, status, header, config) {
            console.log(data);
            console.log(status);
            console.log(header);
            console.log(config);
        });
    };

    $scope.showDetail = function(row) {
        $scope.submission = {
            firstName: "Michael",
            lastName: "Smitherman"
        };
    }
});