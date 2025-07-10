const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.send('check abc')
})

app.get('/hoidanit', (req, res) => {
    res.send('<h1>check hoidanit</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
