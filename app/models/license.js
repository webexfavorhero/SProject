import Ember from 'ember';

var flag = '1';

var licensing = [];
var aboutLicese = [];
var ourPartnersTitle = [];
var ourPartners = [];
var weLicensingTitle = [];
var weLicensingFilter = [];
var weLicensing = [];
var knowMore = [];
var cases = [];

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
	weLicensingFilter() {
		weLicensingFilter = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/licenses', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option !== '') {
 					for (var j = 0; j < weLicensingFilter.length; j ++) {
 						if (weLicensingFilter[j].clientsCategoryGroupId === result[i].clientsCategoryGroupId){
 							flag = '0';
 						}
 					}
					if (flag === '1') {
						weLicensingFilter.pushObject(result[i]);
					}
 				}
 			}
	  	});
	  	return weLicensingFilter;
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
	},
	cases() {
		cases = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/cases', function(result){
 			for (var i = 0; i < result.length; i ++) {
				cases.pushObject(result[i]);
 			}
	  	});
	  	return cases;
	}
});