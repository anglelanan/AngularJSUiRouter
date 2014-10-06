require
.config(
{
	paths: {
		'angular': '../lib/AngularJS/angular',
		'angular-route': '../lib/AngularJS/angular-route.min',
		'angular-ui-route': '../lib/AngularJS/angular-ui-router',
		'oc-lazy-load': '../lib/ocLazyLoad/ocLazyLoad',
		'app': 'app'
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
		'oc-lazy-load': {
			deps: ['angular-ui-route']
		},
		'app': {
			deps: ['oc-lazy-load']
		}
	}
}
);

require(['angular', 'app'], function (angular) {
	angular.bootstrap(document, ['app'])
});