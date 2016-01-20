import Ember from "ember";

var rememberScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});

export function initialize(/* container, application */) {
  Ember.Route.reopen(rememberScroll);
}

export default {
  name: 'remember-scroll',
  initialize: initialize
};