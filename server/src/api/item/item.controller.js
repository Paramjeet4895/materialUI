'use strict';
var Item = require('./itemmodel');

const showItems = async (req, res) => {
    try {
        const items = await Item.find()
        if (!items) {
            return res.status(404).send()
        }
        res.send(items)
    }
    catch (e) {
        console.log(e)
        return res.status(500).send()

    }
}

module.exports = { showItems }