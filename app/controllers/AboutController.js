define(['app'], function (app) {
	app
	.controller('AboutController', ['$scope', function ($scope) {
			$scope.title = "About";
			$scope.things = ['Thing One', 'Thing Two', 'Thing Three'];
		}]);
});