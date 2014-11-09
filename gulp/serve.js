'use strict';
var gulp = require('gulp');
var options = require('./options.js');
var nodemon = require('gulp-nodemon');

function startServer() {
    nodemon({
        script: options.appServer,
        watch: ['server']
    });
}

function startDebugServer() {
	nodemon({
		script: options.appServer,
		nodeArgs: ['--debug'],
		watch: ['server']
	});
}

function startDebugBreakServer() {
	nodemon({
		script: options.appServer,
		nodeArgs: ['--debug-brk'],
		watch: ['server']
	});
}

gulp.task('serve', startServer);
gulp.task('serve-debug', startDebugServer);
gulp.task('serve-debug-brk', startDebugBreakServer);