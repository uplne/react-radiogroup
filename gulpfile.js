const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const notify       = require('gulp-notify');
const postcss      = require('gulp-postcss');
const babel        = require('gulp-babel');
const autoprefixer = require('autoprefixer');
const exec         = require('child_process').exec;
const browserSync  = require('browser-sync');
const rollup       = require('gulp-rollup');

const src = {
	css: './dev/sass/**/*.scss',
	js: './dev/js/**/*.js'
}

const compiled = {
  css: './public/css',
  js: './public/js'
}

const processors = [
	autoprefixer({
		browsers: ['last 2 versions', 'ie 9', 'ie 10'],
		cascade: false
	})
];

gulp.task('sass-dev', function () {
	return gulp.src(src.css)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(compiled.css))
		.pipe(notify("CSS compiled in dev mode"));
});

gulp.task('js', () => {
	return gulp.src('./dev/js/**/*.js')
		.pipe(rollup({
			entry: './dev/js/main.js'
		}))
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest(compiled.js));
});


gulp.task('browser-sync', function() {
	 browserSync({
		  server: {
				baseDir: "./"
		  },
		  port: 3030
	 });
});

gulp.task('watch', function() {
	gulp.watch(src.css, ['sass-dev', browserSync.reload]);
	gulp.watch('./dev/js/**/*.js', browserSync.reload);
	gulp.watch("*.html", browserSync.reload);
});

gulp.task('dev', ['sass-dev', 'browser-sync', 'watch']);