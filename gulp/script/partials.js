'use strict';
var gulp = require('gulp');
var options = require('../options.js');
var htmlmin = require('gulp-htmlmin');

function generateFeaturePartials() {
    var htmlMinOpts = {
        collapseWhitespace: true   
    }
    
    return gulp.src('public/features/**/*-partial.html')
        .pipe(htmlmin(htmlMinOpts))
        .pipe(gulp.dest(options.appOutput + '/features/'));
}

gulp.task('html-partials', generateFeaturePartials);