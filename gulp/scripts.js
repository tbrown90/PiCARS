'use strict';
var gulp = require('gulp'); 

require('./script/features.js');
var scripts = [
    'script-features'];

gulp.task('scripts', scripts);
