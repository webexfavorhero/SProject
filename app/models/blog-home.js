import Ember from 'ember';

var flag = '1';

var blogs = [];
var categoryFilter = [];

export default Ember.Object.extend({
    blogs() {
        blogs = [];
        Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/blog-post', function(result){
        	for (var i = 0; i < result.length; i ++) {
            	blogs.pushObject(result[i]);
        	}
      	});
      	return blogs;
    },
	categoryFilter() {
		categoryFilter = [];
 		Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/blog-post', function(result){
 			for (var i = 0; i < result.length; i ++) {
				for (var j = 0; j < categoryFilter.length; j ++) {
					if (categoryFilter[j].categorieId === result[i].categorieId) {
						flag = '0';
					}
				}
				if (flag === '1') {
					categoryFilter.pushObject(result[i]);
				}
 			}
	  	});
	  	return categoryFilter;
	}
});