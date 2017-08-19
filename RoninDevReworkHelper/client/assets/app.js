var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/partials/index.html',
		controller: 'controller'
	})
	.when('/post', {
		templateUrl: '/partials/post.html',
		controller: 'controller'
	})
	.when('/post/:id', {
		templateUrl: '/partials/post.html',
		controller: 'controller'
	})
	.when('/author', {
		templateUrl: '/partials/author.html',
		controller: 'controller'
	})
	.when('/author/:id', {
		templateUrl: '/partials/author.html',
		controller: 'controller'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);

});
