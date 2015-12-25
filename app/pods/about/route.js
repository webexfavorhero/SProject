import Ember from 'ember';
import About from '../../models/about';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			aboutUs: new About().aboutUs(),
			weAreSciensa: new About().weAreSciensa(),
			missionTitle: new About().missionTitle(),
			mission: new About().mission(),
			ourCulture: new About().ourCulture(),
			ourOfficeTitle: new About().ourOfficeTitle(),
			ourOffice: new About().ourOffice(),
			knowMore: new About().knowMore()
	    });
	}
});
