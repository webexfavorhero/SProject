import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$('#map').gmap({
      'center': '-23.574127,-46.642094',
      'zoom': 20,
      scrollwheel: false,
      mapTypeId: window.google.maps.MapTypeId.HYBRID,
      'disableDefaultUI': false,
      'styles': [{
        stylers: [{
          lightness: 1
        }, {
          saturation: -100
        }]
      }],
      'callback': function() {
        var self = this;
        self.addMarker({
          'position': this.get('map').getCenter(),
          icon: 'assets/images/map-marker.png',
        })
          .click(function() {
            self.openInfoWindow({
              'content': Ember.$('.map-content').html()
            }, this);
          });
      }
    });
  }
});