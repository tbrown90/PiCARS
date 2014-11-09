'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');

var buildWatchTasks = ['html', 'styles', 'scripts'];

function cleanBuild() {
    console.log('Cleaning build folder: ', options.appOutput);
    var src = options.appOutput + '/*.*';
    return gulp.src(src)
        .pipe(rimraf({force: true}));
}

function buildTasks(cb) {
    runSequence('clean',
                buildWatchTasks,
                cb);
}

function buildServe(cb) {
    runSequence('build', 'serve', cb);
}

gulp.task('clean', cleanBuild);
gulp.task('build', buildTasks);
gulp.task('bs', buildServe);

gulp.task('buildWatch', buildWatchTasks);