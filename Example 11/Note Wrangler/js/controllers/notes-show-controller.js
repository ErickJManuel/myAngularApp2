<!--
angular.module('NoteWrangler').controller('NotesShowController', [$scope, $routeParams, Note, function($scope, $routeParams, Note){
	/*
	Below is the old code using the $http method

	Note.find($routeParams.id).success(function(data){
		$scope.note = data;
	});
	*/

	// below is our new code using the $resources
	$scope.note = Note.get({id: $routeParams.id})
}]);
//-->
