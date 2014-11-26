var mongoose = require('mongoose');
var _ = require('lodash');
var lcd = require('LCDJS');
lcd.init(22, 18, [16, 11, 13, 15]);
lcd.begin(16, 1);

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
            id: inventoryRecord.id,
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
                lcd.message('Error: Inventory', true);
                resp.send(500, {
                    success: false,
                    reason: err.message,
                    error: err
                });
            } else {
                console.log('Inventory Record added successfully. Id: ', record.id);
                lcd.message('Inventory Added', true);
                resp.send({success: true});
            }
        });
    }
    
    function updateItem(req, resp) {
        console.log('Updating inventory record.');
        var connection = mongoose.connection;
        var inventoryModel = connection.model('inventoryRecord');
        
        var data = req.body;
        
        console.log('Data:', data);
        
        var query = { id: data.id };
        var update = {};
        switch (data.field) {
            case 'description':
                update.description = data.value;
                break;
            case 'price':
                update.price = data.value;
                break;
            case 'quantity':
                update.quantity = data.value;
                break;
            case 'category':
                update.category = data.value;
                break;
            case 'expirationDate':
                update.expirationDate = data.value;
                break;
            default:
                console.log('Invalid field: ', data.field);
                resp.send(500, {
                    success: false,
                    reason: 'Invalid field: '+ data.field
                });
                return;
        }
        
        inventoryModel.update(query, update, { multi: true }, function(err, numAffected) {
            if (err) {
                resp.send(500, {
                    success: false,
                    reason: err.message,
                    error: err
                });
            } else {
                console.log('Inventory Record updated successfully. Number of records updated: ', numAffected);
                resp.send({success: true});
            }
        });
    }

    this.get = fetchInventory;
    this.post = addInventory;
    this.put = updateItem;
}

module.exports = LogisticsService;
