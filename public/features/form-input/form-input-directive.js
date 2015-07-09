PiCARS.Directives.directive('formTextInput', [function() {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '@',
            data: '=',
            label: '@'
        },
        templateUrl: 'features/form-input/partials/form-text-input-partial.html'
    };
}]).directive('formCheckboxInput', [function() {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '@',
            data: '=',
            label: '@'
        },
        templateUrl: 'features/form-input/partials/form-checkbox-input-partial.html'
    };
}]).directive('formSelectInput', [function() {
    'use strict';
    return {
        restrict: 'E',
        replace: true,
        scope: {
            id: '@',
            data: '=',
            label: '@',
            options: '='
        },
        templateUrl: 'features/form-input/partials/form-select-input-partial.html'
    };
}]);