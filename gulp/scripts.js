'use strict';
var gulp = require('gulp'); 

require('./script/vendor.js');
require('./script/core.js');
require('./script/features.js');
var scripts = [
    'script-vendor',
    'script-core',
    'script-features'];

gulp.task('scripts', scripts);
