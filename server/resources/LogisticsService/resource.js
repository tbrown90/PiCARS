var mongoose = require('mongoose');

function LogisticsService(config) {
    'use strict';
    function fetchInventory(callback) {
        console.log('Fetching Inventory');
        var connection = mongoose.connection;
        var inventoryModel = connection.model('inventoryRecord');        
        
        var query = inventoryModel.find();
        return query.exec(function(err, res) {
            console.log('Executing Query');
            callback(err, res);
        });
    }
    
    this.get = fetchInventory;
}

module.exports = LogisticsService;