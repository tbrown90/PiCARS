var routes = [{
    name: 'WeatherService',
    url: '/weatherService',
    method: 'get'
}, {
    name: 'LogisticsService',
    url: '/getInventory',
    method: 'get'
}, {
    name: 'LogisticsService',
    url: '/addItem',
    method: 'post'
}, {
    name: 'LogisticsService',
    url: '/updateItem',
    method: 'put'
}];

module.exports = routes;
