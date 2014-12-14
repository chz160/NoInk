var noInkApp = angular.module('NoInkApp', []);

noInkApp.controller('DataCtrl', function ($scope, $http) {
    $scope.person = {};
    $scope.sexes = ["Male", "Female"];
    $scope.states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "DC", "WV", "WI", "WY"];
    $scope.stateList = [
        { name: "Alabama", abbr: "AL" },
        { name: "Alaska", abbr: "AK" },
        { name: "Arizona", abbr: "AZ" },
        { name: "Arkansas", abbr: "AR" },
        { name: "California", abbr: "CA" },
        { name: "Colorado", abbr: "CO" },
        { name: "Connecticut", abbr: "CT" },
        { name: "Delaware", abbr: "DE" },
        { name: "Florida", abbr: "FL" },
        { name: "Georgia", abbr: "GA" },
        { name: "Hawaii", abbr: "HI" },
        { name: "Idaho", abbr: "ID" },
        { name: "Illinois", abbr: "IL" },
        { name: "Indiana", abbr: "IN" },
        { name: "Iowa", abbr: "IA" },
        { name: "Kansas", abbr: "KS" },
        { name: "Kentucky", abbr: "KY" },
        { name: "Louisiana", abbr: "LA" },
        { name: "Maine", abbr: "ME" },
        { name: "Maryland", abbr: "MD" },
        { name: "Massachusetts", abbr: "MA" },
        { name: "Michigan", abbr: "MI" },
        { name: "Minnesota", abbr: "MN" },
        { name: "Mississippi", abbr: "MS" },
        { name: "Missouri", abbr: "MO" },
        { name: "Montana", abbr: "MT" },
        { name: "Nebraska", abbr: "NE" },
        { name: "Nevada", abbr: "NV" },
        { name: "New Hampshire", abbr: "NH" },
        { name: "New Jersey", abbr: "NJ" },
        { name: "New Mexico", abbr: "NM" },
        { name: "New York", abbr: "NY" },
        { name: "North Carolina", abbr: "NC" },
        { name: "North Dakota", abbr: "ND" },
        { name: "Ohio", abbr: "OH" },
        { name: "Oklahoma", abbr: "OK" },
        { name: "Oregon", abbr: "OR" },
        { name: "Pennsylvania", abbr: "PA" },
        { name: "Rhode Island", abbr: "RI" },
        { name: "South Carolina", abbr: "SC" },
        { name: "South Dakota", abbr: "SD" },
        { name: "Tennessee", abbr: "TN" },
        { name: "Texas", abbr: "TX" },
        { name: "Utah", abbr: "UT" },
        { name: "Vermont", abbr: "VT" },
        { name: "Virginia", abbr: "VA" },
        { name: "Washington", abbr: "WA" },
        { name: "Washington DC", abbr: "DC" },
        { name: "West Virginia", abbr: "WV" },
        { name: "Wisconsin", abbr: "WI" },
        { name: "Wyoming", abbr: "WY" },
    ];

    $scope.emergencyContactTemplate = { name: 'emergencyContact.html', url: 'emergencyContact.html' };

    var ec = {
        firstName: "",
        lastName: "",
        homePhone: "",
        cellPhone: "",
        businessPhone: "",
        businessPhoneExt: "",
        email: ""
    };
    
    $scope.emergencyContacts = [
        ec
    ];

    $scope.save = function () {
        $http({
            method: "POST",
            url: "/api/saveForm",
            data: $scope.person
        });
    };

    $scope.addEmergencyContact = function() {
        $scope.emergencyContacts.push($scope.ec);
    }
});

noInkApp.controller('SubmissionCtrl', function ($scope, $http) {
    $scope.getSubmissions = function() {
        $http({
            method: "GET",
            url: "/api/getSubmissions"
        }).success(function(data) {
            $scope.submissions = data;
            console.log(data);
            $scope.detailView = false;
        }).error(function(data, status, header, config) {
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
        }).success(function(data, status, headers, config) {
            $scope.getSubmissionDetail = data;
            $scope.detailView = true;
        }).error(function(data, status, headers, config) {
            console.log(data);
            console.log(status);
            console.log(headers);
            console.log(config);
        });

        $scope.submission = {
            firstName: "Michael",
            lastName: "Smitherman"
        };
    }
});

$(function () {
    $('input, textarea').placeholder();
});