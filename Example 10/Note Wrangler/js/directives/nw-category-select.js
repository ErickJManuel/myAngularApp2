<!--
angular.module("NoteWrangler").directive("nwCategorySelect", function(Category){
	return {
		replace: true,
		restrict: 'E',
		templateUrl: '/templates/directives/mw-category-select.html'
		link: function(scope, element, attrs){	// Data access should be done in the link function
			scope.categories = Category.query{};
		};

		// creating the setActiveCategory function to assign an active category variable
		// creating the getActiveCategory function
		controller: function($scope){
			this.getActiveCategory = function(){
				return $scope.activeCategory;
			};

			this.setActiveCategory = function(category){
				$scope.activeCategory = category.name;
			};
		};
	};
});
//-->

/*
The html for the above code CAN be put in the nw-category-select.html, BUT the children are going to have additional functionality so we are going to split them up into seperate items
nw-category-item.html
*/