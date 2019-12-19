const User = require('../usermodel')
var jwt = require('jsonwebtoken')
require('../../../config/db/mongoose')
// var LocalStorage = require('node-localstorage').LocalStorage;
// localStorage = new LocalStorage('./scratch');
const nodemailer = require('nodemailer');

const addUser = async (req, res) => {
    console.log(req.body)
    const user = req.body
    const {email}=req.body
    console.log(email)
    try {
        await User.findOne({ email }).then(val => {
            console.log(val)
            if (!val) {
                console.log("jhi")
                console.log(user)
                const token = jwt.sign({ user:user}, 'thisismyvtoken')
                // const token = jwt.encode(
                //     {firstname, lastname, password, age,email }, 'thisismyvtoken');
                console.log(token)
                const transporter = nodemailer.createTransport({
                    host: 'mail.vinove.com',
                    port: 587,
                    secure: false, // true for 465, false for other ports
                    auth: {
                        user: "paramjeet.kaur@mail.vinove.com",
                        pass: "paramjeet@2019"
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });

                // send mail with defined transport object
                const mailOptions = {
                    from: '<paramjeet.kaur@mail.vinove.com>', // sender address
                    to: `${email}`, // list of receivers
                    subject: 'verify Account', // Subject line
                    text: `Link for verify "http://localhost:3300/verify/${token}"`, // plain text body
                };
                console.log('Sending Mail')
                transporter.sendMail(mailOptions, (error, data) => {
                    if (error) {
                        return console.log(error);
                    }
                    console.log('Message sent: %s');

                });
                res.send(
                    `Verification mail has been send to ${email} please Verify your account`
                );
            } else {
                res.send("email already exists");
            }
        });
    } catch (err) {
        res.send(err.message);
    }
}



const addUserdata = async (req, res, next) => {
    try {
        const { token } = req.params
        console.log(token)
        // console.log("user2", user)
        const decoded = jwt.verify(token, 'thisismyvtoken')
        console.log(decoded)
        //console.log(vtoken)  
        let { user } = decoded;
        console.log("userr", user)
        user = { ...user, token }
        console.log("userrfv", user)
        const useradd = new User(user)
        console.log(useradd)
        await useradd.save()

        //localStorage.setItem('usertoken', token);
        res.redirect("http://localhost:3000/dashboard").send(token);
    } catch(e) {
       console.log("er",e)
    }
}



module.exports = { addUser, addUserdata }