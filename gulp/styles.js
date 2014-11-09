'use strict';
var gulp = require('gulp'); 
var sass = require('gulp-ruby-sass');
var options = require('./options.js');

function complieFonts() {
    return gulp.src('public/stylesheets/fonts/*')
        .pipe(gulp.dest(options.appOutput + '/styles/'));
}

function compileStyles() {
    return gulp.src('public/stylesheets/*.scss')
        .pipe(sass({style: 'expanded', }))
        .pipe(gulp.dest(options.appOutput + '/styles/'));
}

gulp.task('styles-fonts', complieFonts);
gulp.task('styles-sass', compileStyles);

gulp.task('styles', ['styles-fonts', 'styles-sass']);