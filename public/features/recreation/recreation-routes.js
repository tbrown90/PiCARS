PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/recreation', {
                templateUrl: 'features/recreation/recreation-partial.html',
                controller: 'recreationCtrl'
            });
    }]);
