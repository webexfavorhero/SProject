import Ember from 'ember';

var teamWorking = [];
var buildingDis = [];
var sciSer = [];

export default Ember.Object.extend({
	teamWorking() {
		teamWorking = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].screen === 'Home') {
 					teamWorking.pushObject(result[i]);
 				}
 			}
	  	});
	  	return teamWorking;
	},
	buildingDis() {
		buildingDis = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1' && result[i].screen === 'Home') {
 					buildingDis.pushObject(result[i]);
 				}
 			}
	  	});
	  	return buildingDis;
	},
	sciSer() {
		sciSer = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].screen === 'Home') {
 					sciSer.pushObject(result[i]);
 				}
 			}
	  	});
	  	return sciSer;
	}
});