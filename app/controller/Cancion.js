Ext.define('Zunk.controller.Cancion', {
  extend: 'Ext.app.Controller',

  refs: [
    {
      ref: 'informacionDeCancion',
      selector: 'informaciondecancion'
    }
  ],

  init: function() {

    // Manejar eventos de aplicacion
    this.application.on({
      cambiodeestacion: this.cambioDeEstacion,
      scope: this
    });
  },

  cambioDeEstacion: function(registro) {
    this.getInformacionDeCancion().update(registro.data);
  }
});