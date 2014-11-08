PiCARS.Directives.directive('picars-body', [function bodyDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '@'   
        },
        templateUrl: 'body-partial.js',
        controller: 'bodyCtrl', link: function($scope, $element) {
        
        }
    };
}]);