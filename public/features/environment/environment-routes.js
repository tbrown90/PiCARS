PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/environment', {
                templateUrl: 'features/environment/environment-partial.html',
                controller: 'environmentCtrl'
            });
    }]);
