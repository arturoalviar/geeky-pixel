'use strict';

var gulp      = require('gulp');
var scss      = require('gulp-sass');
var cssMin    = require('gulp-minify-css');
var haml      = require('gulp-haml');
var jsMin     = require('gulp-uglify');
var rename    = require('gulp-rename');

gulp.task('sassy', function(){
  return gulp.src('./scss/**/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./css'));
});

gulp.task('minify', ['sassy'] , function(){
  return gulp.src('./css/main.css')
    .pipe(cssMin())
    .pipe(gulp.dest('./css'));
});

gulp.task('uglify', function(){
  return gulp.src('./js/main.js')
    .pipe(jsMin())
    .pipe(rename('./main.min.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('hammy', function(){
  gulp.src('./index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'))
});

gulp.task('build', ['minify', 'hammy', 'uglify']);

gulp.task('default', ['build']);
