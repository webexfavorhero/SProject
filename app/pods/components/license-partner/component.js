import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {    
    // PARTNERS-CAROUSEL
    Ember.$('.partners-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items: 1,
      smartSpeed: 100,
      autoplay: false,
      autoplayTimeout: 3000,
      loop: true,
      nav: true,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
    });
  }
});