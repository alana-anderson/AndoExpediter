const gulp = require('gulp');

// Load plugins
const sass = require('gulp-sass');
const browserify = require('browserify');
const babelify = require('babelify');
const connect = require('gulp-connect');
const transform = require('vinyl-transform');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const cleanCSS = require('gulp-clean-css');
const streamify = require('gulp-streamify');


// Styles
gulp.task('sass', () => {
  return gulp.src('app/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('assets/css'))
    .pipe(connect.reload());
});


// JSX -> js
gulp.task('build', () => {
  return browserify('./app/scripts/components/base.jsx', {
    debug: true
  })
  .transform(babelify.configure({
    presets: ['es2015', 'react']
  }))
  .bundle()
  .pipe(source('app.js'))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest('./assets/js/'))
  .pipe(connect.reload());
});


// Server
gulp.task('webserver', () => {
  connect.server({
    livereload: true
  });
});


// Watch for changes
gulp.task('watch', () => {
  gulp.watch('app/styles/*.scss', ['sass']);
  gulp.watch('app/scripts/components/*.jsx', ['build']);
})

gulp.task('default', ['sass', 'build', 'webserver', 'watch']);
