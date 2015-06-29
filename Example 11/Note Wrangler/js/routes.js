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

	// below example is of adding a controller to our route
	.when('/notes', {
		templateUrl: 'templates/pages/notes/index.html',
		/*
			below is an example of inline controller logic in our route.js, this can get lengthy so instead use the code following whic uses the notes-index-controller.js file
			controller: function(){}
		*/
		controller: 'NotesIndexController',
		controllerAs: 'indexController'
	})

	// :id below specifies a route parameter, we can access this by using the built in $routeParams service
	.when('/notes/:id', {
		templateUrl: 'templates/pages/notes/show.html',
		controller: 'NotesShowController',
		controllerAs: 'showController'
	});

	.when('/users', {
		templateUrl: 'templates/pages/users/index.html'
	})

	.when('/', { redirectTo: '/users'})

	.otherwise({ redirectTo: '/notes'});
}]);
//-->
