import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    // CONFIG ISOTOPE CLIENT
    var $container = Ember.$(".client-subcontainer");
    $container.imagesLoaded( function() {
      $container.isotope();
    });

    Ember.$(".client-filter a").click( function() {
      var selector = Ember.$(this).attr("data-filter");
      $container.isotope({
        itemSelector: ".item-client",
        filter: selector
      });
      return false;
    });

    Ember.$(".client-filter a").click( function (e) {
      Ember.$(".client-filter a").removeClass("active");
      Ember.$(this).addClass("active");
    });
  }
});