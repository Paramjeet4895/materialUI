const Product = require('../productmodel')

const showProduct = async (req, res) => {
    try {
        const product = await Product.findOne({ _id:req.params.id, owner: req.user._id })
        //console.log(req.params._id)
        if (!product) {
            return res.status(404).send()
        }
        res.send(product)
       // console.log(product)
    }
    catch (e) {
        return res.status(500).send()
    }
}

module.exports = { showProduct }