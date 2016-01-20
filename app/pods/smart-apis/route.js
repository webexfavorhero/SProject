import Ember from 'ember';
import Sm from '../../models/smart-apis';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			userSma: new Sm().userSma(),
			aboutUser: new Sm().aboutUser(),
			productProTitle: new Sm().productProTitle(),
			productPro: new Sm().productPro(),
			loremIps: new Sm().loremIps(),
			whatWeTitle: new Sm().whatWeTitle(),
			whatWe: new Sm().whatWe(),
			latestCasesTitle: new Sm().latestCasesTitle(),
			knowMore: new Sm().knowMore()
	    });
	}
});