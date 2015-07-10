require('./logistics-routes.js');
PiCARS.Controllers.controller('logisticsCtrl', ['$scope', '$compile', 'LogService', 'LogisticsService', function($scope, $compile, LogService, LogisticsService) {
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
        item.updatedTime = new Date();
        item.quantityUpdatedTime = new Date();
        
        if (!item.expirationDate) {
            item.expirationDate = null;
        }
        item.timesModified = 0;
        item.shouldShow = true;

        var promise = LogisticsService.post(item);
        promise.then(function(data) {
            LogService.log('Adding inventory record...');
            if (data) {
                LogService.log('Inventory record added successfuly.');
                loadInventory();
            }
        }, function(error) {
            LogService.log(error);
        });
    }
    
    $scope.updateItem = function(id, field, data, old) {
        console.log('id:', id, 'field:', field, 'data:', data);
        
        var promise = LogisticsService.put({id: id, field: field, value: data});
        promise.then(function(response) {
            LogService.log('Inventory record updated successfuly.');
            $('#' + id + ' [data-field="' + field + '"]').html(data);
        }, function(error) {
            LogService.log(error);
            $('#' + id + ' [data-field="' + field + '"]').html(old);
        });
    }

    function loadInventory() {
        LogService.log('Loading Inventory');
        var promise = LogisticsService.get();
        promise.then(function(data) {
            LogService.log('Inventory Loaded');
            if (data) {
                LogService.log('Inventory Data Retrieved: ' + data.length + ' records');
                $scope.inventory = data; 
            }
            registerEvents();
        }, function(error) {
            LogService.log(error);
        });
    }

    function registerEvents() {
        function deactivate() {
            $('.active').each(function(idx, el) {
                $(el).find('button').trigger('click');
            });
        }

        $('body').on('dblclick', '.item td', function() {
            deactivate();
            var classes = $(this).attr('class');
            var val = $(this).text();
            var html = '<form novalidate>';

            var field = $(this).data('field');
            var id = $(this).parent().attr('id');

            var data = id + field;

            console.log('val', val);
            if (classes.indexOf('category') !== -1) {
                html += '<select ng-init="data=' + val + '" ng-model="data" ng-options="category for category in categories"></select>'
            } else if (classes.indexOf('date') !== -1) {
                html += '<input ng-init="data=' + val + '" ng-model="data" type="date" value="' + val + '" />';
            } else {
                html += '<input ng-init="data=\'' + val + '\'" ng-model="data" type="text" value="' + val + '" />';
            }
            html += ' <button ng-click="updateItem(\'' + id + '\', \'' + field + '\', data, \'' + val + '\')">Save</button></form>';
            $(this).html(html);
            $(this).addClass('active');
            $compile($(this))($scope);
        });
    }
}]);
