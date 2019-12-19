const express = require('express')
require('./config/db/mongoose')
const itemseeding= require('./config/seed/itemseeder')
const userRouter = require('./api/user/userrouters')
const productRouter = require('./api/product/productrouters')
const itemRouter = require('./api/item/index')
const app = express()
const port = process.env.PORT || 3300
const cors = require('cors')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(itemseeding)
app.use(userRouter)
app.use(productRouter)
app.use(itemRouter)
app.listen(port, () => {
    console.log('Server is running at port ' + port)
})