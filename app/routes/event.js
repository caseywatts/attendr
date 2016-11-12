import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let events = Ember.Array([
      { id: 1, name: 'alx code & coffee', location: 'ALX', time: new Date() },
      { id: 2, name: 'arlington code & coffee', location: 'ARL', time: new Date() },
      { id: 3, name: 'escape room', location: 'ALX', time: new Date() }
    ]);
    return events.findBy('id', params.eventId);
  }
});
