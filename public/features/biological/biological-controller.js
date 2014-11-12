require('./biological-routes.js');
PiCARS.Controllers.controller('biologicalCtrl', ['$scope', 'LogService', function($scope, LogService) {
    'use strict';
    LogService.log('Biological loaded');
}]);
