import DS from 'ember-data';

export default DS.Model.extend({
  attendanceEntries: DS.hasMany('attendance-entry'),
  name: DS.attr('string'),
  location: DS.attr('string'),
  time: DS.attr('date')
});
