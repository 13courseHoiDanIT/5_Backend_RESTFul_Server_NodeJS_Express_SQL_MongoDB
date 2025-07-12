const express = require('express')
require('dotenv').config()
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const connection = require('./config/database')
const mongoose = require('mongoose');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME

//config reqbody
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//config template engine
configViewEngine(app);

//khai baos route
app.use('/', webRoutes);
app.use('/v1/api', apiRoutes);

//test connection

(async () => {
    try {
        await connection();
        app.listen(port, hostname => {
            console.log(`Backend zero app listening on port ${port}`)
        })
    } catch (error) {
        console.log("erro connect to DB", error)
    }
})()



