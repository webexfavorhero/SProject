import Ember from 'ember';
import BP from '../../models/blog-post';

export default Ember.Route.extend({
	model(params) {
	    return Ember.RSVP.hash({
			blogs: new BP().blogs(),
			specificBlog: new BP().specificBlog(params)
	    });
	}
});
