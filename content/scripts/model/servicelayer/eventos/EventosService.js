ServiceManager.EventosService=(function(){

	function getEventos($http, $scope) {
		ServiceManager.PersistenceManager.EventoDAORest.getEventos($http, $scope);
		ServiceManager.PersistenceManager.EventoDAOLocalStorage.getEventos();
	}

	return {
		getEventos: getEventos
	};

})();