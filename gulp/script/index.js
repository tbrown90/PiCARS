'use strict';
var gulp = require('gulp');
var options = require('../options.js');
var htmlmin = require('gulp-htmlmin');

function generateCoreHtml() {
    'use strict';
    var htmlMinOpts = {
        collapseWhitespace: false   
    }
    
    gulp.src('public/index.html')
        .pipe(htmlmin(htmlMinOpts))
        .pipe(gulp.dest(options.appOutput));
}

gulp.task('html-index', generateCoreHtml);