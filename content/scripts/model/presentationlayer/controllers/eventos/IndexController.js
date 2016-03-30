angular.module('app')
	.controller('eventos_indexController', ['$scope', '$http', function($scope, $http){

		(function cargasIniciales(){
			//Inyección de dependencia del $http para desacoplar el "modelo" de angular
			//Inyección de dependencia del $model para desacoplar el "modelo" de angular
			ServiceManager.EventosService.getEventos($http, $scope);
		})();

	}]);