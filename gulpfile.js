'use strict';

var gulp      = require('gulp');
var scss      = require('gulp-sass');
var cssMin    = require('gulp-minify-css');
var haml      = require('gulp-haml');


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

gulp.task('hammy', function(){
  gulp.src('./index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'))
});

gulp.task('build', ['minify', 'hammy']);

gulp.task('default', ['build']);
