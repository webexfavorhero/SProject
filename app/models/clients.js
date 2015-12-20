import Ember from 'ember';

var aboutClients = [];
var ourClients = [];
var businessProcess = [];
var chadRubinson = [];
var knowMore = [];

export default Ember.Object.extend({
	aboutClients() {
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
 			for (var i = 0; i < result.length; i ++) {
 				if (result[i].displayOrder === '1' && result[i].contentType === 'description_image') {
 					aboutClients.pushObject(result[i]);
 				}
 			}
  	});
  	return aboutClients;
	},
  ourClients() {
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '2' && result[i].contentType === 'description_image') {
          ourClients.pushObject(result[i]);
        }
      }
    });
    return ourClients;
  },
  businessProcess() {
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '4' && result[i].contentType === 'description_image') {
          businessProcess.pushObject(result[i]);
        }
      }
    });
    return businessProcess;
  },
  chadRubinson() {
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '' && result[i].contentType === 'people') {
          chadRubinson.pushObject(result[i]);
        }
      }
    });
    return chadRubinson;
  },
  knowMore() {
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
          knowMore.pushObject(result[i]);
        }
      }
    });
    return knowMore;
  }
});