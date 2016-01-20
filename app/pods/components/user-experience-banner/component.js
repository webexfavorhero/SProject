import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {	
	// UX-CAROUSEL
    Ember.$('.ux-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      smartSpeed: 100,
      autoplay: false,
      autoplayTimeout: 3000,
      loop: true,
    });
  }
});