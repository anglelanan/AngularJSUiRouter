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
			controller: 'HomeController',
			resolve: {
				friends: ['FriendsService', function (FriendsService) {
						return FriendsService.get();
					}]
			}
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/views/about.html',
			controller: 'AboutController'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'app/views/contact.html'
		})
	}])