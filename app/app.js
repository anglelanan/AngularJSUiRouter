angular
.module('app', [
	'ui.router'
])
.config([
	'$urlRouterProvider',
	'$stateProvider'
	, function ($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html',
			controller: ['$scope', function ($scope) {
				$scope.title = "Home";
				$scope.items = ['Item One', 'Item Two', 'Item Three'];
			}]
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/views/about.html'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'app/views/contact.html'
		})
	}])