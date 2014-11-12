PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/logistics', {
                templateUrl: 'features/logistics/logistics-partial.html',
                controller: 'logisticsCtrl'
            });
    }]);
