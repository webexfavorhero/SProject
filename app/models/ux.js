import Ember from 'ember';

var userExp = [];
var aboutUser = [];
var productProTitle = [];
var productPro = [];
var loremIps = [];
var whatWeTitle = [];
var whatWe = [];
var latestCasesTitle = [];
var knowMore = [];

export default Ember.Object.extend({
	userExp() {
		userExp = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/user-experience', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
 					userExp.pushObject(result[i]);
 				}
 			}
	  	});
	  	return userExp;
	},
	aboutUser() {
		aboutUser = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/user-experience', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1' && result[i].contentType === 'description_image') {
 					aboutUser.pushObject(result[i]);
 				}
 			}
	  	});
	  	return aboutUser;
	},
	productProTitle() {
		productProTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/user-experience', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2' && result[i].option === '1') {
 					productProTitle.pushObject(result[i]);
 				}
 			}
	  	});
	  	return productProTitle;
	},
	productPro() {
		productPro = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/user-experience', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '2') {
 					productPro.pushObject(result[i]);
 				}
 			}
	  	});
	  	return productPro;
	},
	loremIps() {
		loremIps = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/user-experience', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '3') {
 					loremIps.pushObject(result[i]);
 				}
 			}
	  	});
	  	return loremIps;
	},
	whatWeTitle() {
		whatWeTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/user-experience', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '4' && result[i].option === '1') {
 					whatWeTitle.pushObject(result[i]);
 				}
 			}
	  	});
	  	return whatWeTitle;
	},
	whatWe() {
		whatWe = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/user-experience', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '4') {
 					whatWe.pushObject(result[i]);
 				}
 			}
	  	});
	  	return whatWe;
	},
	latestCasesTitle() {
		latestCasesTitle = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/user-experience', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '5' && result[i].option === '') {
 					latestCasesTitle.pushObject(result[i]);
 				}
 			}
	  	});
	  	return latestCasesTitle;
	},
	knowMore() {
		knowMore = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/user-experience', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
 					knowMore.pushObject(result[i]);
 				}
 			}
	  	});
	  	return knowMore;
	}
});