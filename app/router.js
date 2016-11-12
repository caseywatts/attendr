import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('events');
  this.route('event', { path: '/event/:eventId' });
  this.route('users');
  this.route('user', { path: '/user/:userId' });
});

export default Router;
