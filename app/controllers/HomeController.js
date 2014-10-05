angular
.module('app')
.controller('HomeController', ['$scope', '$http', 'friends', function ($scope, $http, friends) {
		$scope.title = "Home";
		$scope.items = ['Item One', 'Item Two', 'Item Three'];
		$scope.selectedValue = 'Item Two';
		$scope.friends = friends;

		$scope.save = function () {
			$http.post('api/friends', $scope.friends);
		};
	}]);