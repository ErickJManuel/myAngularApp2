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
*/
angular.module("NoteWrangler").factory("Gravatar", function GravatarFactory(){
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

	return function(email){
		return avatarUrl + CryptoJS.MD5(email) + "?size" + avatarSize.toString();
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
