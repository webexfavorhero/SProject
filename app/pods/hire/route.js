import Ember from 'ember';
import Hire from '../../models/hire';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			bePart: new Hire().bePart(),
			buildingDisTitle: new Hire().buildingDisTitle(),
			buildingDis: new Hire().buildingDis(),
			ourOfficeTitle: new Hire().ourOfficeTitle(),
			ourOffice: new Hire().ourOffice(),
			comeBe: new Hire().comeBe()
	    });
	}
});
