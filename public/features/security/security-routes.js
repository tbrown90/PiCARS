PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/security', {
                templateUrl: 'features/security/partials/security-partial.html',
                controller: 'securityCtrl'
            });
    }]);
