import Ember from 'ember';

var aboutUs = [];
var weAreSciensa = [];
var mission = [];
var ourCulture = [];
var ourOffice = [];
var knowMore = [];

export default Ember.Object.extend({
  	aboutUs() {
   		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
   			for (var i = 0; i < result.length; i ++) {
   				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
   					aboutUs.pushObject(result[i]);
   				}
   			}
    	});
    	return aboutUs;
	},

  	weAreSciensa() {
   		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
   			for (var i = 0; i < result.length; i ++) {
   				if (result[i].displayOrder === '1') {
   					weAreSciensa.pushObject(result[i]);
   				}
   			}
    	});
    	return weAreSciensa;
	},
	
  	mission() {
   		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
   			for (var i = 0; i < result.length; i ++) {
   				if (result[i].displayOrder === '2') {
   					mission.pushObject(result[i]);
   				}
   			}
    	});
    	return mission;
	},
	
  	ourCulture() {
   		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
   			for (var i = 0; i < result.length; i ++) {
   				if (result[i].displayOrder === '3') {
   					ourCulture.pushObject(result[i]);
   				}
   			}
    	});
    	return ourCulture;
	},
	
  	ourOffice() {
   		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
   			for (var i = 0; i < result.length; i ++) {
   				if (result[i].displayOrder === '4') {
   					ourOffice.pushObject(result[i]);
   				}
   			}
    	});
    	return ourOffice;
	},
	
  	knowMore() {
   		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
   			for (var i = 0; i < result.length; i ++) {
   				if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
   					knowMore.pushObject(result[i]);
   				}
   			}
    	});
    	return knowMore;
	}
});