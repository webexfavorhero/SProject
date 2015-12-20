import Ember from 'ember';
import Contacts from '../../models/contacts';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			weCan: new Contacts().weCan(),
			comeBe: new Contacts().comeBe()
	    });
	}
});
