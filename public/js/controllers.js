'use strict';

var app = angular.module('gas');


app.controller('homeController', function($scope, AlertService) {
    console.log('homeCtrl!');

    AlertService.getAll($scope.alerts)
    .then(res => {
        $scope.alerts = res.data;
    })
    .catch(err => {
        console.log('err:', err);
    });
});

app.controller('alertsController', function($scope, AlertService) {
    console.log('alertsCtrl!');

    $scope.addAlert = function(alertForm) {
    	AlertService.create($scope.alertForm);
    	$scope.alerts.push($scope.alertForm);
    	$scope.alertForm = null;
    }

});

