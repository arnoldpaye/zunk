Ext.define('Zunk.view.Viewport', {
  extend: 'Ext.container.Viewport',

  requires: 'Zunk.view.NuevaEstacion',

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
          width: 250,
          layout: {
            type: 'vbox',
            align: 'stretch'
          },
          items: [
            {
              // Lista de estaciones
              flex: 1,
              html: 'Lista de estaciones',
              height: 250
            }
          ]
        }
      ]
    };
    this.callParent();
  }
});