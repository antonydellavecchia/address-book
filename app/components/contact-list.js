import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'table',
	
	actions:{
		deleteContact(contact){
			//send action for controller to remove 
			this.sendAction('deleteContact', contact);
		}
	}
});
