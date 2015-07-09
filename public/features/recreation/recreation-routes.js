PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/recreation', {
                templateUrl: 'features/recreation/partials/recreation-partial.html',
                controller: 'recreationCtrl'
            });
    }]);
