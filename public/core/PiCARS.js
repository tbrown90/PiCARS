var appDependencies = ['PiCARSDirectives',
                      'PiCARSControllers',
                      'PiCARSServices'];

var PiCARS = {
    App: angular.module('PiCARS', appDependencies),
    Directives: angular.module('PiCARSDirectives', []),
    Controllers: angular.module('PiCARSControllers', []),
    Services: angular.module('PiCARSServices', [])
};

window.PiCARS = PiCARS;