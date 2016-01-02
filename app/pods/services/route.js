import Ember from 'ember';
import Services from '../../models/services';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			ourAwePro: new Services().ourAwePro(),
			aboutOurSer: new Services().aboutOurSer(),
			servicesPro: new Services().servicesPro(),
			digitalTra: new Services().digitalTra(),
			userExp: new Services().userExp(),
			dataSciUp: new Services().dataSciUp(),
			smartApis: new Services().smartApis(),
			dataSciDown: new Services().dataSciDown(),
			devops: new Services().devops(),
			knowMore: new Services().knowMore()
	    });
	}
});
