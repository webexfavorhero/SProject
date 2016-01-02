import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    // CONFIG ISOTOPE LABS
    var $labscontainer = Ember.$(".labscompanies-subcontainer");
    $labscontainer.imagesLoaded( function() {
      $labscontainer.isotope();
    });

    Ember.$(".labscompanies-filter a").click( function() {
      var selector = Ember.$(this).attr("data-filter");
      $labscontainer.isotope({
        itemSelector: ".item-labscompanies",
        filter: selector
      });
      return false;
    });

    Ember.$(".labscompanies-filter a").click( function (e) {
      Ember.$(".labscompanies-filter a").removeClass("active");
      Ember.$(this).addClass("active");
    });
  }
});