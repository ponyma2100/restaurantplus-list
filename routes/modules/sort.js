const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


router.get('/sort', (req, res) => {
  const sort = req.query.sort
  const id = req.body._id
  // console.log(sort)
  return Restaurant.find(id)
    .lean()
    .sort(sort)
    .then(restaurants => res.render('index', { restaurants, sort }))
    .catch(error => console.error(error))
})

module.exports = router