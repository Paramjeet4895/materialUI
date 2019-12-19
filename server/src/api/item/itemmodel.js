(function () {
    'use strict';
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var ItemSchema = new Schema({
        id: { type: String },
        type: { type: String }
    });

    const Item = mongoose.model('Item', ItemSchema)
    module.exports = Item
}());