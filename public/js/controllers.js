'use strict';

var app = angular.module('gas');


app.controller('alertsController', function($scope, AlertService) {
    console.log('alertsCtrl!');
    AlertService.getAll($scope.alerts)
    .then(res => {
        $scope.alerts = res.data;
    })
    .catch(err => {
        console.log('err:', err);
    });

    $scope.removeAlert= function(alert) {
        AlertService.removeAlert(alert);
        $scope.alerts.splice(0, 1);
    }

    $scope.addAlert = function(alertForm) {
    	AlertService.create($scope.alertForm);
    	$scope.alerts.push($scope.alertForm);

        AlertService.tweet($scope.alertForm);
        var location = $scope.alertForm.location; 
        AlertService.geocode(location.replace(/\s/g, ""))
            .then(res => {
                $scope.endpoints = res.data;
                console.log('endpoints', $scope.endpoints);

 
                AlertService.getLocations($scope.locations)
                .then(res => {
                    $scope.locations = res.data;
                    console.log($scope.locations);
                    var locations = $scope.locations;
                    var lattitude = $scope.endpoints.lattitude;
                    var longitude = $scope.endpoints.longitude;
                                
                    var myOptions = {
                        zoom: 17,
                        center: new google.maps.LatLng(lattitude, longitude),
                        mapTypeId: google.maps.MapTypeId.SATELLITE,
                        scaleControl: true,
                        overviewMapControl: true,
                        scrollwheel: false,
                        rotateControl: true
                    };
        
                    var map = new google.maps.Map(document.getElementById("google-map-container"),
                 myOptions);
                    
                    for(var i = 0; i < locations.length; i++) {
                        
                        var marker = new google.maps.Marker({  
                            position: new google.maps.LatLng(locations[i].lattitude, locations[i].longitude), 
                            map: map,
                            animation: google.maps.Animation.BOUNCE,
                            icon: "../images/zombie.png" 
                        
                        })        
                        // marker.setMap(myOptions);
                        
                    }
                    
                })
                .catch(err => {
                    console.log('err:', err);
                });

            })
            .catch(err => {
                console.log('err', err);
            })
            $scope.alertForm = null;
    }


    

});

