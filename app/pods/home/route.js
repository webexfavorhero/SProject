import Ember from 'ember';
import Home from '../../models/home';

export default Ember.Route.extend({
	model() {
	    return Ember.RSVP.hash({
			teamWorking: new Home().teamWorking(),
			buildingDisTitle: new Home().buildingDisTitle(),
			buildingDis: new Home().buildingDis(),
			sciSerTitle: new Home().sciSerTitle(),
			sciSer: new Home().sciSer(),
			clientsCase: new Home().clientsCase(),
			loremIpsum: new Home().loremIpsum(),
			cases: new Home().cases(),
			blogs: new Home().blogs()
	    });
	}
});
