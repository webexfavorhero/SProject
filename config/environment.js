/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sciensa',
    podModulePrefix: 'sciensa/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV.contentSecurityPolicy = {
    'default-src': "'self' " ,
    'script-src': "'self' 'unsafe-inline' 'unsafe-eval' https://maps.google.com http://vjs.zencdn.net http://www.google-analytics.com/ga.js https://connect.facebook.net https://mts1.googleapis.com https://mts0.googleapis.com " +
    "http://connect.facebook.net https://platform.twitter.com http://platform.twitter.com https://cdn.syndication.twimg.com https://maps.google.com + " +
    "https://maps.googleapis.com "  ,
    'font-src': "'self' http://fonts.gstatic.com data: https://fonts.gstatic.com " ,
    'connect-src': "'self' http://ec2-54-83-80-20.compute-1.amazonaws.com/api "  ,
    'img-src': "'self' https://csi.gstatic.com https://syndication.twitter.com https://www.facebook.com https://pbs.twimg.com https://abs.twimg.com" +
    " https://lh3.googleusercontent.com http://platform.twitter.com https://khms1.googleapis.com https://khms0.googleapis.com" +
    " https://maps.googleapis.com https://mts1.googleapis.com https://mts0.googleapis.com https://csi.gstatic.com/csi https://maps.gstatic.com ",
    'style-src': "'self' 'unsafe-inline https://fonts.googleapis.com http://platform.twitter.com http://maps.gstatic.com https://maps.gstatic.com "
    ,
    'frame-src':  'http://www.youtube.com ' +
    'https://www.facebook.com http://static.ak.facebook.com https://s-static.ak.facebook.com https://www.youtube.com http://www.podbean.com ' +
    'https://web.facebook.com',
    'report-uri': '/'
  };

  return ENV;
};
