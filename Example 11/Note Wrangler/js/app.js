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
angular.module("NoteWrangler", ['ngRoute', 'ngResource']).config(function (GravatarProvider){  // notice we pass in GravatarProvider and not just Gravatar
	GravatarProvider.setSize(100);

	/*
		example of filtering through an array of objects

		Sample array
		[{
			"UserId": user.id,
			"category": {"name": "Question",
						 "icon": "question"},
			"description": "Define Service",
			"title": "What is a Service",
			"content": "Service: Angular...",
		},{
			"UserId": user.id,
			"category": {"name": "Best Practice",
						 "icon": "thumbs up"},
			"description": "NgModel Best Practice",
			"title": "NgModel BP",
			"content": "Always use dot synt..."
		}]

		Sample filter for Question in the above example
		filter:{category: {name: 'Question'}}
	*/
});

// Have to pass in GravatarProvider because we are passing in the FUNCTION and not the SERVICE
//-->