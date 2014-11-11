var schemas = require('./schema');
var mongoosee = require('mongoose');

function generateModels() {
    'use strict';
    var models = {};
    for (var i = 0; ii = schemas.length; i < ii; ++ i) {
        var schema = schemas[i];
        var modelName = schema.name + 'Model'

        models[modelName] = mongoose.model(schema.name, mongoose.Schema(schema.schema));
    }

    return models;
}

module.exports = generateModels();
