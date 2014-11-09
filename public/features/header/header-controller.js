PiCARS.Controllers.controller('headerCtrl', ['$scope', 'LogService', function($scope, LogService) {
    'use strict';
    
    function getDate() {
        'use strict';
        var date = new Date();
        
        return date.toDateString();
    }
    
    $scope.date = getDate();
    LogService.log('Header loaded');
}]);