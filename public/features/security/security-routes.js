PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/security', {
                templateUrl: 'features/security/security-partial.html',
                controller: 'securityCtrl'
            });
    }]);
