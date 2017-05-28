'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var options = require('../options.js');
var browserify = require('browserify');
var streamify = require('gulp-streamify');
var source = require('vinyl-source-stream');
var ngmin = require('gulp-ng-annotate');
var gutil = require('gulp-util');

function generateVendorJs() {
    'use strict';

    return browserify('./public/vendor/vendor.js')
        .bundle({debug: !gutil.env.production})
        .pipe(source('vendor.js'))
        .pipe(streamify(ngmin))
        .pipe(gulp.dest(options.appOutput));
}

gulp.task('script-vendor', generateVendorJs);