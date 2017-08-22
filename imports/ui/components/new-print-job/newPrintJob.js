import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import azure from 'azure-storage';

import './newPrintJob.html';

// console.log(Meteor.settings.public);

Template.newPrintJob.events({
	'submit #newJob'(event, instance){
		event.preventDefault();
		// console.log("New Job");
		// console.log(event.target.jobName.value);
		// console.log(event.target.fileInput.value);

		files = document.getElementById('fileInput');
		file = files.files[0];
		// console.log(file);


		var storage_account = Meteor.settings.public.azurecloud.AZURE_STORAGE_ACCOUNT;
		var storage_key = Meteor.settings.public.azurecloud.AZURE_STORAGE_ACCESS_KEY;

		console.log(storage_key);

		var fileService = azure.createFileService(storage_account, storage_key);
		fileService.createShareIfNotExists('printjob', function(error, result, response) {
			if (!error) {
				// if result = true, share was created.
				// if result = false, share already existed.
				console.log(result);
				console.log(response);
			}
		});

	}

});
