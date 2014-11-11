PiCARS.Controllers.controller('environmentCtrl', ['$scope', '$http', 'LogService', function($scope, $http, LogService) {
    'use strict';
    LogService.log('Environment loaded');
    
    $scope.weather = {};
    fetchWeather();
    
    function fetchWeather() {
        LogService.log('Fetching Weather');
        
        $http.get('/weatherService')
            .success(function(data, status, headers, config) {
                LogService.log('Weather data retrieved');
                $scope.weather = data;
            })
            .error(function(data, status, headers, config) {
                LogService.log('Error: ', data);
           });
    }
}]);