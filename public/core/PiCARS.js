var appDependencies = [
    'ngRoute',
    'PiCARSDirectives',
    'PiCARSControllers',
    'PiCARSServices'];

var PiCARS = {
    App: angular.module('PiCARS', appDependencies),
    Directives: angular.module('PiCARSDirectives', []),
    Controllers: angular.module('PiCARSControllers', []),
    Services: angular.module('PiCARSServices', [])
};


PiCARS.App.config(function ($compileProvider){
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
});

PiCARS.App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/environment', {
            templateUrl: 'features/environment/environment-partial.html',
            controller: 'environmentCtrl'
        })
        .when('/security', {
            templateUrl: 'features/security/security-partial.html',
            controller: 'securityCtrl'
        })
        .when('/logistics', {
            templateUrl: 'features/logistics/logistics-partial.html',
            controller: 'logisticsCtrl'
        })
        .when('/recreation', {
            templateUrl: 'features/recreation/recreation-partial.html',
            controller: 'recreationCtrl'
        })
        .when('/biological', {
            templateUrl: 'features/biological/biological-partial.html',
            controller: 'biologicalCtrl'
        })
        .otherwise({
            templateUrl: 'features/home/home-partial.html',
            controller: 'homeCtrl' 
        });
    }]);

PiCARS.App.run(function() {
    
});

window.PiCARS = PiCARS;