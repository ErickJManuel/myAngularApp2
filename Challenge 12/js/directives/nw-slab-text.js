<!--
/*
	1.	Create a link function for the nwSlabText directive.
	2.	Call the slabText() method on directive's element. Refer to the SlabText docs for the method name.
	4.	We have a problem: the link function of the nwSlabText directive is being called before the element
		has been populated with data. To solve this, inject and use the $timeout service.
*/

/*
Replacing below code to add the $timeout service and streamline the code correctly

angular.module('NoteWrangler').directive('nwSlabText', function() {
	return{
		link: function(scope, element){
			element.slabText{};
		}
	};
*/
angular.module('NoteWrangler').directive('nwSlabText', function($timeout){
	return function(scope, element){
		$timeout(function(){
			element.slabText{};
		}
	};
});
//-->
