PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/logistics', {
                templateUrl: 'features/logistics/partials/logistics-partial.html',
                controller: 'logisticsCtrl'
            })
            .when('/viewInventory', {
                templateUrl: 'features/logistics/partials/view-inventory-partial.html',
                controller: 'logisticsCtrl'
            })
            .when('/addInventory', {
                templateUrl: 'features/logistics/partials/add-inventory-partial.html',
                controller: 'logisticsCtrl'
            })
            .when('/inventoryReport', {
                templateUrl: 'features/logistics/partials/generate-report-partial.html',
                controller: 'logisticsCtrl'
            });
    }]);
