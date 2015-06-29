angular.module('NoteWrangler').directive('nwNav', function() {
	return {
		restrict: 'E',

		controller: function($scope) {
			/*
				Create a default activeNav variable on nwNav's $scope and make it default to 'Notes'.
			*/
			$scope.activeNav = 'Notes';

			/*
				Create a function called getActiveNav in the controller of the nw-nav directive that returns the value of $scope.activeNav variable.
			*/
			this.getActiveNav = function(){
				return $scope.activeNav;
			};

			/*
				Create a function called setActiveNav on the controller of the nw-nav directive that sets the value of $scope.activeNav variable.
			*/
			this.setActiveNav = function(note){
				$scope.activeNav = note;
			};
		}

		/*
			Return this from our controller.
		*/
		return this;
	};
});
