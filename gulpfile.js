var gulp = require('gulp');
var bs = require( 'browser-sync' ).create();
var requirejsOptimize = require('gulp-requirejs-optimize');
 
gulp.task('scripts', function () {
	return gulp.src('./src/js/app.js')
		.pipe(requirejsOptimize({
			exclude: [
				'jquery',
				'underscore',
				'backbone',
				'backbonemarionette',
				'backbonebabysitter',
				'backbonewreqr',
				'text',
				'bootstrap'
			],
			baseUrl: './src',
			mainConfigFile: './main.js',
			name: 'app',
			optimize: 'uglify2',
			insertRequire: ['app'],
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function () {
	bs.init({
		server: {
			baseDir: './',
			index: 'index.html',
			
		},
		browser: "google chrome",
		open: 'local'
	});
});


gulp.watch( [ 'src/**/**/*', 'index.html' ], bs.reload );

gulp.task('default', function() {
  // place code for your default task here
});