import Ember from 'ember';

var flag = '1';

var labsBanner = [];
var aboutLabs = [];
var ourCompaniesTitle = [];
var ourCompaniesFilter = [];
var ourCompanies = [];
var knowMore = [];
var cases = [];

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
	ourCompaniesTitle() {
		ourCompaniesTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/labs', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].contentType === 'description_image') {
 					ourCompaniesTitle.pushObject(result[i]);
 					break;
 				}
 			}
	  	});
	  	return ourCompaniesTitle;
	},
	ourCompaniesFilter() {
		ourCompaniesFilter = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/labs', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option !== "") {
 					for (var j = 0; j < ourCompaniesFilter.length; j ++) {
 						if (ourCompaniesFilter[j].clientsCategoryGroupId === result[i].clientsCategoryGroupId) {
 							flag = '0';
 						}
 					}
 					if (flag === '1') {
 						ourCompaniesFilter.pushObject(result[i]);
 					}
 				}
 			}
	  	});
	  	return ourCompaniesFilter;
	},
	ourCompanies() {
		ourCompanies = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/labs', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3') {
 					ourCompanies.pushObject(result[i]);
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