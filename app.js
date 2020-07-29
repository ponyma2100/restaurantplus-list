const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Restaurant = require('./models/restaurant')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const restaurant = require('./models/restaurant')
const Handlebars = require('handlebars')
const methodOverride = require('method-override') //載入method-override
const app = express()
const port = 3000
const db = mongoose.connection

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

// create new
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})
app.post('/restaurants', (req, res) => {
  const { name, name_en, phone, image, location, rating, description, category, google_map } = req.body
  return Restaurant.create({ name, name_en, phone, image, location, rating, description, category, google_map }) //存入資料庫
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

// detail
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.error(error))
})
// edit page
app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.error(error))
})
// edit
app.put('/restaurants/:id', (req, res) => {
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
app.delete('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error())
})
// search
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  return Restaurant.find({ name: { $regex: keyword, $options: "i" } })
    .lean()
    .then((restaurants) => res.render('index', { restaurants, keyword }))
    .catch(error => console.error())

})

Handlebars.registerHelper('setSelected', function (value, currentValue) {
  if (value === currentValue) {
    return 'selected'
  } else {
    return ''
  }
})

app.listen(port, (req, res) => {
  console.log(`Express is listening on http://localhost:${port}`)
})