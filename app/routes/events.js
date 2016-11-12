import Ember from 'ember';
const { RSVP } = Ember;

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      events: this.get('store').findAll('event')
    });
  }
});
