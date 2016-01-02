window.Main = {
  init() {
    'use strict';

    new WOW().init();

    $(window).on("load" , function() {

      $("#status").fadeOut();
      $("#preloader").delay(450).fadeOut("slow");

    });
  }
};
