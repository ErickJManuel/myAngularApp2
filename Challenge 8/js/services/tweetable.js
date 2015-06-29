<!--
/*
  Change the factory definition into a provider definition.
*/
//  angular.module('NoteWrangler').factory('Tweetable', ['$http', function TweetableFactory($http) {
angular.module('NoteWrangler').provider('Tweetable', function TweetableProvider() {
  var characterLength = 144;
  /*
    Create a setLength() function attached to the provider that sets the characterLength variable.
  */
  this.setLength = function(length){
    characterLength = length;
  };

  /*
    Wrap the existing function returned by our TweetableProvider() function in a call to the $get() function required by providers. Don't forget to move the $http service injection!
    Also had to remove the reference to $http in the above injection
  */
  this.$get = function($http){
    return function(potentialTweet) {
      return $http({
        method: 'POST',
        url: 'http://gentle-spire-1153.herokuapp.com/tweet',
        data: {
          description: potentialTweet,
          maxLength: characterLength
        }
      });
    };
  };
});
//-->
