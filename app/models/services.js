import Ember from 'ember';

var ourAwePro = [];
var aboutOurSer = [];
var servicesPro = [];
var digitalTra = [];
var userExp = [];
var dataSciUp = [];
var smartApis = [];
var dataSciDown = [];
var devops = [];
var knowMore = [];

export default Ember.Object.extend({
	ourAwePro() {
		ourAwePro = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
 					ourAwePro.pushObject(result[i]);
 				}
 			}
	  	});
	  	return ourAwePro;
	},
	aboutOurSer() {
		aboutOurSer = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1' && result[i].contentType === 'description_image') {
 					aboutOurSer.pushObject(result[i]);
 				}
 			}
	  	});
	  	return aboutOurSer;
	},
	servicesPro() {
		servicesPro = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].contentType === 'description_image') {
 					servicesPro.pushObject(result[i]);
 				}
 			}
	  	});
	  	return servicesPro;
	},
	digitalTra() {
		digitalTra = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option === '1') {
 					digitalTra.pushObject(result[i]);
 				}
 			}
	  	});
	  	return digitalTra;
	},
	userExp() {
		userExp = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option === '2') {
 					userExp.pushObject(result[i]);
 				}
 			}
	  	});
	  	return userExp;
	},
	dataSciUp() {
		dataSciUp = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option === '3') {
 					dataSciUp.pushObject(result[i]);
 				}
 			}
	  	});
	  	return dataSciUp;
	},
	smartApis() {
		smartApis = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option === '4') {
 					smartApis.pushObject(result[i]);
 				}
 			}
	  	});
	  	return smartApis;
	},
	dataSciDown() {
		dataSciDown = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option === '5') {
 					dataSciDown.pushObject(result[i]);
 				}
 			}
	  	});
	  	return dataSciDown;
	},
	devops() {
		devops = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option === '6') {
 					devops.pushObject(result[i]);
 				}
 			}
	  	});
	  	return devops;
	},
	knowMore() {
		knowMore = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/services', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
 					knowMore.pushObject(result[i]);
 				}
 			}
	  	});
	  	return knowMore;
	}
});