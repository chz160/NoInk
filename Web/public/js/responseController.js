angular.module('NoInkApp').controller('ResponseController', function ($scope, $http) {

    $scope.getResponses = function () {
        $http({
            method: "GET",
            url: "/api/getResponses"
        }).success(function (data) {
            $scope.responses = data;
            //console.log(data);
            $scope.detailView = false;
        }).error(function (data, status, header, config) {
            console.log(data);
            console.log(status);
            console.log(header);
            console.log(config);
        });
    };
    
    $scope.getResponse = function (row) {
        $http({
            method: "GET",
            url: "/api/getResponse",
            params: { id: row._id }
        }).success(function (data, status, headers, config) {
            $scope.submission = data;
            $scope.detailView = true;
        }).error(function (data, status, headers, config) {
            console.log(data);
        });
    }
    
    $scope.emergencyContactTemplate = { name: 'emergencyContact', url: 'emergencyContactView' };
    $scope.phoneTemplate = { name: 'phone', url: 'phoneView' };
    $scope.addressTemplate = { name: 'address', url: 'addressView' };
    $scope.emailAddressTemplate = { name: 'emailAddress', url: 'emailAddressView' };
    
    $scope.getResponses();
});