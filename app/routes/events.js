import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      events: [{ name: "alx code & coffee", location: "ALX", time: new Date() },
               { name: "arlington code & coffee", location: "ARL", time: new Date() },
               { name: "escape room", location: "ALX", time: new Date() }]
    });
  }
});
