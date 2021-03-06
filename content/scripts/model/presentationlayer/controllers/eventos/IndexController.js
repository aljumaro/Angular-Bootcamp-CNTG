angular.module('app').controller('eventos_indexController', ['$scope', '$http', '$interval',
	function($scope, $http, $interval) {

		var EventosServicePersistenceTechnologies =
			ServiceManager.
		EventosService.
		GetAvailablePersistenceTechnologies();

		(function CargasIniciales() {
			$scope.eventos = [];

			ServiceManager.
			EventosService.
			GetEventos(
				ServiceManager.EventosService.CreateServiceParams(
					EventosServicePersistenceTechnologies.REST,
					$scope,
					$http));

			$interval(function() {
				ServiceManager.
				EventosService.
				EventosSave(
					ServiceManager.EventosService.CreateServiceParams(
						EventosServicePersistenceTechnologies.LocalStorage,
						$scope,
						null))
			}, 5000);

		})();



		$scope.nuevoEvento = function() {
			$scope.eventos.push(
				ServiceManager.EventosService.GenerarEvento()
			);
		};

		$scope.guardar = function() {
			ServiceManager.
			EventosService.
			EventosSave(
				ServiceManager.EventosService.CreateServiceParams(
					EventosServicePersistenceTechnologies.REST,
					$scope,
					$http));
		};

	}
]);