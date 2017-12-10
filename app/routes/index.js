import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		// get list of stored contacts
		return this.store.findAll('contact');
	}
});
