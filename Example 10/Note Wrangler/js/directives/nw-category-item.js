<!--
angular.module("NoteWrangler").directive("nwCategoryItem", function(){
	return {
		restrict: 'E',
		templateUrl: '/templates/directives/nw-category-item.html'

		scope: {
			category: '='
		},

		// Below line of code allows us to access the parent directories functions
		require: "^nwCategorySelect",  // the caret in front of the directive name indicates it's a parent directive

		// The required directive's controller is passed in as link's 4th parameter and can be named whatever you would like
		// in this case we are using the required directive's controller name
		link: function(scope, element, attrs, nwCategorySelectCtrl){
			// First, we are going to create a makeActive function on the scope of our category items.
			// Now, all we need to do is call this method on category item click.
			scope.makeActive = function(){
				nwCategorySelectCtrl.setActiveCategory(scope.category);
			};

			// Adding function to check if this category is the one that is active so it can be toggled
			scope.categoryActive = function(){
				return nwCategorySelectCtrl.getActiveCategory() === scope.category.name;
			};
		},
	};
});
//-->

/*
How do we keep track of the active category?
1 way is to pass activeCategory around and share a value with everyone, but that is not good object oriented code
Instead we are going to let nwCategorySelect manage the activeCategory and allow the inner nwCategoryItems to get or set the active value when they need to
*/
