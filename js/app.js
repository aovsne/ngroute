var app = angular.module('myApp',[ngRoute])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	})
	.when('/first', {
		templateUrl: 'first.html'
	})
	.when('#/second', {
		templateUrl: 'third.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})