/*
	Below is an example of including a controller outside the route.js file.
*/
angular.module('NoteWrangler').controller('NotesIndexController', function() {
	var controller = this;
	$http({method: 'GET', url: '/notes'}).success(function(data) {
		controller.notes = data;
	});
});
