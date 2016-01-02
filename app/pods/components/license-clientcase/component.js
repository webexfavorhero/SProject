import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    // CONFIG ISOTOPE LICENSE
    var $licensecontainer = Ember.$(".licensepartner-subcontainer");
    $licensecontainer.imagesLoaded( function() {
      $licensecontainer.isotope();
    });

    Ember.$(".licensepartner-filter a").click( function() {
      var selector = Ember.$(this).attr("data-filter");
      $licensecontainer.isotope({
        itemSelector: ".item-licensing",
        filter: selector
      });
      return false;
    });

    Ember.$(".licensepartner-filter a").click( function (e) {
      Ember.$(".licensepartner-filter a").removeClass("active");
      Ember.$(this).addClass("active");
    });
  }
});