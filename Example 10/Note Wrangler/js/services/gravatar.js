<!--
/*
	There is a free web app that we can use to grab photos of our users - Gravatar
	In order to use someone's Gravatar we need to do 3 things
	Hash user's email address
		alyssa#codeschool.com -> bf4ee76b5f3a6bfed26bca5460bc3f22

		How do we Hashify the email address?
		We can use CryptoJS which is a JavaScript library that has an .MD5 function.  Pass this function a string and it will return that string hash-ified.
			CryptoJS.MD5(email)

	Add the hash value onto a Gravatar URL
		http://www.gravatar.com/avatar/bf4ee...png

	Use the URL in the template
		<img ng-src='http://...bf4ee...png' />

	The factory recipe is good, but the problem here is our avatarSize is hard coded and not configurable
	Solution? Use the provider recipe, since it is exactly like the factory, except for the fact that it is configurable

	Provider Recipe:
	.provider("<ServiceName>", function <Service Name>Provider(){
		this.$get<factory function>  -> All providers define a $get function
	});

	The $get function is where you return an object and inject services
	Providers run before everything else, so the only thing you can inject into them is other providers
	.provider("example", function exampleProvider(otherProvider){
		this.$get<factory function>
	});

	When defining a recipe, an empty Provider with the $get method set to your factory function is automatically created under the hood
*/
// Modifying below from factory to provider
//angular.module("NoteWrangler").factory("Gravatar", function GravatarFactory(){
angular.module("NoteWrangler").provider("Gravatar", function GravatarProvidor(){
	// First we want to create reusable variables to generate each user's avatar link. Creating these outside of the factory's return will ensure they are private to this service
	var avatarSize = 80; // Default size
	// the default size above will be passed into our URL as a parameter, see below
	// http://www.gravatar.com/avatar/bf4ee76b5f3a6bfed26bca5460bc3f22?size=80.png

	// the below URL is for the BEGINNING portion of the URL used to get the avatar
	// <http://www.gravatar.com/avatar/>bf4ee76b5f3a6bfed26bca5460bc3f22?size=80.png
	var avatarUrl = "http://www.gravatar.com/avatar/";

	// If a factory service only has one function, we can return just the function rather than returning the object containing that single function see code below the commented code for an example
	/*
		return {
			generate: function(email){
				return avatarUrl + CryptoJS.MD5(email) + "?size" + avatarSize.toString();
			}
		};
	*/

	// below code is for the configureable avatar size
	this.setSize = function(size){
		avatarSize = size;
	}

	// We also need to include the $get function
	this.$get = function(){
		return function(email){
			return avatarUrl + CryptoJS.MD5(email) + "?size" + avatarSize.toString();
		};
	};
});

/*
	In order to call this service, we need to inject it, then call the generate function
	Gravatar.generate("alyssa@codeschool.com")
*/

/*
	Below is the call for the Gravatar.js that is only returning the function
	Gravatar("alyssa@codeschool.com")
*/
//-->
