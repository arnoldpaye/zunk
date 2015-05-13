Ext.define('Zunk.controller.Estacion', {
  extend: 'Ext.app.Controller',

  init: function() {
    // Escuchar eventos de los views
    this.control ({
      'listadeestaciones': {
        // Evento 'select'
        select: this.seleccionarEstacion
      }
    });
  },

  // Manejar evento 'select' del view 'listadeestaciones'
  seleccionarEstacion: function(esto, registro, indice, opcionesEvento) {
      console.log(registro.data);
  }
});