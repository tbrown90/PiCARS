var request = require('request');

function WeatherService(config) {
    'use strict';
    function fetch10Day(callback) {
        var apiString = config.weatherApi;
        var apiKey = config.weatherApiKey;
        var city = config.city;
        var state = config.state;
        
        var reqString = apiString + '/api/' + apiKey + '/forecast10day/q/' + state + '/' + city + '.json';
        
        console.log('reqString:', reqString);
        
        request(reqString, function(error, response, body) {
            callback(error, body);
        });
    }
    
    this.get = fetch10Day;
}

module.exports = WeatherService;