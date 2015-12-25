import Ember from 'ember';
// import Headroom from 'vendor/headromm.mim.js';

export default Ember.Component.extend({
  didInsertElement() {

    // grab an element
    var myElement = document.querySelector(".site-header");
    // construct an instance of Headroom, passing the element
    var headroom = new window.Headroom(myElement, {
      // "offset" : 780,
      // "tolerance": 5,
    });
    // initialise
    headroom.init();

    // NAVIGATION-HEADER
    Ember.$('.main-navigation ul').superfish({
      delay: 400,
      animation: {opacity: 'show',
        height: 'show'
      },
      animationOut: {
        opacity: 'hide',
        height: 'hide'
      },
      speed: 200,
      speedOut: 200,
      autoArrows: false
    });
  
    // COPYING SITE-SUBHEADER
    Ember.$(".site-subheader").clone(false).appendTo(Ember.$(".copy-internal-header"));

    var internalheader = Ember.$(".copy-internal-header");
    Ember.$(window).scroll(function() {
      if ( Ember.$(window).width() >= 1500) {
        if( Ember.$(window).scrollTop() >= 1050 ){
          internalheader.addClass("onscroll");
        }else{
          internalheader.removeClass("onscroll");
        }
      }else{
        if( Ember.$(window).scrollTop() >= 830 ){
          internalheader.addClass("onscroll");
        }else{
          internalheader.removeClass("onscroll");
        }
      }
    });

    // CLONE NAVIGATION TO RWD-NAVIGATION IN MAIN-NAVIGATION
    Ember.$(".main-navigation > ul").clone(false).find("ul,li").removeAttr("id").remove(".sub-menu").appendTo(Ember.$(".rwd-navigation .mobile-nav"));
    Ember.$(".mobile-nav").on('show.bs.collapse', function(){
      Ember.$("body").on( 'click', function() {
        Ember.$(".mobile-nav").collapse("hide");
      });
    });

    // CLONE NAVIGATION TO RWD-NAVIGATION IN INTERNAL-HEADER
    Ember.$(".subheader-navigation > ul").clone(false).find("ul, li").appendTo(Ember.$(".rwd-internal-navigation") );
    // HANDLING FOR INTERNAL SIDEHABAR ON STICKY
    Ember.$(".copy-internal-header .btn-showing-internal").click(function(event){
      event.preventDefault();
      Ember.$('.copy-internal-header .rwd-internal-navigation').slideToggle();
    });

   Ember. $(".copy-internal-header .rwd-internal-navigation a").on( 'click' , function() {
      var $target = Ember.$(".copy-internal-header .rwd-internal-navigation");
      if( $target.is(':visible')){
        Ember.$(".copy-internal-header .rwd-internal-navigation:visible").slideToggle();
      }else{
        $target.slideDown().siblings().slideUp();
      }
    });
  }
});
