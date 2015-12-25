import Ember from 'ember';
import Home from '../../models/home';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			teamWorking: new Home().teamWorking(),
			buildingDis: new Home().buildingDis(),
			sciSer: new Home().sciSer()
	    });
	}
});
