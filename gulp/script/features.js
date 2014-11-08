'use strict';
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    options = require('../options.js');

function generateFeatureJs() {
    'use strict';
    
    return gulp.src('public/js/features/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('features.js'))
        .pipe(gulp.dest(options.appOutput))
        .pipe(notify({message: 'script-features completed'}));
}

gulp.task('script-features', generateFeatureJs);