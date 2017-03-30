var gulp 		= require('gulp')
var watch 		= require('gulp-watch')
var source 		= require('vinyl-source-stream')
var babelify 	= require('babelify')
var browserify  = require('browserify')

gulp.task('react', function(){							  
	return browserify('./clientReact/main.js')
	.transform('babelify', {presets: ["react"]})
	.bundle()
	.pipe(source('build.js'))
	.pipe(gulp.dest('./scripts/build'))
})

gulp.task('watch', function(){								// watch for changes to any react js files
	gulp.watch(['./clientReact/*.js'], ['react'])
})

gulp.task('default', ['react', 'watch'])					//default action on gulp