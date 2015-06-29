angular.module('NoteWrangler').controller('UsersIndexController', ['$scope', 'Gravatar', function($scope, Gravatar){
	$scope.gravatarUrl = function(user){
		return Gravatar(user.email);
	};
}]);