import Ember from 'ember';
import Team from '../../models/team';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			weWorkTogether: new Team().weWorkTogether(),
			thisIsOurTitle: new Team().thisIsOurTitle(),
			thisIsOur: new Team().thisIsOur(),
			comeBe: new Team().comeBe()
	    });
	}
});
