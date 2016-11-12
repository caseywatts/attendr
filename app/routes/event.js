import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      attendanceEntries: this.get('store').findAll('attendance-entry'),
      users: this.get('store').findAll('user'),
      event: this.get('store').find('event', params.eventId)
    });
  }
});
