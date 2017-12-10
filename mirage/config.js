export default function() {
		//added to avoid possible conflict with mirage
		this.namespace = '/api';

		//search for stored contacts at
		this.get('/contacts');
}
