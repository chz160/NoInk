noInkApp.controller('SubmissionController', function ($scope, $http) {
    
    $scope.getSubmissions = function () {
        $http({
            method: "GET",
            url: "/api/getSubmissions"
        }).success(function (data) {
            $scope.submissions = data;
            //console.log(data);
            $scope.detailView = false;
        }).error(function (data, status, header, config) {
            console.log(data);
            console.log(status);
            console.log(header);
            console.log(config);
        });
    };
    
    $scope.showDetail = function (row) {
        $http({
            method: "GET",
            url: "/api/getSubmissionDetail",
            params: { id: row._id }
        }).success(function (data, status, headers, config) {
            $scope.submission = data;
            $scope.detailView = true;
        }).error(function (data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });
    }
    
    $scope.emergencyContactTemplate = { name: 'emergencyContact', url: 'emergencyContactView' };
    $scope.phoneTemplate = { name: 'phone', url: 'phoneView' };
    
    $scope.getSubmissions();
});