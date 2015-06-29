<!--
/*
	We will be using the $http service in the Note Wrangler app, see below for the built in methods to be used with this service
	$http.get - retrieve data
	$http.post - create new data
	$http.put - update existing data
	$http.delete - destroy data

	Another nice feature with this service is that it gives us the ability to pass in an object (ie when we are creating data)
	$http({ method: 'POST', url: '/resource/path.json', data: noteData });
*/
angular.module("NoteWrangler", ['ngRoute'])
//-->