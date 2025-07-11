const express = require('express')
require('dotenv').config()
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME

//config reqbody
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//config template engine
configViewEngine(app);

//khai baos route
app.use('/', webRoutes)

//test connection



app.listen(port, hostname => {
    console.log(`Example app listening on port ${port}`)
})
