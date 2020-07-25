const mongoose = require('mongoose')
const Restaurant = require('../restaurant') // 載入restaurant model
const restaurantList = require('../restaurant.json')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
  const results = restaurantList.results
  for (let i = 0; i < results.length; i++) {
    Restaurant.create(results[i])
  }
  console.log('data is build!')
})