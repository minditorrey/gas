var app = angular.module('gas', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
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
			controller: 'listController'
		})



	$urlRouterProvider.otherwise('/');

});