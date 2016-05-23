var app = angular.module('gas', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('splash', {
			url: '/',
			templateUrl: '/templates/splash.html',
			controller: 'alertsController'
		})
		.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'alertsController'
		})
		.state('alerts', {
			url: '/alerts',
			templateUrl: '/templates/alerts.html',
			controller: 'alertsController'
		})
		.state('list', {
			url: '/list',
			templateUrl: '/templates/list.html',
			controller: 'alertsController'
		})
		.state('details', {
			url: '/details/:id',
			templateUrl: '/templates/details.html',
			controller: 'detailsController'
		})




	$urlRouterProvider.otherwise('/');

});