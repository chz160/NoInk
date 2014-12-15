

var noInkApp = angular.module('NoInkApp', []);


noInkApp .filter('tel', function () {
    return function (tel) {
        if (!tel) { return ''; }
        
        var value = tel.toString().trim().replace(/^\+/, '');
        
        if (value.match(/[^0-9]/)) {
            return tel;
        }
        
        var country, city, number;
        
        switch (value.length) {
            case 10:// +1PPP####### -> C (PPP) ###-####
                country = 1;
                city = value.slice(0, 3);
                number = value.slice(3);
                break;

            case 11:// +CPPP####### -> CCC (PP) ###-####
                country = value[0];
                city = value.slice(1, 4);
                number = value.slice(4);
                break;

            case 12:// +CCCPP####### -> CCC (PP) ###-####
                country = value.slice(0, 3);
                city = value.slice(3, 5);
                number = value.slice(5);
                break;

            default:
                return tel;
        }
        
        if (country == 1) {
            country = "";
        }
        
        number = number.slice(0, 3) + '-' + number.slice(3);
        
        return (country + " (" + city + ") " + number).trim();
    };
});



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
    

    $scope.getStates();
});


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
});

$(function () {
    $('input, textarea').placeholder();
});