import Ember from 'ember';

export default Ember.Object.extend({
  	all() {
   		return Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home');
	}
});