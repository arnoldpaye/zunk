Ext.define('Zunk.view.Viewport', {
  extend: 'Ext.container.Viewport',

  requires: [
    'Zunk.view.NuevaEstacion',
    'Zunk.view.ListaDeEstaciones',
    'Zunk.view.InformacionDeCancion',
    'Zunk.view.CancionesReproducidas'
  ],

  initComponent: function() {
    this.items = {
      dockedItems: [{
        dock: 'top',
        xtype: 'toolbar',
        height: 80,
        items: [
          {
            // Buscador de estaciones
            xtype: 'nuevaestacion'
          }
        ]
      }],
      layout: {
        type: 'hbox',
        align: 'stretch'
      },
      items: [
        {
          // Panel izquierdo
          width: 300,
          layout: {
            type: 'vbox',
            align: 'stretch'
          },
          items: [
            {
              // Lista de estaciones
              xtype: 'listadeestaciones',
              flex: 1
            },
            {
              // Publicidad
              html: 'Publicidad',
              height: 250,
              flex: 1
            }
          ]
        },
        {
          xtype: 'container',
          flex: 1,
          layout: {
            type: 'vbox',
            align:'stretch'
          },
          items: [
            {
              // Ultimas canciones reproducidas
              xtype: 'cancionesreproducidas',
              height: 250
            },
            {
              // Informacion de cancion
              xtype: 'informaciondecancion',
              flex: 1
            }
          ]
        }
      ]
    };
    this.callParent();
  }
});