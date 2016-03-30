ServiceManager.PersistenceManager.EventoDAORest=(function(){

	function getEventos($http, $scope) {
		$http({
			method: 'GET',
			url: 'http://10.0.4.150/EventosApi/Eventos'
		})
		.then(function success(response){
			$scope.eventos = response.data;
		}, function error(reponse){
			console.log(response.data);
		});
	}

	return {
		getEventos: getEventos
	};

})();