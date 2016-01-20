import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    // CONFIG ISOTOPE CATEGORY-BLOG
    var $containerblog = Ember.$(".category-container");
    $containerblog.imagesLoaded( function() {
      $containerblog.isotope();
    });

    Ember.$(".list-categories a").click( function() {
      var selector = Ember.$(this).attr("data-filter");
      $containerblog.isotope({
        itemSelector: ".item-blog",
        filter: selector,
      });
      return false;
    });

    Ember.$(".list-categories a").click( function(e) {
      Ember.$(".list-categories a").removeClass("active");
      Ember.$(this).addClass("active");
    });
  }
});