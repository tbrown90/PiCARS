PiCARS.Controllers.controller('bodyCtrl', ['$scope', 'LogService', function($scope, LogService) {
    'use strict';
    $scope.test = 'Hello World';
    LogService.log('Body loaded');
}]);