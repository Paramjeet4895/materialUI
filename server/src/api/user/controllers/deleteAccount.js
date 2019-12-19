const Product = require('../../product/productmodel')
const deleteAccount = async (req, res) => {
    try {
     // await Product.findan({ owner:req.user._id})
      await req.user.remove()
        res.send(req.user)
    } catch (e) {
        return res.status(500).send()
    }
}


module.exports = {deleteAccount}