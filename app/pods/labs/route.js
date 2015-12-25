import Ember from 'ember';
import Labs from '../../models/labs';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			labsBanner: new Labs().labsBanner(),
			aboutLabs: new Labs().aboutLabs(),
			ourCompanies: new Labs().ourCompanies(),
			knowMore: new Labs().knowMore()
	    });
	}
});
