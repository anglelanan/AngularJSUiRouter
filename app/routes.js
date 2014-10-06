define([
	'app',
	'angular-ui-route',
	'controllers/HomeController',
	'controllers/AboutController'
], function (app) {
	app
	.config([
		'$urlRouterProvider',
		'$stateProvider',
		function (
		$urlRouterProvider,
		$stateProvider
		) {
			$urlRouterProvider.otherwise('/');

			$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'app/views/home.html',
				controller: 'HomeController'
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
		}
	]);
});