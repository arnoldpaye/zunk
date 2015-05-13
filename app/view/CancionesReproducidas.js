Ext.define('Zunk.view.CancionesReproducidas', {
  extend: 'Ext.view.View',
  alias: 'widget.cancionesreproducidas',
  store: {
    fields: ['id', 'nombre', 'estacion'],
    data: [
      { id: 1, nombre: 'Cancion 1.1', estacion: 1 },
      { id: 1, nombre: 'Cancion 1.2', estacion: 1 },
      { id: 1, nombre: 'Cancion 1.3', estacion: 1 },
      { id: 1, nombre: 'Cancion 1.4', estacion: 1 },
      { id: 1, nombre: 'Cancion 2.1', estacion: 2 },
      { id: 1, nombre: 'Cancion 2.2', estacion: 2 },
      { id: 1, nombre: 'Cancion 2.3', estacion: 2 },
      { id: 1, nombre: 'Cancion 3.1', estacion: 3 },
    ]
  },
  itemTpl: '<h1>{nombre}</h1>'
});