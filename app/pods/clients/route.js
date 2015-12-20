import Ember from 'ember';
import Clients from '../../models/clients';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			aboutClients: new Clients().aboutClients(),
			ourClients: new Clients().ourClients(),
			businessProcess: new Clients().businessProcess(),
			chadRubinson: new Clients().chadRubinson(),
			knowMore: new Clients().knowMore()
	    });
	}
});
