import Ember from 'ember';

var bePart = [];
var buildingDisTitle = [];
var buildingDis = [];
var ourOfficeTitle = [];
var ourOffice = [];
var comeBe = [];

export default Ember.Object.extend({
	bePart() {
		bePart = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/hire', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
 					bePart.pushObject(result[i]);
 				}
 			}
	  	});
	  	return bePart;
	},
	buildingDisTitle() {
		buildingDisTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/hire', function(result){
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
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/hire', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1') {
 					buildingDis.pushObject(result[i]);
 				}
 			}
	  	});
	  	return buildingDis;
	},
	ourOfficeTitle() {
		ourOfficeTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/hire', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].option === '1') {
 					ourOfficeTitle.pushObject(result[i]);
 				}
 			}
	  	});
	  	return ourOfficeTitle;
	},
	ourOffice() {
		ourOffice = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/hire', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2') {
 					ourOffice.pushObject(result[i]);
 				}
 			}
	  	});
	  	return ourOffice;
	},
	comeBe() {
		comeBe = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/hire', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
 					comeBe.pushObject(result[i]);
 				}
 			}
	  	});
	  	return comeBe;
	}
});