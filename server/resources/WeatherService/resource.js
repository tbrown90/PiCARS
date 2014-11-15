var request = require('request');

function WeatherService(config) {
    'use strict';
    function fetch10Day(req, resp) {
        var apiString = config.weatherApi;
        var apiKey = config.weatherApiKey;
        var city = config.city;
        var state = config.state;
        
        var reqString = apiString + '/api/' + apiKey + '/forecast10day/q/' + state + '/' + city + '.json';

        request(reqString, function(error, response, body) {
            if (error) {
                resp.send(500, {
                          success: false,
                          reason: error.message,
                          error: error
                          });
            }
            else {
                resp.send(body);
            }
        });
    }
    
    this.get = fetch10Day;
}

module.exports = WeatherService;
