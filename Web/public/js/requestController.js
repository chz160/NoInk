angular.module('NoInkApp').controller('RequestController', function ($scope, $http) {
    $scope.sendRequest = function (req) {
        $http({
            method: "POST",
            url: "/api/sendMail",
            data: req
        }).success(function(result) {
            $scope.req = {};
            $scope.sendRequestForm.$setPristine();
            $scope.sendError = false;
            $scope.sendSuccess = true;
        }).error(function(err) {
            console.log('Failed to send message');
            $scope.sendError = true;
        });
    };
});

