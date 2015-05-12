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
            xtype: 'nuevaestacion'
          }
        ]
      }]
    };
    this.callParent();
  }
});