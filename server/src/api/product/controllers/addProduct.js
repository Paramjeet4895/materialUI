const Product = require('../productmodel')


const addProduct = async (req, res) => {
    const product = new Product({
        ...req.body,
        owner: req.user._id
    })
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send(e)
        console.log("Error",e)
    }

}

module.exports = { addProduct }