Ext.define('Zunk.controller.Cancion', {
  extend: 'Ext.app.Controller',

  init: function() {

    // Manejar eventos de aplicacion
    this.application.on({
      cambiodeestacion: this.cambioDeEstacion
    });
  },

  cambioDeEstacion: function(registro) {
    console.log(registro.data);
  }
});