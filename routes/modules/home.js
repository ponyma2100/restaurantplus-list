const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

// search
router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  // console.log(req.query.keyword)
  return Restaurant.find({ name: { $regex: keyword, $options: "i" } })
    .lean()
    .then((restaurants) => res.render('index', { restaurants, keyword }))
    .catch(error => console.error())

})

router.get('/sort', (req, res) => {
  const sort = req.query.sort
  const userId = req.user._id
  // console.log(sort)
  return Restaurant.find({ userId })
    .lean()
    .sort(sort)
    .then(restaurants => res.render('index', { restaurants, sort }))
    .catch(error => console.error(error))
})

module.exports = router