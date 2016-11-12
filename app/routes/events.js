import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      events: [{ id: 1, name: "alx code & coffee", location: "ALX", time: new Date() },
               { id: 2, name: "arlington code & coffee", location: "ARL", time: new Date() },
               { id: 3, name: "escape room", location: "ALX", time: new Date() }]
    });
  }
});
