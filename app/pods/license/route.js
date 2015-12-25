import Ember from 'ember';
import License from '../../models/license';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			licensing: new License().licensing(),
			aboutLicese: new License().aboutLicese(),
			ourPartnersTitle: new License().ourPartnersTitle(),
			ourPartners: new License().ourPartners(),
			weLicensingTitle: new License().weLicensingTitle(),
			weLicensing: new License().weLicensing(),
			knowMore: new License().knowMore()
	    });
	}
});
