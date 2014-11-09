'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var options = require('../options.js');
var notify = require('gulp-notify');
var browserify = require('browserify');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');
var ngmin = require('gulp-ng-annotate');
var gutil = require('gulp-util');

function generateCoreJs() {
    'use strict';
    
    return browserify('./public/core/core.js')
        .bundle({debug: !gutil.env.production})
        .pipe(source('core.js'))
        .pipe(streamify(ngmin))
        .pipe(gulp.dest(options.appOutput));
}

gulp.task('script-core', generateCoreJs);