var appDependencies = ['PiCARSDirectives',
                      'PiCARSControllers',
                      'PiCARSServices'];

var PiCARS = {
    App: angular.module('PiCARS', appDependencies),
    Directives: angular.module('PiCARSDirectives', []),
    Controllers: angular.module('PiCARSControllers', []),
    Services: angular.module('PiCARSServices', [])
}

require('features/feature-controller.js');
require('feature/feature-directive.js');

window.PiCARS = PiCARS;