const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        trim: true
    },
    productitemtype:
        [


        ],
    productcolor: [
        color = {
            type: String
        }
    ],
    productquantity: {
        type: Number
    },
    productprice: {
        type: Number
    },
    productdescription: {
        type: String
    },
    owner: {
        type: Number,
        ref: 'User'
    }


})


const Product = mongoose.model('Product', productSchema)
module.exports = Product