const Product = require('../productmodel')

const showProducts = async (req, res) => {
    try {
        const products = await Product.find({ owner: req.user._id })
        if (!products) {
            return res.status(404).send()
        }
        res.send(products)
    }
    catch (e) {
        return res.status(500).send()
    }
}

module.exports = { showProducts }