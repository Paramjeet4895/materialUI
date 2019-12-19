
var mongoose = require('mongoose')
require('../db/mongoose')
var Item = require('../../api/item/itemmodel');

module.exports = async (req, res, next) => {
    console.log('kfjalksdjflkjsdajfklsd')
    var items = [
        new Item({
            "type": "Casual"
        }),
        new Item({
            "type": "Winter wear"
        }),
        new Item({
            "type": "Formals"
        }),
        new Item({
            "type": "Night Wear"
        }),
        new Item({
            "type": "Kids wear"
        }),
        new Item({
            "type": "Dresses"
        }),
        new Item({
            "type": "Jackets"
        })
    ];
    const number = await Item.countDocuments();
    if (number < 1) {
        for (var i = 0; i < items.length; i++) {
            items[i].save()
        }
    }
    return next()
}
