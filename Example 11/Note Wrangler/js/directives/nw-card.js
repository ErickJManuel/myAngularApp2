<!--
// Setting up a header for our notes below.
/* Below code is not using the $scope variable, see code below this one for the $scope variable implementation
angular.module('NoteWrangler').directive('nwCard', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/nw-card.html',
		controller: function(){
			this.header = 'Note Title';
		},
		controllerAs: 'card'
	};
});
*/

// Since we are using the $scope variable, we no longer need an alias
angular.module('NoteWrangler').directive('nwCard', function(){
	var num = 1;

	return {
		// Put the jQuery in the link function because it is run AFTER the directive has been compiled and linked up
		/*
			BUT this is also bad, because we are still searching the entire DOM for these elements

			link: function(){
				$("div.card").on("click", function(){
					$("div.card p").toggleClass("hidden");
				};
			}
		*/

		// link is the b est place to do DOM manipulation or logic functionality
		// Link's first 2 automatically injected parameters are scope and element
		// element refers to the outermost element of the included template, in this case it is the nw-card.html <div class='card'>
		// using element, we can now search for this specific element and not the entire DOM
		// we can also use the attrs paramter to access the attributes on the directive element
		// attrs is the parameter that allows link to access the attributes of the div in this case header and icon in the notes/index.html <nw-card> directive
		link: function(scope, element, attrs){
			element.on("click", function(){
				element("div.card p").toggleClass("hidden");
			};

			console.log(attrs.header);
		}

		restrict: 'E',
		templateUrl: 'templates/directives/nw-card.html',
		// in order to limit the scope for the note title increments, we need to define scope within this return object to limit it's scope to each return
		/*
			we are just setting up the scope to an empty object for now
			This is now changing so that we can access the header in our children

			scope: {}
		*/

		// @ is telling scope that we are passing in a string
		// = is telling the scope that we are using two-way binding
		// & no explanation yet
		// This allows us to reuse the code for say users, for example header=users.header icon=users.image
		scope: {
			// below logic passes in a string, however, if we use = it will be a two way bind and we can remove the brackets from the note.header in the notes/index.html
			// header: "@"
			header: "=",
			icon: "=",
			// adding new tag for image for Gravatar images
			image: "="
		}

		// Even with below, code, the html will render, but only as the tags and not the actual HTML display
		// In order to display below as HTML we need to use ngBindHtml and $sce
		// $sce - script contextual escape - service that tells angular that this is trusted HTML and don't worry about escaping it
		// link is the best place to do DOM manipulation or logic functionality
		link: function(scope, element) {
			scope.body = $sce.trustAsHtml(markdown.toHTML(scope.body);
		}

		/*
			We are using localized scope now so getting rid of this controller in order to gain acces to the header
			for the jQuery on the hidden div, we don't want to put it into the controller  jQuery is searching the entire DOM and the controller may run before this element exists

			controller: function($scope){
				$scope.header = 'Note Title' + num++;

				// Don't do this!
				$("div.card").on("click", function(){
					$("div.card p").toggleClass("hidden")
				}
			}

			Difference between scope and $scope
			scope allows us to create an isolated scope private to this directive
			$scope allows us to set values as properties on our scope object
		*/
	};
});
//-->
