import Ember from 'ember';
// import Headroom from 'vendor/headromm.mim.js';

export default Ember.Component.extend({
  didInsertElement() {

    // NAVIGATION-HEADER
    Ember.$('.blog-navigation ul').superfish({
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

    // grab an element
    var myElement = document.querySelector(".site-header-blog");
    // construct an instance of Headroom, passing the element
    var headroom = new window.Headroom(myElement, {
      // "offset" : 780,
      // "tolerance": 5,
    });
    // initialise
    headroom.init();

	// CLONE BLOG-NAVIGATION TO RWD-NAVIGATION-BLOG
	Ember.$(".blog-navigation > ul").clone(false).find("ul,li").removeAttr("id").remove(".sub-menu").appendTo(Ember.$(".rwd-navigation-blog .mobile-nav-blog"));
	Ember.$(".mobile-nav-blog").on('show.bs.collapse', function(){
		Ember.$("body").on( 'click', function() {
			Ember.$(".mobile-nav-blog").collapse("hide");
		});
	});	
  }
});
