import Ember from 'ember';

var flag = '1';
var blogBanner = [];
var blogAbout = [];
var developers = [];

export default Ember.Object.extend({
    blogBanner() {
      blogBanner = [];
      Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/blog-about', function(result){
        for (var i = 0; i < result.length; i ++) {
          if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
            blogBanner.pushObject(result[i]);
          }
        }
      });
      return blogBanner;
    },
    blogAbout() {
      blogAbout = [];
      Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/blog-about', function(result){
        for (var i = 0; i < result.length; i ++) {
          if (result[i].displayOrder === '1' && result[i].contentType === 'description_image') {
            blogAbout.pushObject(result[i]);
          }
        }
      });
      return blogAbout;
    },
    developers() {
      developers = [];
      Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/developers', function(result){
        for (var i = 0; i < result.length; i ++) {
          for (var j = 0; j < developers.length; j ++) {
            if (developers[j].authorId === result[i].authorId) {
              flag = '0';
            }
          }
          if (flag === '1') {
            developers.pushObject(result[i]);
          }
        }
      });
      return developers;
    }
});