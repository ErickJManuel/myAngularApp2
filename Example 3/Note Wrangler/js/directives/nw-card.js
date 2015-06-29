<!--
// Setting up a header for our notes below.
/* Below code is not using the $scope variable, see code below this one for the $scope variable implementation
angular.module('NoteWrangler').directive('nwCard', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/nw-card.html',
		controller: function(){
			this.header = 'Note Title';
		},
		controllerAs: 'card'
	};
});
*/

// Since we are using the $scope variable, we no longer need an alias
angular.module('NoteWrangler').directive('nwCard', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/nw-card.html',
		controller: function($scope){
			$scope.header = 'Note Title';
		}
	};
});
//-->
