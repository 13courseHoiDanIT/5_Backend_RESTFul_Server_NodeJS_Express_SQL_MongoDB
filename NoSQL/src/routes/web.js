const express = require('express')
const router = express.Router()
const { getHomePage, getABC, getHoiDanIT, postCreateUser, getCreatePage } = require('../controllers/homeController')

router.get('/', getHomePage)
router.get('/abc', getABC)
router.get('/hoidanit', getHoiDanIT)
router.get('/create', getCreatePage)


router.post('/create-user', postCreateUser)


module.exports = router;
