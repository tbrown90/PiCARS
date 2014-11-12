require('./security-routes.js');
PiCARS.Controllers.controller('securityCtrl', ['$scope', 'LogService', function($scope, LogService) {
    'use strict';
    LogService.log('Security loaded');
}]);
