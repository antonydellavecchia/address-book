import DS from 'ember-data';

export default DS.Model.extend({
		//define the contact model
	firstName: DS.attr(),
	surname: DS.attr(),
	phoneNumber: DS.attr(),
	mobileNumber: DS.attr() 
});
