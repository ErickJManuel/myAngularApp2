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