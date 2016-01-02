import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    // CLONE NAVIGATION TO RWD-NAVIGATION IN INTERNAL-HEADER
    Ember.$(".subheader-navigation > ul").clone(false).find("ul, li").appendTo(Ember.$(".rwd-internal-navigation") );
    // HANDLING FOR INTERNAL SIDEHABAR ON STICKY
    Ember.$(".copy-internal-header .btn-showing-internal").click(function(event){
      event.preventDefault();
      Ember.$('.copy-internal-header .rwd-internal-navigation').slideToggle();
    });

    Ember.$(".copy-internal-header .rwd-internal-navigation a").on( 'click' , function() {
      var $target = Ember.$(".copy-internal-header .rwd-internal-navigation");
      if( $target.is(':visible')){
        Ember.$(".copy-internal-header .rwd-internal-navigation:visible").slideToggle();
      }else{
        $target.slideDown().siblings().slideUp();
      }
    });

    // HANDLING OFR INTERLA SIDEBAR ON OUTER-HEADER
    Ember.$(".outer-subheader .btn-showing-internal").click(function(event){
      event.preventDefault();
      Ember.$('.outer-subheader .rwd-internal-navigation').slideToggle();
    });

    Ember.$(".outer-subheader .rwd-internal-navigation a").on( 'click' , function() {
      var $target = Ember.$(".outer-subheader .rwd-internal-navigation");
      if( $target.is(':visible')){
        Ember.$(".outer-subheader .rwd-internal-navigation:visible").slideToggle();
      }else{
        $target.slideDown().siblings().slideUp();
      }
    });
  }
});
