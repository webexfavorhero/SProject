import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {	
	// RELATED-CAROUSEL
	Ember.$('.related-carousel').owlCarousel({
		mouseDrag: true,
		margin: 10,
		touchDrag: true,
		nav: true,
		navText: [
				"<i class='fa fa-angle-left'></i>",
            	"<i class='fa fa-angle-right'></i>"
		],
		responsiveClass: true,
		responsive: {
			0:{
				items: 1
			},
			400:{
				items: 1
			},
			600: {
				items: 2
			},
			1000:{
				items: 3
			},
		}
	});
  }
});