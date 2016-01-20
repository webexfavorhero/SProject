import Ember from 'ember';
import Ux from '../../models/user-experience';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			userExp: new Ux().userExp(),
			aboutUser: new Ux().aboutUser(),
			productProTitle: new Ux().productProTitle(),
			productPro: new Ux().productPro(),
			loremIps: new Ux().loremIps(),
			whatWeTitle: new Ux().whatWeTitle(),
			whatWe: new Ux().whatWe(),
			latestCasesTitle: new Ux().latestCasesTitle(),
			knowMore: new Ux().knowMore()
	    });
	}
});
