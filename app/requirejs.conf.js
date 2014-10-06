require
.config(
{
	paths: {
		'angular': '../lib/AngularJS/angular',
		'angular-route': '../lib/AngularJS/angular-route.min',
		'angular-ui-route': '../lib/AngularJS/angular-ui-router',
		'app': 'app',
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: ['angular']
		},
		'angular-ui-route': {
			deps: ['angular-route']
		},
		'app': {
			deps: ['angular-ui-route']
		}
	}
}
);

require(['angular', 'routes'], function (angular) {
	angular.bootstrap(document, ['app'])
});