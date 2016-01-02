import Ember from 'ember';

var flag = '1';

var ourClientsBanner = [];
var aboutClients = [];
var ourClientsTitle = [];
var ourClientsFilter = [];
var ourClients = [];
var businessProcessTitle = [];
var businessProcess = [];
var chadRubinson = [];
var knowMore = [];
var cases = [];

export default Ember.Object.extend({
  ourClientsBanner() {
    ourClientsBanner = [];
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
          ourClientsBanner.pushObject(result[i]);
        }
      }
    });
    return ourClientsBanner;
  },

  aboutClients() {
    aboutClients = [];
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '1' && result[i].contentType === 'description_image') {
          aboutClients.pushObject(result[i]);
        }
      }
    });
    return aboutClients;
  },

  ourClientsTitle() {
    ourClientsTitle = [];
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '2' && result[i].option === '') {
          ourClientsTitle.pushObject(result[i]);
        }
      }
    });
    return ourClientsTitle;
  },

  ourClientsFilter() {
    ourClientsFilter = [];
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '2' && result[i].contentType === 'client') {
          for (var j = 0; ourClientsFilter.length; j ++) {
            if (ourClientsFilter[j].clientsCategoryGroupId === result[i].clientsCategoryGroupId) {
              flag = '0';
              break;
            }
          }
          if (flag === '1') {
            ourClientsFilter.pushObject(result[i]);
          }
        }
      }
    });
    return ourClientsFilter;
  },

  ourClients() {
    ourClients = [];
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '2' && result[i].contentType === 'client') {
          ourClients.pushObject(result[i]);
        }
      }
    });
    return ourClients;
  },

  businessProcessTitle() {
    businessProcessTitle = [];
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '3' && result[i].option === '1') {
          businessProcessTitle.pushObject(result[i]);
        }
      }
    });
    return businessProcessTitle;
  },

  businessProcess() {
    businessProcess = [];
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
      for (var i = 0; i < result.length; i ++) {
        if (result[i].displayOrder === '3') {
          businessProcess.pushObject(result[i]);
        }
      }
    });
    return businessProcess;
  },

  chadRubinson() {
    chadRubinson = [];
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
    knowMore = [];
    Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/clients', function(result){
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