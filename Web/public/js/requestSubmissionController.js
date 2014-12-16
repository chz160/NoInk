noInkApp.controller('RequestSubmissionController', function ($scope, $http) {
    $scope.requestSubmission = function () {
        var email = $scope.email;
        $http({
            method: "POST",
            url: "/api/sendMail",
            data: $scope
        });
    };
});

