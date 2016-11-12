import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let events = [
      Ember.Object.create({ id: 1, name: 'alx code & coffee', location: 'ALX', time: new Date() }),
      Ember.Object.create({ id: 2, name: 'arlington code & coffee', location: 'ARL', time: new Date() }),
      Ember.Object.create({ id: 3, name: 'escape room', location: 'ALX', time: new Date() })
    ];
    return events.findBy('id', Number(params.eventId));
  }
});
