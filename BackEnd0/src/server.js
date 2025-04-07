const express = require('express'); //common js
const path = require('path')
// import express from 'express' esmodules

require('dotenv').config()
console.log("check env", process.env)

const app = express() // app express
const port = process.env.PORT || 8888//port
const hostname = process.env.HOST_NAME

//config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai baos route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('check ABC!')
})

app.get('/quoctoan', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})