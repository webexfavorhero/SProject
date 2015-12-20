import Ember from 'ember';
import About from '../../models/about';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			aboutUs: new About().aboutUs(),
			weAreSciensa: new About().weAreSciensa(),
			mission: new About().mission(),
			ourCulture: new About().ourCulture(),
			ourOffice: new About().ourOffice(),
			knowMore: new About().knowMore()
	    });
	}
});
