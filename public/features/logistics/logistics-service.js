PiCARS.Services.factory('LogisticsService', ['$q', '$http', function($q, $http) {
    return {
        get: function(limit) {
            'use strict';
            return $q(function(resolve, reject) {
                $http.get('/getInventory')
                    .success(function(data, status, headers, config) {                        
                        resolve(data);
                    })
                    .error(function(data, status, headers, config) {
                        reject('Error: ' + data.reason);
                   });
                });
            },

        post: function(item) {
            'use strict';
            return $q(function(resolve, reject) {
                $http.post('/addItem', item)
                    .success(function(data, status, headers, config)
                    {
                        resolve(data);
                    })
                    .error(function(data, status, headers, config) {
                        reject('Error: ' + data.reason);
                    });
                });
            },
        
        put: function(data) {
            'use strict';
            return $q(function(resolve, reject) {
                $http.put('/updateItem', data)
                    .success(function(data, status, headers, config)
                    {
                        resolve(data);
                    })
                    .error(function(data, status, headers, config) {
                        reject('Error: ' + data.reason);
                    });
                });
            }
        };
}]);
