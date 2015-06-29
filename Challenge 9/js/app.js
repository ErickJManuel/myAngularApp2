<!--
/*
Include ngResource in the NoteWrangler module.
*/
angular.module('NoteWrangler', ['ngRoute', 'ngResource']).config(function(TweetableProvider) {
  TweetableProvider.setLength(144);
});
//-->
