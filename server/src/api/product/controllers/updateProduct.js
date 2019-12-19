const Product = require('../productmodel')

const updateProduct = async (req, res) => {
    //console.log(Object.keys(req.body))
    const updates = Object.keys(req.body)
    const allowedUpdates = ['productitemtype',
        'productcolor',
        '_id',
        'productname',
        'productdescription',
        'productprice',
        'productquantity',
        'owner',
        '__v']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' })
    }
    try {

        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!product) {
            return res.status(404).send()
        }
        updates.forEach((update) => product[update] = req.body[update])
        await product.save()
        console.log(product)
        res.send(product)

    } catch (e) {
        res.status(400).send(e)
        console.log("err",e)
    }


}

module.exports = { updateProduct }