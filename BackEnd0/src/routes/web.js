const express = require('express')
const { getHomepage, getABC, getQuocToan, postCreateUser, getCreatePage } = require('../controllers/homeController')
const router = express.Router()

router.get('/', getHomepage)
router.get('/abc', getABC)
router.get('/quoctoan', getQuocToan)
router.get('/create', getCreatePage)

router.post('/create-user', postCreateUser);

module.exports = router
