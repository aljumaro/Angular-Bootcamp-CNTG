ServiceManager.EventosService=(function(){

	function getEventos() {
		ServiceManager.PersistenceManager.EventoDAORest.getEventos();
		ServiceManager.PersistenceManager.EventoDAOLocalStorage.getEventos();
	}

	return {
		getEventos: getEventos
	};

})();