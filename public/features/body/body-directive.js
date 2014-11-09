PiCARS.Directives.directive('picarsBody', [function() {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '@'   
        },
        templateUrl: 'features/body/body-partial.html',
        controller: 'bodyCtrl'
    };
}]);