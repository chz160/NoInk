angular.module('NoInkApp').controller('FormController', function ($scope, $http, $filter, $location) {
    var id = $location.search()['id'];

    if (id) {
        $http({
            method: 'GET',
            url: '/api/getRequest',
            params: { id: id }
        }).success(function(data) {
            console.log(data);
            $scope.person = {
                emergencyContacts: [],
                phoneNumbers: [],
                addresses: [],
                emailAddresses: [
                    {
                        emailAddress: data.email,
                        emailAddressType: 'Home'
                    }
                ],
                firstName: data.firstName,
                lastName: data.lastName
            };
        });
    } else {
        $scope.person = {
            emergencyContacts: [],
            phoneNumbers: [],
            addresses: [],
            emailAddresses: []
        };
    }

    $scope.sexes = ["Male", "Female"];
    $scope.emergencyContactTemplate = { name: 'emergencyContact', url: 'emergencyContact' };
    $scope.phoneTemplate = { name: 'phone', url: 'phone' };
    $scope.addressTemplate = { name: 'address', url: 'address' };
    $scope.emailAddressTemplate = { name: 'emailAddress', url: 'emailAddress' };
    $scope.submitted = false;
    $scope.getStates = function () {
        $http({
            method: "GET",
            url: "/api/getStates"
        }).success(function (data) {
            $scope.stateList = data;
            //console.log(data);
        }).error(function (data, status, header, config) {
            console.log(data);
        });
    };
    
    $scope.save = function (newSubmission) {
        $http({
            method: "POST",
            url: "/api/saveResponse",
            data: newSubmission
        }).success(function(data) {
            $scope.submitted = true;
        }).error(function(err) {
            console.log('err: ' + err);
        });
        
        $scope.responseForm.$setPristine();
        $scope.person = {};
    };

    $scope.addEmailAddress = function() {
        $scope.person.emailAddresses.push({});
    };

    $scope.removeEmailAddress = function(emailAddress) {
        $scope.person.emailAddresses.pop(emailAddress);
    };

    $scope.addAddress = function() {
        $scope.person.addresses.push({});
    };

    $scope.removeAddress = function(address) {
        $scope.person.addresses.pop(address);
    };

    $scope.addEmergencyContact = function() {
        $scope.person.emergencyContacts.push({});
    };

    $scope.removeEmergencyContact = function(ec) {
        $scope.person.emergencyContacts.pop(ec);
    };

    $scope.addPhoneNumber = function() {
        $scope.person.phoneNumbers.push({});
    };

    $scope.removePhoneNumber = function(phone) {
        $scope.person.phoneNumbers.pop(phone);
    };
    
    $scope.getStates();
});
