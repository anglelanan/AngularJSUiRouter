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
				friends: ['$http', function ($http) {
						return $http.get('api/friends.json')
						.then(function (response) {
							return response.data;
						})
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