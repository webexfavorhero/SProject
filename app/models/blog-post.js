import Ember from 'ember';

var blogs = [];
var specificBlog = [];

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
    specificBlog(params) {
        specificBlog = [];
      Ember.$.getJSON('http://ec2-54-83-80-20.compute-1.amazonaws.com/api/blog-post/' + params.blogId, function(result){
        var mount = '';
        if (result) {
          mount = result[0];
        }

        mount.body = Ember.String.htmlSafe(mount.body);

        specificBlog.pushObject(mount);
      });
      return specificBlog;
  }
});