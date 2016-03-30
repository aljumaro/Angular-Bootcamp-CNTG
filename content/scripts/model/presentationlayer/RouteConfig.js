angular.module('app')
	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'content/views/home/index.html',
				controller: 'home_indexController as vm'
			})
			.state('eventos', {
				url: '/eventos',
				templateUrl: 'content/views/eventos/index.html',
				controller: 'eventos_indexController as vm'
			});

	});