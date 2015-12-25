import Ember from 'ember';

var licensing = [];
var aboutLicese = [];
var ourPartnersTitle = [];
var ourPartners = [];
var weLicensingTitle = [];
var weLicensing = [];
var knowMore = [];

export default Ember.Object.extend({
	licensing() {
		licensing = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/licenses', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
 					licensing.pushObject(result[i]);
 				}
 			}
	  	});
	  	return licensing;
	},
	aboutLicese() {
		aboutLicese = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/licenses', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1') {
 					aboutLicese.pushObject(result[i]);
 				}
 			}
	  	});
	  	return aboutLicese;
	},
	ourPartnersTitle() {
		ourPartnersTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/licenses', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].option === '') {
 					ourPartnersTitle.pushObject(result[i]);
 				}
 			}
	  	});
	  	return ourPartnersTitle;
	},
	ourPartners() {
		ourPartners = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/licenses', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].option !== '') {
 					ourPartners.pushObject(result[i]);
 				}
 			}
	  	});
	  	return ourPartners;
	},
	weLicensingTitle() {
		weLicensingTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/licenses', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option === '') {
 					weLicensingTitle.pushObject(result[i]);
 				}
 			}
	  	});
	  	return weLicensingTitle;
	},
	weLicensing() {
		weLicensing = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/licenses', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option !== '') {
 					weLicensing.pushObject(result[i]);
 				}
 			}
	  	});
	  	return weLicensing;
	},
	knowMore() {
		knowMore = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/licenses', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
 					knowMore.pushObject(result[i]);
 				}
 			}
	  	});
	  	return knowMore;
	}
});