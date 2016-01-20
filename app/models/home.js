import Ember from 'ember';

var teamWorking = [];
var buildingDisTitle = [];
var buildingDis = [];
var sciSerTitle = [];
var sciSer = [];
var clientsCase = [];
var loremIpsum = [];
var cases = [];
var blogs = [];

export default Ember.Object.extend({
	teamWorking() {
		teamWorking = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
 					teamWorking.pushObject(result[i]);
 				}
 			}
	  	});
	  	return teamWorking;
	},
	buildingDisTitle() {
		buildingDisTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1' && result[i].option === '1') {
 					buildingDisTitle.pushObject(result[i]);
 				}
 			}
	  	});
	  	return buildingDisTitle;
	},
	buildingDis() {
		buildingDis = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1') {
 					buildingDis.pushObject(result[i]);
 				}
 			}
	  	});
	  	return buildingDis;
	},
	sciSerTitle() {
		sciSerTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].option === '1') {
 					sciSerTitle.pushObject(result[i]);
 				}
 			}
	  	});
	  	return sciSerTitle;
	},
	sciSer() {
		sciSer = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2') {
 					sciSer.pushObject(result[i]);
 				}
 			}
	  	});
	  	return sciSer;
	},
	clientsCase() {
		clientsCase = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3') {
 					clientsCase.pushObject(result[i]);
 				}
 			}
	  	});
	  	return clientsCase;
	},
	loremIpsum() {
		loremIpsum = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/home', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '4') {
 					loremIpsum.pushObject(result[i]);
 				}
 			}
	  	});
	  	return loremIpsum;
	},
	cases() {
	    cases = [];
	    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/cases', function(result){
	        for (var i = 0; i < result.length; i ++) {
	            cases.pushObject(result[i]);
	        }
	    });
	    return cases;
	},
	blogs() {
	    blogs = [];
	    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/blog-post', function(result){
	        for (var i = 0; i < result.length; i ++) {
	            blogs.pushObject(result[i]);
	        }
	    });
	    return blogs;
	}
});