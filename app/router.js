import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('labs');
  this.route('hire');
  this.route('contact');
  this.route('clients');
  this.route('about');
  this.route('home', { path: '/' });
});

export default Router;
