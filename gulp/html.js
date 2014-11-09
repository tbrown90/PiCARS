'use strict';
var gulp = require('gulp'); 

require('./script/index.js');
require('./script/partials.js');
var scripts = [
    'html-index',
    'html-partials'];

gulp.task('html', scripts);
