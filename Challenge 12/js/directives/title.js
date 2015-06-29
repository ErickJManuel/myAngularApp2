<!--
/*
	1.	Inside a $timeout(), make a Bootstrap popover, to replace the default tooltip on hover, by passing the popover() method
		{ trigger: 'hover' }. Refer to the Bootstrap API docs for the popover() method and parameters. Don't forget to rename our directive to 'popover'.
		First, rename our directive to 'popover'. Then, within the function returned by the popover directive, invoke popover()
		on $(element) from within the callback passed to $timeout(). Use the argument defined in the task instructions for the call to popover().
	3.	Using the attributes argument of the function returned by our new popover directive, make note attributes available to our popover by
		providing them as content in the options object passed to popover(). Note: the attributes argument is the third argument for the function
		returned by the popover directive, after scope and element.
		If we name the third argument attrs, for the function returned by our new popover directive, then we would add the key content and value
		attrs.popover to the options object passed to our call to popover().
	4.	Clean up after our popover directive when $destroy is fired on scope.
*/
angular.module('NoteWrangler').directive('title', function() {
	return function(scope, element, attrs) {
		$timeout(function(){
			$(element).popover({
				trigger: 'hover',
				content: attrs.popover
			});
		});

		scope.$on('$destroy', function(){
			element.tooltip('destroy');
		});
	};
});
//-->
