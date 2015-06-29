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
	var num = 1;

	return {
		restrict: 'E',
		templateUrl: 'templates/directives/nw-card.html',
		// in order to limit the scope for the note title increments, we need to define scope within this return object to limit it's scope to each return
		/*
			we are just setting up the scope to an empty object for now
			This is now changing so that we can access the header in our children

			scope: {}
		*/

		// @ is telling scope that we are passing in a string
		// = is telling the scope that we are using two-way binding
		// & no explanation yet
		// This allows us to reuse the code for say users, for example header=users.header icon=users.image
		scope: {
			// below logic passes in a string, however, if we use = it will be a two way bind and we can remove the brackets from the note.header in the notes/index.html
			// header: "@"
			header: "=",
			icon: "="
		}

		/*
			We are using localized scope now so getting rid of this controller in order to gain acces to the header

			controller: function($scope){
				$scope.header = 'Note Title' + num++;
			}

			Difference between scope and $scope
			scope allows us to create an isolated scope private to this directive
			$scope allows us to set values as properties on our scope object
		*/
	};
});
//-->
