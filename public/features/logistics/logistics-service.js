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
                        reject('Error: ', status, 'Reason: ', data);
                   });
                });
            },

        post: function(item) {
            'use strict';
            return $q(function(resolve, reject) {
                $http.get('/addItem', {body: item})
                    .success(function(data, status, headers, config)
                    {
                        resolve(data);
                    })
                    .error(function(data, status, headers, config) {
                        reject('Error: ', status, 'Reason: ', data);
                    });
                });
        }
        };
}]);
