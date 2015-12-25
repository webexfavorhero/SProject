import Ember from 'ember';

var labsBanner = [];
var aboutLabs = [];
var ourCompanies = [];
var knowMore = [];

export default Ember.Object.extend({
	labsBanner() {
		labsBanner = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/labs', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
 					labsBanner.pushObject(result[i]);
 				}
 			}
	  	});
	  	return labsBanner;
	},
	aboutLabs() {
		aboutLabs = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/labs', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1' && result[i].contentType === 'description_image') {
 					aboutLabs.pushObject(result[i]);
 				}
 			}
	  	});
	  	return aboutLabs;
	},
	ourCompanies() {
		ourCompanies = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/labs', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].contentType === 'description_image') {
 					ourCompanies.pushObject(result[i]);
 					break;
 				}
 			}
	  	});
	  	return ourCompanies;
	},
	knowMore() {
		knowMore = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/labs', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
 					knowMore.pushObject(result[i]);
 				}
 			}
	  	});
	  	return knowMore;
	}
});