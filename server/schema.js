'use strict';

var schemas = [{
    name: 'inventoryRecord',
    schema: {
        'name': String,
        'description': String,
        'barcode': String,
        'price': Number,
        'quantity': Number,
        'category': String,
        'subCategory': String,
        'timesModified': Number,
        'expirationDate': Date,
        'createdTime': Date,
        'updatedTime': Date,
        'quantityUpdatedTime': Date,
        'alertIds': String,
        'shouldShow': Boolean
    }
}];

module.exports = schemas;
