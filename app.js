Ext.application({
  name: 'Zunk',
  controllers: ['User'],

  launch: function() {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [
        {
          xtype: 'userlist'
        }
      ]
    });
  }
});