import Ember from 'ember';
import BH from '../../models/blog-home';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			blogs: new BH().blogs(),
			categoryFilter: new BH().categoryFilter()
	    });
	}
});
