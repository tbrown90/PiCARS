'use strict';

PiCARS.Services.factory('LogService', ['$log', function($log) {
    var log = [];
    var logLength = 100
    
    return {
        log: function(message, level) {
            if (!level) {
                level = 'info';
            }

            switch (level) {
                case 'warn':
                    $log.warn(message);
                    break;
                case 'error':
                    $log.error(message);
                    break;
                case 'debug':
                    $log.debug(message);
                    break;
                default:
                    $log.info(message);
                    break;
            }

            log.push({message: message, level: level});

            if (log.length > 100) {
                log.shift();
            }
        },
        
        get: function() {
            return log;   
        }
    };
}]);
