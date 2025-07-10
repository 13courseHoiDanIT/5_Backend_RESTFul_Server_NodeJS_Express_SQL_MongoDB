const express = require('express')
require('dotenv').config()
const path = require('path')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


//config static file
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.send('Hello World! check check')
})

app.get('/abc', (req, res) => {
    res.send('check abc')
})

app.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname => {
    console.log(`Example app listening on port ${port}`)
})
