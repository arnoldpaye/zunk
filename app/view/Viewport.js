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
          },
          {
            xtype: 'container',
            flex: 1,
            layout: {
              type: 'hbox',
              align: 'stretch'
            },
            items: [
              {
                html: 'panel 1',
                flex: 1
              },
              {
                html: 'panel 2',
                flex: 1
              },
              {
                html: 'panel 3',
                flex: 1
              }
            ]
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
              xtype: 'tabpanel',
              flex: 1,
              items: [
                {
                  xtype: 'informaciondecancion',
                  title: 'Informacion de cancion'
                },
                {
                  title: 'Descripcion'
                }
              ]
            }
          ]
        }
      ]
    };
    this.callParent();
  }
});