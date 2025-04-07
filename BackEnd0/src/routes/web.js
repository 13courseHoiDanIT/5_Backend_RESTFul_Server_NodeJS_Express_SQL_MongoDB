const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!Qoc Toan')
})

router.get('/abc', (req, res) => {
    res.send('check ABC!')
})

router.get('/quoctoan', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router;
