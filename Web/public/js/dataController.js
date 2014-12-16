noInkApp.controller('DataController', function ($scope, $http, $filter) {
    function newEmergencyContact() {
        this.firstName;
        this.lastName;
        this.homePhone;
        this.cellPhone;
        this.businessPhone;
        this.businessPhoneExt;
        this.email;
    }
    
    $scope.person = {
        emergencyContacts: [],
        phoneNumbers: []
    };
    
    $scope.sexes = ["Male", "Female"];
    
    $scope.emergencyContactTemplate = { name: 'emergencyContact', url: 'emergencyContact' };
    $scope.phoneTemplate = { name: 'phone', url: 'phone' };
    
    $scope.getStates = function () {
        $http({
            method: "GET",
            url: "/api/getStates"
        }).success(function (data) {
            $scope.stateList = data;
            //console.log(data);
        }).error(function (data, status, header, config) {
            console.log(data);
            console.log(status);
            console.log(header);
            console.log(config);
        });
    };
    
    
    $scope.save = function (newSubmission) {
        $http({
            method: "POST",
            url: "/api/saveForm",
            data: newSubmission
        });
        
        $scope.submissionForm.$setPristine();
        $scope.person = {};
    };
    
    $scope.addEmergencyContact = function () {
        $scope.person.emergencyContacts.push(new newEmergencyContact);
    }
    
    $scope.removeEmergencyContact = function (ec) {
        $scope.person.emergencyContacts.pop(ec);
    }
    
    $scope.addPhoneNumber = function () {
        $scope.person.phoneNumbers.push({ phoneNumber: "" });
    }
    
    $scope.removePhoneNumber = function (phone) {
        $scope.person.phoneNumbers.pop(phone);
    }
    
    
    
    $scope.getStates();
});
