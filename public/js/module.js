var app = angular.module('gas', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'homeController'
		})
		.state('alerts', {
			url: '/alerts',
			templateUrl: '/templates/alerts.html',
			controller: 'alertsController'
		})



	$urlRouterProvider.otherwise('/');

});