Ext.define('Zunk.view.ListaDeEstaciones', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.listadeestaciones',
  store: {
    fields: ['id', 'nombre'],
    data: [
      { id: 1, nombre: 'Estacion 1' },
      { id: 2, nombre: 'Estacion 2' },
      { id: 3, nombre: 'Estacion 3' },
      { id: 4, nombre: 'Estacion 4' },
      { id: 5, nombre: 'Estacion 5' },
      { id: 6, nombre: 'Estacion 6' },
      { id: 7, nombre: 'Estacion 7' },
      { id: 8, nombre: 'Estacion 8' },
      { id: 9, nombre: 'Estacion 9' }
    ]
  },
  columns: [
    { text: 'Nombre', dataIndex: 'nombre', flex: 1 }
  ]
});