import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		deleteContact(data){
			data.destroyRecord();
		},
		saveContact() {
						
			//get values from form
			const firstName = this.get('firstName');
			const surname = this.get('surname');
			const phoneNumber = this.get('phoneNumber');
			const mobileNumber = this.get('mobileNumber');

			//create contact from values
			const contact = this.store.createRecord('contact', {
				firstName: firstName,
				surname: surname,
				phoneNumber: phoneNumber,
				mobileNumber: mobileNumber
			});
				
			
			contact.save();
										
		}
				
	}

});
