'use strict';

PiCARS.Services.factory('LogService', ['$log', function($log) {
    var log = [];
    var logLength = 100
    
    return {
        log: function(message) {
            $log.info(message);
            log.push(message);

            if (log.length > 100) {
                log.shift();
            }
        },
        
        get: function() {
            return log;   
        }
    };
}]);