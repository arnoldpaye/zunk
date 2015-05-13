Ext.define('Zunk.view.InformacionDeCancion', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.informaciondecancion',
  tpl: '{nombre}',

  initComponent: function() {
    this.update({});
    this.callParent();
  }
});