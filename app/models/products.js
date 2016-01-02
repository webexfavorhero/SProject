import Ember from 'ember';

var ourAwePro = [];
var aboutOurPro = [];
var productPro = [];
var digitalTra = [];
var userExp = [];
var smartApi = [];
var knowMore = [];

export default Ember.Object.extend({
	ourAwePro() {
		ourAwePro = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/products', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
 					ourAwePro.pushObject(result[i]);
 				}
 			}
	  	});
	  	return ourAwePro;
	},
	aboutOurPro() {
		aboutOurPro = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/products', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1' && result[i].contentType === 'description_image') {
 					aboutOurPro.pushObject(result[i]);
 				}
 			}
	  	});
	  	return aboutOurPro;
	},
	productPro() {
		productPro = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/products', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].contentType === 'description_image') {
 					productPro.pushObject(result[i]);
 				}
 			}
	  	});
	  	return productPro;
	},
	digitalTra() {
		digitalTra = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/products', function(result){
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
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/products', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option === '2') {
 					userExp.pushObject(result[i]);
 				}
 			}
	  	});
	  	return userExp;
	},
	smartApi() {
		smartApi = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/products', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3' && result[i].option === '3') {
 					smartApi.pushObject(result[i]);
 				}
 			}
	  	});
	  	return smartApi;
	},
	knowMore() {
		knowMore = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/products', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
 					knowMore.pushObject(result[i]);
 				}
 			}
	  	});
	  	return knowMore;
	}
});