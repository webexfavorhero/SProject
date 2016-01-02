import Ember from 'ember';
// import Headroom from 'vendor/headromm.mim.js';

export default Ember.Component.extend({
  didInsertElement() {

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

    // grab an element
    var myElement = document.querySelector(".site-header");
    // construct an instance of Headroom, passing the element
    var headroom = new window.Headroom(myElement, {
      // "offset" : 780,
      // "tolerance": 5,
    });
    // initialise
    headroom.init();

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

    // SUBHEADER ANIMATION
    // Somth page scroll
    Ember.$('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        var target = Ember.$(this.hash);
        target = target.length ? target : Ember.$('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          Ember.$('html,body').animate({
            scrollTop: target.offset().top -40
          }, 1000);
          return false;
        }
      }
    });

  }
});
