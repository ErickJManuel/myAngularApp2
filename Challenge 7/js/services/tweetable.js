<!--
/*
	Let's create a Tweetable service to use the Tweet Validator API across our application. To begin, let's name our service ''Tweetable'', inject $http and have our factory function return an anonymous function.
*/
angular.module('NoteWrangler').factory('Tweetable', ['$http', function TweetableFactory($http){
	/*
		Create a characterLength variable outside of the return statement and set it to an integer representing an alternate number of max characters.
	*/
	var characterLength = 40;

	return function(potentialTweet){
		/*
			Inside the factory, make a POST request with the $http() function to this endpoint:

			http://gentle-spire-1153.herokuapp.com/tweet

			The service function should accept a single argument, potentialTweet, that will be sent to the external API. Use the Tweet Validator API documentation to determine how to construct the data of our POST request.

			Return your $http() call so we can use it later.

			Pass characterLength in for maxLength along with the description in our Tweetable() POST request.
		*/
		return $http({method: 'POST', url: 'http://gentle-spire-1153.herokuapp.com/tweet', data: {description: potentialTweet, maxLength: characterLength}});
	};
}]);
//-->