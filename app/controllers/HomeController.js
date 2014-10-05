angular
.module('app')
.controller('HomeController', ['$scope', 'FriendsService', function ($scope, FriendsService) {
		$scope.title = "Home";
		$scope.items = ['Item One', 'Item Two', 'Item Three'];
		$scope.selectedValue = 'Item Two';
		$scope.friends = FriendsService.get();

		$scope.save = function () {
			alert(JSON.stringify(friends));
		};
	}]);