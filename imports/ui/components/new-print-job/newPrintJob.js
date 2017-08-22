import { Template } from 'meteor/templating';

import './newPrintJob.html';

Template.newPrintJob.events({
	'submit #newJob'(event, instance){
		event.preventDefault();
		console.log("New Job");
	}
});