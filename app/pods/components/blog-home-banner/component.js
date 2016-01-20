import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {	
	// BANNERBLOG-CAROUSEL
	Ember.$('.bannerblog-carousel').owlCarousel({
		animateOut: 'fadeOut',
		items: 1,
		smartSpeed: 100,
		autoplay: false,
		autoplayTimeout: 3000,
		loop: true,
		nav: false,
	});
  }
});