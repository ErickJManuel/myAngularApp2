<!--
angular.module('NoteWrangler').controller('NoteCreateController', function($http){
	var controller = this;

	this.saveNote = function(note){
		// below code to create a this.errors variable that is available within the $http service.  This variable will be used to 'catch' errors from the $http service
		controller.errors = null;

		// note that we now add the .catch at the end of the service request to ensure we capture failed $http calls
		$http({method: 'POST', url: '/notes', data: note}).catch(function(note){
			controller.errors = note.data.error;
		})
	};
});
//-->
