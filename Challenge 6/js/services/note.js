angular.module('NoteWrangler').factory("Note", function NoteFactory(){
	return {
		all: function(){
			return $http({method: 'GET', url: '/notes'});
		}
	};
});
