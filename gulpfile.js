var gulp = require('gulp');
var bs = require( 'browser-sync' ).create();
var requirejsOptimize = require('gulp-requirejs-optimize');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
gulp.task('scripts', function () {
	return gulp.src('./src/js/app.js')
		.pipe(requirejsOptimize({
			exclude: [
				'jquery',
				// 'underscore',
				// 'backbone',
				// 'backbonemarionette',
				// 'backbonebabysitter',
				// 'backbonewreqr',
				// 'text',
				'bootstrap',
				'jquery-ui',
				'img_collection'
			],
			baseUrl: './src',
			mainConfigFile: './main.js',
			name: 'app',
			optimize: 'none',
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

gulp.task('move', function () {
	gulp.src('bower_components/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('dist/vendor'));
	gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js')
		.pipe(gulp.dest('dist/vendor'));
	gulp.src('bower_components/jquery-ui/jquery-ui.min.js')
		.pipe(gulp.dest('dist/vendor'));
	gulp.src('bower_components/requirejs/require.js')
		.pipe(gulp.dest('dist/vendor'));
	gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest('dist/css'));
	gulp.src('src/js/collections/img_collection.js')
		.pipe(gulp.dest('dist'));

	gulp.src('src/*.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/css'));
});


gulp.watch( [ 'src/**/**/*', 'index.html' ], bs.reload );

gulp.task('default', function() {
  // place code for your default task here
});