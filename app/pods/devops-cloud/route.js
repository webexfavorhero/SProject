import Ember from 'ember';
import Dc from '../../models/devops-cloud';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			userDev: new Dc().userDev(),
			aboutUser: new Dc().aboutUser(),
			productProTitle: new Dc().productProTitle(),
			productPro: new Dc().productPro(),
			loremIps: new Dc().loremIps(),
			whatWeTitle: new Dc().whatWeTitle(),
			whatWe: new Dc().whatWe(),
			latestCasesTitle: new Dc().latestCasesTitle(),
			knowMore: new Dc().knowMore()
	    });
	}
});