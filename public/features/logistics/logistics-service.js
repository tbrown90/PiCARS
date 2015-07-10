PiCARS.Services.factory('LogisticsService', ['$q', '$http', function($q, $http) {    
    return {
        get: function(limit) {
            'use strict';
            return $q(function(resolve, reject) {
                function success(data, status, headers, config) {
                    resolve(data);
                }

                function error(data, status, headers, config) {
                    console.log('Data', data, 'Status', status);
                    reject('Error: ' + data.reason);
                }
                
                $http.get('/getInventory')
                    .success(success)
                    .error(error);
                });
            },

        post: function(item) {
            'use strict';
            return $q(function(resolve, reject) {
                function success(data, status, headers, config) {
                    resolve(data);
                }

                function error(data, status, headers, config) {
                    console.log('Data', data, 'Status', status);
                    reject('Error: ' + data.reason);
                }
                
                $http.post('/addItem', item)
                    .success(success)
                    .error(error);
                });
            },
        
        put: function(data) {
            'use strict';
            return $q(function(resolve, reject) {
                function success(data, status, headers, config) {
                    resolve(data);
                }

                function error(data, status, headers, config) {
                    console.log('Data', data, 'Status', status);
                    reject('Error: ' + data.reason);
                }
                
                $http.put('/updateItem', data)
                    .success(success)
                    .error(error);
                });
            }
        };
}]);
