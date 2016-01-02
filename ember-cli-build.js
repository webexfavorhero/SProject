/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/maps.google.com.js');
  app.import('vendor/headroom.min.js');
  app.import('vendor/html5shiv.js');
  app.import('vendor/isotope.pkgd.js');
  app.import('vendor/jquery.imagesloaded.min.js');
  app.import('vendor/jquery.sticky.js');
  app.import('vendor/jquery.ui.map.js');
  app.import('vendor/jquery.vimeo.api.js');
  app.import('vendor/owl.carousel.js');
  app.import('vendor/respond.min.js');
  app.import('vendor/superfish.js');
  app.import('vendor/video.js');
  app.import('vendor/video.min.js');
  app.import('vendor/wow.js');
  app.import('vendor/scripts.js');
  app.import('vendor/bootstrap.js');

  return app.toTree();
};
