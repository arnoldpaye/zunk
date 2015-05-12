Ext.define('Zunk.view.NuevaEstacion', {
  extend: 'Ext.form.field.ComboBox',
  alias: 'widget.nuevaestacion',
  store: {
    fields: ['id', 'nombre'],
    data: [
      { id: 1, nombre: 'FM1' },
      { id: 2, nombre: 'FM2' },
      { id: 3, nombre: 'FM3' },
      { id: 4, nombre: 'FT1' },
      { id: 5, nombre: 'FT2' },
      { id: 6, nombre: 'FT3' },
      { id: 7, nombre: 'SR1' },
      { id: 8, nombre: 'SR2' },
      { id: 9, nombre: 'SR3' }
    ]
  },
  displayField: 'nombre',
  fieldLabel: 'Busqueda de estacion',
  queryMode: 'local'
});