require('./environment-routes.js');
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
                $scope.weather = data['forecast']['simpleforecast']['forecastday'].slice(0, 5);
            })
            .error(function(data, status, headers, config) {
                LogService.log('Error: ', data);
           });
    }
}]);
