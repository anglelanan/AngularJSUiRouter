define(['angular'], function (angular) {
	var app = angular.module('app', [
		'ngRoute',
		'ui.router',
		'oc.lazyLoad'
	])
	.config([
		'$controllerProvider',
		'$compileProvider',
		'$filterProvider',
		'$provide',
		'$ocLazyLoadProvider',
		function (
		$controllerProvider,
		$compileProvider,
		$filterProvider,
		$provide,
		$ocLazyLoadProvider
		) {

			$ocLazyLoadProvider.config({
				asyncLoader: require
			});
			app.controller = $controllerProvider.register;
			app.service = $provide.service;
			app.factory = $provide.factory;
			app.filter = $filterProvider.register;
			app.directive = $compileProvider.directive;
		}
	]);
	return app;
});