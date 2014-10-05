angular
.module('app')
.controller('HomeController', ['$scope', function ($scope) {
		$scope.title = "Home";
		$scope.items = ['Item One', 'Item Two', 'Item Three'];
		$scope.selectedValue = 'Item Two';
	}]);