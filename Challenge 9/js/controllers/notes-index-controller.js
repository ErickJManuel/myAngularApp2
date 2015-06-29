<!--
angular.module('NoteWrangler').controller('NotesIndexController', ['$scope', 'Note', 'Tweetable', function($scope, Note, Tweetable) {
	/*
	Replace the existing call to Note.all() with the correct call to the Note Angular resource.

	Note.all().success(function(data) {
		$scope.notes = data;
	});
	*/

	$scope.notes = Note.query();

	$scope.tweetThatNote = function(noteToTweet) {
		Tweetable(noteToTweet).success(function(status) {
			console.log(status);
		});
	};
	*/


}]);
//-->
