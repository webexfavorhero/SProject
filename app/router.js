import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog-about');
  this.route('blog-home');
  this.route('blog-post', { path: 'blog-post/:blogId' });
  this.route('smart-apis');
  this.route('digital-transformation');
  this.route('data-science');
  this.route('devops-cloud');
  this.route('business-process');
  this.route('user-experience');
  this.route('team');
  this.route('services');
  this.route('product');
  this.route('license');
  this.route('labs');
  this.route('hire');
  this.route('contact');
  this.route('clients');
  this.route('about');
  this.route('home', { path: '/' });
});

export default Router;
