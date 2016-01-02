import Ember from 'ember';
import Clients from '../../models/clients';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			ourClientsBanner: new Clients().ourClientsBanner(),
			aboutClients: new Clients().aboutClients(),
			ourClientsTitle: new Clients().ourClientsTitle(),
			ourClientsFilter: new Clients().ourClientsFilter(),
			ourClients: new Clients().ourClients(),
			businessProcessTitle: new Clients().businessProcessTitle(),
			businessProcess: new Clients().businessProcess(),
			chadRubinson: new Clients().chadRubinson(),
			knowMore: new Clients().knowMore(),
			cases: new Clients().cases()
	    });
	}
});
