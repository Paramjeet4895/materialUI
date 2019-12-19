const jwt = require('jsonwebtoken')
const User = require('../user/usermodel')
const auth = async (req, res, next) => {
    try {
        //console.log(req)
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismytoken')
        const user = await User.findOne({ _id: decoded._id, 'token': token })
        if (!user) {
            // console.log('user')
            throw new Error()
        }
        req.token = token
        req.user = user
        // console.log(req.user)
        // console.log(req.token)
        next()
    } catch (e) {
        res.status(401).redirect('http://localhost:3000/*')
    }
}
module.exports = auth;