const express = require('express')
const { getHomepage, getABC, getQuocToan } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)

router.get('/abc', getABC)

router.get('/quoctoan', getQuocToan)

module.exports = router
