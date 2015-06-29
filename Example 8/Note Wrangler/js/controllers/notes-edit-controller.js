<!--
angular.module("NoteWrangler").controller("NotesEditController", ['$scope', '$http', function($scope, $http){
	$scope.updateNote = function(noteObj){
		// below logic should actually be put in services under our application so that it can be reusable through the entire app
		// Services should hold functions responsible for connecting and fetching data, and then sharing it across our application
		// we can then share this data to controllers directives filters and even other services
		$http({method: "PUT", url: "/notes", data: noteObj});
	};
}]);
//-->
