PiCARS.Controllers.controller('logCtrl', ['$scope', 'LogService', function($scope, LogService) {
    'use strict';
    
    $scope.logs = LogService.get();
}]);