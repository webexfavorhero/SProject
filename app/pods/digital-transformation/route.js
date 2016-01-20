import Ember from 'ember';
import Dt from '../../models/digital-transformation';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			userDig: new Dt().userDig(),
			aboutUser: new Dt().aboutUser(),
			productProTitle: new Dt().productProTitle(),
			productPro: new Dt().productPro(),
			loremIps: new Dt().loremIps(),
			whatWeTitle: new Dt().whatWeTitle(),
			whatWe: new Dt().whatWe(),
			latestCasesTitle: new Dt().latestCasesTitle(),
			knowMore: new Dt().knowMore()
	    });
	}
});