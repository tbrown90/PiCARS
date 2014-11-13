require('./logistics-routes.js');
PiCARS.Controllers.controller('logisticsCtrl', ['$scope', 'LogService', 'LogisticsService', function($scope, LogService, LogisticsService) {
    'use strict';
    $scope.inventory = [];
    loadInventory();
    
    function loadInventory() {
        LogService.log('Loading Inventory');
        var promise = LogisticsService.get();
        promise.then(function(data) {
            LogService.log('Inventory Loaded');
            if (data) {
                LogService.log('Inventory Data Retrieved: ', data.length + ' records');
                $scope.inventory = data; 
            }
        }, function(error) {
            LogService.log(error);
        });
    }
}]);
