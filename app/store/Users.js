Ext.define('Zunk.store.Users', {
  extend: 'Ext.data.Store',
  model: 'Zunk.model.User',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    api: {
      read: 'data/users.json',
      update: 'data/updateUsers.json'
    },
    reader: {
      type: 'json',
      root: 'users',
      sucessProperty: 'success'
    }
  }
});