<!--
/*
Include ngResource in the NoteWrangler module.

angular.module('NoteWrangler').factory('Note', ['$http', function NoteFactory($http) {
  return {
    all: function() {
      return $http({method: 'GET', url: "/notes"});
    },
    find: function(id) {
      return $http({method:'GET', url: '/notes/' + id});
    },
    create: function(noteObj) {
      return $http({method: 'POST', url: '/notes/', data: noteObj});
    }
  };
}]);
*/

/*
Add a tweetIt method to the Note resource. Remember, this updates an existing note, so use the correct HTTP method.
*/
angular.module('NoteWrangler').factory('Note', function NoteFactory($resource){
  return $resource('/notes', {}, {
    tweetIt: {
      method: "PUT"
    }
  });
});
//-->
