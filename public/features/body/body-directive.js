PiCARS.Directives.directive('picars-body', [function bodyDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '@'   
        },
        templateUrl: 'body-partial.html',
        controller: 'bodyCtrl', link: function($scope, $element) {
        
        }
    };
}]);