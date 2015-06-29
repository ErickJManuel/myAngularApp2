<!--
// this directive is titled 'title' because we want it to override the HTML title attribute and replace the hideous default tooltip
//	<div class="card" title="{{header}}"  <- we are replacing the title in this div with our own directive
// below code will not work because when link ran, the header value was not yet set.
// One fix is to add timeout to the logic on order to get Angular to run through an entire event loop prior to replacing the tooltip  See logic below commented out code
/*
angular.module("NoteWrangler").directive("title", function(){
	/*
	If our directive is only returning the link function, we can combine the two lines of code below into one, see logic below commented out code

	return {
		// restrict: 'A', <- directives are restricted to attribute by default so this line is redundant and unnecessary
		link: function(scope, element) {
			// Custom tooltip logic
		}
	};
	* /

	return function(scope, element) {
		// this is the bootstrap tooltip method
		element.tooltip({ container: "body"});
	};
});
*/

// Adding timeout to our logic in order to get {{header}} populated
angular.module("NoteWrangler").directive("title", function($timeout){
	return function(scope, element) {
		$timeout(function(){
			// this is the bootstrap tooltip method
			element.tooltip({ container: "body"});
		});

		// The tooltip now works, but we still need to clean up after for best practice
		scope.$on('$destroy', function(){
			element.tooltip('destroy');
		});
	};
});

/*
	When to use Controller/Link
	Inside directives, it is best practice to use controller only when you want to share functions with other directives.  All other times you should use link.

	angular.module("NoteWrangler").directive("nwExample", function(){
		return {
			controller: function($scope){ }, <- use this only when you want to share this function with other directives and use the require property

			link: function(scope, element){ } <- all other cases use link
		}
	});
*/
//-->