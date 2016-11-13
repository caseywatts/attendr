import DS from 'ember-data';
const { computed } = Ember;
const { equal } = computed;

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  event: DS.belongsTo('event'),
  time: DS.attr('date'),
  state: DS.attr('string'),

  isPresent: equal('state', 'present'),
  isAbsent: equal('state', 'absent')
});
