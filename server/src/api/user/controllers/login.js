const User = require('../usermodel')

const login = async (req, res) => {
    try {
        console.log("in login");

        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })

    } catch (e) {
        console.log(e);

        return res.status(400).send()
    }
}


module.exports = { login }