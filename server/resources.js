'use strict';
var routes = require('./routes');

var resources = {
    register: function register(PiCARS, config) {
        for (var i = 0, ii = routes.length; i < ii; i++) {
            var route = routes[i];
            var Resource = require('./resources/' + route.name + '/resource');
            var resource = new Resource(config);
            PiCARS.use(route.url, function(req, res, next) {
                if (route.method == 'get') {
                    console.log('Route:', route.url);
                    resource.get(function(err, data) {
                        if (err) {
                            console.log('Error:', err);
                            res.send(null);
                        } else {
                            res.send(data);    
                        }                                        
                    });
                }
            });
        }
    }
};

module.exports = resources;