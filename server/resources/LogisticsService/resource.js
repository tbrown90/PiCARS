var mongoose = require('mongoose');
var _ = require('lodash');

function LogisticsService(config) {
    'use strict';
    
    function formatDate(date) {
        if (!date) {
            return '';    
        }
        
        var d = new Date(date);
        var day = d.getDate();
        var month = d.getMonth();
        var year = d.getFullYear();
        
        return year + '-' + (month + 1) + '-' + day;
    }

    function formatInventoryRecord(inventoryRecord) {
        var record = {
            description: inventoryRecord.description,
            price: inventoryRecord.price,
            quantity: inventoryRecord.quantity,
            category: inventoryRecord.category,
            expirationDate: formatDate(inventoryRecord.expirationDate),
            createdTime: formatDate(inventoryRecord.createdTime),
            updatedTime: formatDate(inventoryRecord.updatedTime),
            timesModified: inventoryRecord.timesModified
        };
        
        return record;
    }
    
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
                var inventory = _.chain(response)
                    .map(formatInventoryRecord)
                    .value();
                resp.send(inventory);
            }
        });
    }
    
    function addInventory(req, resp) {
        console.log('Adding inventory record to database');
        var connection = mongoose.connection;
        var inventoryModel = connection.model('inventoryRecord');

        var inventoryRecord = req.body;
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
