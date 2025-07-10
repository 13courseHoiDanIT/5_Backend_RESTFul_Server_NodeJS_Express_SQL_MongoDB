const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send('Hello World! check check')
})

router.get('/abc', (req, res) => {
    res.send('check abc')
})

router.get('/hoidanit', (req, res) => {
    res.render('sample.ejs')
})


module.exports = router;
