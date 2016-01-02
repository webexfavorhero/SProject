import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {    
    // LAST CASES-CAROUSEL
    Ember.$('.lastcases-carousel').owlCarousel({
      mouseDrag: true,
      margin: 50,
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