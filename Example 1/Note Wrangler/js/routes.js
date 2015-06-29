<!--
/*
	inside module.config we can use $routeProvider's methods to define routes
	.when(path, route);		Adds a new route definition to the $route service

	.otherwise(params);		Sets route definition when no other definition is matched
*/

angular.module('NoteWrangler', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/notes/new', {
		templateUrl: 'templates/pages/notes/edit.html'
	})

	.when('/notes', {
		templateUrl: 'templates/pages/notes/index.html'
	})

	.when('/users', {
		templateUrl: 'templates/pages/users/index.html'
	})

	.when('/', { redirectTo: '/users'})

	.otherwise({ redirectTo: '/notes'});
}]);
//-->
