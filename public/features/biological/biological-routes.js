PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/biological', {
                templateUrl: 'features/biological/partials/biological-partial.html',
                controller: 'biologicalCtrl'
            });
    }]);
