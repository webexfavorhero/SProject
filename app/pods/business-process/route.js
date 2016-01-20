import Ember from 'ember';
import Bp from '../../models/business-process';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			userExp: new Bp().userExp(),
			aboutUser: new Bp().aboutUser(),
			productProTitle: new Bp().productProTitle(),
			productPro: new Bp().productPro(),
			loremIps: new Bp().loremIps(),
			whatWeTitle: new Bp().whatWeTitle(),
			whatWe: new Bp().whatWe(),
			latestCasesTitle: new Bp().latestCasesTitle(),
			knowMore: new Bp().knowMore()
	    });
	}
});

