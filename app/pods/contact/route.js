import Ember from 'ember';
import Contacts from '../../models/contact';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			weCan: new Contacts().weCan(),
			comeBe: new Contacts().comeBe()
	    });
	}
});
