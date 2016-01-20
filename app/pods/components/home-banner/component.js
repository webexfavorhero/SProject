import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    // BANNER-CAROUSEL
    Ember.$('.banner-carousel').owlCarousel({
      items: 1,
      smartSpeed: 1500,
      autoplay: true,
      autoplayTimeout: 3000,
      loop: true,
      nav: true,
      navText: [
        "Prev <i class='fa fa-angle-left fa-2x'></i>",
        "Next <i class='fa fa-play'></i>"
      ],
    });
  }
});