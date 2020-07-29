const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// create new
router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/', (req, res) => {
  const { name, name_en, phone, image, location, rating, description, category, google_map } = req.body
  return Restaurant.create({ name, name_en, phone, image, location, rating, description, category, google_map }) //存入資料庫
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

// detail
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.error(error))
})
// edit page
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.error(error))
})
// edit
router.put('/:id', (req, res) => {
  const id = req.params.id
  const { name, name_en, phone, image, location, rating, description, category, google_map } = req.body
  return Restaurant.findById(id)
    .then(restaurant => {
      restaurant.name = name
      restaurant.name_en = name_en
      restaurant.phone = phone
      restaurant.image = image
      restaurant.location = location
      restaurant.rating = rating
      restaurant.description = description
      restaurant.category = category
      restaurant.google_map = google_map
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.error(error))
})
// delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error())
})

module.exports = router