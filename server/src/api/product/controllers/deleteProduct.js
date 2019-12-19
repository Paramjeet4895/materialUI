const Product = require('../productmodel')

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.deleteOne({ _id: req.params.id })
        
        if (product.deletedCount === 1) {
            res.send(req.params.id)
        }
       
       
    } catch (e) {
        console.log("e",e)
        return res.status(500).send()
    }
}

module.exports = { deleteProduct }