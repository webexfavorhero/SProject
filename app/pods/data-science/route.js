import Ember from 'ember';
import Ds from '../../models/data-science';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			userDat: new Ds().userDat(),
			aboutUser: new Ds().aboutUser(),
			productProTitle: new Ds().productProTitle(),
			productPro: new Ds().productPro(),
			loremIps: new Ds().loremIps(),
			whatWeTitle: new Ds().whatWeTitle(),
			whatWe: new Ds().whatWe(),
			latestCasesTitle: new Ds().latestCasesTitle(),
			knowMore: new Ds().knowMore()
	    });
	}
});