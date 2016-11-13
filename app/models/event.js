import DS from 'ember-data';
const { computed } = Ember;
const { filterBy } = computed;

export default DS.Model.extend({
  attendanceEntries: DS.hasMany('attendance-entry'),
  name: DS.attr('string'),
  location: DS.attr('string'),
  time: DS.attr('date'),

  presentEntries: filterBy('attendanceEntries', 'isPresent'),
  absentEntries: filterBy('attendanceEntries', 'isAbsent')
});
