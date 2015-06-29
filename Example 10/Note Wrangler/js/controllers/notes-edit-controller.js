<!--
/*
Editing below code to show how to use a custom function off of $resource

angular.module("NoteWrangler").controller("NotesEditController", [$scope, 'Note', function($scope, Note){
	$scope.deleteNote = function(note){
		// below logic should actually be put in services under our application so that it can be reusable through the entire app
		// Services should hold functions responsible for connecting and fetching data, and then sharing it across our application
		// we can then share this data to controllers directives filters and even other services
		Note.$delete(note);

		// The above code is probably implemented in the html like below:
		// <note-delete-button ng-click="deleteNote(note)">
	};
}]);
*/

angular.module("NoteWrangler").controller("NotesEditController", [$scope, $routeParams, 'Note', function($scope, $routeParams, Note){
	$scope.note = Note.get({id: $routeParams.id})

	$scope.updateNote = function(note){
		$scope.errors = null;
		$scope.updating = true;

		note.$update().catch(function(note){
			$scope.errors = [note.data.error];
		}).finally(function(){
			$scope.updating = false;
		});
	};

	$scope.deleteNote = function(note){
		// below logic should actually be put in services under our application so that it can be reusable through the entire app
		// Services should hold functions responsible for connecting and fetching data, and then sharing it across our application
		// we can then share this data to controllers directives filters and even other services
		$scope.$delete(note);

		// The above code is probably implemented in the html like below:
		// <note-delete-button ng-click="deleteNote(note)">
	};
}]);
//-->
