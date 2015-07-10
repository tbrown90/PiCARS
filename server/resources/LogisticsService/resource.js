var mongoose = require('mongoose');
var _ = require('lodash');

function LogisticsService() {
    'use strict';
    
    function formatDate(date) {
        if (!date) {
            return '';    
        }
        
        var d = new Date(date),
            day = d.getDate(),
            month = d.getMonth(),
            year = d.getFullYear();
        
        return year + '-' + (month + 1) + '-' + day;
    }

    function formatInventoryRecord(inventoryRecord) {
        var record = {
            id: inventoryRecord.id,
            name: inventoryRecord.name,
            description: inventoryRecord.description,
            barcode: inventoryRecord.barcode,
            price: inventoryRecord.price,
            quantity: inventoryRecord.quantity,
            category: inventoryRecord.category,
            subCategory: inventoryRecord.subCategory,
            expirationDate: formatDate(inventoryRecord.expirationDate),
            createdTime: formatDate(inventoryRecord.createdTime),
            updatedTime: formatDate(inventoryRecord.updatedTime),
            quantityUpdatedTime: formatDate(inventoryRecord.quantityUpdatedTime),
            alertIds: inventoryRecord.alertIds,
            shouldShow: inventoryRecord.shouldShow,
            timesModified: inventoryRecord.timesModified
        };
        
        return record;
    }
    
    function fetchInventory(req, resp) {
        function fetch(err, response) {
            if (err) {
                resp.send(500, {
                    success: false,
                    reason: err.message,
                    error: err
                });
            } else {
                var inventory = _.chain(response).map(formatInventoryRecord).value();
                console.log('RESPONSE: ', inventory);
                resp.send(inventory);
            }
        }
        
        console.log('Fetching Inventory');
        var connection = mongoose.connection;
        var inventoryModel = connection.model('inventoryRecord');        
        
        var query = inventoryModel.find();
        return query.exec(fetch);
    }
    
    function addInventory(req, resp) {
        function create(err) {
            if (err) {
                resp.send(500, {
                    success: false,
                    reason: err.message,
                    error: err
                });
            } else {
                resp.send({success: true});
            }
        }
        
        console.log('Adding inventory record to database');
        var connection = mongoose.connection;
        var inventoryModel = connection.model('inventoryRecord');

        var inventoryRecord = req.body;
        inventoryModel.create(inventoryRecord, create);
    }
    
    function updateItem(req, resp) {
        function update(err) {
            if (err) {
                resp.send(500, {
                    success: false,
                    reason: err.message,
                    error: err
                });
            } else {
                resp.send({success: true});
            }
        }
        
        console.log('Updating inventory record.');
        var connection = mongoose.connection,
            inventoryModel = connection.model('inventoryRecord'),
            data = req.body,
            query = { id: data.id },
            updatedModel = {};
        
        switch (data.field) {
            case 'description':
                updatedModel.description = data.value;
            break;
            case 'price':
                updatedModel.price = data.value;
            break;
            case 'quantity':
                updatedModel.quantity = data.value;
                updatedModel.quantityUpdatedTime = formatDate(new Date());
            break;
            case 'category':
                updatedModel.category = data.value;
            break;
            case 'expirationDate':
                updatedModel.expirationDate = data.value;
            break;
            default:
                console.log('Invalid field: ', data.field);
                resp.send(500, {
                    success: false,
                    reason: 'Invalid field: '+ data.field
                });
                return;
        }
        
        updatedModel.updatedTime = formatDate(new Date());
        inventoryModel.update(query, updatedModel, { multi: true }, update);
    }

    this.get = fetchInventory;
    this.post = addInventory;
    this.put = updateItem;
}

module.exports = LogisticsService;
