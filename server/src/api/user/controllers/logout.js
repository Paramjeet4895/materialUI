//const auth = require('/home/paramjeet/Desktop/My/MaterialUiVendor/server/src/api/middleware/auth')
const logout=async (req, res) => {
    try {
        req.user.token = '';
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        console.log(e)
        return res.status(400).send()
    }
}


module.exports = {logout}



