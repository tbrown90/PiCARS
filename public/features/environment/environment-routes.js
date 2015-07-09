PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/environment', {
                templateUrl: 'features/environment/partials/environment-partial.html',
                controller: 'environmentCtrl'
            });
    }]);
