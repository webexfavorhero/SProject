import Ember from 'ember';
import Dv from '../../models/blog-about';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			developers: new Dv().developers(),
			blogBanner: new Dv().blogBanner(),
			blogAbout: new Dv().blogAbout(),
	    });
	}
});
