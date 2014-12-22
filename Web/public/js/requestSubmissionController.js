noInkApp.controller('RequestSubmissionController', function ($scope, $http) {
    $scope.requestSubmission = function (req) {
        $http({
            method: "POST",
            url: "/api/sendMail",
            data: req
        }).success(function(result) {
            $scope.req = {};
            $scope.requestSubmissionForm.$setPristine();
            $scope.sendError = false;
            $scope.sendSuccess = true;
        }).error(function(err) {
            console.log('Failed to send message');
            $scope.sendError = true;
        });
    };
});

