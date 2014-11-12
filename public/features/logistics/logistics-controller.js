require('./logistics-routes.js');
PiCARS.Controllers.controller('logisticsCtrl', ['$scope', 'LogService', function($scope, LogService) {
    'use strict';
    LogService.log('Logistics loaded');
}]);
