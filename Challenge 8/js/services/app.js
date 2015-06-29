<!--
/*
	Let's call config() on our NoteWrangler module and provide it an anonymous function.
	angular.module('NoteWrangler', ['ngRoute']).config(function(){
*/
/*
	Inject TweetableProvider into the config() function.
*/
angular.module('NoteWrangler', ['ngRoute']).config(function(TweetableProvider){
	// Call the setLength() function of TweetableProvider from within the config() function and pass it a value of 40.
	TweetableProvider.setLength(40);
});
//-->