var mongoose = require('mongoose');

function LogisticsService(config) {
    'use strict';
    function fetchInventory(req, resp) {
        console.log('Fetching Inventory');
        var connection = mongoose.connection;
        var inventoryModel = connection.model('inventoryRecord');        
        
        var query = inventoryModel.find();
        return query.exec(function(err, response) {
            console.log('Executing Query');

            if (err) {
                resp.send(500, {
                    success: false,
                    reason: err.message,
                    error: err
                });
            } else {
                resp.send(response);
            }
        });
    }
    
    function addInventory(req, resp) {
        console.log('Adding inventory record to database');
        var connection = mongoose.connection;
        var inventoryModel = connection.model('inventoryRecord');

        var inventoryRecord = req.body;
        console.log('InventoryRecord', inventoryRecord);
        inventoryModel.create(inventoryRecord, function(err, record) {
            if (err) {
                resp.send(500, {
                    success: false,
                    reason: err.message,
                    error: err
                });
            } else {
                console.log('Inventory Record added successfully. Id: ', record.id);
                resp.send({success: true});
            }
        });
    }

    this.get = fetchInventory;
    this.post = addInventory;
}

module.exports = LogisticsService;
