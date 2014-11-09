PiCARS.Directives.directive('picarsLog', function() {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '@'   
        },
        templateUrl: 'features/log/log-partial.html',
        controller: 'logCtrl'
    };
});