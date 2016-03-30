ServiceManager.PersistenceManager.EventoDAOLocalStorage=(function(){

	function getEventos() {
		console.log('llamando al local storage');
	}

	return {
		getEventos: getEventos
	};

})();