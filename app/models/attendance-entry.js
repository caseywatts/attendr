import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  event: DS.belongsTo('event'),
  time: DS.attr('date'),
  state: DS.attr('string')
});
