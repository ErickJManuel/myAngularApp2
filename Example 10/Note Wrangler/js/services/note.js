<!--
/*
There are 5 recipes for service creation, they range in complexity and customization
	Value - Used often - The simplest service recipe used for sharing a value that is used throughout your app repeatedly
	Factory - Most commonly used - Used for sharing functions (or methods) and objects across an application
	Service - Rarely used - Shares instances of methods and objects instead of the actual method or object
	Provider - Commonly used - Used for sharing methods and objects (like a Factory), but allows for configuration
	Constant - Used less often - Shares a value within application configuration

	Factory and Provider are the two most commonly used for creating a Service

recipe for factory
angular.module("<ModuleName>").factory("<ServiceName>", function <ServiceName>Factory(){
	return { <object containing shared functions> }
});
*/

/*
We are removing the below line of code and instead using the ngResources to handle the common $http calls
angular.module("NoteWrangler").factory("Note", function NoteFactory($http){ // Name convention is service name + recipe
*/

angular.module("NoteWrangler").factory("Note", function NoteFactory($resource){
	/*
	The below call is no longer valid since we are going to b e using the $resource instead of the $http

	return {
		// the all method gets a list of all the notes
		all: function(){
			return $http({method: "GET", url: "/notes"});
		},

		// the find method gets a specific note
		find: function(id){
			return $http({method: "GET", url: "/notes", + id});
		},

		//the update method updates an existing note
		update: function(noteObj){
			return $http({method: "PUT", url: "/notes", data: noteObj});
		},

		// the create method posts a new note
		create: function(note){
			return $http({method: "POST", url: "/notes", data: noteObj});
		}
	};

	Changing the below line to add custom functions
	return $resource("/notes/:id", {}, {});  // This one line provides similar functionality to all of the lines above
	*/

	return $resource("/notes/:id", {}, {
		update: {
			method: "PUT"
		}
	});
});
/*
$resource has allowed us to simplify getting all notes, fetching one note, and creating new notes
To get a single resource: Note.get({id: $routeParams.id})
To get all resources: 	  Note.query();
To delete resources:      Note.$delete()
To create a new resouce:  $scope.note = new Note();
                          note.$save();
*/
//-->
