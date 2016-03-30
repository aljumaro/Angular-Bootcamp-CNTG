angular.module('app')
	.controller('eventos_indexController', ['$scope', '$http', function($scope, $http){

		(function cargasIniciales(){
			ServiceManager.EventosService.getEventos();
		})();

	}]);