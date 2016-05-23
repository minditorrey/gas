'use strict';

var app = angular.module('gas');


app.service('AlertService', function($http) {
	this.getAll = () => {
  		return $http.get('/api/alerts');
  	}

	this.create = alert => {
  		return $http.post('/api/alerts', alert);
  	}

  	this.tweet = alert => {
  		return $http.post('/api/twitter', alert);
  	}

  	this.geocode = location => {
  		return $http.get(`/api/map/${location}`);
  	}

  	this.getLocations = () => {
  		return $http.get('/api/locations');
  	}
  	this.removeAlert = (alert) => {
  		return $http.delete(`/api/alerts/${alert._id}`);
  	}

    this.removeLocation = (location) => {
      return $http.delete(`/api/locations/${location._id}`);
    }

    this.getThisAlert = (id) => {
      return $http.get(`/api/alerts/${id}`);
    }

});