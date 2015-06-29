<!--
/*
	There are 5 recipes for service creation, they range in complexity and customization
	Value
	Factory - Most commonly used - Used for sharing functions and objects across an application
	Service
	Provider - Commonly used - Used for sharing methods and objects (like a Factory), but allows for configuration
	Constant
	Factory and Provider are the two most commonly used for creating a Service

	recipe for factory
	angular.module("<ModuleName>").factory("<ServiceName>", function <ServiceName>Factory(){
		return { <object containing shared functions> }
	});
*/
angular.module("NoteWrangler").factory("Note", function NoteFactory($http){ // Name convention is service name + recipe
	return {
		// the all method gets a list of all the notes
		all: function(){
			return $http({method: "GET", url: "/notes"});
		},

		// the create method posts a new note
		create: function(note){
			return $http({method: "POST", url: "/notes", data: note});
		}
	};
});
//-->