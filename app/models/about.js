import Ember from 'ember';

var aboutUs = [];
var weAreSciensa = [];
var missionTitle = [];
var mission = [];
var ourCulture = [];
var ourOfficeTitle = [];
var ourOffice = [];
var knowMore = [];

export default Ember.Object.extend({
  	aboutUs() {
      aboutUs = [];
   		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
   			for (var i = 0; i < result.length; i ++) {
   				if (result[i].displayOrder === '' && result[i].contentType === 'banner') {
   					aboutUs.pushObject(result[i]);
   				}
   			}
    	});
    	return aboutUs;
	},

  	weAreSciensa() {
      weAreSciensa = [];
   		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
   			for (var i = 0; i < result.length; i ++) {
   				if (result[i].displayOrder === '1') {
   					weAreSciensa.pushObject(result[i]);
   				}
   			}
    	});
    	return weAreSciensa;
	},
  
    missionTitle() {
      missionTitle = [];
      Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
        for (var i = 0; i < result.length; i ++) {
          if (result[i].displayOrder === '2' && result[i].option === '1') {
            missionTitle.pushObject(result[i]);
          }
        }
      });
      return missionTitle;
  },
  
    mission() {
      mission = [];
      Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
        for (var i = 0; i < result.length; i ++) {
          if (result[i].displayOrder === '2') {
            mission.pushObject(result[i]);
          }
        }
      });
      return mission;
  },
  
    ourCulture() {
      ourCulture = [];
      Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
        for (var i = 0; i < result.length; i ++) {
          if (result[i].displayOrder === '3') {
            ourCulture.pushObject(result[i]);
          }
        }
      });
      return ourCulture;
  },
  
    ourOfficeTitle() {
      ourOfficeTitle = [];
      Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
        for (var i = 0; i < result.length; i ++) {
          if (result[i].displayOrder === '4' && result[i].option === '1') {
            ourOfficeTitle.pushObject(result[i]);
          }
        }
      });
      return ourOfficeTitle;
  },
  
    ourOffice() {
      ourOffice = [];
      Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
        for (var i = 0; i < result.length; i ++) {
          if (result[i].displayOrder === '4') {
            ourOffice.pushObject(result[i]);
          }
        }
      });
      return ourOffice;
  },
	
  	knowMore() {
      knowMore = [];
   		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/about', function(result){
   			for (var i = 0; i < result.length; i ++) {
   				if (result[i].displayOrder === '' && result[i].contentType === 'footer') {
   					knowMore.pushObject(result[i]);
   				}
   			}
    	});
    	return knowMore;
	}
});