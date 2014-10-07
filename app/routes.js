define([
	'app'
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
				controller: 'HomeController',
				resolve: {
					controller: function ($q) {
						var def = $q.defer();
						require(['controllers/HomeController'], function () {
							def.resolve();
						});

						return def.promise;
					}
				}
			})
			.state('about', {
				url: '/about',
				templateUrl: 'app/views/about.html',
				controller: 'AboutController',
				resolve: {
					controller: function ($q) {
						var def = $q.defer();
						require(['controllers/AboutController'], function () {
							def.resolve();
						});

						return def.promise;
					}
				}
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'app/views/contact.html'
			})
		}
	]);
});