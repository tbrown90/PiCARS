PiCARS.Directives.directive('picars-header', [function picarsHeaderDirective() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '@'   
        },
        templateUrl: 'header-partial.html',
        controller: 'headerCtrl', link: function($scope, $element) {
        
        }
    };
}]);