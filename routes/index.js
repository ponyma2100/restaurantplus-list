const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const restaurants = require('./modules/restaurants')
// 引入路由模組
// 將網址結構符合 / 字串的 request 導向 home 模組 
router.use('/', home)
router.use('/restaurants', restaurants)

// 匯出路由器
module.exports = router