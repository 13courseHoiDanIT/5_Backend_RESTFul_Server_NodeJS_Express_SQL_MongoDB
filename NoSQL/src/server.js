const express = require('express')
require('dotenv').config()
const path = require('path')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

const mysql = require('mysql2')

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME



//config template engine
configViewEngine(app);

//khai baos route
app.use('/', webRoutes)

//test connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'hoidanit',
    port: 3307,
    password: '123456'
});

connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log("resukts>>", results); // results contains rows returned by server
        console.log("=", fields); // fields contains extra meta data about results, if available
    }
);


app.listen(port, hostname => {
    console.log(`Example app listening on port ${port}`)
})
