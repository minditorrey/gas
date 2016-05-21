'use strict';

var app = angular.module('gas');


app.service('AlertService', function($http) {
	this.getAll = () => {
  		return $http.get('/api/alerts');
  	}

	this.create = alert => {
  		return $http.post('/api/alerts', alert);
  	}
  	});