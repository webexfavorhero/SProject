import Ember from 'ember';

var weWorkTogether = [];
var thisIsOurTitle = [];
var thisIsOur = [];
var comeBe = [];

export default Ember.Object.extend({
	weWorkTogether() {
		weWorkTogether = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/team', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
 					weWorkTogether.pushObject(result[i]);
 				}
 			}
	  	});
	  	return weWorkTogether;
	},
	thisIsOurTitle() {
		thisIsOurTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/team', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1' && result[i].option === '') {
 					thisIsOurTitle.pushObject(result[i]);
 				}
 			}
	  	});
	  	return thisIsOurTitle;
	},
	thisIsOur() {
		thisIsOur = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/team', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1' && result[i].option !== '') {
 					thisIsOur.pushObject(result[i]);
 				}
 			}
	  	});
	  	return thisIsOur;
	},
	comeBe() {
		comeBe = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/team', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
 					comeBe.pushObject(result[i]);
 				}
 			}
	  	});
	  	return comeBe;
	}
});