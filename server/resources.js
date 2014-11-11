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
                    resource.get(function(data) {
                        res.send(data);
                    });
                }
            });
        }
    }
};

module.exports = resources;