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
        .when('/', {
            templateUrl: 'features/home/home-partial.html',
            controller: 'homeCtrl'
        })
        .otherwise({
            templateUrl: 'features/home/home-partial.html',
            controller: 'homeCtrl'
        });
    }]);

PiCARS.App.run(function() {
    
});

window.PiCARS = PiCARS;
