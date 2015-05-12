Ext.define('Zunk.controller.User', {
  extend: 'Ext.app.Controller',

  views: ['user.List'],

  init: function() {
    this.control({
      'userlist': {
        itemdblclick: this.editUser
      }
    });
  },

  editUser: function(grid, record, item, index, e, eOpts) {
    console.log('Double clicked on ' + record.get('name'));
  },

  onPanelRendered: function() {
    console.log('The panel was rendered');
  }
});