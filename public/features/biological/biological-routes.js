PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/biological', {
                templateUrl: 'features/biological/biological-partial.html',
                controller: 'biologicalCtrl'
            });
    }]);
