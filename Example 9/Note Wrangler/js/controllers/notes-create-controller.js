<!--
angular.module('NoteWrangler').controller('NoteCreateController', [$scope, 'Note', function($scope, Note){
	/*
	Below is the old code prior to adding the $resouce

	$scope.saveNote = function(note){
		$scope.errors = null;
		$scope.updating = true;

		Note.create(note).catch(function(note){
			$scope.errors = [note.data.error];
		}).finally(function(){
			$scope.updating = false;
		});
	};
	*/

	/*
	new logic, adding two lines

	$scope.note = new Note();
	note.$save(note)
	*/

	$scope.note = new Note();	// First line added to old code
	$scope.saveNote = function(note){
		$scope.errors = null;
		$scope.updating = true;

		note.$save(note).catch(function(note){ // other line change, replaced Note.create(note) with note.$save(note)
			$scope.errors = [note.data.error]; // notice that the try catch block can still be used
		}).finally(function(){
			$scope.updating = false;
		});
	};
});
//-->
