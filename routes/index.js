const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
const users = require('./modules/users')
// 引入路由模組
// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', home)

router.use('/restaurants', restaurants)

router.use('/users', users)
// 匯出路由器
module.exports = router