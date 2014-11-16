'use strict';

var schemas = [{
    name: 'inventoryRecord',
    schema: {
        'description': String,
        'price': Number,
        'quantity': Number,
        'category': String,
        'timesModified': Number,
        'expirationDate': Date,
        'createdTime': Date,
        'updatedTime': Date
    }
}];

module.exports = schemas;
