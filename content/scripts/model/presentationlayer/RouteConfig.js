angular.module('app').config(
	function($routeProvider){

$routeProvider.
	when('/',{
		templateUrl:'content/views/home/index.html',
		controller:'home_indexController'
	}).
		when('/Eventos',{
		templateUrl:'content/views/eventos/index.html',
		controller:'eventos_indexController'
	})
	.otherwise({
		redirectTo:'/'
	});
});