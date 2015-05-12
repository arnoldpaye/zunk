Ext.define('Zunk.view.Viewport', {
  extend: 'Ext.container.Viewport',

  requires: [
    'Zunk.view.NuevaEstacion',
    'Zunk.view.ListaDeEstaciones'
  ],

  initComponent: function() {
    console.log(this);
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
              height: 250
            }
          ]
        }
      ]
    };
    this.callParent();
  }
});