var app = angular.module('myApp',['ngRoute'])

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		templateUrl: 'home.html'
	})
	.when('/first', {
		templateUrl: 'first.html'
	})
	.when('/third', {
		templateUrl: 'third.html'
	})
	.otherwise({
		redirectTo: '/home'
	})
})