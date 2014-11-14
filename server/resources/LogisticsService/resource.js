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
    
    function addInventory(inventoryRecord, callback) {
        console.log('Adding inventory record to database');
        var connection = mongoose.connection;
        var inventoryModel = connection.model('inventoryRecord');

        inventoryModel.create(inventoryRecord, function(err, record) {
            console.log('Inventory Record added successfully. Id: ', record.id);
        });
    }

    this.get = fetchInventory;
    this.post = addInventory;
}

module.exports = LogisticsService;
