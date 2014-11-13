PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/logistics', {
                templateUrl: 'features/logistics/logistics-partial.html',
                controller: 'logisticsCtrl'
            })
            .when('/viewInventory', {
                templateUrl: 'features/logistics/view-inventory-partial.html',
                controller: 'logisticsCtrl'
            })
            .when('/addInventory', {
                templateUrl: 'features/logistics/add-inventory-partial.html',
                controller: 'logisticsCtrl'
            })
            .when('/inventoryReport', {
                templateUrl: 'features/logistics/generate-report-partial.html',
                controller: 'logisticsCtrl'
            });
    }]);
