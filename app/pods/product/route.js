import Ember from 'ember';
import Products from '../../models/products';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			ourAwePro: new Products().ourAwePro(),
			aboutOurPro: new Products().aboutOurPro(),
			productPro: new Products().productPro(),
			digitalTra: new Products().digitalTra(),
			userExp: new Products().userExp(),
			smartApi: new Products().smartApi(),
			knowMore: new Products().knowMore()
	    });
	}
});
