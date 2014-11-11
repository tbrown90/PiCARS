var request = require('request');

function WeatherService(config) {
    'use strict';
    function fetch10Day(callback) {
        var apiString = config.apiString;
        var apiKey = config.apiKey;
        var city = config.city;
        var state = config.state;
        
        var reqString = apiString + apiKey + '/forecast10day/q/' + state + '/' + city + '.json';
        
        request(reqString, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(body);
            }
        });
    }
    
    this.get = fetch10Day;
}

module.exports = WeatherService;