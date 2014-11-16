require('./logistics-routes.js');
PiCARS.Controllers.controller('logisticsCtrl', ['$scope', 'LogService', 'LogisticsService', function($scope, LogService, LogisticsService) {
    'use strict';
    $scope.inventory = [];
    $scope.loadInventory = loadInventory;

    $scope.categories = ['Books',
                         'Comics',
                         'DVD/Blu-Rays',
                         'Other Collectibles',
                         'Video Games'];

    $scope.save = function(item) {
        item.createdTime = new Date();
        item.updateTime = new Date();
        if (!item.expirationDate) {
            item.expirationDate = null;
        }
        item.timesModified = 0;

        var promise = LogisticsService.post(item);
        promise.then(function(data) {
            LogService.log('Adding inventory record...');
            if (data) {
                LogService.log('Inventory record added successfuly.');
            }
        }, function(error) {
            LogService.log(error);
        });
    }
    
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
