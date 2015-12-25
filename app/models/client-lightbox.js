import Ember from 'ember';

var ourClientsBanner = [];

export default Ember.Object.extend({
  ourClientsBanner() {
    ourClientsBanner = [];
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
          ourClientsBanner.pushObject(result[i]);
        }
      }
    });
    return ourClientsBanner;
  }
});