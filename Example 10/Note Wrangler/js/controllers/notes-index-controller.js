<!--
/*
	Below is an example of including a controller outside the route.js file.
*/

/* Commenting out below code and creating new module using the notes factory method

	angular.module('NoteWrangler').controller('NotesIndexController', function() {
		var controller = this;
		$http({method: 'GET', url: '/notes'}).success(function(data) {
			controller.notes = data;
		});
	});
*/

/*
	In order to use the factory, we need to inject it into the controller
*/
angular.module('NoteWrangler').controller('NotesIndexController', [$scope, $routeParams, 'Note', function($scope, $routeParams, Note){
	/*
	Below is the old code when we were using the $http

	Note.all().success(function(data){
		$scope.notes = data;
	});
	*/

	// this is the new code using $resources
	$scope.notes = Note.query();
}]);
//-->
