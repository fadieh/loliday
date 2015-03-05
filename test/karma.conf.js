module.exports = function(config) {
	config.set({

		basePath: '../',
		frameworks: ['jasmine'],
		files: [
		'public/js/angular.min.js',
		'public/js/angular-route.js',
		'public/js/angular-resource.js',
		'public/js/angular-mocks.js',
		'public/js/jquery.min.js',
		'test/**/*.spec.js'
		],

		exclude: [],

		preprocessors: {},

		reporters: ['progress'],

		port: 9876,

		colors: true,

		logLevel: config.LOG_INFO,

		autoWatch: true,

		browsers: ['PhantomJS'],

		singleRun: false

	});
	
};