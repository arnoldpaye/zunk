Ext.define('Zunk.controller.User', {
  extend: 'Ext.app.Controller',

  views: ['user.List', 'user.Edit'],
  stores: ['Users'],
  models: ['User'],

  init: function() {
    this.control({
      'userlist': {
        itemdblclick: this.editUser
      },
      'useredit button[action=save]': {
        click: this.updateUser
      }
    });
  },

  updateUser: function(button) {
    var win = button.up('window'),
        form = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();

    record.set(values);
    win.close();
    // synchronize the store after editing the record
    this.getUsersStore().sync();
  },

  editUser: function(grid, record, item, index, e, eOpts) {
    var view = Ext.widget('useredit');
    view.down('form').loadRecord(record);
  },

  onPanelRendered: function() {
    console.log('The panel was rendered');
  }
});