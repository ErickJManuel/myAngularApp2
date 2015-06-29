angular.module('NoteWrangler').controller('NotesIndexController', ['$scope', 'Note', function($scope, Note) {
	$http({method: 'GET', url: '/notes'}).success(function(data){
		$scope.notes = data;
	});
}]);
