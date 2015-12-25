import Ember from 'ember';

var weCan = [];
var comeBe = [];

export default Ember.Object.extend({
	weCan() {
		weCan = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/contacts', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1') {
 					weCan.pushObject(result[i]);
 				}
 			}
  	});
  	return weCan;
	},	
	comeBe() {
		comeBe = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/contacts', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '') {
 					comeBe.pushObject(result[i]);
 				}
 			}
  	});
  	return comeBe;
	}
});