var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var models = require('./models');
var resources = require('./resources');
var config = require('./config/info');

var PiCARS = express();

mongoose.connect(config.mongodb.url);
var mongooseDb = mongoose.connection;
mongooseDb.on('error', function(err) {
    console.log('Error: ', err);
});

mongooseDb.on('open', function(info) {
    resources.register(PiCARS, config);
    models();
    
    // catch 404 and forward to error handler
    PiCARS.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    // error handlers
    // development error handler
    // will print stacktrace
    if (PiCARS.get('env') === 'development') {
        PiCARS.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    // production error handler
    // no stacktraces leaked to user
    PiCARS.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
});

resources.register(PiCARS, config);

// view engine setup
PiCARS.set('views', path.join(__dirname, 'views'));
PiCARS.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
PiCARS.use(logger('dev'));
PiCARS.use(bodyParser.json());
PiCARS.use(bodyParser.urlencoded({ extended: false }));
PiCARS.use(cookieParser());
PiCARS.use(express.static(path.join(__dirname, '../public/_PiCARS')));

module.exports = PiCARS;
