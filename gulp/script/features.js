'use strict';
var gulp = require('gulp');
var options = require('../options.js');
var concat = require('gulp-concat');
var include = require('gulp-include');

function generateFeatureJs() {
    'use strict';

    return gulp.src('public/features/**/*.js')
        .pipe(include())
        .on('error', console.log)
        .pipe(concat('features.js'))
        .pipe(gulp.dest(options.appOutput));
}

gulp.task('script-features', generateFeatureJs);